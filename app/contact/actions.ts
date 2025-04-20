'use server';

import { Resend } from 'resend';
import { z, ZodIssue } from 'zod';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL;

// Define the expected shape of the form data using Zod for validation
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
} | null;

// This is the Server Action function
export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  if (!myEmail) {
    console.error('Error: Company email address is not configured in .env.local');
    return { message: 'Server configuration error. Please try again later.' };
  }
  if (!process.env.RESEND_API_KEY) {
    console.error('Error: Resend API Key is not configured in .env.local');
    return { message: 'Server configuration error. Please try again later.' };
  }

  // Validate the form data
  const formData = Object.fromEntries(data);
  const parsed = ContactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue: ZodIssue) => issue.message);
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues,
    };
  }

  const { name, email, phone, message } = parsed.data;

  try {
    // Send the email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: `Contact Form <noreply@${myEmail.split('@')[1]}>`, // Replace with your verified domain or resend.dev
      to: [myEmail], // Your email address where you want to receive submissions
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <h1>New Contact Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { message: 'Failed to send message. Please try again.' };
    }

    console.log('Email sent successfully:', emailData);
    return { message: 'Message sent successfully!' };

  } catch (e) {
    console.error('Error submitting form:', e);
    return { message: 'An unexpected error occurred. Please try again.' };
  }
} 