# 📧 GMAIL API OAUTH SETUP GUIDE

**Created:** November 6, 2025 at 11:42 PM  
**Purpose:** Guide for setting up Gmail API OAuth for contact form email notifications  
**Status:** Planning - Will be implemented in Phase 2 (Background Jobs)

---

## 🎯 **WHAT IS GMAIL OAUTH?**

**Simple Explanation:**
Instead of using a password (which is insecure), Gmail OAuth lets our website ask Gmail for permission to send emails on Carla's behalf. It's like giving our website a special key that only works for sending emails, and Carla can revoke it anytime.

**Why We Need It:**
- Contact forms need to send emails to Carla
- Gmail no longer allows "less secure apps" (password-based login)
- OAuth is the secure, modern way to send emails
- Carla can revoke access anytime if needed

---

## 📋 **WHAT I NEED FROM YOU**

### **Required Information:**
1. **Carla's Gmail Address** - The email address where contact form submissions should be sent
   - Example: `carla.realtor@gmail.com`

### **What I'll Do:**
1. Create Google Cloud Project
2. Enable Gmail API
3. Create OAuth credentials (Client ID & Client Secret)
4. Set up OAuth flow in our backend
5. Store credentials securely (in .env file, never in code)
6. Test email sending

---

## 🔧 **SETUP PROCESS (I'LL HANDLE THIS)**

### **Step 1: Google Cloud Console Setup**
- Create new Google Cloud Project (or use existing)
- Enable Gmail API
- Create OAuth 2.0 credentials
- Configure OAuth consent screen

### **Step 2: OAuth Credentials**
- Generate Client ID
- Generate Client Secret
- Configure authorized redirect URIs
- Download credentials JSON file

### **Step 3: Backend Integration**
- Install Gmail API Python library
- Set up OAuth flow
- Create email sending function
- Store credentials in .env file
- Test email sending

### **Step 4: Background Worker**
- Create Celery/RQ task for email sending
- Queue emails when contact forms submitted
- Retry failed emails
- Log email sending status

---

## 🔐 **SECURITY NOTES**

- **Credentials Stored in .env:** Never committed to Git
- **OAuth Tokens:** Stored securely, refreshed automatically
- **Permissions:** Only "send email" permission requested
- **Revocable:** Carla can revoke access anytime in Google Account settings

---

## 📝 **WHAT YOU'LL NEED TO DO**

### **One-Time Setup (I'll Guide You):**
1. **Google Account Access:** You'll need to log into Google Cloud Console once
2. **OAuth Consent:** Approve the OAuth consent screen (one-time)
3. **Test Email:** Send a test email to verify it works

### **That's It!**
Once set up, it runs automatically. Contact forms will send emails to Carla's Gmail, and she'll receive notifications just like normal emails.

---

## 🎯 **IMPLEMENTATION TIMELINE**

- **Phase 2:** Background jobs setup (includes Gmail OAuth)
- **Estimated Time:** 2-3 hours for complete setup
- **When:** After V1 launch, when we add background jobs

---

## ❓ **QUESTIONS?**

**Q: Do I need a Google Cloud account?**
A: Yes, but it's free. I'll guide you through creating one if needed.

**Q: Will this cost money?**
A: No. Gmail API is free for sending emails (within reasonable limits - thousands per day).

**Q: Can I use a different email service?**
A: Yes, but Gmail is easiest since Carla likely already has Gmail. We can use SendGrid, Mailgun, or SMTP if preferred.

**Q: What if I don't want to set this up yet?**
A: That's fine! We can use a simple contact form that just stores submissions in the database, and you can check them manually. We'll add email notifications in Phase 2.

---

**Last Updated:** November 6, 2025 at 11:42 PM  
**Status:** Planning - Ready to implement in Phase 2

