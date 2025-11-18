import { generateMetadata as genMeta } from '@/lib/og';

export const metadata = genMeta({
  title: 'Roadmap',
  description: 'Our public roadmap for Wall Street Silver developer platform',
  path: '/roadmap',
});

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">Roadmap</h1>
        <p className="mt-4 text-lg text-gray-600">
          Our public roadmap for building the open precious metals analytics platform.
        </p>

        <div className="mt-12 space-y-12">
          {/* Q1 2025 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Q1 2025 - Foundation</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  ✓
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Developer Hub Launch</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Public documentation site with MDX content, search, and analytics
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  ◦
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Data Pipeline v1</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Automated ingestion of public silver market data from major sources
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  ◦
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">REST API Alpha</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Read-only endpoints for historical price data and market indicators
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* Q2 2025 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Q2 2025 - Expansion</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                  ◦
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">TypeScript SDK</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Type-safe client library for Node.js and browser environments
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                  ◦
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">GraphQL API Beta</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Flexible querying interface with real-time subscriptions
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                  ◦
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Research Database</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Structured repository of market research with citation tracking
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* Q3-Q4 2025 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Q3-Q4 2025 - Platform</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                  ◦
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Analytics Dashboard</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Interactive visualization and analysis tools for developers
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                  ◦
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Community Features</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Discussion forums, code sharing, and collaborative research tools
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                  ◦
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Mobile SDKs</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Native libraries for iOS and Android applications
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-12 rounded-lg bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900">Get Involved</h3>
          <p className="mt-2 text-sm text-gray-600">
            This roadmap is a living document and subject to change based on community feedback and
            priorities. Want to influence our direction?
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/wallstreetsilver"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-900 hover:underline"
            >
              GitHub Discussions →
            </a>
            <a href="/contact" className="text-sm font-medium text-gray-900 hover:underline">
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
