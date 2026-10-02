# Shaun Pimenta — Portfolio

A production-quality personal portfolio website for Shaun Pimenta, a multidisciplinary engineer whose work spans embedded systems, robotics, full-stack development, machine learning, data engineering, blockchain, cloud infrastructure, and web performance.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, and MDX.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Styles | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Email | Resend |
| Analytics | Vercel Analytics + Speed Insights |
| Content | Typed local data files + MDX |
| Fonts | Manrope (display), Inter (body), JetBrains Mono (code) |
| Deployment | Vercel |

---

## Local Setup

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone <repo-url>
cd portfolio
npm install
```

### Environment variables

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

Required variables:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) for contact form email sending |
| `CONTACT_EMAIL` | Your email address to receive contact form submissions |

Optional:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://shaunpimenta.com`) |

### Development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

---

## Site Architecture

```
app/
  page.tsx                 # Home
  about/page.tsx           # About
  work/page.tsx            # Work / Projects list
  work/[slug]/page.tsx     # Individual project case study
  journey/page.tsx         # Timeline
  notes/page.tsx           # Notes / Writing list
  notes/[slug]/page.tsx    # Individual article
  resume/page.tsx          # Résumé
  contact/page.tsx         # Contact form
  api/contact/route.ts     # Contact form API endpoint
  not-found.tsx            # Custom 404
  sitemap.ts               # Auto-generated sitemap
  robots.ts                # Robots.txt
  rss.xml/route.ts         # RSS feed for notes

components/
  layout/                  # Navigation, Footer
  home/                    # Home page sections
  projects/                # Project card, project filter
  case-study/              # Case study components
  ui/                      # Shared UI components
  providers/               # Theme provider

content/
  projects/index.ts        # All project data
  notes/index.ts           # All article metadata
  timeline.ts              # Journey timeline entries
  profile.ts               # Personal profile data
  navigation.ts            # Navigation items
  placeholders.ts          # Placeholder content checklist
  types.ts                 # TypeScript schemas with Zod

lib/
  utils.ts                 # Utility functions
  metadata.ts              # SEO metadata helpers

public/
  images/                  # Static images (see placeholder plan below)
  videos/                  # Video files
  documents/               # Resume PDF
  icons/                   # Favicon files
  og/                      # Open Graph images
```

---

## Adding a Project

1. Open `content/projects/index.ts`
2. Add a new entry to the `projects` array
3. Follow the `Project` schema defined in `content/types.ts`
4. Add a cover image at `public/images/projects/<slug>/cover.webp`
5. The project will automatically appear on the Work page and in the sitemap

Required fields:
- `slug` — URL-safe identifier (e.g. `"my-project"`)
- `title` — Project name
- `subtitle` — One-line technical description
- `summary` — Two to three sentence overview
- `year` — Year completed or started
- `status` — `"completed"`, `"active"`, `"prototype"`, or `"archived"`
- `disciplines` — Array of disciplines (see `DisciplineSchema` in types.ts)
- `categories` — Array of filter categories
- `technologies` — Array of technology names
- `role` — Your role on the project
- `problem` — The specific engineering problem
- `approach` — How you addressed it
- `results` — What was achieved
- `lessons` — What you learned

---

## Adding a Note / Article

1. Open `content/notes/index.ts`
2. Add a new entry to the `articles` array
3. Set `draft: false` when ready to publish
4. Add the actual article content as an MDX file at `content/notes/<slug>.mdx`
5. Configure MDX rendering in the notes `[slug]` page

Note: All articles are currently set to `draft: true` and will appear in the "Coming Soon" section until published.

---

## Replacing Media

### Required images

All placeholder images should be replaced with real photographs or screenshots. See `content/placeholders.ts` for the full list.

Key images to replace:

| Path | Description |
|---|---|
| `/images/about/shaun-portrait.webp` | Professional portrait photograph |
| `/images/about/shaun-workspace.webp` | Workspace photograph with electronics |
| `/images/home/hero-star-tracker.webp` | Star tracker assembled outdoors |
| `/images/home/hero-circuit.webp` | Electronics or embedded hardware close-up |
| `/images/projects/star-tracker/cover.webp` | Star tracker project cover |
| `/images/projects/power-market/cover.webp` | Power market dashboard screenshot |

