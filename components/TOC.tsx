'use client';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TOCProps {
  items: TOCItem[];
}

export default function TOC({ items }: TOCProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="space-y-1" aria-label="Table of contents">
      <p className="text-sm font-semibold text-gray-900">On this page</p>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
            <a
              href={`#${item.id}`}
              className="block text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
