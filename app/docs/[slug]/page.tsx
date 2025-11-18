import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllSlugs, getMdxBySlug, mdxOptions } from '@/lib/mdx';
import { generateMetadata as genMeta } from '@/lib/og';
import Prose from '@/components/Prose';
import CodeBlock from '@/components/CodeBlock';
import Callout from '@/components/Callout';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs('docs');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const doc = await getMdxBySlug('docs', slug);

  if (!doc) {
    return {};
  }

  return genMeta({
    title: doc.metadata.title,
    description: doc.metadata.description || 'Wall Street Silver documentation',
    path: `/docs/${slug}`,
  });
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const doc = await getMdxBySlug('docs', slug);

  if (!doc) {
    notFound();
  }

  const components = {
    pre: CodeBlock,
    Callout,
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">{doc.metadata.title}</h1>
          {doc.metadata.description && (
            <p className="mt-4 text-lg text-gray-600">{doc.metadata.description}</p>
          )}
        </header>

        <Prose>
          <MDXRemote source={doc.content} options={mdxOptions.mdxOptions} components={components} />
        </Prose>
      </article>
    </div>
  );
}
