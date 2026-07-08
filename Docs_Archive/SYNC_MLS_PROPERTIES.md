# Sync Stellar MLS Properties - Test Guide

**Status:** ✅ MLS is configured and ready!

---

## **Test Sync for Clermont, FL (Zip Code 34711)**

### **Option 1: Using PowerShell (Recommended)**

1. Open **PowerShell** (Windows key, type "PowerShell", press Enter)

2. Copy and paste this command:

```powershell
Invoke-RestMethod -Uri "https://carlas-website-backend.onrender.com/api/v1/mls/sync/zip/34711" -Method POST
```

3. Press Enter

4. **What to look for:**
   - ✅ **Success:** You'll see a response with `"success": true` and number of properties synced
   - ❌ **Error:** You'll see an error message - copy it and share with me

---

### **Option 2: Using Browser (I'll create a test page)**

If PowerShell doesn't work, I can create a simple HTML page you can open to test.

---

## **What Happens:**

1. **Backend connects to Stellar MLS API**
2. **Fetches properties for zip code 34711** (Clermont, FL)
3. **Adds/updates properties in database**
4. **Returns results**

---

## **Expected Results:**

### **If Successful:**
```json
{
  "success": true,
  "message": "Synced 25 properties for zip code 34711",
  "added": 25,
  "updated": 0,
  "errors": []
}
```

### **If There's an Error:**
Common errors:
- **401 Unauthorized** - Credentials might be wrong or API endpoint incorrect
- **404 Not Found** - API endpoint URL is wrong
- **Connection Error** - API endpoint might be different
- **500 Error** - Check Render logs for details

---

## **After Testing:**

1. **Share the result** - What did you see?
2. **Check Render Logs** - Go to Render → Your service → "Logs" tab
3. **Check Website** - Visit your Properties page to see if properties appear

---

**Try the PowerShell command above and let me know what you get!**