### Image guidelines

- Format: WebP preferred; fallback to PNG or JPEG
- Hero and cover images: 1200×800px or 16:9 at minimum 1200px wide
- Portrait: 3:4 aspect ratio, minimum 600×800px
- Compress with Squoosh or similar before uploading

### Resume PDF

Place the PDF at:

```
public/documents/shaun-pimenta-resume.pdf
```

### Videos

Optional engineering reel:

```
public/videos/home/engineering-reel.mp4
public/videos/home/engineering-reel-poster.webp
```

- Maximum 8–12 seconds
- H.264 video, AAC audio (muted on autoplay)
- Target under 5 MB

---

## Deployment to Vercel

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual deployment

1. Push the repository to GitHub
2. Import it in [vercel.com](https://vercel.com)
3. Add the required environment variables in Vercel project settings
4. Deploy

### Environment variables in Vercel

Add these in **Settings → Environment Variables**:

- `RESEND_API_KEY`
- `CONTACT_EMAIL`

### Custom domain

Point your domain to Vercel and update:

- `metadata.metadataBase` in `app/layout.tsx`
- The `baseUrl` constant in `lib/metadata.ts`
- The `baseUrl` constant in `app/sitemap.ts`
- The `sameAs` links in `lib/metadata.ts`

---

## Content Completion Checklist

Before the site goes live, replace every `[ADD ...]` placeholder. See `content/placeholders.ts` for the complete list.

### Personal information
- [ ] Email address in `content/profile.ts`
- [ ] GitHub username in `content/profile.ts`
- [ ] LinkedIn profile URL in `content/profile.ts`
- [ ] Education details (degree, institution, graduation year)

### Project data
- [ ] Star tracker: project duration, tracking error, exposure duration, result
- [ ] Power market: project duration, markets count, data volume, latency, repository URL
- [ ] Job tracker: project duration, accuracy, email count, processing time, repository URL
- [ ] Web performance: project duration, team size, improvement metrics
- [ ] Blockchain: all fields (subtitle, summary, problem, role, team size, duration, repository URL)

### Timeline
- [ ] All `[ADD DATE]` entries with actual dates or date ranges
- [ ] `[ADD PERSONAL STORY]` entries with real stories

### About / Outside engineering
- [ ] Personal interests
- [ ] Favorite place
- [ ] Book or article
- [ ] Current curiosity
- [ ] Nontechnical goal
- [ ] Community involvement

### Résumé
- [ ] Work experience (position title, organization, date range, responsibilities)
- [ ] Certifications and awards (or remove section)
- [ ] Community and leadership (or remove section)

### Media
- [ ] All images in `public/images/` (see list in `content/placeholders.ts`)
- [ ] Optional engineering reel video
- [ ] Résumé PDF at `public/documents/shaun-pimenta-resume.pdf`
- [ ] Open Graph image at `public/og/default.png`
- [ ] Favicon files at `public/icons/`

### Notes / Articles
- [ ] Write and publish at least one article (set `draft: false` in `content/notes/index.ts`)
- [ ] Add actual MDX content files for published articles

### Configuration
- [ ] Update `metadata.metadataBase` in `app/layout.tsx` to production URL
- [ ] Update `baseUrl` in `lib/metadata.ts`
- [ ] Update `baseUrl` in `app/sitemap.ts`
- [ ] Update `sameAs` in `lib/metadata.ts` with real GitHub and LinkedIn URLs

---

## Design System

### Color palette

| Token | Light | Dark |
|---|---|---|
| `--color-background` | `#F7F8FA` | `#0B111A` |
| `--color-foreground` | `#111827` | `#E8EDF3` |
| `--color-primary` | `#164E8C` | `#2B7FFF` |
| `--color-accent` | `#D97735` | `#D97735` |
| `--color-border` | `#DCE2E8` | `#1E2A38` |

### Typography

- **Display / Headings**: Manrope (`--font-display`)
- **Body**: Inter (`--font-sans`)
- **Code / Labels**: JetBrains Mono (`--font-mono`)

### Theme switching

The site supports light and dark modes. Toggle is in the navigation bar.
Theme preference is persisted via `next-themes`.

---

## Credits

Designed and built by Shaun Pimenta.
Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and curiosity.
