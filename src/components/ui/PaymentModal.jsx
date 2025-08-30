import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '@/lib/stripe';

const PaymentModal = ({ 
  isOpen, 
  onClose, 
  amount, 
  onPaymentSuccess, 
  onPaymentError,
  isSubmitting,
  setIsSubmitting
}) => {
  if (!isOpen) return null;
  
  // Ensure amount is a valid number
  const validAmount = parseFloat(amount);
  if (isNaN(validAmount) || validAmount <= 0) {
    console.error("Invalid payment amount:", amount);
    if (onPaymentError) {
      onPaymentError("Invalid payment amount. Please try again.");
    }
    return null;
  }

  // Determine payment type based on amount
  const isApplicationFee = validAmount === 95;
  const paymentType = isApplicationFee ? "application fee" : "entry fee";
  const paymentDescription = isApplicationFee 
    ? "Please complete your payment to submit your application."
    : "Please complete your entry fee payment to secure your spot in Miss Scholastic America 2025.";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <button 
          onClick={() => !isSubmitting && onClose(false)} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          disabled={isSubmitting}
        >
          ✕
        </button>
        
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Complete Your Payment</h2>
          <p className="text-gray-600 text-sm">
            {paymentDescription}
          </p>
          <p className="text-gray-800 font-medium mt-2">
            Amount: ${validAmount.toFixed(2)}
          </p>
        </div>
        
        <Elements stripe={stripePromise}>
          <CheckoutForm 
            amount={validAmount} 
            onSuccess={onPaymentSuccess}
            onError={onPaymentError}
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
          />
        </Elements>
        
        <div className="mt-4 text-xs text-gray-500">
          <p><strong>Note:</strong> This is a one-time payment for your {paymentType}.</p>
          {!isApplicationFee && (
            <p className="mt-1">Entry fee covers your sash, crown, t-shirt, coaching, and virtual meet-up activities.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal; 