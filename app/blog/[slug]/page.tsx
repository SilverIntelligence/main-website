import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllSlugs, getMdxBySlug, mdxOptions } from '@/lib/mdx';
import { generateMetadata as genMeta } from '@/lib/og';
import Prose from '@/components/Prose';
import Callout from '@/components/Callout';
import TOC from '@/components/TOC';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs('blog');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getMdxBySlug('blog', slug);

  if (!post) {
    return {};
  }

  return genMeta({
    title: post.metadata.title,
    description: post.metadata.description || 'Wall Street Silver blog post',
    path: `/blog/${slug}`,
    type: 'article',
    publishedTime: post.metadata.date,
    tags: post.metadata.tags,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getMdxBySlug('blog', slug);

  if (!post) {
    notFound();
  }

  const components = {
    Callout,
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex gap-12">
        <article className="min-w-0 flex-1">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">{post.metadata.title}</h1>
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
            {post.metadata.description && (
              <p className="mt-4 text-lg text-gray-600">{post.metadata.description}</p>
            )}
            {post.metadata.tags && post.metadata.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.metadata.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <Prose>
            <MDXRemote source={post.content} options={mdxOptions} components={components} />
          </Prose>
        </article>

        {post.toc.length > 0 && (
          <aside className="hidden w-56 shrink-0 xl:block">
            <div className="sticky top-8">
              <TOC items={post.toc} />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
