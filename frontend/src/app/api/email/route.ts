import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
export async function POST(req: NextRequest, ev: any) {
  const { email, name, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_APP_EMAIL,
      pass: process.env.NEXT_PUBLIC_APP_PASSWORD,
    },
  });

  let mailOptions: Mail.Options = {
    from: process.env.NEXT_PUBLIC_APP_EMAIL,
    to: email,
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendPromise = new Promise<string>((resolve, reject) => {
    transporter.sendMail(mailOptions, (err: any, data: any) => {
      if (!err) {
        resolve("Email sent");
      } else {
        reject(err.message);
      }
    });
  });

  try {
    const result = await sendPromise;
    return NextResponse.json({ message: "Email Sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
