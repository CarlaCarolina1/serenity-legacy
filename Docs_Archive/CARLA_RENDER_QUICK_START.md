# Carla's Website - Render.com Quick Start Guide

**Railway is having issues, so we're using Render.com instead!**

---

## **STEP 1: Sign Up for Render**

1. Go to **https://render.com**
2. Click **"Get Started for Free"**
3. Sign up with your **Google account**
4. Verify your email

---

## **STEP 2: Create Database**

1. In Render dashboard, click **"New +"** (top right)
2. Select **"PostgreSQL"**
3. Configure:
   - **Name:** `carlas-website-db`
   - **Database:** `carlas_website` (or leave default)
   - **User:** `carlas_user` (or leave default)
   - **Region:** Choose closest to you (US East recommended)
   - **PostgreSQL Version:** 15 (or latest)
   - **Plan:** **Free**
4. Click **"Create Database"**
5. **Wait 2-3 minutes** for database to be created
6. **Copy the "Internal Database URL"** - you'll need this!

---

## **STEP 3: Deploy Backend**

1. In Render dashboard, click **"New +"**
2. Select **"Web Service"**
3. **Connect GitHub** (if not already connected):
   - Click **"Connect account"**
   - Authorize Render to access GitHub
4. **Select Repository:**
   - Find and select: `CarlaCarolina1/serenity-legacy`
5. **Configure Service:**
   - **Name:** `carlas-website-backend`
   - **Region:** Same as database (US East recommended)
   - **Branch:** `main`
   - **Root Directory:** `backend` ⚠️ **IMPORTANT!**
   - **Environment:** `Python 3`
   - **Build Command:** `pip install -r requirements.txt && alembic upgrade head`
   - **Start Command:** `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

6. **Environment Variables:**
   Click **"Advanced"** → **"Add Environment Variable"**
   
   Add these one by one:
   
   **Variable 1:**
   - **Key:** `DATABASE_URL`
   - **Value:** (Paste the Internal Database URL from Step 2)
   
   **Variable 2:**
   - **Key:** `FRONTEND_URL`
   - **Value:** `https://your-vercel-url.vercel.app` (replace with your actual Vercel URL)
   
   **Variable 3:**
   - **Key:** `PYTHON_VERSION`
   - **Value:** `3.11.0`

7. **Plan:** Select **"Free"**
8. Click **"Create Web Service"**

---

## **STEP 4: Wait for Deployment**

- Render will build and deploy (takes 3-5 minutes)
- Watch the logs - it should show:
  - Installing dependencies
  - Running migrations
  - Starting server
- When it says "Your service is live", you're done!

---

## **STEP 5: Get Your Backend URL**

After deployment completes:
1. You'll see a URL like: `carlas-website-backend.onrender.com`
2. **Test it:** Visit `https://carlas-website-backend.onrender.com/health`
3. Should see: `{"status":"healthy","service":"carlas-real-estate-api"}`

**Save this URL!** You'll need it for the next step.

---

## **STEP 6: Connect Frontend to Backend**

1. Go to your **Vercel** dashboard
2. Click on your project: `serenity-legacy`
3. Go to **"Settings"** → **"Environment Variables"**
4. Click **"Add New"**
5. Add:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://carlas-website-backend.onrender.com` (your Render URL)
   - **Environment:** Production, Preview, Development (check all)
6. Click **"Save"**
7. Go to **"Deployments"** tab
8. Click the **"..."** menu on the latest deployment
9. Click **"Redeploy"**
10. Make sure **"Use existing Build Cache"** is **unchecked**
11. Click **"Redeploy"**

---

## **STEP 7: Test Everything!**

1. Visit your **Vercel URL**
2. Check if properties load (go to Properties page)
3. Test the contact form
4. Everything should work! 🎉

---

## **TROUBLESHOOTING:**

**Backend won't start:**
- Check the logs in Render dashboard
- Make sure `Root Directory` is set to `backend`
- Make sure `DATABASE_URL` is set correctly

**Frontend can't connect:**
- Make sure `VITE_API_URL` is set in Vercel
- Make sure you redeployed after adding the variable
- Check browser console for errors

**Database connection errors:**
- Make sure you used the **Internal Database URL** (not External)
- Check that database is fully created (wait 2-3 minutes)

---

**Ready? Start with Step 1 - Sign up for Render!** 🚀

