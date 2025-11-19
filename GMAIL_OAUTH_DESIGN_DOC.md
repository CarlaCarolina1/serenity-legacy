# 📧 GMAIL API OAUTH DESIGN DOCUMENT

**Created:** November 7, 2025  
**Purpose:** Design document for Gmail API OAuth flow, refresh token storage, and security compliance  
**Status:** DRAFT - Awaiting Spok's Review  
**Author:** Neo (Primary Engineer)  
**Reviewer:** Spok (Verification Engineer)

---

## 🎯 **OVERVIEW**

This document outlines the complete OAuth 2.0 flow for Gmail API integration, including token management, refresh token storage, rotation strategy, and compliance with security requirements.

**Use Case:** Contact form submissions need to send email notifications to Carla's Gmail account.

**Security Requirements:**
- No plaintext passwords
- Secure token storage
- Automatic token refresh
- Token rotation support
- Compliance with GDPR/CCPA
- Audit logging

---

## 🔐 **OAUTH 2.0 FLOW DESIGN**

### **Flow Type: Authorization Code Flow (Server-Side)**

We'll use the **Authorization Code Flow** because:
- ✅ Most secure OAuth flow
- ✅ Tokens never exposed to client
- ✅ Supports refresh tokens
- ✅ Works with background workers
- ✅ Industry standard for server-to-server communication

### **OAuth Scopes**

**Requested Scopes:**
- `https://www.googleapis.com/auth/gmail.send` - Send emails only (principle of least privilege)

**Scope Justification:**
- We only need to **send** emails, not read them
- Minimal permissions reduce security risk
- Easier to get user consent
- Complies with principle of least privilege

### **OAuth Consent Screen Configuration**

**Application Type:** Internal (if using Google Workspace) or External (if using personal Gmail)

**Consent Screen Details:**
- **App Name:** Carla's Real Estate Website
- **User Support Email:** Carla's Gmail address
- **Developer Contact:** Jose's email
- **Scopes:** `gmail.send` only
- **Privacy Policy URL:** (to be added when website is live)

---

## 🔄 **TOKEN MANAGEMENT**

### **Token Types**

1. **Access Token**
   - **Lifetime:** 1 hour (Google default)
   - **Storage:** In-memory cache (Redis) with TTL
   - **Usage:** Included in Gmail API requests
   - **Refresh:** Automatic via refresh token

2. **Refresh Token**
   - **Lifetime:** Indefinite (until revoked)
   - **Storage:** Encrypted in PostgreSQL database (see Storage section)
   - **Usage:** Used to obtain new access tokens
   - **Rotation:** Supported (Google rotates refresh tokens on each use)

### **Token Storage Strategy**

#### **Access Token Storage: Redis Cache**
```
Key: gmail:access_token:{user_id}
Value: {access_token, expires_at}
TTL: 55 minutes (refresh before expiry)
```

**Rationale:**
- Fast access for background workers
- Automatic expiration
- No database load for frequent access
- Shared across worker instances

#### **Refresh Token Storage: PostgreSQL (Encrypted)**

**Table Schema:**
```sql
CREATE TABLE gmail_oauth_tokens (
    id SERIAL PRIMARY KEY,
    user_email VARCHAR(255) UNIQUE NOT NULL,
    refresh_token_encrypted BYTEA NOT NULL,
    encryption_key_id VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    last_refreshed_at TIMESTAMP,
    revoked_at TIMESTAMP NULL
);
```

**Encryption Method:**
- **Algorithm:** AES-256-GCM (authenticated encryption)
- **Key Management:** Use PostgreSQL `pgcrypto` extension
- **Key Rotation:** Quarterly rotation with key versioning

**Encryption Implementation:**
```python
# Using pgcrypto for column-level encryption
from sqlalchemy import text

def store_refresh_token(user_email: str, refresh_token: str):
    # Encrypt using pgcrypto
    query = text("""
        INSERT INTO gmail_oauth_tokens (user_email, refresh_token_encrypted, encryption_key_id)
        VALUES (:email, pgp_sym_encrypt(:token, :key), :key_id)
    """)
    # Execute with encrypted key from secrets manager
```

**Security Notes:**
- ✅ Refresh token never stored in plaintext
- ✅ Encryption key stored in secrets manager (AWS Secrets Manager or equivalent)
- ✅ Key rotation supported via key_id versioning
- ✅ Audit logging for all token operations

