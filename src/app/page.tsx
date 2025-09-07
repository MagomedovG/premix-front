import MainSection from "@/components/MainSection/MainSection";
import PriceSlider from "@/components/PriceSlider/PriceSlider";
import '@/css/embla.css'
import { PriceData } from "@/assets/PriceSliderData";
import PremixIs from "@/components/PremixIs/PremixIs";
import ClientsSection from "@/components/ClientsSection/ClientsSection";
import HowItWorksSection from "@/components/HowItWorksSection/HowItWorksSection";
import EmblaInfiniteSquares from "@/components/CatalogSlider/CatalogSlider";
import Loader from "@/components/Loader/Loader";
import SubmitSection from "@/components/SubmitSection/SubmitSection";
import MainFooter from "@/components/MainFooter/MainFooter";

export default function Home() {

  return (
    <>
      <Loader title="Premix Lab - заготовки для бара" time={1500}/>
      <MainSection/>
      <PremixIs/>
      <div id="price-section"></div>
      <PriceSlider slides={PriceData}/>
      <EmblaInfiniteSquares/>
      <div id="clients-section"></div>
      <ClientsSection/>
      <div id="submit-section"></div>
      <SubmitSection/>
    </>
  );
}
