# 🚀 Netlify Deployment Guide - Miss Scholastic America

## ✅ **What Was Fixed**

The 404 error was caused by the React app calling `/api/create-payment-intent` instead of `/.netlify/functions/create-payment-intent`. This has been fixed in the updated code.

## 🔧 **Build Settings (Update in Netlify Dashboard)**

Go to **Site settings** → **Build & deploy** → **Build settings** and set:

- **Runtime**: `Node 18`
- **Base directory**: `/` (root)
- **Build command**: **LEAVE BLANK** (delete `npm run build`)
- **Publish directory**: `dist`
- **Functions directory**: `netlify/functions`

## 🔑 **Environment Variables (CRITICAL)**

In Netlify Dashboard → **Site settings** → **Environment variables**, add:

```
STRIPE_SECRET_KEY = your_stripe_secret_key_here

STRIPE_PUBLISHABLE_KEY = your_stripe_publishable_key_here

NODE_ENV = production
```

## 📁 **Files Updated**

1. **`src/components/ui/CheckoutForm.jsx`** - Fixed API endpoints
2. **`netlify.toml`** - Added configuration
3. **`netlify/functions/`** - Added serverless functions
4. **`netlify/functions/package.json`** - Dependencies

## 🔄 **Deploy Process**

1. **Push to GitHub** (the updated code)
2. **Netlify will auto-deploy** from your connected repository
3. **Set environment variables** in Netlify dashboard
4. **Test payment functionality**

## 🧪 **Testing**

After deployment:
1. Go to your live site
2. Try to submit an application
3. Payment should work without 404 errors
4. Check Netlify function logs if needed

## 📋 **Deployment Checklist**

- ✅ Code updated with correct endpoints
- ✅ Netlify.toml configuration added
- ✅ Netlify Functions created
- ⏳ Push to GitHub
- ⏳ Set environment variables in Netlify
- ⏳ Test payment functionality

## 🆘 **If Still Getting 404**

1. Check Netlify function logs in dashboard
2. Verify environment variables are set
3. Ensure build settings are correct (especially blank build command)
4. Check that functions are deployed (should see them in Functions tab)

## 🎯 **Expected Result**

- ✅ Application submissions work
- ✅ Payments process successfully
- ✅ Emails sent to missscholasticamerica@gmail.com
- ✅ No more 404 errors 