const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { amount, currency = 'usd' } = JSON.parse(event.body);

    // Validate request
    if (!amount || amount < 50) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid amount. Minimum $0.50 required.' }),
      };
    }

    // Validate currency format
    if (!/^[a-z]{3}$/.test(currency)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid currency format' }),
      };
    }

    console.log(`Creating PaymentIntent with amount: ${amount} currency: ${currency}`);

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // Ensure integer
      currency: currency.toLowerCase(),
      metadata: {
        source: 'Miss Scholastic America',
        domain: 'missscholasticamerica.com'
      },
    });

    console.log(`PaymentIntent created successfully: ${paymentIntent.id}`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
        id: paymentIntent.id
      }),
    };

  } catch (error) {
    console.error('Payment Intent Error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Payment processing failed',
        details: error.message,
        code: error.code,
        type: error.type
      }),
    };
  }
}; 