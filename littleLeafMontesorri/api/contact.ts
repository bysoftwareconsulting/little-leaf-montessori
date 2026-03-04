import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, phone, childAge, program, message } = req.body ?? {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { error } = await resend.emails.send({
      from: "Someone Contacted you! <onboarding@resend.dev>",
      to: ["bysoftwareconsulting@gmail.com"],
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) return res.status(500).json({ error });

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: "Server error" });
  }
}