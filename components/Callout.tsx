import { ReactNode } from 'react';

interface CalloutProps {
  type?: 'note' | 'warning' | 'info' | 'success';
  children: ReactNode;
}

const styles = {
  note: 'bg-blue-50 border-blue-200 text-blue-900',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
  info: 'bg-gray-50 border-gray-200 text-gray-900',
  success: 'bg-green-50 border-green-200 text-green-900',
};

const icons = {
  note: '💡',
  warning: '⚠️',
  info: 'ℹ️',
  success: '✅',
};

export default function Callout({ type = 'note', children }: CalloutProps) {
  return (
    <div className={`my-6 rounded-lg border-l-4 p-4 ${styles[type]}`} role="note">
      <div className="flex items-start">
        <span className="mr-3 text-xl" aria-hidden="true">
          {icons[type]}
        </span>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
