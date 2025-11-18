import Link from 'next/link';
import { getAllMdxFiles } from '@/lib/mdx';

export default async function HomePage() {
  const research = await getAllMdxFiles('research');
  const blogPosts = await getAllMdxFiles('blog');

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Wall Street Silver
        </h1>
        <p className="mt-3 text-xl text-gray-600 sm:mt-4">Developer Hub</p>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Open precious metals analytics and research platform. Access developer documentation,
          APIs, market data, and in-depth research on silver and precious metals markets.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/docs"
            className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800"
          >
            Read the docs
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Get in touch
          </Link>
          <a
            href="https://github.com/wallstreetsilver"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            GitHub
            <svg
              className="ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Featured Research */}
      <div className="mx-auto mt-24 max-w-5xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Featured Research</h2>
          <Link href="/research" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            View all →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {research.slice(0, 2).map((item) => (
            <Link
              key={item.slug}
              href={`/research/${item.slug}`}
              className="group rounded-lg border border-gray-200 p-6 transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                {item.metadata.title}
              </h3>
              {item.metadata.description && (
                <p className="mt-2 text-sm text-gray-600">{item.metadata.description}</p>
              )}
              {item.metadata.date && (
                <p className="mt-4 text-xs text-gray-500">
                  {new Date(item.metadata.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              )}
            </Link>
          ))}

          {research.length === 0 && (
            <div className="col-span-2 rounded-lg border border-dashed border-gray-300 p-12 text-center">
              <p className="text-sm text-gray-500">
                Research articles coming soon. Check back later!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Latest Blog Posts */}
      <div className="mx-auto mt-24 max-w-5xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Latest Updates</h2>
          <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            View all →
          </Link>
        </div>

        <div className="mt-8 space-y-4">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-lg border border-gray-200 p-6 transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                    {post.metadata.title}
                  </h3>
                  {post.metadata.description && (
                    <p className="mt-2 text-sm text-gray-600">{post.metadata.description}</p>
                  )}
                </div>
                {post.metadata.date && (
                  <p className="ml-4 text-xs text-gray-500">
                    {new Date(post.metadata.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                )}
              </div>
            </Link>
          ))}

          {blogPosts.length === 0 && (
            <div className="rounded-lg border border-dashed border-gray-300 p-12 text-center">
              <p className="text-sm text-gray-500">Blog posts coming soon. Check back later!</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Links */}
      <div className="mx-auto mt-24 max-w-5xl">
        <h2 className="text-2xl font-bold text-gray-900">Quick Links</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/docs"
            className="group rounded-lg border border-gray-200 p-6 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <h3 className="text-lg font-semibold text-gray-900">Documentation</h3>
            <p className="mt-2 text-sm text-gray-600">
              Get started with our APIs and developer resources
            </p>
          </Link>
          <Link
            href="/roadmap"
            className="group rounded-lg border border-gray-200 p-6 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <h3 className="text-lg font-semibold text-gray-900">Roadmap</h3>
            <p className="mt-2 text-sm text-gray-600">See what we're building and planning next</p>
          </Link>
          <Link
            href="/careers"
            className="group rounded-lg border border-gray-200 p-6 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <h3 className="text-lg font-semibold text-gray-900">Careers</h3>
            <p className="mt-2 text-sm text-gray-600">Join our team and work on open analytics</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