### **Token Refresh Strategy**

**Automatic Refresh:**
- Check access token expiry before each Gmail API call
- If expired or expiring within 5 minutes, refresh automatically
- Use refresh token to obtain new access token
- Update Redis cache with new access token
- Log refresh events for audit

**Refresh Flow:**
```
1. Worker needs to send email
2. Check Redis for access token
3. If missing/expired:
   a. Fetch refresh token from PostgreSQL (decrypt)
   b. Call Google OAuth token endpoint
   c. Receive new access token + new refresh token
   d. Encrypt and store new refresh token
   e. Store access token in Redis
4. Use access token for Gmail API call
```

**Error Handling:**
- If refresh token is invalid/revoked:
  - Log security event
  - Alert admin (Carla/Jose)
  - Require re-authentication
  - Queue email for manual sending

---

## 🔒 **SECURITY MEASURES**

### **1. Credential Storage**

**OAuth Client Credentials (Client ID, Client Secret):**
- **Storage:** Environment variables (`.env` file)
- **Never:** Committed to Git
- **Rotation:** Quarterly or after security incident
- **Access:** Only backend services can read

**Encryption Keys:**
- **Storage:** AWS Secrets Manager (or equivalent)
- **Access:** Backend service only (via IAM role)
- **Rotation:** Quarterly with versioning

### **2. Token Rotation**

**Google's Refresh Token Rotation:**
- Google issues a new refresh token on each refresh
- Old refresh token becomes invalid
- We must store the new refresh token immediately

**Implementation:**
```python
def refresh_access_token(user_email: str):
    # Get current refresh token (decrypted)
    old_refresh_token = get_refresh_token(user_email)
    
    # Call Google OAuth endpoint
    response = google_oauth.refresh_token(old_refresh_token)
    
    # Get new tokens
    new_access_token = response['access_token']
    new_refresh_token = response['refresh_token']  # NEW token
    
    # Store new refresh token (encrypted)
    store_refresh_token(user_email, new_refresh_token)
    
    # Cache new access token
    cache_access_token(user_email, new_access_token)
    
    return new_access_token
```

### **3. HTTPS Enforcement**

**Production Requirements:**
- ✅ All OAuth endpoints use HTTPS only
- ✅ All Gmail API calls use HTTPS
- ✅ Redirect URIs must be HTTPS
- ✅ Environment variable: `OAUTH_REDIRECT_URI=https://carlaswebsite.com/oauth/callback`

### **4. Rate Limiting**

**Gmail API Limits:**
- **Quota:** 1 billion quota units per day (default)
- **Sending:** ~500 emails per day (varies by account)
- **Rate Limiting:** Implement exponential backoff

**Implementation:**
- Track API calls per hour
- Implement exponential backoff on 429 errors
- Queue emails if rate limit exceeded
- Alert admin if approaching limits

### **5. Audit Logging**

**Logged Events:**
- OAuth token acquisition
- Token refresh operations
- Token revocation
- Failed authentication attempts
- Gmail API errors
- Security events (invalid tokens, suspicious activity)

**Log Format:**
```json
{
  "timestamp": "2025-11-07T10:30:00Z",
  "event": "token_refresh",
  "user_email": "carla@example.com",
  "success": true,
  "ip_address": "10.0.0.1",
  "user_agent": "BackgroundWorker/1.0"
}
```

**Storage:**
- PostgreSQL audit_log table
- Retention: 13 months (GDPR requirement)
- Anonymization: IP addresses anonymized after 30 days

---

## 🔄 **INITIAL OAUTH SETUP FLOW**

### **One-Time Setup (Manual)**

**Step 1: Google Cloud Console**
1. Create Google Cloud Project
2. Enable Gmail API
3. Create OAuth 2.0 credentials (Client ID, Client Secret)
4. Configure OAuth consent screen
5. Add authorized redirect URI: `https://carlaswebsite.com/oauth/callback`

**Step 2: Initial Authorization (One-Time)**
1. Generate authorization URL
2. Carla logs into Google account
3. Grants permission for `gmail.send` scope
4. Receives authorization code
5. Exchange code for access token + refresh token
6. Store refresh token (encrypted) in PostgreSQL
7. Store access token in Redis cache

**Step 3: Verification**
1. Send test email
2. Verify email received
3. Log success

