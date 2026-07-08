# Carla's Website — Updates & Enhancement Ideas Project

**Document Version:** 1.0  
**Created Date/Time:** March 23, 2026  
**Last Updated Date/Time:** March 23, 2026  
**Author:** Neo Forge  
**Collaborators:** Jose Yacaman, Carla Yacaman  
**Status:** ACTIVE — idea backlog for post-V1 improvements  
**Purpose:** Track competitive research and numbered implementation ideas for **serenitylegacy.net** (Carla's site). Complements `IDX_INTEGRATION_PLAN.md` and `CARLA_WEBSITE_MASTER_CHECKLIST.md`.

---

## Reference site (researched in browser)

**URL (example session — Broward map search):**  
https://www.ewm.com/index.php?advanced=1&display=Broward&areas%5B%5D=county%3Abroward&rtype=map#rslt  

**Who they are:** EWM (large South Florida brokerage site). Footer shows **MLS® disclaimers** (e.g. Southeast Florida MLS, Palm Beach Board of Realtors) and **“Powered by BoldTrail”** — i.e. professional MLS search stack + compliance, not a hand-rolled-only UI.

---

## How EWM presents the MLS / search experience (observed)

These patterns are what make the experience feel “high-end” and easy to use:

1. **Map-first search** — Default experience is an interactive map (**Leaflet** attribution visible) with zoom **+ / −** and a **Draw** tool (geo filter), not only a text search.
2. **Persistent filter bar** — Location (county/city/area as chips), **Min/Max price**, **Beds**, **Baths**, property **types** and **styles**, sqft, acres, year built, **Walk Score**, plus toggles like **Just Listed**, **Walkable**, **Fixer Upper**, **Newly Built**, **Show only sold** (where allowed).
3. **“Open More Search Filters”** — Progressive disclosure so the first screen stays clean; power users expand depth.
4. **Sort** — Rich **Sort By** menu: price (asc/desc), beds, baths, footage, acreage, **reductions**, **days on website**, **# pictures**, walk score, popularity.
5. **View modes** — **Grid / List / Map** toggle so users pick density vs geography.
6. **Save Search + alerts** — **Save Search** flow with naming; messaging about **search alerts** and email verification for certain data (e.g. sold) — strong lead capture.
7. **Mega-menu taxonomy** — Separate entry points: **Map Search**, **Rental Search**, **Open House Search**, **Our Exclusive Listings**, **Global Luxury**, **New Developments**, **Pre & Under Construction**, **Commercial** — makes a big MLS feel navigable.
8. **Trust & compliance** — MLS disclaimers and copyright blocks in-page; **Fair Housing**, **Accessibility**, **Terms** links; phone number prominent for “help searching.”
9. **Lead-oriented CTAs** — e.g. **Complimentary Market Report**, **What’s My Home Worth** — paired with search, not competing with it.

---

## Idea #1 — EWM-style MLS presentation for Carla (PRIORITY)

**Goal:** Bring Carla’s **IDX / MLS** area closer to this standard: polished, map-led, filter-rich, and trustworthy — while staying on-brand (Serenity Legacy colors and voice).

**Concrete targets (for implementation planning):**

| EWM pattern | Direction for Carla |
|-------------|---------------------|
| Map + list sync | Ensure IDX provider or custom embed supports **map + grid/list**; if iframe-only, evaluate providers with **map search** (see `IDX_INTEGRATION_PLAN.md`). |
| Draw / polygon | If Stellar/IDX vendor supports geo search, enable; if not, document as **phase 2** or alternative (radius from city/ZIP). |
| Filters | Match **price, beds, baths, property type** at minimum; add **sqft, year built, status** as vendor allows. |
| Sort | Expose **price, DOM, newest** at minimum; align labels with Stellar field names. |
| Save search / alerts | **Lead capture**: tie to Carla’s CRM/email tool; mirror “name this search + email alert” if vendor supports it. |
| Disclaimers | Auto-append **Stellar MLS** (and broker) disclaimer/footer on any IDX page — non-negotiable for compliance. |
| Mobile | EWM’s density works because controls collapse; Carla’s implementation must **mobile-test** filter drawers. |

**Dependencies:** Stellar MLS rules, chosen IDX vendor (IDX Broker, Showcase IDX, iHomefinder, etc.), and legal review of copy/disclaimers.

**Related files:** `IDX_INTEGRATION_PLAN.md`, `MLS_INTEGRATION_RESEARCH.md`, `STELLAR_MLS_SETUP_INSTRUCTIONS.md`, `SYNC_MLS_PROPERTIES.md`

---

## Additional ideas (2+) from the same review

2. **“Exclusive listings” lane** — Even with IDX, a curated **Carla’s listings** or **Serenity Legacy picks** strip (manual or filtered MLS ID list) adds personality EWM gets from **Our Exclusive Listings**.
3. **Open houses micro-experience** — Dedicated **Open House** view (date-sorted) if data available from feed; strong for weekend buyers.
4. **Market report CTA** — Pair search with **Complimentary market report** (PDF or automated email) to match brokerage-grade lead magnets.
5. **Community / lifestyle hub** — EWM pushes **Community Guides**, **Market Reports**, **Lifestyles** — Carla already has neighborhood pages; cross-link from **search by area** for SEO + trust.
6. **Drive-time or school filters** — If IDX vendor supports **school boundary** or **commute** filters, advertise them; if not, note as vendor upgrade criterion.
7. **BoldTrail / enterprise stack awareness** — If Carla ever outgrows basic widgets, R&D whether **broker-grade portals** (or comparable) justify cost vs. Showcase/IDX Broker for **map + draw + alerts** in one package.

---

## Version history

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | March 23, 2026 | Initial doc; EWM reference; Idea #1 (MLS presentation); ideas 2–7 |

---

**Next step:** Jose / Carla confirm IDX vendor capabilities vs. the Idea #1 table; then break Idea #1 into tasks in `PROJECT_LOG.md` or the master checklist.
