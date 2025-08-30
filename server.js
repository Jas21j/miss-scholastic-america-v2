// This file has been renamed to server.cjs to fix the ES module issue
require("dotenv").config();
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY || "your_stripe_secret_key_here");
const app = express();
const path = require("path");

// Serve static files
app.use(express.static("dist"));
app.use(express.json());

// Create payment intent endpoint
app.post("/api/create-payment-intent", async (req, res) => {
  try {
    const { amount, currency = "usd" } = req.body;
    
    // Validate amount - must be a positive integer (no decimals allowed by Stripe)
    const amountInt = parseInt(amount, 10);
    if (isNaN(amountInt) || amountInt <= 0) {
      return res.status(400).send({ 
        error: { message: "Invalid amount. Amount must be a positive integer." } 
      });
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInt,
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        type: amountInt === 9500 ? 'Application Fee' : 'Entry Fee'
      }
    });

    res.send({
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    console.error('Payment Intent Error:', error);
    res.status(400).send({ 
      error: { 
        message: error.message || "An error occurred while processing your payment." 
      } 
    });
  }
});

// Create checkout session endpoint
app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { amount, description } = req.body;
    
    // Validate amount - must be a positive integer (no decimals allowed by Stripe)
    const amountInt = parseInt(amount, 10);
    if (isNaN(amountInt) || amountInt <= 0) {
      return res.status(400).send({ 
        error: "Invalid amount. Amount must be a positive integer." 
      });
    }

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
      return_url: `${req.headers.origin}${amountInt === 9500 ? '/application-success' : '/payment-success'}?session_id={CHECKOUT_SESSION_ID}`,
    });

    res.send({ clientSecret: session.client_secret });
  } catch (error) {
    console.error('Checkout Session Error:', error);
    res.status(500).send({ 
      error: error.message || "An error occurred while creating the checkout session." 
    });
  }
});

// Get session status
app.get("/api/session-status", async (req, res) => {
  const { session_id } = req.query;
  
  if (!session_id || typeof session_id !== 'string' || !session_id.match(/^cs_/)) {
    return res.status(400).send({ error: "Invalid session ID format" });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    res.send({ status: session.status, session });
  } catch (error) {
    console.error('Session Status Error:', error);
    res.status(500).send({ 
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