### **Automated Flow (After Initial Setup)**

Once refresh token is stored, all subsequent operations are automated:
- Background worker uses refresh token to get access tokens
- No user interaction required
- Tokens refresh automatically

---

## 🛡️ **COMPLIANCE CONSIDERATIONS**

### **GDPR/CCPA Compliance**

**Data Stored:**
- User email address (Carla's Gmail)
- Encrypted refresh token
- Audit logs

**User Rights:**
- **Right to Access:** Export all stored OAuth data
- **Right to Deletion:** Revoke tokens, delete from database
- **Right to Portability:** Export token metadata (not actual tokens)

**Implementation:**
- `/api/users/{id}/export` endpoint includes OAuth token metadata
- `/api/users/{id}/delete` endpoint revokes tokens and deletes records
- Admin workflow to process data-subject requests

### **Data Retention**

- **Refresh Tokens:** Stored until revoked or user deletion request
- **Access Tokens:** Not stored (only cached in Redis with TTL)
- **Audit Logs:** 13 months retention (GDPR requirement)

---

## 🧪 **TESTING STRATEGY**

### **Unit Tests**
- Token encryption/decryption
- Token refresh logic
- Error handling

### **Integration Tests**
- OAuth flow (with test Google account)
- Gmail API email sending
- Token refresh automation
- Error scenarios (revoked tokens, network failures)

### **Security Tests**
- Token storage encryption verification
- HTTPS enforcement
- Rate limiting
- Audit logging

---

## 📋 **IMPLEMENTATION CHECKLIST**

### **Phase 1: Setup**
- `[ ]` Create Google Cloud Project
- `[ ]` Enable Gmail API
- `[ ]` Create OAuth 2.0 credentials
- `[ ]` Configure OAuth consent screen
- `[ ]` Set up secrets manager (AWS Secrets Manager or equivalent)

### **Phase 2: Database Schema**
- `[ ]` Create `gmail_oauth_tokens` table
- `[ ]` Enable `pgcrypto` extension
- `[ ]` Create encryption key management system
- `[ ]` Create audit_log table

### **Phase 3: Backend Implementation**
- `[ ]` Implement OAuth authorization flow
- `[ ]` Implement token exchange
- `[ ]` Implement token storage (encrypted)
- `[ ]` Implement token refresh logic
- `[ ]` Implement Gmail API email sending
- `[ ]` Implement error handling
- `[ ]` Implement audit logging

### **Phase 4: Background Worker**
- `[ ]` Create Celery/RQ task for email sending
- `[ ]` Integrate token refresh into worker
- `[ ]` Implement retry logic with exponential backoff
- `[ ]` Implement rate limiting

### **Phase 5: Testing**
- `[ ]` Unit tests for token management
- `[ ]` Integration tests for OAuth flow
- `[ ]` Security tests for encryption
- `[ ]` End-to-end test (send real email)

### **Phase 6: Compliance**
- `[ ]` Implement data export endpoint
- `[ ]` Implement data deletion endpoint
- `[ ]` Document data retention policy
- `[ ]` Create admin workflow for data-subject requests

---

## ❓ **QUESTIONS FOR SPOK**

1. **Encryption Key Management:** Do you prefer AWS Secrets Manager, HashiCorp Vault, or another solution?

2. **Token Storage:** Is PostgreSQL with pgcrypto sufficient, or should we use a dedicated secrets management service for refresh tokens?

3. **Audit Logging:** Should audit logs be stored in PostgreSQL or a separate logging service (e.g., CloudWatch, Datadog)?

4. **Token Rotation:** Should we implement additional token rotation beyond Google's automatic rotation?

5. **Error Handling:** What's the acceptable downtime if OAuth fails? Should we have a fallback (e.g., SMTP relay)?

6. **Compliance:** Are there any additional compliance requirements beyond GDPR/CCPA that we should consider?

---

## 📝 **REFERENCES**

- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Gmail API Documentation](https://developers.google.com/gmail/api)
- [OAuth 2.0 Security Best Practices](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics)
- [PostgreSQL pgcrypto Documentation](https://www.postgresql.org/docs/current/pgcrypto.html)

---

**Last Updated:** November 7, 2025  
**Status:** DRAFT - Awaiting Spok's Review  
**Next Steps:** Address Spok's feedback, finalize design, begin implementation in Phase 2

