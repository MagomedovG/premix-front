"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Minus, Plus, ShoppingBag, X } from "lucide-react";
import {
  buildOrderMessage,
  getCartTotal,
  getWhatsAppOrderUrl,
  sendOrderFromSite,
  type CartLine,
} from "@/lib/catalog-order";
import {
  formatRuPhoneMask,
  isRuPhoneComplete,
} from "@/lib/phone-mask";
import { cn } from "@/lib/utils";

type CatalogCartProps = {
  items: CartLine[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  onClear: () => void;
};

export default function CatalogCart({
  items,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemove,
  onClear,
}: CatalogCartProps) {
  const [step, setStep] = useState<"cart" | "phone">("cart");
  const [phone, setPhone] = useState("+7");
  const [submitting, setSubmitting] = useState(false);
  const total = getCartTotal(items);

  useEffect(() => {
    if (!isOpen) {
      setStep("cart");
      setPhone("+7");
      setSubmitting(false);
    }
  }, [isOpen]);

  const handleOrderClick = () => {
    setStep("phone");
  };

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isRuPhoneComplete(phone)) {
      alert("Введите полный номер телефона");
      return;
    }

    setSubmitting(true);

    const result = await sendOrderFromSite(items, phone);

    if (result.success) {
      alert("Заказ оформлен, ждите подтверждения");
      onClear();
      onClose();
      setSubmitting(false);
      return;
    }

    window.location.href = getWhatsAppOrderUrl(
      result.message ?? buildOrderMessage(items, phone)
    );
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatRuPhoneMask(e.target.value));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Закрыть корзину"
      />

      <aside className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#264653]/10">
          <div className="flex items-center gap-2">
            {step === "phone" && (
              <button
                type="button"
                onClick={() => setStep("cart")}
                className="p-1 rounded-lg hover:bg-[#f7f9fa] text-[#264653]/60 mr-1"
                aria-label="Назад"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <ShoppingBag className="w-5 h-5 text-[#264653]" />
            <h2 className="text-lg font-bold text-[#264653]">
              {step === "cart" ? "Корзина" : "Контакт"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#f7f9fa] text-[#264653]/60"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === "cart" ? (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <p className="text-center text-[#264653]/50 py-12 font-medium">
                  Корзина пуста
                </p>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.productId}
                      className="flex gap-3 pb-4 border-b border-[#264653]/8 last:border-0"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-[#264653] text-sm leading-snug">
                          {item.name}
                        </p>
                        <p className="text-xs text-[#264653]/50 mt-0.5">
                          {item.price} ₽ / {item.unit}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateQuantity(item.productId, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-lg border border-[#264653]/15 flex items-center justify-center hover:bg-[#f7f9fa]"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center font-semibold text-sm tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateQuantity(item.productId, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-lg border border-[#264653]/15 flex items-center justify-center hover:bg-[#f7f9fa]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemove(item.productId)}
                        className="text-[#264653]/30 hover:text-[#BB0000] self-start"
                        aria-label="Удалить"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-[#264653]/10 p-5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[#264653]">Итого</span>
                  <span className="text-xl font-bold text-[#BB0000] tabular-nums">
                    {total} ₽
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleOrderClick}
                  className="w-full rounded-xl bg-[#BB0000] hover:bg-[#a30000] text-white font-semibold py-3.5 transition-colors"
                >
                  Заказать
                </button>
              </div>
            )}
          </>
        ) : (
          <form
            onSubmit={handlePhoneSubmit}
            className="flex flex-col flex-1 p-5"
          >
            <p className="text-sm text-[#264653]/65 font-medium mb-6 leading-relaxed">
              Укажите номер телефона — мы свяжемся для подтверждения заказа.
            </p>

            <label className="block mb-auto">
              <span className="text-sm font-semibold text-[#264653]/70 mb-1.5 block">
                Телефон
              </span>
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                inputMode="tel"
                autoFocus
                placeholder="+7 (999) 000-00-00"
                className={cn(
                  "w-full rounded-xl border border-[#264653]/15 bg-[#f7f9fa] px-4 py-3",
                  "text-[#264653] placeholder:text-[#264653]/35 text-sm tracking-wide",
                  "focus:outline-none focus:border-[#264653]/30 focus:bg-white"
                )}
              />
            </label>

            <div className="space-y-3 pt-6 border-t border-[#264653]/10">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#264653]/60">Сумма заказа</span>
                <span className="font-bold text-[#BB0000] tabular-nums">
                  {total} ₽
                </span>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-[#BB0000] hover:bg-[#a30000] disabled:opacity-60 text-white font-semibold py-3.5 transition-colors"
              >
                {submitting ? "Отправка..." : "Заказать"}
              </button>
            </div>
          </form>
        )}
      </aside>
    </div>
  );
}
