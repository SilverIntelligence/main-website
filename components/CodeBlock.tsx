'use client';

import { ReactNode, useState } from 'react';

interface CodeBlockProps {
  children: ReactNode;
  lang?: string;
  title?: string;
}

export default function CodeBlock({ children, lang, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const code = typeof children === 'string' ? children : '';
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-6">
      {title && (
        <div className="rounded-t-lg bg-gray-800 px-4 py-2 text-sm text-gray-300">{title}</div>
      )}
      <div className="relative">
        <pre className={`overflow-x-auto ${title ? 'rounded-t-none' : 'rounded-lg'}`}>
          <code className={lang ? `language-${lang}` : ''}>{children}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="copy-button"
          aria-label={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
