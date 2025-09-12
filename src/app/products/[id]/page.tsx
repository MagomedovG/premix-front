import { notFound } from "next/navigation";
import CryptoJS from "crypto-js";
import { products } from "@/data/products";

const secret = "premix-secret-key";

export default function ProductPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}) {
  const { id } = params;
  const product = products.find((p) => p.id === Number(id));

  const encryptedDate = searchParams?.date;
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
      if (decoded) date = formatDate(decoded);
    } catch {
      console.error("Ошибка расшифровки даты");
    }
  }

  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6 mb-[20vh]">
      <div className="mt-18 mb-8 md:my-24 flex flex-col md:flex-row justify-between md:items-center">
        <div>
          <h1 className="product-title text-5xl text-gray-900">{product.name}</h1>
          <h3 className="product-description text-lg leading-[10px] mb-4 md:mb-0 md:pl-2">{product.description}</h3>
        </div>
        {date && <p className="text-black">Дата изготовления: {date}</p>}
      </div>

      <div className="grid md:grid-cols-2 md:gap-8 items-start">
        <div className="flex flex-col justify-between h-full">
          <img src={product.image} alt="" className="rounded-2xl shadow-md mb-6 border object-cover h-[430px]"/>
          <a
              href="https://wa.me/79285455896"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hidden md:block text-center w-full hover:bg-orange-600 text-white font-semibold text-lg px-20 py-4 rounded-lg transition duration-300 transform"
          >
              Сотрудничать
          </a>

        </div>

        <div className="flex flex-col">
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6 border">
            <p className="text-xl text-gray-700 font-semibold mb-4">Состав:</p>
            <ul className="space-y-2 text-gray-700">
              <li>{product.compound}</li>
            </ul>
          </div>
          {product.characteristics && (
            <div className="bg-white rounded-2xl p-6 shadow-md mb-6 border">
              <p className="text-xl text-gray-700 font-semibold mb-4">
                Характеристики
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">Объём:</span>{" "}
                  {product.characteristics.volume}
                </li>
                <li>
                  <span className="font-medium">Упаковка:</span>{" "}
                  {product.characteristics.packaging}
                </li>
                <li>
                  <span className="font-medium">Срок годности:</span>{" "}
                  {product.characteristics.shelfLife}
                </li>
                <li>
                  <span className="font-medium">Хранение:</span>{" "}
                  {product.characteristics.storage}
                </li>
              </ul>
            </div>
          )}

          <div className="bg-gray-50 rounded-2xl p-6 shadow-md mb-6">
            <p className="text-xl text-gray-700 font-semibold mb-2">Цены</p>
            <p className="text-gray-800">
              Цена за банку: <span className="font-bold">{product.price_wholesale} ₽</span> /{" "}
              {product.unit}
            </p>
            <p className="text-gray-800">
              Цена за упаковку (20шт):{" "}
              <span className="font-bold">{product.price_retail} ₽</span> /{" "}
              {product.unit}
            </p>
          </div>

          <div className="flex gap-2 flex-wrap mb-5 md:mb-2">
            {product.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
          <a
                  href="https://wa.me/79285455896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 block md:hidden  text-center w-full hover:bg-orange-800  text-white font-semibold text-lg px-20 py-4 rounded-lg transition duration-300 transform"
              >
                  Сотрудничать
              </a>
        </div>
        
      </div>
      
    </div>
  );
}
