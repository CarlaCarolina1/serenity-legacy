# Carla's Website - Render.com Backend Deployment

**Alternative to Railway** - Render.com has a free tier that works great!

---

## **STEP 1: Sign Up for Render**

1. Go to **https://render.com**
2. Click **"Get Started for Free"**
3. Sign up with your **Google account** (easiest)
4. Verify your email if needed

---

## **STEP 2: Push Backend to GitHub**

The backend needs to be in your GitHub repository. Let me help you add it:

**Option A: Add backend to existing repository (Recommended)**

The backend folder is already in your local project. We just need to make sure it's in GitHub.

**Option B: Create separate repository for backend**

We can create a new repo just for the backend.

**Which do you prefer?** I recommend Option A (same repo) - it's simpler.

---

## **STEP 3: Create Database on Render**

1. In Render dashboard, click **"New +"**
2. Select **"PostgreSQL"**
3. Name it: `carlas-website-db`
4. Select **"Free"** plan
5. Click **"Create Database"**
6. **Save the connection string** - you'll need it!

---

## **STEP 4: Deploy Backend Service**

1. In Render dashboard, click **"New +"**
2. Select **"Web Service"**
3. Connect your GitHub account (if not already)
4. Select repository: `serenity-legacy`
5. Configure:
   - **Name:** `carlas-website-backend`
   - **Region:** Choose closest to you
   - **Branch:** `main`
   - **Root Directory:** `backend` (important!)
   - **Environment:** `Python 3`
   - **Build Command:** `pip install -r requirements.txt && alembic upgrade head`
   - **Start Command:** `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

6. **Environment Variables:**
   - `DATABASE_URL` = (paste the connection string from Step 3)
   - `FRONTEND_URL` = (your Vercel URL, e.g., `https://serenity-legacy-xyz.vercel.app`)

7. Click **"Create Web Service"**

---

## **STEP 5: Get Your Backend URL**

After deployment (2-3 minutes), Render will give you a URL like:
- `carlas-website-backend.onrender.com`

**Save this URL!** You'll need it to connect the frontend.

---

## **STEP 6: Connect Frontend to Backend**

1. Go to your **Vercel** project
2. Go to **Settings** → **Environment Variables**
3. Add:
   - **Name:** `VITE_API_URL`
   - **Value:** `https://carlas-website-backend.onrender.com`
4. Click **"Save"**
5. Go to **Deployments** → **Redeploy** (to apply the new variable)

---

## **STEP 7: Test Everything**

1. Visit your Vercel URL
2. Check if properties load
3. Test the contact form
4. Everything should work! 🎉

---

**Ready? Let's start with Step 2 - pushing the backend to GitHub!**

