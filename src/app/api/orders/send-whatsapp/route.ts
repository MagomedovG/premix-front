import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body?.message || typeof body.message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    const webhookUrl = process.env.WHATSAPP_ORDER_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { error: "WhatsApp webhook not configured" },
        { status: 503 }
      );
    }

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: body.message }),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json({ error: "Send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
