import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Wall Street Silver</h3>
            <p className="mt-4 text-sm text-gray-600">
              Open precious metals analytics and research platform for developers and analysts.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/docs" className="text-sm text-gray-600 hover:text-gray-900">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-sm text-gray-600 hover:text-gray-900">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-sm text-gray-600 hover:text-gray-900">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-sm text-gray-600 hover:text-gray-900">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-sm text-gray-600 hover:text-gray-900">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/legal/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href={SITE.orgGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900"
                  aria-label="GitHub (opens in a new tab)"
                  data-testid="footer-github"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedinCompany}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900"
                  aria-label="LinkedIn (opens in a new tab)"
                  data-testid="footer-linkedin"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Wall Street Silver. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
