import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllSlugs, getMdxBySlug, mdxOptions } from '@/lib/mdx';
import { generateMetadata as genMeta } from '@/lib/og';
import Prose from '@/components/Prose';
import Callout from '@/components/Callout';

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
      <article className="mx-auto max-w-3xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">{post.metadata.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-gray-600">
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
          {post.metadata.description && (
            <p className="mt-4 text-lg text-gray-600">{post.metadata.description}</p>
          )}
        </header>

        <Prose>
          <MDXRemote source={post.content} options={mdxOptions as any} components={components} />
        </Prose>
      </article>
    </div>
  );
}
