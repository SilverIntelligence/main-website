import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">Wall Street Silver</span>
              <span className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                Developer Hub
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link
                href="/docs"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                Docs
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                Blog
              </Link>
              <Link
                href="/research"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                Research
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/roadmap"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                Roadmap
              </Link>
              <Link
                href="/careers"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                Contact
              </Link>
              <a
                href={SITE.orgGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
                aria-label="GitHub (opens in a new tab)"
                data-testid="nav-github"
              >
                GitHub ↗
              </a>
              <a
                href={SITE.linkedinCompany}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
                aria-label="LinkedIn (opens in a new tab)"
                data-testid="nav-linkedin"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
