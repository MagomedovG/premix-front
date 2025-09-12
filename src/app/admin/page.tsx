"use client";

import { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { products } from "@/data/products";
import CryptoJS from "crypto-js";

export default function AdminPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const secret = "premix-secret-key"; // ⚠️ вынести в .env

  const encryptedDate = CryptoJS.AES.encrypt(today, secret).toString();

  const link = selectedId
    ? `localhost:3000/products/${selectedId}?date=${encodeURIComponent(encryptedDate)}`
    : "";

  const downloadQR = () => {
    if (!canvasRef.current) return;
    const url = canvasRef.current.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = `qr-${selectedId}-${today}.png`;
    a.click();
  };

  return (
    <div className="flex flex-col items-center p-10 h-[95vh] pt-[20vh]">
      <h1 className="text-2xl font-bold mb-6">Генерация QR для товара</h1>

      {/* Выбор товара */}
      <select
        className="border p-2 rounded mb-6"
        value={selectedId ?? ""}
        onChange={(e) => setSelectedId(Number(e.target.value))}
      >
        <option value="">-- выбери товар --</option>
        {products.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      {/* QR-код */}
      {selectedId && (
        <div className="flex flex-col items-center gap-4">
          <QRCodeCanvas
            value={link}
            size={200}
            includeMargin
            ref={canvasRef}
          />
          <button
            onClick={downloadQR}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Скачать QR
          </button>
          <p>{link}</p>
        </div>
      )}
    </div>
  );
}
