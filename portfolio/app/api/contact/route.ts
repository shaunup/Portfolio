import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  organization: z.string().max(100).optional(),
  reason: z.enum(["collaboration", "hiring", "question", "other"]),
  message: z.string().min(20).max(2000),
  honeypot: z.string().max(0).optional(),
});

// Simple in-memory rate limiting (per serverless instance)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const window = 60 * 60 * 1000; // 1 hour
  const limit = 5;

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + window });
    return true;
  }

  if (record.count >= limit) return false;
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse body
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid request", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // Honeypot check
    if (data.honeypot) {
      // Silent success to fool bots
      return NextResponse.json({ success: true });
    }

    // Send email via Resend (or log if not configured)
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL;

    if (resendApiKey && toEmail) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <noreply@shaunpimenta.com>",
          to: [toEmail],
          reply_to: data.email,
          subject: `Portfolio contact: ${data.reason} from ${data.name}`,
          text: [
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            data.organization ? `Organization: ${data.organization}` : "",
            `Reason: ${data.reason}`,
            "",
            `Message:`,
            data.message,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 500 }
        );
      }
    } else {
      // Development fallback
      console.log("[Contact form submission]", {
        name: data.name,
        email: data.email,
        organization: data.organization,
        reason: data.reason,
        message: data.message.slice(0, 100) + "…",
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
