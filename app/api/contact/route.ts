import { NextResponse } from 'next/server';
import { z } from 'zod';
import { ratelimit } from '@/lib/rate-limit';

const contactSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  companyName: z.string().min(1, { message: 'Company name is required.' }),
  companySize: z.string().min(1, { message: 'Please select your company size.' }),
  serviceInterest: z.array(z.string()).min(1, { message: 'Please select at least one service.' }),
  description: z.string().max(500, { message: 'Description must not exceed 500 characters.' }),
  heardFrom: z.string().min(1, { message: 'Please select how you heard about us.' }),
  privacyAgreement: z.boolean().refine(val => val === true, { message: 'You must agree to the Privacy Policy.' }),
});

export async function POST(request: Request) {
  // Add rate limiting
  const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1';
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // In a real application, you would:
    // 1. Send the data to your database
    // 2. Send a notification email to hello@meetaps.com
    // 3. Send a confirmation email to the prospect

    // Only log in development environment
    if (process.env.NODE_ENV === 'development') {
      console.log('Received contact form submission');
    }

    // Mock sending email notification
    // This would use a service like Resend in a real implementation

    return NextResponse.json({
      success: true,
      message: 'Thank you for your submission! We will contact you shortly.'
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Invalid form data',
        errors: error.errors
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing your request.'
    }, { status: 500 });
  }
}