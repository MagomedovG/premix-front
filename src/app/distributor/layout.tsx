import type { Metadata } from "next";
import "../globals.css";
import MainHeader from "@/components/MainHeader/MainHeader";
import MainFooter from "@/components/MainFooter/MainFooter";



export const metadata: Metadata = {
  title: "Premix Lab | Дистрибюторы",
  description: "Сотрудничество на понятных условиях. Перепродажа заготовок для бара.",
  authors: [{ name: "Сотрудничество", url: "https://premixlab.ru/distributor" }],
  icons:'/icons/favicon.ico',
  metadataBase: new URL("https://premixlab.ru/distributor"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Premix Lab | Дистрибюторы",
    description: "Делайте бизнес на понятных условиях. Оптовые поставки лимонадов, cold brew и чаев для баров, ресторанов и кофеен. Брендированные меню и акция 4+1.",
    url: "https://premixlab.ru/distributor",
    siteName: "Premix Lab",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://premixlab.ru/distrtitle.png",
        width: 500,
        height: 315,
        alt: "Делайте бизнес на понятных условиях | Заготовки для общепита в Дагестане и по России",
      },
    ],
  },
  keywords: [
    // Брендовые + гео
    "Франшиза", "Дистрибюторы", "Бизнес в общепите", "Продажа заготовок", "Авторские чаи купить", "Заготовки на лимонады купить", "Сотрудничество с кофейнями", "Продажа заготовок", "Лимонады оптом",
    "Premix Lab", "Premix Lab Махачкала", "Premix Lab Дагестан", "Premix Lab официальный сайт", "Premix Lab напитки оптом",

    // Лимонады
    "Лимонады для кафе", "Авторские лимонады оптом", "Щавель заготовка","Заготовка на щавелевый лимонад", "Щавель", "Заготовки для лимонадов", "Напитки для баров оптом",

    // Cold brew
    "Cold brew оптом", "Колд брю кофе Махачкала", "Заготовка для холодного кофе", "Кофе для HoReCa Дагестан", 

    // Чаи
    "Авторские чаи для ресторанов", "Чай для баров и кафе", "Премиальные чаи оптом", "Заготовки для чая HoReCa",

    // Для HoReCa
    "Напитки для кафе и ресторанов", "HoReCa поставки Дагестан", "Оптовый поставщик напитков Махачкала", "Сиропы и заготовки для баров",
    "Меню с логотипом для ресторанов", "Снабжение кофеен напитками", "Поставщик cold brew и чаев",

    // УТП
    "Акция 4+1 лимонады", "Где заказать напитки для кафе", "Оптовые напитки для HoReCa", "Поставщик заготовок в Махачкале",
    "Напитки для заведений с доставкой", "Заготовки для баров Дагестан", "HoReCa продукция Premix Lab",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}

      >
        {children}
      </body>
    </html>
  );
}
