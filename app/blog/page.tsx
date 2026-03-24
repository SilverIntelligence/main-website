import Link from 'next/link';
import { getAllMdxFiles } from '@/lib/mdx';
import { generateMetadata as genMeta } from '@/lib/og';

export const metadata = genMeta({
  title: 'Blog',
  description: 'Updates, announcements, and insights from Wall Street Silver',
  path: '/blog',
});

interface Props {
  searchParams: Promise<{ tag?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { tag } = await searchParams;
  const allPosts = await getAllMdxFiles('blog');

  const allTags = Array.from(new Set(allPosts.flatMap((p) => p.metadata.tags ?? [])));
  const posts = tag ? allPosts.filter((p) => p.metadata.tags?.includes(tag)) : allPosts;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
        <p className="mt-4 text-lg text-gray-600">
          Updates, announcements, and insights from the Wall Street Silver team.
        </p>

        {allTags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/blog"
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                !tag
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </Link>
            {allTags.map((t) => (
              <Link
                key={t}
                href={`/blog?tag=${encodeURIComponent(t)}`}
                className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  tag === t
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {t}
              </Link>
            ))}
          </div>
        )}

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
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
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
                    <span>{post.metadata.readingTime} min read</span>
                  </div>
                  {post.metadata.tags && post.metadata.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {post.metadata.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))
          ) : (
            <div className="rounded-lg border border-dashed border-gray-300 p-12 text-center">
              <p className="text-gray-500">
                {tag ? `No posts found for tag "${tag}".` : 'Blog posts coming soon.'}
              </p>
              <Link href="/blog" className="mt-4 inline-block text-sm text-gray-600 hover:text-gray-900">
                ← View all posts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
