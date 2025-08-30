# 🚀 Quick Fix for 404 Error

## **The Issue**
Your app tries to call `/api/create-payment-intent` but Netlify uses `/.netlify/functions/create-payment-intent`

## **2-Minute Fix**

### **1. Update GitHub Code**
In your GitHub repository, edit this file:
`src/components/ui/CheckoutForm.jsx`

**Find these 2 lines (around lines 67 and 145):**
```javascript
const res = await fetch('/api/create-payment-intent', {
```

**Change them to:**
```javascript
const res = await fetch('/.netlify/functions/create-payment-intent', {
```

### **2. Update Netlify Build Settings**
- **Build command**: Leave **BLANK** (delete `npm run build`)
- **Runtime**: Set to `Node 18`

### **3. Add Environment Variables in Netlify**
```
STRIPE_SECRET_KEY = your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY = your_stripe_publishable_key_here
```

### **4. Redeploy**
Click "Trigger deploy" in Netlify

## **Done!** 
Payment should now work without 404 errors! 🎉 