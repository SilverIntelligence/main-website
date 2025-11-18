import { generateMetadata as genMeta } from '@/lib/og';

export const metadata = genMeta({
  title: 'Status',
  description: 'System status and uptime for Wall Street Silver services',
  path: '/status',
});

export default function StatusPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">System Status</h1>
        <p className="mt-4 text-lg text-gray-600">
          Current status and uptime for all Wall Street Silver services.
        </p>

        <div className="mt-12 rounded-lg border border-green-200 bg-green-50 p-6">
          <div className="flex items-center">
            <div className="flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-green-500"></span>
            </div>
            <span className="ml-3 text-lg font-semibold text-green-900">All Systems Operational</span>
          </div>
        </div>

        <div className="mt-12 space-y-4">
          <div className="rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Developer Hub</h3>
                <p className="mt-1 text-sm text-gray-600">Documentation and website</p>
              </div>
              <span className="rounded bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                Operational
              </span>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">API (Coming Soon)</h3>
                <p className="mt-1 text-sm text-gray-600">REST and GraphQL endpoints</p>
              </div>
              <span className="rounded bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                In Development
              </span>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Data Pipeline (Coming Soon)</h3>
                <p className="mt-1 text-sm text-gray-600">Real-time market data ingestion</p>
              </div>
              <span className="rounded bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                In Development
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900">External Status Page</h3>
          <p className="mt-2 text-sm text-gray-600">
            For real-time updates and historical uptime data, visit our external status page.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Status page integration coming soon. Subscribe to updates via{' '}
            <a href="/contact" className="font-medium text-gray-900 hover:underline">
              contact form
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
