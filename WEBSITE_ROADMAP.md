# Breaker Tools Pro — Website Roadmap
*Prioritized by impact ÷ effort. Updated 2026-07-08.*

## ✅ Shipped in this pass (2026-07-08)
- Value stack reorder: money stack → time stack → $29 price collapse (single fused Hormozi stack)
- Removed 2 placeholder testimonials; real Bleacher Boys quote centered
- Scarcity consistency: hero badge and pricing bar both say "7 of 25"
- Hero sub copy tightened
- Full head plumbing: brand favicon, canonical, og:image + twitter card, theme-color
- JSON-LD: SoftwareApplication (with plan offers) + FAQPage
- Performance: img width/height (CLS=0 for images), hero preload + fetchpriority, decoding=async, height:auto
- vercel.json: security headers + image caching
- robots.txt, sitemap.xml, branded 404.html
- Vercel Web Analytics script tag

## 🔴 Critical — before sharing the link anywhere
| Task | Owner | Notes |
|------|-------|-------|
| Enable Web Analytics in Vercel dashboard | **You** | ✅ Done |
| Set Stripe trial to 7 days | **You** | `trial_period_days: 7` in the checkout config (breaker-tools-pro repo / Stripe dashboard) |
| Change app billing copy "14-day" → "7-day" | Claude (say go) | `src/pages/Settings.jsx` line ~236 in breaker-tools-pro |
| Verify /privacy and /terms exist on breakertools.pro | Claude | ✅ Done — footer links now point to app.breakertools.pro/privacy + /terms (verified 200) |
| Keep founder-spot count truthful | **You** | ✅ Reset to honest "0 of 25 claimed" (was fabricated). Hardcoded in `public/index.html` (hero badge + pricing bar) and in `.claude` notes here — not in Squarespace, not in the app. Tell Claude the real number and it updates both spots + the progress-bar fill. |

## 🟠 High-leverage conversion wins — this week
| Task | Owner | Notes |
|------|-------|-------|
| Record + embed 60–90s Loom walkthrough | **You** (record) → Claude (embed) | Slot ready at the "See it in action" section |
| Break Lists screenshot | **You** (capture) → Claude (swap) | Dark mode, with a built player list. Placeholder at the Break Lists feature row |
| 2 real early-access testimonials | **You** (collect) → Claude (add) | Name + Whatnot handle + specific result beats generic praise |
| "No account needed" microcopy on calculator CTA | Claude (say go) | Kills last friction on the lead magnet |

## 🟡 Polish — post-launch
- AVIF/WebP versions of screenshots (~40% lighter page)
- Trim Google Fonts weights (9 → ~6)
- More prominent focus-visible states on FAQ/video controls
- Clarify trial-vs-guarantee sequence in one line near pricing
- Delete unused Vite starter (src/, root index.html, package.json) from repo

## 🔵 Strategic — when traffic starts
- Replace hero static screenshot with 10–15s silent product loop video
- SEO content pages: /break-calculator (public tool + content), /whatnot-fee-calculator, /how-to-start-breaking — each targets a search intent and funnels to the free calculator
- Logo/social-proof band once recognizable shops are customers
- Custom event tracking on CTA clicks + scroll depth; A/B the hero headline
- Founder-spot counter fed by real data (small JS fetch to a public endpoint) so scarcity is always literally true
