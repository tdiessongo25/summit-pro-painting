'use server';

import { Resend } from 'resend';
import { z, ZodIssue } from 'zod';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL;

// Define the expected shape of the form data using Zod
const EstimateFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }), // Assuming phone is required here
  address: z.string().min(5, { message: "Please enter a valid address." }),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  serviceType: z.string().min(1, { message: "Please select a service type." }),
  projectSize: z.string().min(1, { message: "Please select a project size." }),
  preferredDate: z.string().optional(), // Optional field
  message: z.string().optional(),       // Optional field
});

// Define the state type
export type EstimateFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
} | null;

// Server Action function
export async function submitEstimateForm(
  prevState: EstimateFormState,
  data: FormData
): Promise<EstimateFormState> {
  // Check server config
  if (!myEmail || !process.env.RESEND_API_KEY) {
    console.error('Error: Server environment variables not configured.');
    return { message: 'Server configuration error. Please try again later.' };
  }

  // Validate form data
  const formData = Object.fromEntries(data);
  const parsed = EstimateFormSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue: ZodIssue) => issue.message);
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues,
    };
  }

  // Destructure validated data
  const { name, email, phone, address, projectType, serviceType, projectSize, preferredDate, message } = parsed.data;

  try {
    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: `Estimate Request <noreply@${myEmail.split('@')[1]}>`, // Use your verified domain
      to: [myEmail],
      subject: `New Estimate Request from ${name} (${projectType})`,
      replyTo: email,
      html: `
        <h1>New Estimate Request</h1>
        <h2>Contact Information:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <hr>
        <h2>Project Details:</h2>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Project Size:</strong> ${projectSize}</p>
        <p><strong>Preferred Start Date:</strong> ${preferredDate || 'Not specified'}</p>
        <hr>
        <p><strong>Additional Details:</strong></p>
        <p>${message || 'None'}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { message: 'Failed to send estimate request. Please try again.' };
    }

    console.log('Estimate email sent successfully:', emailData);
    return { message: 'Estimate request sent successfully! We will contact you soon.' };

  } catch (e) {
    console.error('Error submitting estimate form:', e);
    return { message: 'An unexpected error occurred. Please try again.' };
  }
} 