# Breaker Tools Pro — Website Audit
*Audited 2026-07-08 against best-in-class SaaS benchmarks (Linear, Stripe, Vercel, Framer).*

**Site:** breakertools.pro — marketing/landing page for Breaker Tools Pro, the operating system for sports card & TCG breakers.
**Audience:** Whatnot/TikTok/eBay live breakers, new through full-time.
**Stack:** Single static HTML page (self-contained CSS/JS), deployed on Vercel from `public/`.
**Primary conversion:** Start free trial → `app.breakertools.pro/login?signup=1&next=billing`. Secondary: free Break Calculator (lead magnet).

---

## Current state summary (Phase 0)

The page is a long-form, Hormozi-style direct-response landing page: hero → stats → problem → how-it-works → video → 6 feature rows → comparison table → speed → avatars → value stack (money + time) → pricing → testimonial → guarantee → FAQ → final CTA. Copy is benefit-led and audience-native. Visual design is a cohesive dark theme with aurora gradients, scroll reveals, and counter animations — it reads "funded SaaS," not template.

**Gap vs. best-in-class before this audit:** zero SEO/social plumbing (no favicon link, OG image, canonical, structured data, sitemap), no analytics, no image dimensions (CLS), placeholder content visible to real visitors, and internal copy inconsistencies (scarcity numbers, trial length vs. app).

---

## Findings

### Messaging & positioning
| # | Finding | Severity | Effort | Status |
|---|---------|----------|--------|--------|
| M1 | Hero passes the 5-second test: "Stop Breaking Blind" + badge "The operating system for card breakers" = what/who/why instantly. | Strong | — | Keep |
| M2 | Hero sub had awkward clause "…every break, for the first time." | Low | S | ✅ Fixed — clause removed |
| M3 | Message hierarchy (problem → solution → proof → offer) is textbook. Value stack (money → time → price collapse) is the strongest section. | Strong | — | Keep |
| M4 | "1,000× better than a spreadsheet" heading slightly overclaims vs. the specific claims elsewhere; specificity converts better than hyperbole. | Low | S | Open (optional) |

### Conversion & CTAs
| # | Finding | Severity | Effort | Status |
|---|---------|----------|--------|--------|
| C1 | **Trial-length mismatch:** page says 7-day trial; the app's billing screen and (likely) Stripe say 14. Refund/trust risk. | **Critical** | S | Open — decision made (7 days), needs Stripe `trial_period_days`=7 + app copy change in breaker-tools-pro repo |
| C2 | **Scarcity contradiction:** hero said "25 founder spots open" while pricing said "7 of 25 left" on the same page. | **Critical** | S | ✅ Fixed — both now say 7 of 25. NOTE: static page can't auto-update; keep in sync with real `getFounderSpots()` data manually |
| C3 | CTA repetition and placement is right: nav, hero, post-features, post-avatars, pricing cards, final. Primary CTA copy is consistent. | Strong | — | Keep |
| C4 | Free calculator as no-signup lead magnet is a top-decile choice. Consider adding "No account needed" microcopy next to it. | Low | S | Open |

### Trust & social proof
| # | Finding | Severity | Effort | Status |
|---|---------|----------|--------|--------|
| T1 | Two fake placeholder testimonials were live. | **Critical** | S | ✅ Fixed — removed; real Bleacher Boys ($40K/100 days) quote remains, centered |
| T2 | Only one testimonial. Target: 2 more real early-access quotes with names/handles, then restore 3-up grid. | High | M | Open — waiting on real users |
| T3 | Guarantee (named, 30-day, keep-the-bonus) and founder reason-why are excellent. | Strong | — | Keep |
| T4 | Walkthrough video slot renders literal placeholder text to visitors. | High | S | Open — Loom recording in progress (user) |
| T5 | Break Lists feature row still shows a placeholder box instead of a screenshot. | High | S | Open — waiting on screenshot (user) |

### Required SaaS sections
All present: hero+CTA+product visual ✅, stats band ✅, problem ✅, how-it-works ✅, features ✅, comparison ✅, pricing (3 plans, transparent) ✅, testimonials ✅ (thin — see T2), guarantee ✅, FAQ ✅ (8 Qs, objection-focused), final CTA ✅, footer with legal/contact ✅. No logo band — expected; pre-launch product with no logos to show yet.

### Visual design
Premium, consistent, on-brand. Typography scale (Sora display / Inter body), spacing, and component polish are genuinely good. Reduced-motion is respected. No changes needed now. Post-launch idea: replace hero static screenshot with a 10–15s silent product loop (video) — highest-impact visual upgrade available.

