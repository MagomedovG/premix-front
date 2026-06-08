import type { Metadata } from "next";

export const SITE_URL = "https://premixlab.ru";
export const SITE_NAME = "Premix Lab";
export const SITE_PHONE = "+79285455896";

export const GEO_KEYWORDS = [
  "Махачкала",
  "Дагестан",
  "Россия",
  "Северный Кавказ",
  "оптом по России",
  "доставка по Дагестану",
  "поставки в Махачкалу",
];

export const PRODUCT_KEYWORDS = [
  "заготовки для лимонадов",
  "заготовки на авторские чаи",
  "концентраты для колд брю",
  "заготовки на шоты",
  "колд брю оптом",
  "щавель заготовка",
  "лимонад щавель",
  "мохито заготовка",
  "гранатовый лимонад",
  "айва грейпфрут заготовка",
  "ягодный чай заготовка",
  "имбирный чай",
  "облепиховый чай",
  "шот щавель",
  "шот гранат",
  "напитки для кофеен",
  "заготовки для бара",
  "заготовки для HoReCa",
  "поставщик заготовок для кафе",
];

export const DEFAULT_KEYWORDS = [
  SITE_NAME,
  `${SITE_NAME} Махачкала`,
  `${SITE_NAME} Дагестан`,
  `${SITE_NAME} Россия`,
  "Premix Lab официальный сайт",
  "Premix Lab каталог",
  "заготовки для общепита",
  "оптовые заготовки для баров",
  "натуральные заготовки для напитков",
  ...GEO_KEYWORDS,
  ...PRODUCT_KEYWORDS,
];

const DEFAULT_OG_IMAGE = "/live/premixice.jpg";

type PageSeoOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
}: PageSeoOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const imageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  return {
    title,
    description,
    keywords: [...new Set([...keywords, ...DEFAULT_KEYWORDS])],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "ru_RU",
      type: ogType,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "geo.region": "RU-DA",
      "geo.placename": "Махачкала",
      "content-language": "ru",
    },
  };
}
