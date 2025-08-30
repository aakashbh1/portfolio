'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendContactMessage(values: z.infer<typeof contactSchema>) {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: 'Invalid input.' };
  }

  // Simulate sending an email. In a real application, you would
  // integrate an email service like Resend, SendGrid, or Nodemailer here.
  console.log('New contact message received:');
  console.log('Name:', parsed.data.name);
  console.log('Email:', parsed.data.email);
  console.log('Message:', parsed.data.message);

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Always return success for this simulation
  return { success: true };
}
