'use server';

import { z } from 'zod';
import { headers } from 'next/headers';
import { checkRateLimit } from '@/lib/rateLimit';
import { sendContactNotification } from '@/lib/email';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().email('Invalid email address'),
  subject: z.string().max(200, 'Subject too long').optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000, 'Message too long'),
  website: z.string().max(0), // Honeypot field - should be empty
});

export async function submitContactForm(formData: FormData) {
  try {
    // Get IP address for rate limiting
    const headersList = await headers();
    const forwardedFor = headersList.get('x-forwarded-for');
    const realIp = headersList.get('x-real-ip');
    const ip = forwardedFor?.split(',')[0] || realIp || 'unknown';

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return {
        success: false,
        error: 'Too many requests. Please try again later.',
      };
    }

    // Parse and validate form data
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      website: formData.get('website'),
    };

    const result = contactSchema.safeParse(data);

    if (!result.success) {
      return {
        success: false,
        error: result.error.errors[0].message,
      };
    }

    // Honeypot check
    if (result.data.website && result.data.website.length > 0) {
      // Silent fail for bots
      return { success: true };
    }

    // Send email notification
    const emailSent = await sendContactNotification({
      name: result.data.name,
      email: result.data.email,
      message: `${result.data.subject ? `Subject: ${result.data.subject}\n\n` : ''}${result.data.message}`,
    });

    if (!emailSent) {
      return {
        success: false,
        error: 'Failed to send message. Please try again or email us directly.',
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}
