# Stellar MLS Integration Setup Instructions

**For: Carla Carolina**  
**Date: November 20, 2025**

---

## ✅ **What's Done:**

1. ✅ Code updated to support Stellar MLS authentication
2. ✅ MLS sync service implemented
3. ✅ Property mapping for RESO Web API format
4. ✅ Code pushed to GitHub

---

## 🔧 **Next Step: Add Credentials to Render**

You need to add your Stellar MLS credentials to Render as environment variables.

### **Step 1: Go to Render Dashboard**

1. Go to **https://render.com**
2. Click on your **`carlas-website-backend`** service

### **Step 2: Add Environment Variables**

1. Click **"Environment"** tab (or **"Environment Variables"**)
2. Click **"Add Environment Variable"**

Add these **3 variables**:

**Variable 1:**
- **Key:** `MLS_USERNAME`
- **Value:** `261219949`
- Click **"Save"**

**Variable 2:**
- **Key:** `MLS_PASSWORD`
- **Value:** `Beautiful89.`
- Click **"Save"**

**Variable 3 (Optional - if you have API URL):**
- **Key:** `MLS_API_URL`
- **Value:** (Leave empty for now, or use `https://api.mlsgrid.com/v2` if that's your API endpoint)
- Click **"Save"**

### **Step 3: Redeploy**

1. After adding all variables, go to **"Events"** or **"Deployments"** tab
2. Click **"Manual Deploy"** → **"Deploy latest commit"**
3. Wait for deployment to complete (2-3 minutes)

---

## 🧪 **Test the Integration**

Once deployed, we can test the MLS sync:

1. **Check MLS Status:**
   - Visit: `https://your-backend-url.onrender.com/api/v1/mls/status`
   - Should show: `{"configured": true, "message": "MLS is configured and ready"}`

2. **Sync Properties for a Zip Code:**
   - Example: `POST https://your-backend-url.onrender.com/api/v1/mls/sync/zip/34711`
   - This will fetch properties from Stellar MLS for Clermont, FL

---

## 📋 **Important Notes:**

1. **API Endpoint:** The code defaults to `https://api.mlsgrid.com/v2` (MLS Grid API)
   - If Stellar MLS uses a different endpoint, we'll need to update `MLS_API_URL`
   - Check your Stellar MLS documentation for the correct API endpoint

2. **Authentication:** Currently using username/password (Basic Auth)
   - If Stellar MLS requires OAuth or API keys instead, we'll need to adjust

3. **RESO Web API:** The code is built for RESO Web API standard
   - Most modern MLS systems use this
   - If Stellar MLS uses RETS (older standard), we'll need to adjust

---

## 🔍 **If It Doesn't Work:**

If the sync fails, we may need:

1. **Correct API Endpoint:**
   - Check Stellar MLS documentation
   - Look for "API URL" or "RESO Web API endpoint"
   - Update `MLS_API_URL` in Render

2. **Different Authentication:**
   - Some MLS systems use OAuth tokens
   - May need to get an API key from Stellar MLS
   - Check your Stellar MLS dashboard for API credentials

3. **API Documentation:**
   - Stellar MLS should provide API documentation
   - Share it with me and I'll adjust the code

---

## ✅ **Once Working:**

After successful sync:
- Properties will automatically appear on your website
- You can sync by zip code or batch sync multiple areas
- Properties update automatically when MLS data changes

---

**Ready? Add those environment variables to Render and let me know when it's done!**

