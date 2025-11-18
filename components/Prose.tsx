import { ReactNode } from 'react';

interface ProseProps {
  children: ReactNode;
  className?: string;
}

export default function Prose({ children, className = '' }: ProseProps) {
  return (
    <div className={`prose prose-gray max-w-none prose-headings:font-bold prose-a:text-gray-900 prose-a:no-underline hover:prose-a:underline prose-pre:bg-gray-900 prose-pre:text-gray-100 ${className}`}>
      {children}
    </div>
  );
}
