import CatalogView from "@/components/Catalog/CatalogView";
import CatalogJsonLd from "@/components/Seo/CatalogJsonLd";
import { catalogMetadata } from "@/lib/catalog-seo";

export const metadata = catalogMetadata;

export default function CatalogPage() {
  return (
    <>
      <CatalogJsonLd />
      <CatalogView />
    </>
  );
}
