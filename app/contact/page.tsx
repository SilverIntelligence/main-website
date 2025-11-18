import { generateMetadata as genMeta } from '@/lib/og';
import ContactForm from './ContactForm';

export const metadata = genMeta({
  title: 'Contact Us',
  description: 'Get in touch with the Wall Street Silver team',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Have questions, feedback, or want to collaborate? We'd love to hear from you.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">General Inquiries</h2>
              <p className="mt-2 text-gray-600">
                For general questions about our platform, APIs, or research.
              </p>
              <a
                href="mailto:contact@wallstreetsilver.com"
                className="mt-2 block text-gray-900 hover:underline"
              >
                contact@wallstreetsilver.com
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">Developer Support</h2>
              <p className="mt-2 text-gray-600">
                Technical questions, API issues, or integration help.
              </p>
              <a
                href="https://github.com/SilverIntelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-gray-900 hover:underline"
              >
                GitHub Discussions →
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">Security</h2>
              <p className="mt-2 text-gray-600">
                To report security vulnerabilities, please use our PGP key for encrypted
                communication.
              </p>
              <a
                href="/key.txt"
                className="mt-2 block text-gray-900 hover:underline"
                download
              >
                Download PGP Key
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">Careers</h2>
              <p className="mt-2 text-gray-600">
                Interested in joining our team? Check out our open positions.
              </p>
              <a href="/careers" className="mt-2 block text-gray-900 hover:underline">
                View Careers →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
