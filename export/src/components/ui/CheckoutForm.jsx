import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { CardElement, useStripe, useElements, PaymentRequestButtonElement } from '@stripe/react-stripe-js';

// Storing the live Stripe publishable key
const STRIPE_PUBLISHABLE_KEY = 'pk_live_51RG0POBypsgdG5fxn9lZ5pAmynD5TshQNjO1tHKkRh8KnqvkrKHeuB9DZF0pggLX36z7lqR8CwVnSfJ2qi8lxb6y00jbhYNbBk';

const CheckoutForm = ({ amount, onSuccess, onError, isSubmitting, setIsSubmitting }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [canMakePayment, setCanMakePayment] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: ''
  });
  const stripe = useStripe();
  const elements = useElements();
  const paymentRequestRef = useRef(null);

  // Get billing details from form on component mount
  useEffect(() => {
    const firstName = document.querySelector('input[name="firstName"]')?.value || '';
    const lastName = document.querySelector('input[name="lastName"]')?.value || '';
    const email = document.querySelector('input[name="email"]')?.value || '';
    
    if (firstName && lastName) {
      setBillingDetails({
        name: `${firstName} ${lastName}`.trim(),
        email: email
      });
    }
  }, []);

  useEffect(() => {
    if (!stripe || !amount) return;

    // Ensure amount is a valid number and converted to cents correctly
    const amountInCents = Math.round(parseFloat(amount) * 100);
    
    const pr = stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: amount === 95 ? 'Miss Scholastic America Application Fee' : 'Miss Scholastic America Entry Fee',
        amount: amountInCents,
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then(result => {
      if (result) {
        setCanMakePayment(true);
        setPaymentRequest(pr);
      }
    });

    return () => {
      if (paymentRequestRef.current) {
        paymentRequestRef.current.removeAllListeners();
      }
    };
  }, [stripe, amount]);

  useEffect(() => {
    if (!paymentRequest) return;
    paymentRequestRef.current = paymentRequest;

    const handlePaymentMethod = async (ev) => {
      setIsProcessing(true);
      setIsSubmitting(true);
      setError(null);

      try {
        // Ensure amount is correctly formatted as an integer in cents
        const amountInCents = Math.round(parseFloat(amount) * 100);
        
        // Use Netlify Functions endpoint instead of /api/
        const res = await fetch('/.netlify/functions/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount: amountInCents, currency: 'usd' })
        });

        if (!res.ok) {
          let errorData;
          try {
            errorData = await res.json();
          } catch (jsonError) {
            throw new Error(`Server error: ${res.status} ${res.statusText}`);
          }
          throw new Error(errorData.error?.message || 'Failed to create payment intent');
        }

        let data;
        try {
          data = await res.json();
        } catch (jsonError) {
          throw new Error('Invalid response from server. Please try again.');
        }
        if (!data.clientSecret) throw new Error('No client secret received');

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
          data.clientSecret,
          { payment_method: ev.paymentMethod.id },
          { handleActions: false }
        );

        if (confirmError) {
          ev.complete('fail');
          throw confirmError;
        }

        if (paymentIntent.status === 'requires_action') {
          const { error: actionError, paymentIntent: finalIntent } = 
            await stripe.confirmCardPayment(data.clientSecret);
          
          if (actionError) {
            ev.complete('fail');
            throw actionError;
          }
          
          if (finalIntent.status === 'succeeded') {
            ev.complete('success');
            onSuccess(finalIntent);
            return;
          }
        }

        if (paymentIntent.status === 'succeeded') {
          ev.complete('success');
          onSuccess(paymentIntent);
          return;
        }

        ev.complete('fail');
        throw new Error('Payment failed');
      } catch (err) {
        setError(err.message);
        if (onError) onError(err.message);
        if (ev && ev.complete) ev.complete('fail');
      } finally {
        setIsProcessing(false);
        setIsSubmitting(false);
      }
    };

    paymentRequest.on('paymentmethod', handlePaymentMethod);
  }, [paymentRequest, stripe, amount, onSuccess, onError, setIsSubmitting]);

  const handleCardSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    setIsSubmitting(true);
    setError(null);

    try {
      // Ensure amount is correctly formatted as an integer in cents
      const amountInCents = Math.round(parseFloat(amount) * 100);
      
      // Use Netlify Functions endpoint instead of /api/
      const res = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amountInCents, currency: 'usd' })
      });

      if (!res.ok) {
        let errorData;
        try {
          errorData = await res.json();
        } catch (jsonError) {
          throw new Error(`Server error: ${res.status} ${res.statusText}`);
        }
        throw new Error(errorData.error?.message || 'Failed to create payment intent');
      }

      let data;
      try {
        data = await res.json();
      } catch (jsonError) {
        throw new Error('Invalid response from server. Please try again.');
      }
      if (!data.clientSecret) throw new Error('No client secret received');

      // Get the billing details from form
      const firstName = document.querySelector('input[name="firstName"]')?.value || '';
      const lastName = document.querySelector('input[name="lastName"]')?.value || '';
      const email = document.querySelector('input[name="email"]')?.value || '';
      const name = `${firstName} ${lastName}`.trim();
      
      const cardElement = elements.getElement(CardElement);
      const { paymentIntent, error: stripeError } = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: name || undefined,
              email: email || undefined
            }
          }
        }
      );

      if (stripeError) throw stripeError;

      if (paymentIntent.status === 'succeeded') {
        onSuccess(paymentIntent);
      } else {
        throw new Error('Payment did not succeed.');
      }
    } catch (err) {
      setError(err.message);
      if (onError) onError(err.message);
    } finally {
      setIsProcessing(false);
      setIsSubmitting(false);
    }
  };

  const cardElementOptions = {
    hidePostalCode: true,
    style: {
      base: {
        fontSize: '16px',
        color: '#32325d',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  };

  return (
    <div className="w-full">
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          {error}
        </div>
      )}
      
      {canMakePayment && paymentRequest && (
        <div className="mb-6">
          <PaymentRequestButtonElement
            options={{
              paymentRequest,
              style: {
                paymentRequestButton: {
                  type: 'default',
                  theme: 'dark',
                  height: '48px'
                }
              }
            }}
          />
          <div className="text-xs text-gray-500 mt-2 text-center">
            Or pay with card below
          </div>
        </div>
      )}

      <form onSubmit={handleCardSubmit} className="space-y-4">
        <div className="border rounded-md p-3">
          <CardElement options={cardElementOptions} />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={!stripe || isProcessing}
        >
          {isProcessing ? "Processing..." : `Pay $${amount}`}
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm; 