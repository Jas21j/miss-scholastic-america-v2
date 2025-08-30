# Miss Scholastic America Website

A modern, responsive website for the Miss Scholastic America pageant with integrated Stripe payment processing and email notifications.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful UI
- **Payment Processing**: Secure Stripe integration for application fees ($95) and entry fees ($595)
- **Email Notifications**: Automatic email confirmations via EmailJS
- **Admin Dashboard**: Application management and tracking
- **Netlify Functions**: Serverless backend for payment processing

## 🛠 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Netlify Functions (Node.js)
- **Payment**: Stripe API (Live keys configured)
- **Email**: EmailJS
- **Hosting**: Netlify

## 📁 Project Structure

```
export/
├── dist/                    # Built frontend application
├── netlify/
│   └── functions/          # Serverless functions
│       ├── create-payment-intent.js
│       ├── create-checkout-session.js
│       ├── session-status.js
│       └── package.json
├── netlify.toml            # Netlify configuration
├── package.json            # Project dependencies
├── server.cjs              # Express server (for local development)
└── README.md
```

## 🔧 Environment Variables

Set these in your Netlify dashboard under **Site settings → Environment variables**:

```
STRIPE_SECRET_KEY=your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
```

## 🚀 Deployment to Netlify

### Method 1: Git-based Deployment (Recommended)

1. **Connect Repository to Netlify**:
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select this repository

2. **Configure Build Settings**:
   - **Build command**: Leave blank
   - **Publish directory**: `dist`
   - **Functions directory**: `netlify/functions`

3. **Add Environment Variables**:
   - Go to Site settings → Environment variables
   - Add the Stripe keys listed above

4. **Deploy**: Click "Deploy site"

### Method 2: Manual Deployment

1. Download this repository as ZIP
2. Go to Netlify → "Add new site" → "Deploy manually"
3. Drag the entire folder to Netlify
4. Configure environment variables in Site settings

## 💳 Payment Configuration

### Stripe Setup
- **Live Mode**: Configured with live API keys
- **Application Fee**: $95 (non-refundable)
- **Entry Fee**: $595 (includes sash, crown, t-shirt, coaching)
- **Currency**: USD
- **Payment Methods**: Credit/Debit cards, Apple Pay, Google Pay

### Email Configuration
- **Service**: EmailJS
- **Recipient**: missscholasticamerica@gmail.com
- **Templates**: Application confirmations with payment details

## 🔍 Testing

### Payment Testing
⚠️ **Warning**: This uses LIVE Stripe keys - real payments will be processed!

1. Fill out application form completely
2. Submit and proceed to payment
3. Use real payment information
4. Verify email confirmation is sent
5. Check Stripe dashboard for payment confirmation

### Local Development
```bash
# Install dependencies
npm install

# Start local server
node server.cjs

# Visit http://localhost:3000
```

## 📧 Email Integration

- **Service**: EmailJS (service_4mqw687)
- **Template**: template_3qdq1it
- **Public Key**: 5zmPvDu8F7qP6JTfD
- **Recipient**: missscholasticamerica@gmail.com

## 🎯 Key Features

### Application Process
1. **Form Validation**: Complete validation before payment
2. **File Uploads**: Headshot, full-body photo, bio document
3. **Payment Integration**: Secure $95 application fee
4. **Email Confirmation**: Automatic notification to organization
5. **Admin Dashboard**: Application tracking and management

### Payment Features
- **Stripe Elements**: Secure card input
- **Payment Request API**: Apple Pay/Google Pay support
- **Error Handling**: Comprehensive error messages
- **Receipt Generation**: Automatic payment confirmations

## 🛡 Security

- **HTTPS Required**: All payments processed over secure connection
- **Stripe Security**: PCI DSS compliant payment processing
- **Environment Variables**: Sensitive keys stored securely
- **CORS Configuration**: Proper cross-origin request handling

## 📞 Support

For technical issues:
1. Check Netlify deploy logs
2. Verify environment variables are set
3. Check Stripe dashboard for payment status
4. Review EmailJS dashboard for email delivery

## 🎉 Success Indicators

✅ Site loads without errors  
✅ Application form accepts submissions  
✅ Payment processing completes successfully  
✅ Emails sent to missscholasticamerica@gmail.com  
✅ Admin dashboard shows applications  
✅ All redirects work properly  

---

**Live Site**: Will be available after Netlify deployment  
**Payment Status**: Live Stripe integration active  
**Email Status**: EmailJS configured and active 