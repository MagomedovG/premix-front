import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body?.phone || !body?.message || !Array.isArray(body?.items)) {
      return NextResponse.json({ error: "Invalid order" }, { status: 400 });
    }

    // Заказ принят сайтом. Здесь можно подключить CRM, Telegram или WhatsApp Business API.
    console.log("[order]", {
      phone: body.phone,
      total: body.total,
      items: body.items,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
