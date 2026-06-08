import { SITE_NAME, SITE_PHONE, SITE_URL } from "@/lib/seo";

export default function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/premixlogo.svg`,
        telephone: SITE_PHONE,
        areaServed: [
          { "@type": "City", name: "Махачкала" },
          { "@type": "AdministrativeArea", name: "Республика Дагестан" },
          { "@type": "Country", name: "Россия" },
        ],
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/live/premixice.jpg`,
        telephone: SITE_PHONE,
        priceRange: "₽₽",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Махачкала",
          addressRegion: "Республика Дагестан",
          addressCountry: "RU",
        },
        areaServed: [
          "Махачкала",
          "Республика Дагестан",
          "Россия",
        ],
        description:
          "Производство натуральных заготовок для лимонадов, авторских чаев, колд брю и шотов для кофеен, баров и ресторанов.",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "ru-RU",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
