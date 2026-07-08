# Carla's Website - Manual Vercel Setup Instructions

**If auto-detection doesn't work, use these manual settings in Vercel:**

## **Manual Configuration in Vercel Dashboard:**

1. **Go to your project in Vercel**
2. **Click "Settings"** (top right)
3. **Click "General"** in the left sidebar
4. **Scroll to "Build & Development Settings"**

### **Configure these settings:**

**Framework Preset:** `Vite` (or "Other" if Vite not listed)

**Root Directory:** `./` (leave blank or put `./`)

**Build Command:** `npm run build`

**Output Directory:** `dist`

**Install Command:** `npm install` (leave as default)

**Development Command:** `npm run dev` (optional)

---

## **Environment Variables (if needed later):**

When we connect the backend, you'll need to add:
- `VITE_API_URL` = your Railway backend URL

---

## **Save and Redeploy:**

After changing settings:
1. Click **"Save"**
2. Go to **"Deployments"** tab
3. Click **"Redeploy"** on the latest deployment
4. Select **"Use existing Build Cache"** = No (to do a fresh build)

---

**This should fix the build!**

