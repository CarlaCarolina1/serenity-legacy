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

## The next 3 steps (in order)

1. **Deploy the current fixes.** Commit the working-tree changes and push to `main` (Vercel
   auto-deploys). Verify on live site: (a) Properties no longer hangs, (b) social buttons open
   Carla's real FB/IG. *No design change ships in this deploy — it is safe.*

2. **About page — real area photos.** Replace the incorrect stock images in
   `frontend/src/pages/About.tsx` (the `areas-grid-images` array, ~line 91). See
   `frontend/public/images/areas/IMAGES_MANIFEST.md` for exactly which photo each slot needs and how
   to swap in Carla's own photos. Best source = **Carla's own photos**; accurate free-license
   interim images are wired in the meantime.

3. **Begin the builds** (see ROADMAP for full specs): Calculator pro upgrade + property-type
   filters first (self-contained), then the Resources dynamic-data feature (needs data-source
   decisions). **These need a runnable preview to verify** — set up a no-space path junction to
   `frontend/` first (the space in "Carlas Website" breaks the preview launcher).

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
