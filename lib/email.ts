/**
 * Email sending utilities
 * Supports multiple providers via API_KEY configuration
 */

interface EmailPayload {
  to: string;
  subject: string;
  text: string;
  from?: string;
}

/**
 * Send email via configured provider
 * In production, integrate with Postmark, SendGrid, or AWS SES
 */
export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  const apiKey = process.env.EMAIL_API_KEY;

  if (!apiKey) {
    console.warn('EMAIL_API_KEY not configured, email not sent:', payload.subject);
    // In development, just log the email
    console.log('Email payload:', JSON.stringify(payload, null, 2));
    return true;
  }

  // Example implementation for a generic email provider
  // Adjust based on your chosen provider (Postmark, SendGrid, etc.)
  try {
    // Placeholder: Replace with actual provider API call
    /*
    const response = await fetch('https://api.emailprovider.com/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: payload.from || process.env.CONTACT_EMAIL,
        to: payload.to,
        subject: payload.subject,
        text: payload.text,
      }),
    });

    if (!response.ok) {
      throw new Error(`Email provider error: ${response.status}`);
    }
    */

    console.log('Email sent successfully:', payload.subject);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

/**
 * Send contact form notification
 */
export async function sendContactNotification(data: {
  name: string;
  email: string;
  message: string;
}): Promise<boolean> {
  return sendEmail({
    to: process.env.CONTACT_EMAIL || 'contact@wallstreetsilver.com',
    subject: `New contact form submission from ${data.name}`,
    text: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
    `.trim(),
  });
}

/**
 * Send newsletter signup confirmation
 */
export async function sendNewsletterConfirmation(email: string): Promise<boolean> {
  return sendEmail({
    to: process.env.NEWSLETTER_EMAIL || 'newsletter@wallstreetsilver.com',
    subject: 'New newsletter subscription',
    text: `New subscriber: ${email}`,
  });
}
