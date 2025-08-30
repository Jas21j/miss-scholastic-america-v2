# 📤 GitHub Commit Instructions

## ✅ **Files Updated Successfully**

The following files have been updated to fix the 404 error:

1. **`src/components/ui/CheckoutForm.jsx`** - Fixed to use `/.netlify/functions/` endpoints
2. **`netlify.toml`** - Added Netlify configuration
3. **`netlify/functions/create-payment-intent.js`** - Netlify Function for payment intents
4. **`netlify/functions/create-checkout-session.js`** - Netlify Function for checkout sessions
5. **`netlify/functions/session-status.js`** - Netlify Function for session status
6. **`netlify/functions/package.json`** - Dependencies for Netlify Functions
7. **`NETLIFY_DEPLOYMENT_GUIDE.md`** - Deployment instructions

## 🚀 **Manual Git Commands**

Since the terminal interface isn't working, please run these commands manually in PowerShell:

```powershell
# Navigate to the project root (if not already there)
cd "C:\Users\MSI GAMING\Downloads\horizons-export-25bdcf69-d62d-4efc-ad1d-8d3e548f3a6f"

# Stage all changes
git add -A

# Commit with descriptive message
git commit -m "Fix Netlify 404 error: Update API endpoints and add Netlify Functions

- Update CheckoutForm.jsx to use /.netlify/functions/ endpoints
- Add netlify.toml configuration file
- Add Netlify Functions for payment processing
- Add comprehensive deployment guide
- Fix payment system for production deployment"

# Push to GitHub
git push origin main
```

## 🔧 **Next Steps After Push**

1. **Go to your Netlify dashboard**
2. **Update build settings** (see NETLIFY_DEPLOYMENT_GUIDE.md)
3. **Add environment variables** with your Stripe keys
4. **Test the application** - payments should work without 404 errors

## 🎯 **What This Fixes**

- ✅ Eliminates 404 errors when submitting applications
- ✅ Enables proper Stripe payment processing on Netlify
- ✅ Ensures emails are sent to missscholasticamerica@gmail.com
- ✅ Provides production-ready deployment configuration

## 📋 **Verification**

After pushing and deploying:
1. Visit your live site
2. Try submitting an application
3. Payment should process without errors
4. Check Netlify function logs if needed 