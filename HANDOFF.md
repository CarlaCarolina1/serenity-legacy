# 🤝 HANDOFF — Serenity Legacy Real Estate

**Last updated:** July 7, 2026 by **Atlas** (Claude Code / Opus 4.8)
**For:** the next engineer (Atlas, Neo, or whoever picks this up)
**Read with:** `README.md` (orientation), `PROJECT_LOG.md` (full history), `ROADMAP.md` (feature plans)

---

## Where we are right now

Diagnosis session with Jose + Carla. Three safe fixes are in the **working tree of `frontend/`**
but **NOT deployed**. The original design is preserved on branch `backup/pre-atlas-2026-07-07`.

### ✅ Done this session
1. **API timeout** (`frontend/src/services/api.ts`) — kills the "Loading properties… forever" hang.
2. **Real social links** — Facebook + Instagram wired in `FloatingSocial.tsx`, `Footer.tsx`,
   `utils/schema.ts`; dead LinkedIn placeholder removed. WhatsApp already worked.
3. **Repo cleanup** — 113 obsolete docs moved to `Docs_Archive/`; README/LOG/ROADMAP rebuilt.

### ⚠️ Uncommitted / undeployed
All three fixes are edits in the working tree. They go live only after a **Vercel deploy** (push to
`main` on `github.com/CarlaCarolina1/serenity-legacy`, or a manual Vercel redeploy).

---

## Deploying (IMPORTANT — auto-deploy is not working)

The site is LIVE with all current work (deployed July 8/9 via CLI). **But GitHub→Vercel auto-deploy
does NOT fire on push to `main`** — that's why it was stuck at a July 2 build. So a `git push` alone
does NOT update the site.

**To deploy changes:** from the repo root run `vercel --prod` (CLI is authenticated as `cc-5803`;
project linked in `.vercel/`; a `.vercelignore` keeps the upload small — do not remove it or the
104 MB root `.mp4` will blow the 100 MB limit again).

**To fix auto-deploy properly (recommended):** in the Vercel dashboard → project **serenity-legacy**
→ **Settings → Git**, confirm the GitHub repo is connected and **Production Branch = `main`**. Once
that works, `git push` will deploy on its own and the CLI won't be needed.

## The next steps (after deploy is unblocked)

1. **Confirm live** once Vercel redeploys: Properties no longer hangs, social buttons open Carla's
   real FB/IG, About shows the corrected area photos, Calculator shows loan types, Properties shows
   the type filter.

2. **About page — real area photos.** Replace the incorrect stock images in
   `frontend/src/pages/About.tsx` (the `areas-grid-images` array, ~line 91). See
   `frontend/public/images/areas/IMAGES_MANIFEST.md` for exactly which photo each slot needs and how
   to swap in Carla's own photos. Best source = **Carla's own photos**; accurate free-license
   interim images are wired in the meantime.

3. **Resources dynamic per-property data** (ROADMAP §5) — needs data-source decisions (free-API MVP
   first). Then Calculator **affordability mode** (income → max price), and the New-Construction
   listings store so the property-type filters have real data.

### Running the dev server (space-in-path gotcha)
The folder name has a space, which breaks the `npm`-based preview launcher AND a directory junction
confuses Vite's module resolution (`/src/main.tsx` fails to load → blank app). **What works:** run
Vite directly from the real folder, where quoting handles the space:
`cd "C:/Users/Yacaman.LEX/Desktop/Carlas Website/frontend" && npx vite --port 5173`
then open http://localhost:5173 in Chrome.

---

## Open questions for Jose / Carla (blocking some work)

- **IDX/MLS account:** Is `carlayacaman.myrealtyrealestate.com` still active/paid? Decides whether we
  renew it, replace it, or drop it in favor of the New-Construction strategy (ROADMAP §Listings).
- **Backend hosting:** OK to move the Render backend off the free tier (~$7/mo) so it stops sleeping?
  Or retire it in favor of an IDX embed + curated new-construction listings?
- **Mortgage referral commission:** ⚠️ **RESPA legal risk** — Carla must confirm with her broker /
  attorney before we build any "referral link earns commission" feature. Do not build until cleared.
- **Data budget:** Resources live-data (schools/crime/HOA) may need paid APIs. What monthly budget?

---

## Landmines / gotchas

- **Two app copies.** Only `frontend/` is live. The root `src/` is stale — never edit it. (Consider
  deleting/archiving root `src/` later to prevent confusion — leave for now, it's referenced nowhere
  in the build.)
- **Folder name has a space** ("Carlas Website") → breaks `npm`/preview launchers that resolve node
  via an unquoted path. Run npm from inside `frontend/`, or use a junction.
- **Backend cold start.** Render free tier sleeps after ~15 min; first request takes 30–60s. The new
  timeout means the UI falls back gracefully instead of hanging, but real data still needs a warm
  backend or a different source.
- **`VITE_API_URL`** must be set in Vercel env to the real backend URL; the `.env.example` default is
  `http://localhost:8000` (dev only).
