# 🚀 GitHub + Netlify Deployment Guide

## 📁 **What You Have Ready**

Your `export` folder contains everything needed for deployment:

```
export/
├── dist/                    # ✅ Built website files
├── netlify/
│   └── functions/          # ✅ Payment processing functions
├── netlify.toml            # ✅ Netlify configuration  
├── package.json            # ✅ Dependencies
├── server.cjs              # ✅ Local development server
├── README.md               # ✅ Documentation
├── .gitignore              # ✅ Git ignore rules
└── GITHUB_DEPLOYMENT_GUIDE.md
```

## 🎯 **Step-by-Step Deployment**

### **Step 1: Create GitHub Repository**

1. **Go to GitHub.com** and sign in
2. **Click the "+" icon** → **"New repository"**
3. **Repository name**: `miss-scholastic-america`
4. **Description**: `Miss Scholastic America pageant website with Stripe payments`
5. **Set to Public** (recommended) or Private
6. **DO NOT** initialize with README (we already have one)
7. **Click "Create repository"**

### **Step 2: Upload Files to GitHub**

**Option A: Using GitHub Web Interface (Easiest)**
1. **Click "uploading an existing file"** link on the new repository page
2. **Drag ALL files from your `export` folder** to the upload area
3. **Make sure to include:**
   - `dist/` folder (with all contents)
   - `netlify/` folder (with functions)
   - `netlify.toml`
   - `package.json`
   - `README.md`
   - `.gitignore`
4. **Commit message**: `Initial deployment with payment fixes`
5. **Click "Commit changes"**

**Option B: Using Git Commands**
```bash
# Navigate to your export folder
cd "C:\Users\MSI GAMING\Downloads\horizons-export-25bdcf69-d62d-4efc-ad1d-8d3e548f3a6f\export"

# Initialize Git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial deployment with payment fixes"

# Add remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/miss-scholastic-america.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### **Step 3: Connect GitHub to Netlify**

1. **Go to [Netlify Dashboard](https://app.netlify.com)**
2. **Click "Add new site"** → **"Import an existing project"**
3. **Click "Deploy with GitHub"**
4. **Authorize Netlify** to access your GitHub (if not already done)
5. **Select your repository**: `miss-scholastic-america`
6. **You'll see the build configuration screen**

### **Step 4: Configure Build Settings**

In the deployment configuration screen, set:

```
Build command: [LEAVE COMPLETELY BLANK]
Publish directory: dist
Functions directory: netlify/functions
```

**Important**: The `netlify.toml` file will automatically configure these settings, but verify they match.

### **Step 5: Add Environment Variables**

1. **Click "Show advanced"** → **"Environment variables"**
2. **Add Variable 1:**
   - **Key**: `STRIPE_SECRET_KEY`
   - **Value**: `your_stripe_secret_key_here`

3. **Add Variable 2:**
   - **Key**: `STRIPE_PUBLISHABLE_KEY`
   - **Value**: `your_stripe_publishable_key_here`

### **Step 6: Deploy**

1. **Click "Deploy site"**
2. **Wait for deployment** (should take 2-3 minutes)
3. **Watch the deploy log** for any errors

## ✅ **Success Verification**

Your deployment is successful when you see:

### **Deploy Log Should Show:**
```
✅ Build completed successfully
✅ 3 functions deployed:
   - create-payment-intent
   - create-checkout-session  
   - session-status
✅ Site published
```

### **Test Your Live Site:**
1. **Visit your Netlify URL** (will be something like `https://amazing-name-123456.netlify.app`)
2. **Navigate through pages** - all should load
3. **Test application form** - should accept input
4. **Test payment flow** - should process successfully
5. **Check email delivery** - should send to missscholasticamerica@gmail.com

## 🔧 **After Deployment**

### **Custom Domain (Optional)**
1. **Go to Site settings** → **Domain management**
2. **Add custom domain**: `missscholasticamerica.com`
3. **Configure DNS** as instructed by Netlify

### **Monitoring**
1. **Check Functions tab** - should show 3 active functions
2. **Monitor Deploy logs** - for any issues
3. **Check Analytics** - for site traffic

## 🚨 **Troubleshooting**

### **If Build Fails:**
- Check that `netlify.toml` is in the root directory
- Verify environment variables are set correctly
- Check Functions tab for error messages

### **If Payments Fail:**
- Verify Stripe environment variables are correct
- Check Functions logs for error details
- Ensure HTTPS is enabled (required for Stripe)

### **If 404 Errors:**
- Verify `dist` folder was uploaded with all contents
- Check that `netlify.toml` redirects are configured
- Ensure publish directory is set to `dist`

## 📞 **Support**

If you encounter issues:
1. **Check Netlify deploy logs** first
2. **Verify all environment variables** are set
3. **Test functions individually** in Netlify dashboard
4. **Check browser console** for JavaScript errors

---

## 🎉 **You're Ready!**

Once deployed, your site will have:
- ✅ **Live payment processing** with Stripe
- ✅ **Email notifications** to Miss Scholastic America
- ✅ **Responsive design** for all devices
- ✅ **Admin dashboard** for application management
- ✅ **Automatic HTTPS** via Netlify
- ✅ **CDN delivery** for fast loading

**Your live site will be ready to accept real applications and payments!** 