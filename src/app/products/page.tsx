"use client";

import { notFound, useSearchParams } from "next/navigation";
import CryptoJS from "crypto-js";
import { products } from "@/data/products";

const secret = "premix-secret-key"; // ⚠️ вынести в .env

export default function ProductPage() {
  const searchParams = useSearchParams();
  const encrypted = searchParams.get("data");

  let decrypted: { id: number; date: string } | null = null;

  if (encrypted) {
    try {
      const bytes = CryptoJS.AES.decrypt(encrypted, secret);
      const decoded = bytes.toString(CryptoJS.enc.Utf8);
      decrypted = JSON.parse(decoded);
    } catch (e) {
      console.error("Ошибка расшифровки:", e);
    }
  }

  const product = decrypted
    ? products.find((p) => p.id === decrypted?.id)
    : null;
    // const product = products.find((p) => p.id === Number(params.id));

  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Название */}
      <div className="my-24 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
        {decrypted?.date && <p>Дата изготовления: {decrypted?.date}</p>}
      </div>
      

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Картинка */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Описание + цены */}
        <div className="flex flex-col">
          <p className="text-lg text-gray-700 mb-6">{product.description}</p>

          {/* Цены */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md mb-6">
            <p className="text-xl font-semibold mb-2">Цены</p>
            <p className="text-gray-800">
              Опт: <span className="font-bold">{product.price_wholesale} ₽</span>{" "}
              / {product.unit}
            </p>
            <p className="text-gray-800">
              Розница:{" "}
              <span className="font-bold">{product.price_retail} ₽</span> /{" "}
              {product.unit}
            </p>
          </div>

          {/* Теги */}
          <div className="flex gap-2 flex-wrap mb-6">
            {product.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Кнопка */}
          <button className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow hover:bg-orange-600 transition text-lg">
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
}
