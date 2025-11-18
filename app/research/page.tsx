import Link from 'next/link';
import { getAllMdxFiles } from '@/lib/mdx';
import { generateMetadata as genMeta } from '@/lib/og';

export const metadata = genMeta({
  title: 'Research',
  description: 'In-depth research and analysis on silver and precious metals markets',
  path: '/research',
});

export default async function ResearchPage() {
  const research = await getAllMdxFiles('research');

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">Research</h1>
        <p className="mt-4 text-lg text-gray-600">
          In-depth research and analysis on silver and precious metals markets, backed by data and
          primary sources.
        </p>

        <div className="mt-12 space-y-6">
          {research.length > 0 ? (
            research.map((item) => (
              <article key={item.slug} className="border-b border-gray-200 pb-6">
                <Link href={`/research/${item.slug}`} className="group">
                  <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-700">
                    {item.metadata.title}
                  </h2>
                  {item.metadata.description && (
                    <p className="mt-2 text-gray-600">{item.metadata.description}</p>
                  )}
                  <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                    {item.metadata.date && (
                      <time dateTime={item.metadata.date}>
                        {new Date(item.metadata.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    )}
                    {item.metadata.tags && item.metadata.tags.length > 0 && (
                      <div className="flex gap-2">
                        {item.metadata.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </article>
            ))
          ) : (
            <div className="rounded-lg border border-dashed border-gray-300 p-12 text-center">
              <p className="text-gray-500">Research articles coming soon.</p>
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
