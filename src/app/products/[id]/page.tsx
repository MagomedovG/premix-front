"use client";
import { notFound, useSearchParams } from "next/navigation";
import CryptoJS from "crypto-js";
import { use } from "react";
const secret = "premix-secret-key";
import { products } from "@/data/products";

export default function ProductPage({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
    const { id } = use(params)
  const searchParams = useSearchParams();
  const product = products.find((p) => p.id === Number(id));
  const encryptedDate = searchParams.get("date");
  let date: string | null = null;

  function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  
  if (encryptedDate) {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedDate, secret);
      const decoded = bytes.toString(CryptoJS.enc.Utf8);
      date = formatDate(decoded)
    } catch {
      console.error("Ошибка расшифровки даты");
    }
  }
  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Название */}
      <div className="mt-18 mb-8 md:my-24 flex flex-col md:flex-row justify-between md:items-center">
        <div>
            <h1 className="product-title text-5xl text-gray-900">{product.name}</h1>
            <h3 className="product-description text-lg pl-2">заготовка на лимонад</h3>
        </div>
        
        {date && <p>Дата изготовления: {date}</p>}
      </div>
      

      <div className="grid md:grid-cols-2 md:gap-8 items-start">
        {/* Картинка */}
        <div className="flex flex-col"> 

            {/* <div className="w-[50%] rounded-2xl overflow-hidden shadow-lg border mb-6">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-cover"
                />
            </div> */}
            <div className="bg-white rounded-2xl p-6 shadow-md mb-6 border">
                <p className="text-xl text-gray-700 font-semibold mb-4">Состав:</p>
                <ul className="space-y-2 text-gray-700">
                <li>{product.compound}</li>
                </ul>
            </div>

        </div>

        {/* Описание + цены */}
        <div className="flex flex-col">
          {/* <p className="text-sm text-gray-700 mb-6">{product.description}</p> */}
          
          {product.characteristics && (
            <div className="bg-white rounded-2xl p-6 shadow-md mb-6 border">
                <p className="text-xl text-gray-700 font-semibold mb-4">Характеристики</p>
                <ul className="space-y-2 text-gray-700">
                <li><span className="font-medium">Объём:</span> {product.characteristics.volume}</li>
                <li><span className="font-medium">Упаковка:</span> {product.characteristics.packaging}</li>
                <li><span className="font-medium">Срок годности:</span> {product.characteristics.shelfLife}</li>
                <li><span className="font-medium">Хранение:</span> {product.characteristics.storage}</li>
                </ul>
            </div>
        )}

          {/* Цены */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md mb-6">
            <p className="text-xl text-gray-700 font-semibold mb-2">Цены</p>
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
