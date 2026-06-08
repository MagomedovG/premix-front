import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Партнёрам и дистрибьюторам — сотрудничество | Махачкала, Дагестан, Россия",
  description:
    "Станьте партнёром Premix Lab: оптовые поставки заготовок для лимонадов, чаев и колд брю. Выгодные условия для дистрибьюторов в Махачкале, Дагестане и по России.",
  path: "/distributor",
  keywords: [
    "дистрибьютор заготовок",
    "партнёр Premix Lab",
    "франшиза напитков",
    "опт лимонады Дагестан",
    "бизнес HoReCa Махачкала",
  ],
  ogImage: "/distrtitle.png",
});

export default function DistributorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
