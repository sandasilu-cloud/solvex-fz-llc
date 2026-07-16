import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      company,
      phone,
      email,
      country,
      service,
      message,
      website, // honeypot field, should always be empty for real users
    } = body;

    // Spam trap: if this hidden field has a value, it was filled by a bot
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !phone || !email) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Solvex Website" <${process.env.GMAIL_USER}>`,
      to: "sales@solvexeng.com",
      replyTo: email,
      subject: `New Enquiry from ${name}${company ? " - " + company : ""}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country || "-"}</p>
        <p><strong>Service Required:</strong> ${service || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "-").replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}