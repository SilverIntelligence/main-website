import Link from 'next/link';
import { generateMetadata as genMeta } from '@/lib/og';

export const metadata = genMeta({
  title: 'Press & Media',
  description: 'Media resources, press releases, and contact information for Wall Street Silver',
  path: '/press',
});

export default function PressPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">Press & Media</h1>
        <p className="mt-4 text-lg text-gray-600">
          Media resources, brand assets, and contact information for journalists and content creators.
        </p>

        <div className="mt-12 space-y-12">
          {/* Quick Facts */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Quick Facts</h2>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="font-semibold text-gray-900">Founded</dt>
                <dd className="mt-1 text-gray-600">2021 (Developer Platform: 2025)</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Mission</dt>
                <dd className="mt-1 text-gray-600">
                  Democratizing access to precious metals market data and analytics
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Platform</dt>
                <dd className="mt-1 text-gray-600">
                  Open-source developer tools, APIs, and research for precious metals markets
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Primary Focus</dt>
                <dd className="mt-1 text-gray-600">
                  Silver market data, analytics, and sentiment analysis
                </dd>
              </div>
            </dl>
          </section>

          {/* Company Description */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Company Description</h2>
            <div className="prose prose-gray mt-6 max-w-none">
              <h3>Short (50 words)</h3>
              <p className="rounded-lg bg-gray-50 p-4">
                Wall Street Silver builds open-source infrastructure for precious metals analytics.
                Our developer platform provides APIs, market data, and research tools focused on
                silver and precious metals markets, making institutional-grade data accessible to
                independent researchers and developers.
              </p>

              <h3>Medium (100 words)</h3>
              <p className="rounded-lg bg-gray-50 p-4">
                Wall Street Silver is democratizing precious metals market analysis through
                open-source developer tools and transparent data infrastructure. Our platform
                provides real-time and historical market data, research APIs, and analytics tools
                for silver and precious metals markets. Started as a grassroots movement for silver
                market awareness, we have evolved into a comprehensive developer platform serving
                independent researchers, retail investors, and institutions. We prioritize data
                transparency, open-source collaboration, and developer-friendly APIs to make
                institutional-grade market analytics accessible to everyone.
              </p>

              <h3>Long (200 words)</h3>
              <p className="rounded-lg bg-gray-50 p-4">
                Wall Street Silver began in 2021 as a community-driven movement focused on silver
                market awareness and has evolved into a comprehensive developer platform for
                precious metals analytics. Our mission is to democratize access to institutional-grade
                market data by building open-source infrastructure that makes sophisticated market
                analysis accessible to independent researchers, developers, and retail investors.
                <br /><br />
                The platform provides REST and GraphQL APIs for real-time and historical price data,
                market sentiment analysis, supply-demand metrics, and cross-market correlations.
                All data includes source attribution, timestamps, and methodology notes,
                reflecting our commitment to transparency and data quality.
                <br /><br />
                Built by a distributed team of developers, data scientists, and precious metals
                analysts, Wall Street Silver combines technical excellence with domain expertise.
                Our open-source approach encourages community contributions and collaborative
                research, with all tools and documentation freely available on GitHub. We serve a
                diverse user base including academic researchers, financial analysts, application
                developers, and precious metals enthusiasts worldwide.
                <br /><br />
                Future development focuses on real-time sentiment analysis, machine learning
                forecasting models, and advanced visualization tools for market data.
              </p>
            </div>
          </section>

          {/* Brand Assets */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Brand Assets</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900">Logo Package</h3>
                <p className="mt-2 text-sm text-gray-600">
                  SVG, PNG, and high-resolution versions in light and dark variants
                </p>
                <p className="mt-2 text-sm text-gray-500">Coming soon - check back for download link</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900">Brand Guidelines</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Typography, color palette, and usage guidelines
                </p>
                <p className="mt-2 text-sm text-gray-500">Coming soon - check back for download link</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900">Screenshots</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Platform screenshots for media use
                </p>
                <p className="mt-2 text-sm text-gray-500">Coming soon - check back for download link</p>
              </div>
            </div>
          </section>

          {/* Press Releases */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Recent Announcements</h2>
            <div className="mt-6 space-y-6">
              <article className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Wall Street Silver Launches Developer Platform
                </h3>
                <p className="mt-1 text-sm text-gray-500">November 17, 2025</p>
                <p className="mt-3 text-gray-700">
                  Wall Street Silver today announced the launch of its developer platform,
                  providing open-source APIs and tools for precious metals market analysis.
                  The platform makes institutional-grade market data accessible to independent
                  researchers and developers worldwide.
                </p>
                <Link href="/blog/2025-11-17-hello-world" className="mt-3 inline-block text-sm font-medium text-gray-900 hover:underline">
                  Read full announcement →
                </Link>
              </article>
            </div>
          </section>

          {/* Media Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Media Contact</h2>
            <div className="mt-6 rounded-lg bg-gray-50 p-6">
              <p className="text-gray-700">
                For press inquiries, interviews, or media requests:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-sm">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:press@wallstreetsilver.com" className="text-gray-900 hover:underline">
                    press@wallstreetsilver.com
                  </a>
                </p>
                <p className="text-sm">
                  <strong>General Contact:</strong>{' '}
                  <Link href="/contact" className="text-gray-900 hover:underline">
                    Contact Form
                  </Link>
                </p>
                <p className="text-sm">
                  <strong>Response Time:</strong> Within 24-48 hours for media inquiries
                </p>
              </div>
            </div>
          </section>

          {/* Coverage Guidelines */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Coverage Guidelines</h2>
            <div className="prose prose-gray mt-6 max-w-none">
              <p>When covering Wall Street Silver, please note:</p>
              <ul>
                <li>
                  <strong>Trademark:</strong> Wall Street Silver™ should be used with proper
                  attribution
                </li>
                <li>
                  <strong>Platform Description:</strong> We are a developer platform and data
                  provider, not a financial advisory service
                </li>
                <li>
                  <strong>Data Attribution:</strong> When citing our data or research, please
                  link to the original source
                </li>
                <li>
                  <strong>Independence:</strong> We maintain independence and do not accept
                  payment for coverage or data manipulation
                </li>
              </ul>
            </div>
          </section>

          {/* Spokesperson Availability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Expert Commentary</h2>
            <p className="mt-4 text-gray-700">
              Our team is available for expert commentary on:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
              <li>Precious metals market trends and analysis</li>
              <li>Silver supply and demand dynamics</li>
              <li>Market sentiment and retail investor behavior</li>
              <li>Financial data infrastructure and APIs</li>
              <li>Open-source development in fintech</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Contact{' '}
              <a href="mailto:press@wallstreetsilver.com" className="text-gray-900 hover:underline">
                press@wallstreetsilver.com
              </a>{' '}
              to schedule interviews or request quotes.
            </p>
          </section>

          {/* Media Kit */}
          <section className="rounded-lg bg-blue-50 p-8">
            <h3 className="text-xl font-semibold text-gray-900">Need Something Else?</h3>
            <p className="mt-3 text-gray-700">
              We're happy to provide additional resources for your story. Contact us for:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-gray-700">
              <li>Custom data exports or analysis</li>
              <li>Technical interviews with our engineering team</li>
              <li>Market commentary and expert quotes</li>
              <li>High-resolution images or graphics</li>
              <li>Background information for investigative pieces</li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Contact Media Relations
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
