"use server"

import { db } from "@/lib/db"
import { contactLeads } from "@/lib/db/schema"

export type ContactState = {
  status: "idle" | "success" | "error"
  message: string
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const company = String(formData.get("company") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email, and message." }
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailValid) {
    return { status: "error", message: "Please enter a valid work email address." }
  }

  try {
    await db.insert(contactLeads).values({
      name,
      email,
      company: company || null,
      message,
    })
  } catch (err) {
    console.log("[v0] Failed to save contact lead:", err)
    return { status: "error", message: "Something went wrong saving your request. Please try again." }
  }

  // Best-effort email notification — submission is already saved.
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: "Insyra Analytics <onboarding@resend.dev>",
        to: "insyraanalytics@gmail.com",
        replyTo: email,
        subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\n\nMessage:\n${message}`,
      })
    } catch (err) {
      console.log("[v0] Failed to send notification email:", err)
    }
  }

  return {
    status: "success",
    message: "Thanks for reaching out! Our team will get back to you shortly.",
  }
}
