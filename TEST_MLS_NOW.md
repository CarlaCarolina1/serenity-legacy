# Test Stellar MLS Connection - Quick Guide

**Your Backend URL:** `https://carlas-website-backend.onrender.com`

---

## **Test 1: Check MLS Status**

Open this URL in your browser:
```
https://carlas-website-backend.onrender.com/api/v1/mls/status
```

**What you should see:**
- ✅ **Good:** `{"configured": true, "message": "MLS is configured and ready"}`
- ❌ **Bad:** `{"configured": false, "message": "MLS not configured..."}`

**If it says "configured: false":**
- The environment variables might not be loaded
- Check Render → Environment tab to make sure both variables are there
- Make sure you redeployed after adding them

---

## **Test 2: Sync Properties (If Status is Good)**

If the status shows `configured: true`, we can test syncing properties.

**Option A: Using PowerShell (Easiest)**

Open PowerShell and run:

```powershell
Invoke-RestMethod -Uri "https://carlas-website-backend.onrender.com/api/v1/mls/sync/zip/34711" -Method POST
```

This will sync properties for zip code 34711 (Clermont, FL).

**Option B: Using Browser (Need to add GET endpoint)**

I can add a simple test page if you prefer.

---

## **What to Look For:**

After running the sync:

1. **Success Response:**
   ```json
   {
     "success": true,
     "message": "Synced X properties for zip code 34711",
     "added": 10,
     "updated": 0,
     "errors": []
   }
   ```

2. **Error Response:**
   ```json
   {
     "success": false,
     "message": "Error message here",
     "errors": [...]
   }
   ```

3. **Check Render Logs:**
   - Go to Render → Your service → "Logs" tab
   - Look for any error messages
   - Share any errors you see

---

## **Next Steps:**

1. **First:** Test the status endpoint and tell me what you see
2. **Then:** If configured, test the sync
3. **Finally:** Check if properties appear on your website

**Let me know what the status endpoint returns!**

