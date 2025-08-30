// This file has been renamed to server.cjs to fix the ES module issue
require("dotenv").config();
const express = require("express");
// Using the live Stripe secret key from stripe.env
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY || "your_stripe_secret_key_here");
const app = express();
const path = require("path");

// Add CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Serve static files
app.use(express.static("dist"));
app.use(express.json({ limit: '10mb' }));

// Add request logging middleware
app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) {
    console.log(`${req.method} ${req.path}`, {
      headers: req.headers,
      body: req.body,
      query: req.query
    });
  }
  next();
});

// Create payment intent endpoint
app.post("/api/create-payment-intent", async (req, res) => {
  try {
    const { amount, currency = "usd" } = req.body;
    
    console.log('Payment Intent Request:', { amount, currency, body: req.body });
    
    // Validate request body
    if (!req.body || typeof req.body !== 'object') {
      console.error('Invalid request body:', req.body);
      return res.status(400).json({ 
        error: { message: "Invalid request body. Please check your request format." } 
      });
    }
    
    if (!amount) {
      console.error('Amount is required but was not provided');
      return res.status(400).json({ 
        error: { message: "Amount is required." } 
      });
    }
    
    // Validate amount - must be a positive integer (no decimals allowed by Stripe)
    const amountInt = parseInt(amount, 10);
    if (isNaN(amountInt) || amountInt <= 0) {
      console.error('Invalid amount:', amount, 'parsed as:', amountInt);
      return res.status(400).json({ 
        error: { message: "Invalid amount. Amount must be a positive integer." } 
      });
    }

    // Validate currency pattern
    if (!/^[a-z]{3}$/.test(currency)) {
      console.error('Invalid currency format:', currency);
      return res.status(400).json({ 
        error: { message: "Invalid currency format. Must be a 3-letter ISO code." } 
      });
    }

    console.log('Creating PaymentIntent with amount:', amountInt, 'currency:', currency);
    
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInt,
      currency: currency,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        type: amountInt === 9500 ? 'Application Fee' : 'Entry Fee',
        application: 'Miss Scholastic America'
      }
    });

    console.log('PaymentIntent created successfully:', paymentIntent.id);

    res.json({
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    console.error('Payment Intent Error Details:', {
      message: error.message,
      type: error.type,
      code: error.code,
      param: error.param,
      stack: error.stack
    });
    res.status(400).json({ 
      error: { 
        message: error.message || "An error occurred while processing your payment.",
        type: error.type,
        code: error.code
      } 
    });
  }
});

// Create checkout session endpoint
app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { amount, description } = req.body;
    
    console.log('Checkout Session Request:', { amount, description });
    
    // Validate amount - must be a positive integer (no decimals allowed by Stripe)
    const amountInt = parseInt(amount, 10);
    if (isNaN(amountInt) || amountInt <= 0) {
      console.error('Invalid checkout amount:', amount, 'parsed as:', amountInt);
      return res.status(400).json({ 
        error: "Invalid amount. Amount must be a positive integer." 
      });
    }

    const origin = req.headers.origin || req.headers.host || 'http://localhost:3000';
    console.log('Using origin for return URL:', origin);
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: description || (amountInt === 9500 ? "Application Fee" : "Entry Fee"),
              description: amountInt === 9500 
                ? "Miss Scholastic America Application Fee (Non-refundable)"
                : "Miss Scholastic America Entry Fee (Includes sash, crown, t-shirt, coaching, and virtual meet-up activities)"
            },
            unit_amount: amountInt,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      ui_mode: "embedded",
      return_url: `${origin}${amountInt === 9500 ? '/application-success' : '/payment-success'}?session_id={CHECKOUT_SESSION_ID}`,
      metadata: {
        type: amountInt === 9500 ? 'Application Fee' : 'Entry Fee',
        application: 'Miss Scholastic America'
      }
    });

    console.log('Checkout Session created successfully:', session.id);

    res.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error('Checkout Session Error Details:', {
      message: error.message,
      type: error.type,
      code: error.code,
      param: error.param,
      stack: error.stack
    });
    res.status(500).json({ 
      error: error.message || "An error occurred while creating the checkout session." 
    });
  }
});

// Get session status
app.get("/api/session-status", async (req, res) => {
  const { session_id } = req.query;
  
  if (!session_id || typeof session_id !== 'string' || !session_id.match(/^cs_/)) {
    return res.status(400).json({ error: "Invalid session ID format" });
    }
    
  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    res.json({ status: session.status, session });
  } catch (error) {
    console.error('Session Status Error:', error);
    res.status(500).json({ 
      error: error.message || "An error occurred while retrieving the session status." 
    });
  }
});

// Serve index.html for all routes to enable client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 