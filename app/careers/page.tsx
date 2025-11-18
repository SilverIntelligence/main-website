import { generateMetadata as genMeta } from '@/lib/og';

export const metadata = genMeta({
  title: 'Careers',
  description: 'Join the Wall Street Silver team and build open analytics infrastructure',
  path: '/careers',
});

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">Careers</h1>
        <p className="mt-4 text-lg text-gray-600">
          Join us in building the world's most transparent precious metals analytics platform.
        </p>

        <div className="mt-12 rounded-lg bg-gray-50 p-8">
          <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-gray-700">
            We're building open infrastructure for precious metals market data and research. Our
            goal is to make high-quality market analysis accessible to everyone—from independent
            researchers to institutional analysts.
          </p>
          <p className="mt-4 text-gray-700">
            We believe in transparency, open data, and empowering individuals with the tools they
            need to understand complex financial markets.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Open Positions</h2>

          <div className="mt-8 space-y-6">
            {/* Backend Engineer */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">Senior Backend Engineer</h3>
              <p className="mt-2 text-sm text-gray-600">Remote • Full-time</p>
              <p className="mt-4 text-gray-700">
                Build scalable data pipelines and APIs for real-time precious metals market data.
                Work with TypeScript, Node.js, PostgreSQL, and modern cloud infrastructure.
              </p>
              <div className="mt-6 flex gap-2">
                <span className="rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  TypeScript
                </span>
                <span className="rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  Node.js
                </span>
                <span className="rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  PostgreSQL
                </span>
                <span className="rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  AWS
                </span>
              </div>
            </div>

            {/* Frontend Engineer */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">Frontend Engineer</h3>
              <p className="mt-2 text-sm text-gray-600">Remote • Full-time</p>
              <p className="mt-4 text-gray-700">
                Create beautiful, performant user interfaces for data visualization and analytics.
                Experience with React, Next.js, TypeScript, and D3.js preferred.
              </p>
              <div className="mt-6 flex gap-2">
                <span className="rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  React
                </span>
                <span className="rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  Next.js
                </span>
                <span className="rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  TypeScript
                </span>
                <span className="rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  Tailwind
                </span>
              </div>
            </div>

            {/* Research Analyst */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">Market Research Analyst</h3>
              <p className="mt-2 text-sm text-gray-600">Remote • Full-time</p>
              <p className="mt-4 text-gray-700">
                Conduct in-depth research on precious metals markets, supply/demand dynamics, and
                macroeconomic factors. Strong writing skills and data analysis experience required.
              </p>
              <div className="mt-6 flex gap-2">
                <span className="rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  Research
                </span>
                <span className="rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  Python
                </span>
                <span className="rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  SQL
                </span>
                <span className="rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  Economics
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-blue-50 p-6">
          <h3 className="font-semibold text-gray-900">Don't see a fit?</h3>
          <p className="mt-2 text-sm text-gray-600">
            We're always interested in hearing from talented people. Send us your resume and tell us
            what you're passionate about.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
