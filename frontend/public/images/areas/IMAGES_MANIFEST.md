# Areas We Serve — image manifest

These images appear on the **About** page ("Areas We Serve"). They're referenced from
`frontend/src/pages/About.tsx`.

## How to replace any image with Carla's own photo
Drop a photo into this folder (`frontend/public/images/areas/`) using the **same filename** below,
then redeploy. No code change needed. Recommended size: ~1400px wide, landscape, JPG.
**Carla's own photos are always preferred** — they're authentic and carry no licensing questions.

## Current images

| Area | Filename | What it shows | Source / license |
|------|----------|---------------|------------------|
| Clermont | `clermont.jpg` | Florida Citrus Tower at sunset (Clermont's landmark) | Wikimedia Commons |
| Orlando | `orlando.jpg` | Downtown Orlando skyline over Lake Eola (panoramic) | Wikimedia Commons |
| Orlando Downtown | `orlando-downtown.jpg` | Downtown Orlando skyline + Lake Eola fountain | Wikimedia Commons |
| Titusville | `titusville.jpg` | Space Shuttle launch, Kennedy Space Center (Space Coast) | NASA — public domain |
| Kissimmee | `kissimmee.jpg` | Kissimmee Lakefront Park lighthouse at sunset, Lake Toho | Wikimedia Commons |
| Reunion Resort | *(remote URL in About.tsx)* | generic resort/golf | Unsplash (free) — **replace with a real Reunion photo** |
| Margaritaville | *(remote URL in About.tsx)* | generic resort pool | Unsplash (free) — **replace with a Margaritaville/192 photo** |
| Champions Gate | *(remote URL in About.tsx)* | generic golf/greens | Unsplash (free) — **replace with a real Champions Gate photo** |

## Notes
- The 5 local images replaced badly-wrong stock photos that were on the site (Clermont showed alpine
  mountains, Orlando showed **London**, Orlando Downtown showed a generic interior, Titusville showed
  a deep-space nebula, Kissimmee was arbitrary). Each local image was visually verified.
- The 3 resort communities (Reunion, Margaritaville, Champions Gate) still use generic free stock
  because accurate free-license photos of those private resorts are scarce — **best fixed with
  Carla's own photos** (e.g. `reunion.jpg`, `margaritaville.jpg`, `champions-gate.jpg`, then point
  About.tsx at them).
- Wikimedia Commons images are freely reusable; most ask for attribution. For a small business site
  this is low-risk, but if you want a formal credit line we can add a photo-credits page.
