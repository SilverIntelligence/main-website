import Link from 'next/link';
import { getAllMdxFiles } from '@/lib/mdx';
import { generateMetadata as genMeta } from '@/lib/og';

export const metadata = genMeta({
  title: 'Documentation',
  description: 'Developer documentation for Wall Street Silver APIs and data sources',
  path: '/docs',
});

export default async function DocsPage() {
  const docs = await getAllMdxFiles('docs');

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">Documentation</h1>
        <p className="mt-4 text-lg text-gray-600">
          Comprehensive guides and API references for building with Wall Street Silver data and
          analytics.
        </p>

        <div className="mt-12 space-y-4">
          {docs.length > 0 ? (
            docs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="group block rounded-lg border border-gray-200 p-6 transition-colors hover:border-gray-300 hover:bg-gray-50"
              >
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700">
                  {doc.metadata.title}
                </h2>
                {doc.metadata.description && (
                  <p className="mt-2 text-gray-600">{doc.metadata.description}</p>
                )}
              </Link>
            ))
          ) : (
            <div className="rounded-lg border border-dashed border-gray-300 p-12 text-center">
              <p className="text-gray-500">Documentation coming soon.</p>
              <Link href="/" className="mt-4 inline-block text-sm text-gray-600 hover:text-gray-900">
                ← Back to home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
