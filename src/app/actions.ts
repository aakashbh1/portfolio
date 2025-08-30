'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

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

  const { name, email, message } = parsed.data;

  // Create a transporter object using the default SMTP transport
  // You need to set up your environment variables for this to work.
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT || '587', 10),
    secure: process.env.EMAIL_SERVER_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASS,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.EMAIL_SERVER_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New message from ${name}`,
    replyTo: email,
    text: message,
    html: `
      <h1>New Message from Portfolio Contact Form</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: 'Failed to send message. Please try again later.' };
  }
}
