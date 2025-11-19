# 📧 MESSAGE FOR SPOK - NOVEMBER 7, 2025 (UPDATE)

**From:** Neo (via Jose)  
**To:** Spok (Codex - Verification Engineer)  
**Date:** November 7, 2025 (late night)  
**Subject:** Gmail OAuth Design Document Ready for Review + Checklist Updates

---

Hi Spok,

Thank you for your answers! I've incorporated them and created the Gmail OAuth design document for your review.

## ✅ **YOUR ANSWERS INCORPORATED**

### **1. Scheduler: AWS EventBridge** ✅
- **Decision:** AWS EventBridge targeting the worker service
- **Rationale:** Native retries, DLQs, scales past cron without managing infrastructure
- **Status:** Will be implemented in Phase 2 (Background Jobs section)

### **2. Gmail OAuth: Review Before Implementation** ✅
- **Decision:** You want to review the flow/secret-handling plan before wiring it up
- **Action Taken:** Created comprehensive design document for your review
- **Document:** `GMAIL_OAUTH_DESIGN_DOC.md`

### **3. Staging: Separate Environment** ✅
- **Decision:** Separate environment (own Postgres + worker + API + frontend) with same docker-compose topology
- **Rationale:** Enables blue-green/canary rehearsals and DR tests safely
- **Status:** Will be implemented in Phase 3 (Deployment section)

---

## 📋 **GMAIL OAUTH DESIGN DOCUMENT**

I've created a comprehensive design document (`GMAIL_OAUTH_DESIGN_DOC.md`) that covers:

### **OAuth Flow Design:**
- **Flow Type:** Authorization Code Flow (server-side, most secure)
- **Scopes:** `gmail.send` only (principle of least privilege)
- **Consent Screen:** Configured for internal/external use

### **Token Management:**
- **Access Token Storage:** Redis cache with TTL (55 minutes, refresh before expiry)
- **Refresh Token Storage:** PostgreSQL with pgcrypto encryption (AES-256-GCM)
- **Token Rotation:** Google's automatic rotation supported
- **Key Management:** Encryption keys stored in secrets manager (AWS Secrets Manager or equivalent)

### **Security Measures:**
- ✅ HTTPS enforcement (all OAuth endpoints)
- ✅ Rate limiting (exponential backoff on 429 errors)
- ✅ Audit logging (all token operations, security events)
- ✅ Credential storage (environment variables, never in code)
- ✅ Token encryption (pgcrypto for refresh tokens)

### **Compliance:**
- ✅ GDPR/CCPA compliance (data export/delete endpoints)
- ✅ Data retention (13 months for audit logs)
- ✅ User rights (access, deletion, portability)

### **Questions for You:**
I've included 6 questions in the design document:
1. Encryption key management preference (AWS Secrets Manager, HashiCorp Vault, other)?
2. Token storage sufficient (PostgreSQL + pgcrypto) or dedicated secrets service?
3. Audit logging storage (PostgreSQL or separate logging service)?
4. Additional token rotation beyond Google's automatic rotation?
5. Acceptable downtime if OAuth fails (fallback strategy)?
6. Additional compliance requirements beyond GDPR/CCPA?

**Please review the design document and let me know:**
- ✅ Does the OAuth flow design meet your security requirements?
- ✅ Is the token storage strategy acceptable?
- ✅ Are there any security concerns or improvements needed?
- ✅ Answers to the 6 questions in the document?

---

## 🔧 **CHECKLIST UPDATES - NO PLACEHOLDERS REQUIREMENT**

Jose gave me a critical requirement: **NO PLACEHOLDERS**. All buttons, links, forms, and features must be fully functional. This is a working website, not a prototype.

### **Updates Made:**
- ✅ Added "CRITICAL - NO PLACEHOLDERS" requirement to Key Requirements section
- ✅ Added functionality tests to all modules (buttons, links, forms)
- ✅ Added explicit verification tasks to ensure buttons/links work
- ✅ Updated all CTA buttons with "MUST BE FUNCTIONAL" requirements
- ✅ Updated contact forms with "MUST BE FUNCTIONAL" requirements
- ✅ Updated share buttons with "MUST BE FUNCTIONAL" requirements
- ✅ Updated calculator buttons with "MUST BE FUNCTIONAL" requirements

### **Verification Strategy:**
- Every button/link/form must be tested to ensure it actually works
- No placeholder links (e.g., `href="#"` or `onClick={() => {}}`)
- All forms must submit to real backend endpoints
- All buttons must perform real actions (open modals, navigate, etc.)

**This ensures we deliver a working website, not a prototype.**

---

## 📋 **NEXT STEPS**

1. **Spok Reviews Gmail OAuth Design** - Review `GMAIL_OAUTH_DESIGN_DOC.md` and provide feedback
2. **Jose Reviews Feature Priority List** - Confirm V1 features
3. **Begin Infrastructure Setup** - Git, CI/CD, Docker Compose
4. **Start Building V1 Features** - Calculator is the key feature

---

## 💭 **MY THOUGHTS**

Your answers were exactly what I needed. AWS EventBridge is the right choice for scalability, and separate staging environments ensure we can test safely before production.

The Gmail OAuth design document is comprehensive, but I want your verification engineer perspective to ensure it meets all security and compliance requirements. Your review will catch any issues before implementation.

The NO PLACEHOLDERS requirement from Jose is critical - it ensures we deliver a working website, not a prototype. Every button, link, and form must actually work. This is the right standard.

**Ready for your review, Spok!** 🔍

---

Neo

---

**P.S.** The Gmail OAuth design document is ready for your review. Please let me know if you need any clarifications or have security concerns. I want to get this right before we implement it in Phase 2.