### Performance
| # | Finding | Severity | Effort | Status |
|---|---------|----------|--------|--------|
| P1 | No width/height on any `<img>` → layout shift (CLS) as each screenshot loads. | High | S | ✅ Fixed — explicit dimensions on all 7 images + `height:auto` CSS |
| P2 | Hero image (LCP element) had no priority signals. | High | S | ✅ Fixed — `<link rel="preload" fetchpriority="high">` + `fetchpriority="high"` on the img |
| P3 | Below-fold images already `loading="lazy"`; added `decoding="async"`. | Med | S | ✅ Fixed |
| P4 | No caching/security headers. | Med | S | ✅ Fixed — `public/vercel.json` adds Cache-Control for images + nosniff/frame/referrer/permissions headers |
| P5 | Screenshots are JPEG (~1.4 MB total page weight). AVIF/WebP would cut ~40–50%. | Med | M | Open — optional; JPEG q82 is acceptable |
| P6 | Google Fonts: 9 weights across 2 families. Could subset to ~6 weights. | Low | S | Open — optional |

### SEO & discoverability
| # | Finding | Severity | Effort | Status |
|---|---------|----------|--------|--------|
| S1 | No favicon link (and the favicon.svg on disk was the purple Vite template leftover). | High | S | ✅ Fixed — brand bolt favicon, linked |
| S2 | No og:image / twitter card → ugly bare link previews when shared in Discord/X/group chats (where breakers live). | **High** | S | ✅ Fixed — dashboard screenshot as OG image, full twitter card |
| S3 | No canonical, og:url, og:type, theme-color. | Med | S | ✅ Fixed |
| S4 | No structured data. | Med | S | ✅ Fixed — SoftwareApplication (with offers) + FAQPage JSON-LD |
| S5 | No robots.txt / sitemap.xml. | Med | S | ✅ Fixed |
| S6 | Title/meta description are good. H1→H2 hierarchy is semantic. | Strong | — | Keep |
| S7 | Single-page site limits keyword surface. Post-launch: consider /breaker-calculator, /whatnot-fees content pages. | Low | L | Strategic |

### Accessibility
Alt text on all images ✅, aria-labels on interactive elements ✅, FAQ has aria-expanded ✅, reduced-motion ✅, skip link ✅. Focus-visible styles on custom controls (FAQ rows, video frame) could be more prominent — Low/S, open.

### Analytics
| # | Finding | Severity | Effort | Status |
|---|---------|----------|--------|--------|
| A1 | **Zero analytics.** Conversion is unmeasurable. | **Critical** | S | ✅ Fixed (script added) — **ACTION REQUIRED: enable Web Analytics in Vercel dashboard → project → Analytics, or the script 404s (harmless but inert)** |
| A2 | No CTA click/scroll-depth event tracking or A/B capability. | Med | M | Open — Vercel Analytics covers pageviews/referrers; add custom events later |

### Technical
| # | Finding | Severity | Effort | Status |
|---|---------|----------|--------|--------|
| X1 | No 404 page (Vercel default = unbranded). | Med | S | ✅ Fixed — branded 404.html |
| X2 | Repo still contains the entire unused Vite starter app (`src/`, root `index.html`, `package.json`). It's why Vercel auto-suggests "Vite". Not deployed (root dir = public) but confusing dead weight. | Low | S | Open — recommend deleting on a cleanup pass |
| X3 | Raw PNGs + a .zip sit in `public/` locally but are gitignored — not deployed. Fine, but tidy eventually. | Low | S | Open |
| X4 | No console errors; single-file page, no build step, no broken internal links found. `/privacy` and `/terms` links resolve on the app domain — **verify they exist on the marketing domain too**, since footer links are root-relative (`/privacy`) and will 404 on breakertools.pro. | **High** | S | Open — see roadmap |

---

## The 5 changes most likely to lift conversion
1. **Real social proof (T2)** — 2 more genuine testimonials. Nothing else on this page moves trust as much.
2. **The Loom walkthrough (T4)** — "show the product working" is the #1 SaaS conversion asset; the slot is already designed.
3. **Trial consistency at 7 days (C1)** — prevents refunds/chargebacks and trust breaks at the exact moment of purchase.
4. **OG image + favicon (S1/S2, done)** — every link share in breaker Discords/group chats is now a rich preview instead of a bare URL.
5. **Analytics enabled (A1)** — you cannot improve what you can't measure; this unblocks every future optimization.
