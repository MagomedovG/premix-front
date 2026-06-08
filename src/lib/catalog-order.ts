import { WHATSAPP_ORDER_PHONE } from "@/data/catalog";

export type CartLine = {
  productId: string;
  name: string;
  price: number;
  unit: string;
  quantity: number;
};

export function getCartTotal(items: CartLine[]) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function buildOrderMessage(items: CartLine[], phone: string) {
  const lines = items.map(
    (item) =>
      `• ${item.name} — ${item.quantity} ${item.unit} × ${item.price} ₽ = ${item.price * item.quantity} ₽`
  );

  return [
    "Заказ Premix Lab",
    "",
    `Телефон: ${phone}`,
    "",
    ...lines,
    "",
    `Итого: ${getCartTotal(items)} ₽`,
    "",
    "отправлено с сайта",
  ].join("\n");
}

export function getWhatsAppOrderUrl(message: string) {
  return `https://wa.me/${WHATSAPP_ORDER_PHONE}?text=${encodeURIComponent(message)}`;
}

function logOrderOnServer(items: CartLine[], phone: string, message: string) {
  fetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      phone,
      items,
      message,
      total: getCartTotal(items),
    }),
  }).catch(() => {});
}

export async function sendOrderFromSite(items: CartLine[], phone: string) {
  const message = buildOrderMessage(items, phone);
  const url = getWhatsAppOrderUrl(message);

  logOrderOnServer(items, phone, message);

  try {
    const response = await fetch("/api/orders/send-whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (response.ok) {
      return { success: true as const, message };
    }
  } catch {
    // fallback below
  }

  const popup = window.open(url, "_blank", "noopener,noreferrer");

  if (popup) {
    return { success: true as const, message };
  }

  return { success: false as const, message };
}
