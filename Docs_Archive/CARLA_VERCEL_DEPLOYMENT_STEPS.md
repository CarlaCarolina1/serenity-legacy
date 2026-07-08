# Carla's Website - Vercel Deployment Steps

**Date:** November 20, 2025  
**For:** Carla  
**Status:** Step-by-Step Guide

---

## ✅ STEP 1: You've Already Done This!
- ✅ Signed up for Vercel account

---

## 📋 STEP 2: Prepare Your Code (Choose One Method)

### **Option A: Using GitHub (Recommended - Easiest)**

**If you have a GitHub account:**

1. **Go to GitHub.com** and sign in (or create account if needed)

2. **Create a new repository:**
   - Click the "+" icon in top right
   - Click "New repository"
   - Name it: `carlas-website` or `serenity-legacy`
   - Make it **Public** (Vercel free tier works with public repos)
   - Click "Create repository"

3. **Upload your frontend folder to GitHub:**
   - I'll give you the exact commands in Step 3

---

### **Option B: Using Vercel CLI (No GitHub Needed)**

**If you don't have GitHub or prefer direct upload:**

1. **Install Vercel CLI on your computer:**
   - I'll give you the exact command

2. **Deploy directly from your computer:**
   - I'll guide you through this

---

## 🎯 STEP 3: Deploy to Vercel

### **If you chose Option A (GitHub):**

**3a. Upload your code to GitHub:**

Open PowerShell or Command Prompt, then run these commands **one at a time**:

```powershell
# Navigate to your frontend folder
cd "C:\Users\Yacaman.LEX\Desktop\Carlas Website\frontend"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Carla's website"

# Connect to your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/carlas-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** You'll need to enter your GitHub username and password (or use a personal access token).

---

**3b. Connect GitHub to Vercel:**

1. **Go to vercel.com** and sign in
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Click **"Connect GitHub"** (if not already connected)
5. Authorize Vercel to access your GitHub
6. Select your repository: `carlas-website` (or whatever you named it)
7. Click **"Import"**

**3c. Configure the project:**

Vercel should auto-detect it's a Vite project. Verify these settings:

- **Framework Preset:** Vite
- **Root Directory:** `./` (or leave blank)
- **Build Command:** `npm run build` (should be auto-filled)
- **Output Directory:** `dist` (should be auto-filled)
- **Install Command:** `npm install` (should be auto-filled)

**3d. Add Environment Variables (if needed):**

For now, you can skip this. We'll add the backend API URL later.

**3e. Deploy:**

1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. Vercel will give you a URL like: `carlas-website-xyz.vercel.app`

**✅ Your website is now live!**

---

### **If you chose Option B (Vercel CLI):**

**3a. Install Vercel CLI:**

Open PowerShell and run:

```powershell
npm install -g vercel
```

**3b. Login to Vercel:**

```powershell
vercel login
```

This will open your browser to authorize.

**3c. Deploy:**

```powershell
# Navigate to your frontend folder
cd "C:\Users\Yacaman.LEX\Desktop\Carlas Website\frontend"

# Deploy
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **Project name?** → `carlas-website` (or press Enter)
- **Directory?** → `./` (press Enter)
- **Override settings?** → No

**3d. Production deployment:**

```powershell
vercel --prod
```

**✅ Your website is now live!**

---

## 🔗 STEP 4: Get Your Vercel URL

After deployment completes, Vercel will show you:
- **Preview URL:** `https://carlas-website-xyz.vercel.app`
- **Production URL:** `https://carlas-website-xyz.vercel.app` (same, but for production)

**Save this URL!** You'll need it for:
1. Testing the website
2. Connecting to the backend (next step)
3. Setting up DNS (final step)

---

## ⚠️ IMPORTANT NOTES:

1. **The website will work, but the backend won't be connected yet** - That's okay! We'll connect it in Step 2 (Railway deployment).

2. **If you see errors about API calls** - That's normal. The frontend is looking for a backend that isn't deployed yet.

3. **Your website URL will be something like:**
   - `carlas-website-abc123.vercel.app`
   - Or you can set a custom domain later (we'll do this with DNS)

---

## 🆘 TROUBLESHOOTING:

**Problem: "Build failed"**
- Make sure you're in the `frontend` folder
- Make sure `package.json` exists
- Try running `npm install` first, then deploy again

**Problem: "Cannot find module"**
- Run `npm install` in the frontend folder first
- Make sure all dependencies are installed

**Problem: "GitHub connection failed"**
- Make sure you authorized Vercel to access GitHub
- Check that your repository is public (for free tier)

---

## ✅ NEXT STEPS:

Once your frontend is deployed and you have the Vercel URL:

1. **Test the website** - Visit the URL and make sure it loads
2. **Save the URL** - You'll need it for the next steps
3. **Let me know** - Tell me when it's deployed and I'll give you Step 2 (Railway backend deployment)

---

**Ready? Choose your method (GitHub or CLI) and let's deploy!** 🚀

