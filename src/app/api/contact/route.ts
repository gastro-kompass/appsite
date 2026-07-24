import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { emailConfig } from '@/config/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { company, name, email, phone, bereich, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Create SMTP transport
    const transporter = nodemailer.createTransport({
      host: emailConfig.smtp.host,
      port: emailConfig.smtp.port,
      secure: emailConfig.smtp.secure,
      auth:
        emailConfig.smtp.auth.user && emailConfig.smtp.auth.pass
          ? {
              user: emailConfig.smtp.auth.user,
              pass: emailConfig.smtp.auth.pass,
            }
          : undefined,
    });

    // Format email content
    const mailOptions = {
      from: emailConfig.fromEmail,
      to: emailConfig.adminEmail,
      subject: `Neue Kontaktanfrage von ${name}${company ? ` (${company})` : ''}`,
      text: `
Neue Kontaktanfrage über gastrokompass.at:

Name: ${name}
Unternehmen: ${company || 'Nicht angegeben'}
E-Mail: ${email}
Telefon: ${phone || 'Nicht angegeben'}
Bereich: ${bereich || 'Nicht angegeben'}

Nachricht:
${message}
      `.trim(),
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eef0d8; border-radius: 12px; background-color: #ffffff;">
          <!-- Header Banner -->
          <div style="background-color: #040404; padding: 24px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; font-family: sans-serif;">
              GASTRO<span style="color: #9DC40E;">KOMPASS</span>
            </h1>
            <p style="color: #a0a0a0; margin: 4px 0 0 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; font-family: sans-serif;">
              Neue Kontaktanfrage
            </p>
          </div>

          <!-- Content Body -->
          <div style="padding: 24px 20px; color: #333333; line-height: 1.6;">
            <p style="margin-top: 0; font-size: 15px; color: #555555;">
              Hallo Admin, es gibt eine neue Kontaktanfrage über die Webseite:
            </p>

            <!-- Details Table -->
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tbody>
                <tr style="border-bottom: 1px solid #f2f4e8;">
                  <td style="padding: 12px 0; font-weight: bold; color: #575757; width: 30%; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Name</td>
                  <td style="padding: 12px 0; color: #040404; font-size: 14px;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f2f4e8;">
                  <td style="padding: 12px 0; font-weight: bold; color: #575757; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Unternehmen</td>
                  <td style="padding: 12px 0; color: #040404; font-size: 14px;">${company || '<em style="color: #999;">Nicht angegeben</em>'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f2f4e8;">
                  <td style="padding: 12px 0; font-weight: bold; color: #575757; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">E-Mail</td>
                  <td style="padding: 12px 0; font-size: 14px; font-weight: 600;"><a href="mailto:${email}" style="color: #9DC40E; text-decoration: none;">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f2f4e8;">
                  <td style="padding: 12px 0; font-weight: bold; color: #575757; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Telefon</td>
                  <td style="padding: 12px 0; color: #040404; font-size: 14px;">${phone ? `<a href="tel:${phone}" style="color: #040404; text-decoration: none;">${phone}</a>` : '<em style="color: #999;">Nicht angegeben</em>'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f2f4e8;">
                  <td style="padding: 12px 0; font-weight: bold; color: #575757; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Bereich</td>
                  <td style="padding: 12px 0; color: #040404; font-size: 14px;"><span style="background-color: #eef0d8; color: #575757; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; display: inline-block;">${bereich || 'Nicht angegeben'}</span></td>
                </tr>
              </tbody>
            </table>

            <!-- Message Section -->
            <div style="margin-top: 25px;">
              <h3 style="font-size: 12px; color: #575757; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Nachricht</h3>
              <div style="background-color: #fafbfa; border: 1px solid #eef0d8; border-radius: 8px; padding: 16px; color: #040404; font-size: 14px; white-space: pre-wrap; line-height: 1.5; font-family: inherit;">${message}</div>
            </div>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding: 20px; border-top: 1px solid #f2f4e8; background-color: #fafbfa; border-radius: 0 0 12px 12px;">
            <p style="margin: 0; font-size: 10px; color: #a0a0a0; font-family: sans-serif; letter-spacing: 0.2px;">
              Diese E-Mail wurde über das Kontaktformular auf gastrokompass.at versendet.
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        error:
          'Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es später noch einmal.',
      },
      { status: 500 }
    );
  }
}
