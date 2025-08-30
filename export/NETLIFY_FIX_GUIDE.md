# 🔧 Netlify 404 Error Fix Guide

## 🚨 **The Problem**
Your application is getting 404 errors because it's trying to call `/api/create-payment-intent` but Netlify Functions use a different URL pattern: `/.netlify/functions/create-payment-intent`.

## ✅ **Step 1: Update Build Settings**

In your Netlify dashboard:

1. **Go to Site settings** → **Build & deploy** → **Build settings**
2. **Update these settings:**
   - **Runtime**: `Node 18`
   - **Base directory**: `/` (keep as is)
   - **Build command**: **DELETE** `npm run build` and **LEAVE BLANK**
   - **Publish directory**: `dist` (keep as is)
   - **Functions directory**: `netlify/functions` (keep as is)

## ✅ **Step 2: Update Repository**

The issue is in your source code. I've fixed the CheckoutForm.jsx file, but you need to update your GitHub repository:

### **Manual Fix Method:**

1. **Open your GitHub repository** in browser
2. **Navigate to**: `src/components/ui/CheckoutForm.jsx`
3. **Click "Edit this file" (pencil icon)**
4. **Replace lines 67 and 145** where it says:
   ```javascript
   const res = await fetch('/api/create-payment-intent', {
   ```
   **With:**
   ```javascript
   const res = await fetch('/.netlify/functions/create-payment-intent', {
   ```

5. **Commit the changes** with message: "Fix: Update API endpoints for Netlify Functions"

### **Alternative: Re-upload Fixed Files**

If you prefer, you can:
1. **Download the updated export folder**
2. **Replace the files in your GitHub repository**
3. **Commit and push the changes**

## ✅ **Step 3: Verify Environment Variables**

Make sure these are set in Netlify:

1. **Go to Site settings** → **Environment variables**
2. **Verify these exist:**
   ```
   STRIPE_SECRET_KEY = your_stripe_secret_key_here
   STRIPE_PUBLISHABLE_KEY = your_stripe_publishable_key_here
   ```

## ✅ **Step 4: Trigger Deployment**

1. **Go to Deploys tab** in Netlify
2. **Click "Trigger deploy"** → **"Deploy site"**
3. **Wait for deployment** to complete

## ✅ **Step 5: Test Payment**

After deployment:
1. **Fill out application form** completely
2. **Click "Continue to Payment"**
3. **Should now work** without 404 errors

## 🔍 **Debugging**

If you still get errors:

1. **Check Functions tab** in Netlify dashboard
2. **Look for these 3 functions:**
   - `create-payment-intent`
   - `create-checkout-session`
   - `session-status`
3. **Click on each function** to see logs
4. **Test functions individually** using the test feature

## 🎯 **Expected Results**

After fixing:
- ✅ Application form submits without 404 errors
- ✅ Payment processing works with Stripe
- ✅ Email notifications sent to missscholasticamerica@gmail.com
- ✅ Success page displays properly

## 🆘 **Still Having Issues?**

1. **Check browser console** for JavaScript errors
2. **Verify Functions are deployed** in Netlify dashboard
3. **Test with different browsers**
4. **Check Stripe dashboard** for payment attempts

---

**The main fix is changing `/api/` to `/.netlify/functions/` in the payment code!** 