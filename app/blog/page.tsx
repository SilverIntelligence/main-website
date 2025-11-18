import Link from 'next/link';
import { getAllMdxFiles } from '@/lib/mdx';
import { generateMetadata as genMeta } from '@/lib/og';

export const metadata = genMeta({
  title: 'Blog',
  description: 'Updates, announcements, and insights from Wall Street Silver',
  path: '/blog',
});

export default async function BlogPage() {
  const posts = await getAllMdxFiles('blog');

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
        <p className="mt-4 text-lg text-gray-600">
          Updates, announcements, and insights from the Wall Street Silver team.
        </p>

        <div className="mt-12 space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 pb-6">
                <Link href={`/blog/${post.slug}`} className="group">
                  <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-700">
                    {post.metadata.title}
                  </h2>
                  {post.metadata.description && (
                    <p className="mt-2 text-gray-600">{post.metadata.description}</p>
                  )}
                  <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                    {post.metadata.date && (
                      <time dateTime={post.metadata.date}>
                        {new Date(post.metadata.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    )}
                    {post.metadata.author && <span>by {post.metadata.author}</span>}
                  </div>
                </Link>
              </article>
            ))
          ) : (
            <div className="rounded-lg border border-dashed border-gray-300 p-12 text-center">
              <p className="text-gray-500">Blog posts coming soon.</p>
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
