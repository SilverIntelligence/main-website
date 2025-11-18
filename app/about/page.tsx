import { generateMetadata as genMeta } from '@/lib/og';

export const metadata = genMeta({
  title: 'About',
  description: 'Learn about Wall Street Silver and our mission to democratize precious metals analytics',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">About Wall Street Silver</h1>

        <div className="prose prose-gray mt-8 max-w-none">
          <h2>Our Mission</h2>
          <p>
            Wall Street Silver is dedicated to democratizing access to precious metals market data
            and analytics. We believe that high-quality financial data should be accessible to
            everyone—from independent researchers and retail investors to institutional analysts
            and developers.
          </p>

          <h2>What We Do</h2>
          <p>
            We build open-source tools and infrastructure for analyzing precious metals markets,
            with a primary focus on silver. Our platform provides:
          </p>
          <ul>
            <li><strong>Market Data APIs</strong> - Real-time and historical price data from trusted sources</li>
            <li><strong>Research & Analysis</strong> - In-depth market research with transparent methodology</li>
            <li><strong>Developer Tools</strong> - SDKs, libraries, and documentation for easy integration</li>
            <li><strong>Community Resources</strong> - Forums, discussions, and collaborative research</li>
          </ul>

          <h2>Our Philosophy</h2>

          <h3>Transparency First</h3>
          <p>
            Every data point we provide includes source attribution, timestamps, and methodology notes.
            We believe in showing our work and making it easy to verify our data.
          </p>

          <h3>Open Source</h3>
          <p>
            Our tools, libraries, and documentation are open source. We encourage community
            contributions and believe that open collaboration produces better results.
          </p>

          <h3>Data Quality</h3>
          <p>
            We prioritize accuracy over speed. Every data point goes through multiple validation
            steps, cross-source verification, and human oversight for critical data.
          </p>

          <h3>Developer-Friendly</h3>
          <p>
            We design our APIs and tools with developers in mind. Clear documentation, consistent
            interfaces, and helpful error messages are non-negotiable.
          </p>

          <h2>The Team</h2>
          <p>
            Wall Street Silver is built by a distributed team of developers, data scientists, and
            precious metals analysts who share a passion for open data and financial transparency.
          </p>
          <p>
            We come from diverse backgrounds in finance, technology, and research, united by the
            belief that accessible market data creates more informed markets.
          </p>

          <h2>Our Community</h2>
          <p>
            Wall Street Silver started as a grassroots movement focused on silver market awareness
            and has grown into a global community of retail investors, researchers, and precious
            metals enthusiasts.
          </p>
          <p>
            Our developer platform extends this mission by providing the tools and data needed to
            conduct independent research and build innovative applications.
          </p>

          <h2>Contact & Collaboration</h2>
          <p>
            We welcome collaborations with:
          </p>
          <ul>
            <li>Academic researchers studying commodity markets</li>
            <li>Financial data providers and exchanges</li>
            <li>Open-source developers building financial tools</li>
            <li>Media organizations covering precious metals markets</li>
          </ul>
          <p>
            Interested in working together? <a href="/contact">Get in touch</a> or check out our
            <a href="/careers">open positions</a>.
          </p>

          <h2>Funding & Independence</h2>
          <p>
            Wall Street Silver is committed to maintaining independence and transparency in our
            research and data provision. We do not accept payment for research coverage or data
            manipulation.
          </p>
          <p>
            Our platform is funded through a combination of API subscriptions (coming soon),
            community support, and partnerships with aligned organizations.
          </p>

          <h2>Looking Forward</h2>
          <p>
            We're building the infrastructure for the next generation of precious metals analytics.
            Our roadmap includes:
          </p>
          <ul>
            <li>Real-time market sentiment analysis</li>
            <li>Advanced data visualization tools</li>
            <li>Machine learning models for market forecasting</li>
            <li>Collaborative research platforms</li>
            <li>Educational resources for new analysts</li>
          </ul>
          <p>
            Follow our <a href="/roadmap">public roadmap</a> to see what we're working on and
            <a href="https://github.com/wallstreetsilver">contribute on GitHub</a>.
          </p>
        </div>

        <div className="mt-12 rounded-lg bg-gray-50 p-8">
          <h3 className="text-xl font-semibold text-gray-900">Get Involved</h3>
          <p className="mt-4 text-gray-700">
            Whether you're a developer, researcher, or precious metals enthusiast, there are many
            ways to get involved with Wall Street Silver.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/docs"
              className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Read the Docs
            </a>
            <a
              href="https://github.com/wallstreetsilver"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              GitHub
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
