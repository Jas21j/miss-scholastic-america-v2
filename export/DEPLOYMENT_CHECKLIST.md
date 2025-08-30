# 🚀 Complete Deployment Checklist

## ✅ **What's Ready**

Your export folder contains everything needed:
- ✅ Built website files (`dist/`)
- ✅ Netlify Functions (`netlify/functions/`)
- ✅ Configuration files (`netlify.toml`, `package.json`)
- ✅ Documentation (`README.md`, guides)
- ✅ Git ignore rules (`.gitignore`)

## 📋 **Step-by-Step Commands**

### **Step 1: Initialize Git Repository**

Open PowerShell in the `export` folder and run these commands:

```powershell
# Initialize Git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Miss Scholastic America website with Stripe integration"
```

### **Step 2: Create GitHub Repository**

1. **Go to GitHub.com** and sign in
2. **Click the "+" icon** → **"New repository"**
3. **Repository settings:**
   - **Name**: `miss-scholastic-america`
   - **Description**: `Official website for Miss Scholastic America pageant with payment processing`
   - **Visibility**: Public (or Private if preferred)
   - **DO NOT** check "Add a README file" (we already have one)
   - **DO NOT** add .gitignore or license (we have them)

### **Step 3: Connect and Push to GitHub**

After creating the repository, GitHub will show you commands. Use these:

```powershell
# Add GitHub repository as origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/miss-scholastic-america.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### **Step 4: Connect to Netlify**

1. **Go to [netlify.com](https://netlify.com)** and sign in
2. **Click "Add new site"** → **"Import an existing project"**
3. **Choose "Deploy with GitHub"**
4. **Select your repository**: `miss-scholastic-america`
5. **Build settings** (Netlify should auto-detect):
   - **Base directory**: Leave empty
   - **Build command**: Leave empty (we're using pre-built files)
   - **Publish directory**: `dist`
   - **Functions directory**: `netlify/functions`

### **Step 5: Configure Environment Variables**

In Netlify dashboard:

1. **Go to Site settings** → **Environment variables**
2. **Add these variables:**
   ```
   STRIPE_SECRET_KEY = your_stripe_secret_key_here
   STRIPE_PUBLISHABLE_KEY = your_stripe_publishable_key_here
   ```

### **Step 6: Deploy**

1. **Click "Deploy site"** in Netlify
2. **Wait for deployment** (usually 1-2 minutes)
3. **Test the live site** using the provided Netlify URL

## 🔧 **Troubleshooting Commands**

If you need to make changes later:

```powershell
# Make your changes, then:
git add .
git commit -m "Description of changes"
git push origin main
```

## 🌐 **Custom Domain Setup** (Optional)

If you want to use `missscholasticamerica.com`:

1. **In Netlify**: Site settings → Domain management → Add custom domain
2. **Update DNS**: Point your domain to Netlify's servers
3. **Enable HTTPS**: Netlify will auto-generate SSL certificate

## ✅ **Verification Steps**

After deployment, test:

1. **✅ Website loads** at your Netlify URL
2. **✅ Payment system works** (test with small amount first)
3. **✅ Application form submits** successfully
4. **✅ Email notifications** are received at missscholasticamerica@gmail.com
5. **✅ All pages** navigate correctly

## 🆘 **Need Help?**

If you encounter issues:

1. **Check Netlify build logs** for errors
2. **Verify environment variables** are set correctly
3. **Test functions individually** in Netlify dashboard
4. **Check email spam folder** for notifications

---

**🎉 Once deployed, your website will be live and ready to accept applications and payments!** 