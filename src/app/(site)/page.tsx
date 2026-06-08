import type { Metadata } from "next";
import MainSection from "@/components/MainSection/MainSection";
import PriceSlider from "@/components/PriceSlider/PriceSlider";
import "@/css/embla.css";
import { PriceData } from "@/assets/PriceSliderData";
import PremixIs from "@/components/PremixIs/PremixIs";
import ClientsSection from "@/components/ClientsSection/ClientsSection";
import EmblaInfiniteSquares from "@/components/CatalogSlider/CatalogSlider";
import Loader from "@/components/Loader/Loader";
import SubmitSection from "@/components/SubmitSection/SubmitSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Заготовки для кофеен и баров — лимонады, чаи, колд брю | Махачкала, Дагестан",
  description:
    "Premix Lab производит натуральные заготовки для напитков: лимонады, авторские чаи, колд брю и шоты. Стабильный вкус для кофеен в Махачкале, Дагестане и по всей России. Смотрите каталог и оформляйте заказ.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Loader title="Premix Lab - заготовки для бара" time={1500} />
      <MainSection />
      <PremixIs />
      <div id="price-section"></div>
      <PriceSlider slides={PriceData} />
      <EmblaInfiniteSquares />
      <div id="clients-section"></div>
      <ClientsSection />
      <div id="submit-section"></div>
      <SubmitSection />
    </>
  );
}
