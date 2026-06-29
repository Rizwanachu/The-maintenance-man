import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, service, message } = req.body ?? {};

  if (!name || !phone || !email || !service) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"The Maintenance Man Website" <${process.env.SMTP_FROM}>`,
    to: process.env.SMTP_USER,
    replyTo: email,
    subject: `New Appointment Request – ${service}`,
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}${message ? `\n\nMessage:\n${message}` : ''}`,
    html: `
      <h2 style="color:#e02020">New Appointment Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Service:</strong> ${service}</p>
      ${message ? `<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
    `,
  });

  return res.status(200).json({ success: true });
}
