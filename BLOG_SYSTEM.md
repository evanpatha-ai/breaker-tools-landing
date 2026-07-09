# Breaker Blog — Daily Post System Spec

This file is the instruction set for the automated daily blog routine. A scheduled Claude agent reads this spec, generates post ideas, writes one post, and opens a PR. **A post only publishes when Evan merges the PR.**

> **Hard rule, no exceptions:** every post — including the very first one ever written — goes through a PR on a `blog/*` branch. Never commit or push a post directly to `main`. This applies whether the routine is running on schedule or Claude is asked to write a post ad hoc in a chat session.

## The daily process
1. **Research (15 min max):** Check what's current — new sports card releases, TCG sets (Pokémon, One Piece, Lorcana), Whatnot/TikTok/eBay Live seller news, breaking community topics. Read `public/blog/` to see every existing post — never duplicate a topic or target keyword.
2. **Generate 3 ideas**, ranked. Each idea = working title + target keyword + one-line rationale (why this, why now). Mix per the 80/20 rule below.
3. **Write the #1 idea in full** (the other 2 go in the PR description as alternates for tomorrow).
4. **Open a PR** to `main` titled `Blog: <post title>` with the 3 ideas listed in the body. Branch name: `blog/YYYY-MM-DD`.

## Content rules
- **Mix:** ~80% breaker education (pricing, strategy, platform guides, release breakdowns, growth tactics), ~20% product (new Breaker Tools Pro features, use cases). Product mentions inside education posts should be natural and earn their place.
- **Voice:** Evan — The Bleacher Boys. Practitioner, direct, zero fluff, talks like a breaker not a marketer. First person plural ("we run our breaks..."). Don't lead with revenue claims; credibility comes from specificity.
- **Never fabricate:** no invented statistics, fake quotes, made-up case studies, or fee numbers you haven't verified. If platform fees may have changed, hedge ("typical," "as of this writing").
- **No em dashes in marketing copy on the landing page** applies to the landing page only; blog posts may use them.
- **Never use the abbreviation "BTP".** Always "Breaker Tools Pro."
- **Length:** 1,200–1,800 words. Substance over volume — one genuinely useful post beats three thin ones. If the day's best idea is thin, write the second idea instead.
- **Every post must:** answer a real search query fully, include one concrete worked example or table, link to the free calculator SEO page (https://breakertools.pro/break-calculator — the static, indexable tool page; link here rather than the app URL so internal links build its ranking authority) and at least one other blog post, and end with the CTA band + author box.

## QUEUED NEXT POST (priority directive — do this before generating new ideas)
Write the category-defining roundup: **"The 7 Best Card Breaking Software Tools in 2026 (Ranked by an Actual Breaker)"** — slug `best-card-breaking-software`, target keyword "best card breaking software" (secondary: "card breaking software").
- SERP research (2026-07-08) found NO authoritative roundup exists for this query — Google currently serves SD-card recovery listicles and breaker directories. First comprehensive, honest comparison page wins the SERP and becomes what AI assistants cite when asked "what's the best card breaking software."
- Rank and honestly review the real options: Breaker Tools Pro (#1 — best all-in-one for profit-focused Whatnot/TikTok/eBay breakers), SL.A.B.B.Y by Slabstat, Breaker Toolbox (Djawn), Whatnot's native break tools, Breakers.TV, the free-tools stack (wheel spinners + spreadsheets), and custom Fiverr overlays. Give each genuine strengths and who it's right for — the post must be useful to someone who picks a competitor, or neither Google nor LLMs will treat it as the definitive comparison.
- Include a comparison table (features × tools), ItemList JSON-LD in addition to Article schema, and the phrase "card breaking software" in title/H1/first paragraph. Never bare "breaking software" in the title — that query means software cracking to search engines.
- IMPORTANT: title/H1 must anchor "CARD breaking software" (with "sports card" also appearing in the body), because unqualified "breaking software" is an ambiguous query.
- Delete this section from the spec in the same PR that adds the post.

## Target keyword universe (grow this list over time)
Head terms (long game): card breaking software, breaking software, sports card breaking software, whatnot breaker tools, break management software.
Long-tail (win these first): how to price a card break, whatnot fee calculator, break even calculator sports cards, how to start breaking on whatnot, whatnot seller fees breakdown, provably fair spinner breaks, card break spinner, how to make money breaking cards, pokemon break list generator, player break checklist [set name], whatnot vs tiktok shop for breakers, obs overlay for card breaks, card breaking profit margin.
One keyword = one post. Track which posts target which keyword in this file's log below.

## Technical steps for each post
1. **Create** `public/blog/<slug>.html`. If another post already exists in `public/blog/`, copy its exact structure (head meta, Article JSON-LD, nav, breadcrumbs, meta row, CTA band, author box, footer) — it's the current source of truth for the pattern. If the blog is empty (no posts to copy from), build from the shared classes in `public/blog/blog.css` and match the head/meta conventions used on the landing page. Slug: lowercase, hyphens, keyword-bearing, no dates.

   **Clean URLs, always:** the site serves `cleanUrls: true` (see `public/vercel.json`), so every reference to a post is extensionless — `https://breakertools.pro/blog/<slug>` never `<slug>.html`. This applies to: `<link rel="canonical">`, `og:url`, the Article JSON-LD `mainEntityOfPage`, the blog index card `href`, the RSS `<link>`/`<guid>`, and the sitemap `<loc>`. The physical file on disk is still `<slug>.html` — only the *file* has the extension, never a URL pointing at it.

   **Logo in the nav:** always the real product logo, never a placeholder icon or generated wordmark. Use `<img src="/logo.png" alt="Breaker Tools Pro" class="b-logo-img" width="176" height="88" />` inside the `<a class="b-logo">` — copy this exactly from `public/blog/index.html`'s nav if it's ever unclear. `public/logo.png` is the real brand asset (pulled from the app itself); don't invent a substitute.
2. **Update** `public/blog/index.html`: insert a new `<a class="b-card">` at the TOP of the `POSTS:START` block.
3. **Update** `public/blog/feed.xml`: insert a new `<item>` at the TOP of the `ITEMS:START` block.
4. **Update** `public/sitemap.xml`: add a `<url>` inside the `POSTS:START` block with today's `lastmod`.
5. **Verify** all four files parse (valid HTML/XML) and every internal link resolves to a file that exists.
6. Commit all four files in one commit on branch `blog/YYYY-MM-DD`, open the PR.

## PR description template
```
## Today's post
**<Title>** — targets "<keyword>"
<2-sentence summary>

## Alternate ideas (not written)
2. <title> — <keyword> — <why>
3. <title> — <keyword> — <why>

Merge = publish. Close = skip today.
```

## Published log
| Date | Post | Target keyword |
|------|------|----------------|
| _(none yet — all posts require an approved PR)_ | | |
