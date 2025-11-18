import { generateMetadata as genMeta } from '@/lib/og';

export const metadata = genMeta({
  title: 'Privacy Policy',
  description: 'Privacy policy for Wall Street Silver services',
  path: '/legal/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <article className="prose prose-gray mx-auto max-w-3xl">
        <h1>Privacy Policy</h1>
        <p className="text-gray-600">Last updated: November 17, 2025</p>

        <h2>Introduction</h2>
        <p>
          Wall Street Silver ("we," "our," or "us") is committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you visit our website and use our services.
        </p>

        <h2>Information We Collect</h2>

        <h3>Information You Provide</h3>
        <p>We may collect information that you voluntarily provide to us, including:</p>
        <ul>
          <li>Name and email address (when you contact us or subscribe to updates)</li>
          <li>Professional information (when applying for positions)</li>
          <li>Any other information you choose to provide</li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <p>
          When you visit our website, we may automatically collect certain information about your
          device and usage, including:
        </p>
        <ul>
          <li>IP address and browser type</li>
          <li>Pages visited and time spent on pages</li>
          <li>Referring website addresses</li>
          <li>Device and operating system information</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Respond to your inquiries and requests</li>
          <li>Send you technical notices and updates</li>
          <li>Improve our website and services</li>
          <li>Analyze usage patterns and trends</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Data Sharing and Disclosure</h2>
        <p>We do not sell your personal information. We may share your information with:</p>
        <ul>
          <li>Service providers who assist in operating our website (e.g., analytics, hosting)</li>
          <li>Legal authorities when required by law</li>
          <li>Other parties with your explicit consent</li>
        </ul>

        <h2>Analytics</h2>
        <p>
          We use analytics services (such as Vercel Analytics or Google Analytics) to understand how
          visitors interact with our website. These services may use cookies and similar tracking
          technologies. You can opt out of analytics tracking through your browser settings or using
          analytics opt-out browser extensions.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement reasonable security measures to protect your information. However, no method
          of transmission over the internet is 100% secure, and we cannot guarantee absolute
          security.
        </p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have the following rights:</p>
        <ul>
          <li>Access to your personal information</li>
          <li>Correction of inaccurate information</li>
          <li>Deletion of your information</li>
          <li>Objection to processing of your information</li>
          <li>Data portability</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          Our website may use cookies and similar technologies to enhance your experience. You can
          control cookie preferences through your browser settings.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the
          privacy practices of these external sites.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Our services are not directed to individuals under 13 years of age. We do not knowingly
          collect personal information from children.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by
          posting the new policy on this page and updating the "Last updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us through our{' '}
          <a href="/contact">contact form</a>.
        </p>
      </article>
    </div>
  );
}
