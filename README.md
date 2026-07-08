# 🏠 Serenity Legacy Real Estate — Carla's Website

**Client:** Carla Carolina (Jose's wife) — Licensed Realtor, FL License #SL3371270
**Business:** Serenity Legacy Real Estate
**Live site:** https://serenitylegacy.net
**Service area:** Central Florida — Davenport, Champions Gate, Kissimmee, Orlando, Clermont, Titusville, Reunion, Margaritaville
**Last updated:** July 7, 2026 (Atlas)

---

## ⚠️ READ THIS FIRST — the #1 thing to know

**There are two copies of the app. Only `frontend/` is live.**

`vercel.json` builds the site with `cd frontend && npm run build` (output `frontend/dist`).
The root-level `src/` folder is an **older parallel copy that is NOT deployed** — editing it changes
nothing on the live site. **Always work in `frontend/`.**

```
Carlas Website/
├── frontend/          ← THE LIVE APP (React + TypeScript + Vite). Work here.
│   ├── src/
│   │   ├── pages/         # Home, About, Properties, Resources, Calculator, Contact, Services...
│   │   ├── components/    # Layout, FloatingSocial, Calculator, PropertyCard, etc.
│   │   ├── data/          # siteContent.ts (all editable text), properties.ts (fallback data)
│   │   └── services/api.ts# axios client → backend
│   └── public/images/     # static images
├── backend/           # Python FastAPI + PostgreSQL (deployed on Render, free tier — sleeps)
├── src/               # ⚠️ STALE parallel copy — NOT deployed. Do not edit.
├── Docs_Archive/      # 113 archived historical docs (recoverable reference, not active)
├── README.md          # this file
├── PROJECT_LOG.md     # session-by-session history (newest at top)
├── HANDOFF.md         # where we stopped + the next 3 steps
└── ROADMAP.md         # planned features with status
```

---

## 🚀 Run it locally

```bash
cd "C:/Users/Yacaman.LEX/Desktop/Carlas Website/frontend"
npm install     # first time only
npm run dev     # http://localhost:5173  (use Chrome, not Edge)
```

> Note: the folder name contains a space ("Carlas Website"), which breaks some `npm`-launcher
> tooling. If a launcher fails with `'C:\Program' is not recognized`, run npm from inside the
> `frontend/` directory (as above) or use a no-space junction to the folder.

---

## 🧩 Tech stack

| Layer | Tech |
|-------|------|
| Frontend | React 18 + TypeScript + Vite |
| Styling | Plain CSS (no framework), Playfair Display + Inter fonts |
| Routing | React Router v6 |
| State | React hooks / Zustand |
| Backend | Python FastAPI + PostgreSQL (on Render, **free tier — cold-starts slowly**) |
| Hosting | Vercel (frontend) + Render (backend) |
| Repo | github.com/CarlaCarolina1/serenity-legacy |

---

## 🎨 Design

Black / white / **gold** luxury theme (`#0a0a0a` bg, `#ffffff` text, `#D4AF37` gold).
Recommendation on file (see ROADMAP): keep the identity, soften the gold toward warm champagne, add
more white space, let photography lead. **Do not do a full rebuild** — refine only.

Original design is preserved on git branch **`backup/pre-atlas-2026-07-07`** and in all history.

---

## 📌 Current known issues (as of July 7, 2026)

| Area | Status |
|------|--------|
| Properties — "takes forever to load" | ✅ Fixed in code (API timeout). **Deploy pending.** |
| Properties — MLS search iframe (external IDX) | ⚠️ Returns 403/302 — external subscription needs review |
| Featured Listings — backend | ⚠️ Render free tier sleeps; needs paid tier or new data source |
| Social buttons | ✅ Fixed — real FB + IG wired, dead LinkedIn removed. **Deploy pending.** |
| About page area photos | ⚠️ Generic/incorrect stock — replacing with accurate local imagery |
| Resources tab | ⚠️ Static cards — planned upgrade to dynamic per-property data |
| Calculator | ✅ Works; pro upgrade planned (loan types, amortization, affordability, live rate) |

See **HANDOFF.md** for the next steps and **ROADMAP.md** for the feature plans.

---

## 🔑 Key references (in `Docs_Archive/` unless noted)

- `MLS_INTEGRATION_RESEARCH.md`, `IDX_INTEGRATION_PLAN.md`, `STELLAR_MLS_SETUP_INSTRUCTIONS.md` — MLS/IDX history
- `CARLA_VERCEL_DEPLOYMENT_STEPS.md`, `CARLA_RENDER_DEPLOYMENT_STEPS.md` — deploy steps
- `SEO_OPTIMIZATION_COMPLETE.md`, `GOOGLE_BUSINESS_PROFILE_SETUP.md` — SEO/marketing setup
- `SOCIAL_MEDIA_CONTENT_TEMPLATES.md` — social post templates

---

## 👤 About the client

Carla is an independent realtor building her book of business. The site's #1 job is **lead
generation** — help buyers find homes and get in touch. Phone: (954) 303-3456 · Email:
cc@serenitylegacy.net · Socials: [Facebook](https://www.facebook.com/share/1F32RCazEi/?mibextid=wwXIfr)
· [Instagram](https://www.instagram.com/carlacarolinarealtor/).

*Part of the Sentari team ecosystem. Team map: `Collaboration_Hub/UNIVERSAL_GLOSSARY.md`.*
