import { generateMetadata as genMeta } from '@/lib/og';

export const metadata = genMeta({
  title: 'Terms of Service',
  description: 'Terms of service for Wall Street Silver',
  path: '/legal/terms',
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <article className="prose prose-gray mx-auto max-w-3xl">
        <h1>Terms of Service</h1>
        <p className="text-gray-600">Last updated: November 17, 2025</p>

        <h2>Agreement to Terms</h2>
        <p>
          By accessing and using Wall Street Silver's website and services ("Services"), you agree
          to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms,
          please do not use our Services.
        </p>

        <h2>Description of Services</h2>
        <p>
          Wall Street Silver provides open-source analytics, research, and data tools related to
          precious metals markets. Our Services include:
        </p>
        <ul>
          <li>Developer documentation and guides</li>
          <li>Market research and analysis</li>
          <li>APIs and software development kits (when available)</li>
          <li>Community resources and discussion</li>
        </ul>

        <h2>Use License</h2>
        <p>
          We grant you a limited, non-exclusive, non-transferable license to access and use our
          Services for lawful purposes. You may not:
        </p>
        <ul>
          <li>Use our Services for any illegal purpose</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with or disrupt our Services</li>
          <li>Reproduce, modify, or distribute our content without permission</li>
          <li>Use automated systems to scrape or harvest data without authorization</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          Unless otherwise indicated, all content on our website is owned by Wall Street Silver and
          is protected by copyright, trademark, and other intellectual property laws. Open-source
          code and data are licensed under their respective licenses as indicated in our
          repositories.
        </p>

        <h2>User Content</h2>
        <p>
          If you submit content to our Services (e.g., comments, research contributions), you grant
          us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and
          distribute that content in connection with our Services.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          Our Services are provided "as is" and "as available" without warranties of any kind,
          either express or implied. We do not warrant that:
        </p>
        <ul>
          <li>Our Services will be uninterrupted or error-free</li>
          <li>The information provided is accurate or complete</li>
          <li>Defects will be corrected</li>
          <li>Our Services are free of viruses or harmful components</li>
        </ul>

        <h2>Not Financial Advice</h2>
        <p>
          <strong>Important:</strong> The information provided through our Services is for
          informational and educational purposes only. It does not constitute financial, investment,
          or trading advice. You should consult with qualified professionals before making any
          financial decisions.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Wall Street Silver shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or any loss of profits
          or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill,
          or other intangible losses.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Wall Street Silver from any claims, damages,
          losses, liabilities, and expenses (including legal fees) arising from your use of our
          Services or violation of these Terms.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our Services may contain links to third-party websites or integrate with third-party
          services. We are not responsible for the content, terms, or privacy practices of these
          third parties.
        </p>

        <h2>API Terms (When Available)</h2>
        <p>
          When our APIs become available, additional terms may apply regarding rate limits, API
          keys, and acceptable use. These will be communicated through our developer documentation.
        </p>

        <h2>Modifications to Services and Terms</h2>
        <p>
          We reserve the right to modify or discontinue our Services at any time without notice. We
          may also update these Terms periodically. Continued use of our Services after changes
          constitutes acceptance of the modified Terms.
        </p>

        <h2>Termination</h2>
        <p>
          We may terminate or suspend your access to our Services immediately, without prior notice,
          for any reason, including breach of these Terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with applicable laws, without
          regard to conflict of law principles.
        </p>

        <h2>Dispute Resolution</h2>
        <p>
          Any disputes arising from these Terms or your use of our Services shall be resolved
          through good faith negotiations. If negotiations fail, disputes may be submitted to
          binding arbitration or appropriate legal channels.
        </p>

        <h2>Severability</h2>
        <p>
          If any provision of these Terms is found to be invalid or unenforceable, the remaining
          provisions shall remain in full force and effect.
        </p>

        <h2>Contact Information</h2>
        <p>
          For questions about these Terms, please contact us through our{' '}
          <a href="/contact">contact form</a>.
        </p>
      </article>
    </div>
  );
}
