import { loadStripe } from '@stripe/stripe-js';

// Using the live Stripe publishable key from stripe.env
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'your_stripe_publishable_key_here');

export default stripePromise; 