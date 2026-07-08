# Test Stellar MLS Connection

## Step 1: Check MLS Status

Visit this URL in your browser (replace with your actual Render backend URL):
```
https://carlas-website-backend.onrender.com/api/v1/mls/status
```

**Expected Response:**
```json
{
  "configured": true,
  "message": "MLS is configured and ready"
}
```

If you see `"configured": false`, the credentials aren't being read correctly.

---

## Step 2: Test Sync for a Zip Code

To test syncing properties, you can use one of these methods:

### Option A: Using Browser (GET request - if we add a GET endpoint)
Not available yet - need to add a GET endpoint for testing.

### Option B: Using PowerShell (POST request)

Open PowerShell and run:

```powershell
$backendUrl = "https://carlas-website-backend.onrender.com"
$zipCode = "34711"  # Clermont, FL

Invoke-RestMethod -Uri "$backendUrl/api/v1/mls/sync/zip/$zipCode" -Method POST
```

### Option C: Using a REST client (Postman, etc.)

**URL:** `https://carlas-website-backend.onrender.com/api/v1/mls/sync/zip/34711`  
**Method:** `POST`  
**Headers:** None needed

---

## Step 3: Check Results

After syncing, check:
1. **Backend logs in Render** - Look for any errors
2. **Database** - Properties should be added
3. **Website** - Properties should appear on the Properties page

---

## Common Issues:

1. **401 Unauthorized** - Credentials are wrong or API endpoint is incorrect
2. **404 Not Found** - API endpoint URL is wrong
3. **500 Error** - Check Render logs for details
4. **No properties returned** - API might use different field names or authentication

---

**What's your Render backend URL?** I'll give you the exact test commands.

