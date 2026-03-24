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
  const slugs = await getAllSlugs('research');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const research = await getMdxBySlug('research', slug);

  if (!research) {
    return {};
  }

  return genMeta({
    title: research.metadata.title,
    description: research.metadata.description || 'Wall Street Silver research',
    path: `/research/${slug}`,
    type: 'article',
    publishedTime: research.metadata.date,
    tags: research.metadata.tags,
  });
}

export default async function ResearchPage({ params }: Props) {
  const { slug } = await params;
  const research = await getMdxBySlug('research', slug);

  if (!research) {
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
            <h1 className="text-4xl font-bold text-gray-900">{research.metadata.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              {research.metadata.date && (
                <time dateTime={research.metadata.date}>
                  {new Date(research.metadata.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
              {research.metadata.author && <span>by {research.metadata.author}</span>}
              <span>{research.metadata.readingTime} min read</span>
            </div>
            {research.metadata.description && (
              <p className="mt-4 text-lg text-gray-600">{research.metadata.description}</p>
            )}
            {research.metadata.tags && research.metadata.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {research.metadata.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <Prose>
            <MDXRemote source={research.content} options={mdxOptions} components={components} />
          </Prose>
        </article>

        {research.toc.length > 0 && (
          <aside className="hidden w-56 shrink-0 xl:block">
            <div className="sticky top-8">
              <TOC items={research.toc} />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
