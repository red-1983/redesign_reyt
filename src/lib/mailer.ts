import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}
export async function sendEmail({ to, subject, html }: SendEmailOptions) {
  const mailOptions = {
    from: `"Ваш сайт" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  };
  await transporter.sendMail(mailOptions);
}
