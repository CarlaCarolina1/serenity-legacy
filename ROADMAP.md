# 🗺️ ROADMAP — Serenity Legacy Real Estate

**Owner:** Atlas · **Updated:** July 7, 2026
**Rule:** modules are never deleted, only re-statused. Status = `Planned → Building → Built → Verified`.

Priorities agreed with Jose + Carla this session. The site's north star is **lead generation** —
help buyers find homes and contact Carla. Every feature serves that.

---

## Module 1 — Deploy the July 7 fixes  ·  Status: **Built (deploy pending)**
- API timeout, real social links, repo cleanup. Push to `main` → Vercel auto-deploys.
- Verify live: Properties doesn't hang; FB/IG buttons open real profiles.

---

## Module 2 — Listings source & strategy  ·  Status: **Planned (decision made)**

**Decision:** Lead with **New Construction / builder-permitted listings**, with a hybrid safety net.

Carla can list builders' homes (e.g. **Meritage Homes**) in exchange for hosting open houses. This is
reliable, free, and differentiates her. Recommended structure:

1. **Primary — New Construction showcase (do first).** A curated, Carla-controlled set of builder
   communities & homes (Meritage, Lennar, D.R. Horton, Pulte, Taylor Morrison). Stored in the
   existing backend or a simple JSON/CMS Carla can edit. No MLS dependency, always works.
   - Add **property-type categories** here: `New Construction · Residential · Land · Commercial`
     (Module 3).
2. **Secondary — MLS/IDX search embed (optional).** Keep an IDX search box for buyers who want the
   full market. **Requires a working IDX subscription** — either renew `myrealtyrealestate.com` or
   move to a modern provider (IDX Broker / iHomefinder / Realtyna, ~$40–110/mo). Decide after
   checking the current account's status.
3. **Retire or upgrade the Render backend.** Free tier sleeps → either pay ~$7/mo to keep it warm,
   or fold listings into option 1's editable store and drop the always-on backend.

**Atlas recommendation:** Build #1 now (fast, free, reliable, on-brand). Treat #2 as a paid add-on
once Carla confirms whether the IDX account is salvageable. This makes "find homes" *actually work*
regardless of the external MLS situation.

---

## Module 3 — Property-type categories (land / residential / commercial / new construction)  ·  Status: **Planned**
- Add a `property_type` filter UI on the Properties page (tabs or a filter bar).
- Extend the listings data model with `type` and filter client-side.
- Ties directly to Module 2's data source; build them together.

---

## Module 4 — Professional Mortgage Calculator upgrade  ·  Status: **Planned ("let's do it")**

Current calculator is solid (price, down payment %/$ slider, PMI auto-calc, taxes/insurance/HOA,
3-year projection, buyer checklist). Add, in this order:

1. **Loan type selector** — Conventional / FHA / VA / USDA. Drives min down payment & mortgage
   insurance rules (e.g. FHA MIP, VA no-PMI, conventional PMI < 20%).
2. **Full amortization** — total interest over the loan life + full schedule (not just 3 years).
3. **Extra monthly principal** — show interest saved & payoff-time reduction.
4. **Affordability mode** — reverse calc: income + debts → max home price (using a 28/36 DTI rule).
5. **Live rate display** — show current average 30-yr / 15-yr rates with an **"as of [date]"** label.
   - *Honest approach:* weekly national averages (Freddie Mac PMMS is the standard source), refreshed
     on a schedule, clearly labeled as averages. **True real-time per-lender rates need a paid feed
     and are out of scope for v1.**

### ⚠️ Module 4b — Mortgage referral commission  ·  Status: **BLOCKED (legal)**
Jose asked whether Carla could earn commission when a buyer clicks through to a lender. **In the U.S.
this is generally prohibited under RESPA Section 8** (anti-kickback) because a mortgage is a
"settlement service." A "click-this-link-and-Carla-gets-paid" model is legally risky.
**Do not build until Carla clears it with her broker and ideally a real-estate attorney.** Compliant
alternatives exist (e.g. bona-fide advertising, not tied to referrals) — Atlas can lay them out on request.

---

## Module 5 — Resources tab → dynamic per-property data  ·  Status: **Planned ("would love the plan")**

Today the Resources page is 6 static cards (Market Reports, Neighborhood Guides, Schools, HOA,
Buyer's Guide, Seller's Guide), all linking to /contact. Buyers actually want this data **for the
specific house they're looking at.** The plan:

**UX:** On a property detail page, add tabs — **Schools · Neighborhood · Safety · HOA · Commute** —
that populate for that property's address/coordinates.

**Data sources (mix of free + paid):**
| Data | Source options | Cost |
|------|----------------|------|
| Schools (ratings, assigned schools) | GreatSchools API, or SchoolDigger | Free tier / paid |
| Crime / safety | FBI Crime Data API (free), or a paid index (CrimeoMeter) | Free–$$ |
| Walkability / commute | Walk Score API | Free tier / paid |
| Neighborhood profile | Census ACS API (free), Google Places | Free–$ |
| HOA fees / rules | From the listing itself (already a field) + Carla's notes | Free |

**Phasing:**
- **Phase A (free-only MVP):** Assigned schools + Census demographics + FBI crime + HOA-from-listing.
  Cache results per address. No/low cost.
- **Phase B (paid polish):** GreatSchools ratings, Walk Score, richer profiles — once a data budget
  is set.
- **Build note:** call these APIs from the **backend** (keep API keys server-side, cache by address
  to control cost). Never expose keys in the frontend.

**Open input needed:** monthly data budget → decides Phase A vs A+B.

---

## Module 6 — About page real area photos  ·  Status: **Building (this session)**
- Replace incorrect stock (Clermont≠mountains, Orlando≠generic skyline, etc.) with accurate,
  free-license local imagery, stored in `frontend/public/images/areas/` for easy swap.
- **Best source = Carla's own photos.** Manifest at `frontend/public/images/areas/IMAGES_MANIFEST.md`
  documents each slot so she can drop in her own with the same filename.

---

## Module 7 — Design refinement (NOT a rebuild)  ·  Status: **Planned**
- Keep black/gold luxury identity; soften gold → warm champagne accent; add white space; let photos
  lead. Deliver a side-by-side preview before touching the live theme. Original preserved on
  `backup/pre-atlas-2026-07-07`.

---

## Module 8 — Marketing plan (buyer-side + seller-side)  ·  Status: **Planned (Jose to request)**
Jose flagged a follow-up: a marketing plan to (a) get sellers to list with Carla and (b) get buyers
to have Carla represent them. To be drafted in a dedicated session. Assets already exist in
`Docs_Archive/` (`SOCIAL_MEDIA_CONTENT_TEMPLATES.md`, `GOOGLE_ADS_DESCRIPTIONS.md`,
`GOOGLE_BUSINESS_PROFILE_SETUP.md`).
