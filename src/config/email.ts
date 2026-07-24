export const emailConfig = {
  smtp: {
    host: process.env.SMTP_HOST || 'localhost',
    port: parseInt(process.env.SMTP_PORT || '1025', 10),
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
    secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for others
  },
  adminEmail: process.env.CONTACT_RECEIVER_EMAIL || 'info@gastro-kompass.at',
  fromEmail: process.env.CONTACT_SENDER_EMAIL || '"Gastrokompass" <no-reply@gastrokompass.at>',
};
