import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

export interface MdxMetadata {
  title: string;
  description?: string;
  date?: string;
  author?: string;
  tags?: string[];
  slug: string;
}

export interface MdxContent {
  metadata: MdxMetadata;
  content: string;
  slug: string;
}

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Get all MDX files from a specific content type directory
 */
export async function getAllMdxFiles(type: 'docs' | 'blog' | 'research'): Promise<MdxContent[]> {
  const directory = path.join(contentDirectory, type);

  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs.readdirSync(directory);
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

  const content = mdxFiles.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const filePath = path.join(directory, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
      metadata: {
        slug,
        title: data.title || slug,
        description: data.description,
        date: data.date,
        author: data.author,
        tags: data.tags || [],
      },
      content,
      slug,
    };
  });

  // Sort by date, newest first
  return content.sort((a, b) => {
    if (!a.metadata.date || !b.metadata.date) return 0;
    return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
  });
}

/**
 * Get a single MDX file by slug
 */
export async function getMdxBySlug(
  type: 'docs' | 'blog' | 'research',
  slug: string
): Promise<MdxContent | null> {
  const filePath = path.join(contentDirectory, type, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    metadata: {
      slug,
      title: data.title || slug,
      description: data.description,
      date: data.date,
      author: data.author,
      tags: data.tags || [],
    },
    content,
    slug,
  };
}

/**
 * Get all slugs for a content type (for static generation)
 */
export async function getAllSlugs(type: 'docs' | 'blog' | 'research'): Promise<string[]> {
  const directory = path.join(contentDirectory, type);

  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs.readdirSync(directory);
  return files.filter((file) => file.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ''));
}

/**
 * MDX components configuration
 */
export const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor'],
          },
        },
      ] as any,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: true,
        },
      ] as any,
    ],
  },
};

/**
 * Render MDX content
 */
export function renderMDX(content: string, components?: MDXRemoteProps['components']) {
  return MDXRemote({
    source: content,
    options: mdxOptions as any,
    components,
  });
}
