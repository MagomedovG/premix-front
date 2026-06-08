import { catalogCategories } from "@/data/catalog";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export default function CatalogJsonLd() {
  let position = 0;
  const items = catalogCategories.flatMap((category) =>
    category.products.map((product) => {
      position += 1;
      return {
      "@type": "ListItem",
      position,
      item: {
        "@type": "Product",
        name: product.name,
        category: category.title,
        image: product.image.startsWith("http")
          ? product.image
          : `${SITE_URL}${product.image}`,
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "RUB",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/catalog#${category.id}`,
        },
      },
    };
    })
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Каталог ${SITE_NAME}`,
    url: `${SITE_URL}/catalog`,
    numberOfItems: items.length,
    itemListElement: items,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
