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
    const { amount, currency = 'usd', applicationData } = JSON.parse(event.body);

    // Validate request
    if (!amount || amount < 50) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid amount. Minimum $0.50 required.' }),
      };
    }

    // Determine the correct origin for return URLs
    const origin = 'https://missscholasticamerica.com';
    
    console.log(`Creating Checkout Session with amount: ${amount} currency: ${currency}`);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: 'Miss Scholastic America Application Fee',
              description: applicationData ? 
                `Application for ${applicationData.firstName} ${applicationData.lastName}` : 
                'Miss Scholastic America Application',
            },
            unit_amount: Math.round(amount),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/application-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/apply`,
      metadata: {
        source: 'Miss Scholastic America',
        domain: 'missscholasticamerica.com',
        ...(applicationData && {
          applicantName: `${applicationData.firstName} ${applicationData.lastName}`,
          applicantEmail: applicationData.email,
        })
      },
    });

    console.log(`Checkout Session created successfully: ${session.id}`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        id: session.id,
        url: session.url
      }),
    };

  } catch (error) {
    console.error('Checkout Session Error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Checkout session creation failed',
        details: error.message,
        code: error.code,
        type: error.type
      }),
    };
  }
}; 