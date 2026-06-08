import type { Metadata, Viewport } from "next";
import "./globals.css";
import Analytics from "@/components/Seo/Analytics";
import OrganizationJsonLd from "@/components/Seo/OrganizationJsonLd";
import { buildPageMetadata, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: `${SITE_NAME} | Заготовки для лимонадов, чаев и колд брю — Махачкала, Дагестан, Россия`,
    description:
      "Premix Lab — натуральные заготовки для кофеен и баров: лимонады (щавель от 380 ₽/л), авторские чаи, концентраты для колд брю и шоты. Оптовые поставки по Махачкале, Дагестану и всей России.",
    path: "/",
    keywords: [
      "заготовки Махачкала",
      "заготовки Дагестан",
      "заготовки для кафе Россия",
      "купить заготовки для лимонадов",
      "щавель оптом Махачкала",
      "колд брю оптом Дагестан",
      "поставщик напитков для HoReCa",
    ],
  }),
  title: {
    default: `${SITE_NAME} | Заготовки для лимонадов, чаев и колд брю`,
    template: `%s | ${SITE_NAME}`,
  },
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/favicon.ico",
  },
  manifest: "/icons/favicon.ico",
  verification: {
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#264653",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <OrganizationJsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
