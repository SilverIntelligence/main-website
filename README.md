# Wall Street Silver Developer Hub

> Open precious metals analytics and research platform for developers and analysts.

[![CI](https://github.com/wallstreetsilver/wss-dev-site/actions/workflows/ci.yml/badge.svg)](https://github.com/wallstreetsilver/wss-dev-site/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Overview

Wall Street Silver Developer Hub is a production-grade developer site built with Next.js 15, providing documentation, research, and API resources for precious metals market data and analytics.

**Live Site:** [developers.wallstreetsilver.com](https://developers.wallstreetsilver.com)

## Features

- **📚 Documentation** - Comprehensive guides and API references using MDX
- **📊 Research** - In-depth market analysis with citations and data
- **📝 Blog** - Updates, announcements, and technical insights
- **🔍 SEO Optimized** - Sitemap, robots.txt, OpenGraph, and JSON-LD
- **⚡ Performance** - Optimized for Core Web Vitals and fast load times
- **♿ Accessible** - WCAG AA compliant
- **🔐 Secure** - Rate limiting, input validation, CSP headers
- **📱 Responsive** - Mobile-first design with Tailwind CSS

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX (next-mdx-remote)
- **Forms:** Server Actions with Zod validation
- **Analytics:** Vercel Analytics
- **Testing:** Vitest + Playwright
- **CI/CD:** GitHub Actions → Vercel
- **Deployment:** Vercel Edge

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/wallstreetsilver/wss-dev-site.git
cd wss-dev-site

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

### Environment Variables

Create a `.env` file based on `.env.example`:

```bash
# Email provider API key (optional for development)
EMAIL_API_KEY=

# Email addresses
CONTACT_EMAIL=contact@wallstreetsilver.com
NEWSLETTER_EMAIL=newsletter@wallstreetsilver.com

# Rate limiting
RATE_LIMIT_MAX_REQUESTS=5
RATE_LIMIT_WINDOW_MS=60000

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
npm test             # Run unit tests
npm run test:e2e     # Run Playwright E2E tests
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Project Structure

```
wss-dev-site/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact form
│   ├── docs/              # Documentation pages
│   ├── research/          # Research pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Prose.tsx
│   ├── CodeBlock.tsx
│   ├── Callout.tsx
│   └── TOC.tsx
├── content/               # MDX content files
│   ├── docs/
│   ├── blog/
│   └── research/
├── lib/                   # Utilities and helpers
│   ├── mdx.ts            # MDX processing
│   ├── email.ts          # Email sending
│   ├── rateLimit.ts      # Rate limiting
│   └── og.ts             # OpenGraph utilities
├── public/                # Static assets
├── styles/                # Global styles
├── tests/                 # Test files
│   └── e2e/              # Playwright tests
└── .github/workflows/     # CI/CD pipelines
```

## Content Management

### Adding Documentation

Create a new MDX file in `content/docs/`:

```mdx
---
title: Your Doc Title
description: A brief description
date: 2025-11-17
author: Your Name
---

# Your Doc Title

Your content here...
```

### Adding Blog Posts

Create a new MDX file in `content/blog/`:

```mdx
---
title: Your Post Title
description: A brief description
date: 2025-11-17
author: Your Name
tags: [tag1, tag2]
---

# Your Post Title

Your content here...
```

### Adding Research

Create a new MDX file in `content/research/`:

```mdx
---
title: Your Research Title
description: A brief description
date: 2025-11-17
author: Your Name
tags: [silver, analysis]
---

# Your Research Title

Your research content...
```

### MDX Components

Use these custom components in your MDX files:

```mdx
<Callout type="note">
  Important information here
</Callout>

<CodeBlock lang="typescript" title="example.ts">
  const example = "code";
</CodeBlock>
```

## Testing

### Unit Tests

```bash
npm test
```

### E2E Tests

```bash
npm run test:e2e
```

### Running Tests in CI

Tests automatically run on every push via GitHub Actions. See `.github/workflows/ci.yml`.

## Deployment

### Vercel (Recommended)

1. Import the repository to Vercel
2. Configure environment variables
3. Deploy

The site automatically deploys on push to `main` branch.

### Manual Deployment

```bash
npm run build
npm run start
```

## Performance

Performance targets:

- **TTFB:** ≤100ms (Vercel Edge)
- **LCP:** ≤2.5s
- **FID:** ≤100ms
- **CLS:** ≤0.1

Monitor performance with:
- Vercel Analytics
- Lighthouse CI
- Core Web Vitals

## Security

Security measures implemented:

- **Rate Limiting** - Contact form submissions limited per IP
- **Input Validation** - Zod schema validation on all forms
- **Honeypot** - Bot detection on forms
- **CSP Headers** - Content Security Policy
- **HTTPS Only** - Strict-Transport-Security headers
- **No Secrets** - Environment variables for sensitive data

## Accessibility

WCAG AA compliance includes:

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- Color contrast ratios
- Screen reader support

## Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Support

- **Documentation:** [developers.wallstreetsilver.com/docs](https://developers.wallstreetsilver.com/docs)
- **GitHub Discussions:** [github.com/wallstreetsilver/wss-dev-site/discussions](https://github.com/wallstreetsilver/wss-dev-site/discussions)
- **Contact:** [developers.wallstreetsilver.com/contact](https://developers.wallstreetsilver.com/contact)

## Roadmap

See our [public roadmap](https://developers.wallstreetsilver.com/roadmap) for planned features and releases.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and release notes.

---

**Built with ❤️ by the Wall Street Silver team**

*Making precious metals analytics accessible to everyone.*
