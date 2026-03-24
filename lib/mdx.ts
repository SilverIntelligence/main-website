import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import type { PluggableList } from 'unified';

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface MdxMetadata {
  title: string;
  description?: string;
  date?: string;
  author?: string;
  tags?: string[];
  slug: string;
  readingTime: number;
}

export interface MdxContent {
  metadata: MdxMetadata;
  content: string;
  slug: string;
  toc: TocItem[];
}

const contentDirectory = path.join(process.cwd(), 'content');

/** Average adult reading speed (words per minute) */
const WORDS_PER_MINUTE = 200;

function computeReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

/**
 * Extract headings from raw markdown content to build a table of contents.
 * Only h2 and h3 headings are included.
 */
export function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: TocItem[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/`([^`]+)`/g, '$1').trim();
    // Replicate rehype-slug id generation: lowercase, replace spaces with dashes, strip non-alphanumeric
    const id = text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
    items.push({ id, text, level });
  }

  return items;
}

function parseMdxFile(file: string, directory: string): MdxContent {
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
      readingTime: computeReadingTime(content),
    },
    content,
    slug,
    toc: extractToc(content),
  };
}

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
  const content = mdxFiles.map((file) => parseMdxFile(file, directory));

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
  const directory = path.join(contentDirectory, type);
  const filePath = path.join(directory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return parseMdxFile(`${slug}.mdx`, directory);
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
 * MDX options with remark/rehype plugins
 */
export const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm] as PluggableList,
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
      ],
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: true,
        },
      ],
    ] as PluggableList,
  },
};

/**
 * Render MDX content (server-side)
 */
export function renderMDX(content: string, components?: MDXRemoteProps['components']) {
  return MDXRemote({
    source: content,
    options: mdxOptions as Parameters<typeof MDXRemote>[0]['options'],
    components,
  });
}
