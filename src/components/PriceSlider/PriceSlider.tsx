// PriceSlider.tsx
"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import { SlideData } from "@/types";
import Container from "../Container/Container";

export default function PriceSlider({ slides }: { slides: SlideData[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // переключение слайдов
  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // активный слайд
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  // прогрессбар
  const onScroll = useCallback((api: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, api.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll).on("scroll", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <Container>
      <h3 className="mt-24 mb-6 text-black text-center text-[53px] md:text-[68px] font-bold leading-[64px] md:leading-[74px]">
        Каталог продукции
      </h3>
      <p className=" text-black max-w-2xl text-center opacity-70 mx-auto text-[18px] md:text-[20px] leading-[28px] font-semibold">
        В данном каталоге указаны оптовые цены*
      </p>

      <div className="embla">
        {/* dots */}
        <div className="embla__dots">
          {slides.map((slide, index) => (
            <button
              className={`embla__dot ${
                index === selectedIndex ? "is-selected" : ""
              }`}
              onClick={() => scrollTo(index)}
              key={slide.id}
            >
              <img
                src={slide.dot.icon}
                alt={slide.dot.title}
                className="embla__dot-icon"
              />
              <span className="text-xs md:text-sm mt-1">{slide.dot.title}</span>
              <span className="embla__dot-indicator" />
            </button>
          ))}
        </div>
        <div className="flex justify-center">
            <div className="embla__progress mt-2 mb-2 h-1 w-full bg-gray-200 rounded">
              <div
                className="embla__progress__bar h-1 bg-red-500 rounded"
                style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
              />
          </div>
        </div>
        
        {/* viewport */}
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide) => (
              <div className="embla__slide" key={slide.id}>
                {!slide?.video ? (
                  <img
                    src={slide.data.images[0]}
                    className={
                      slide.data?.double ? "embla_double_image" : "embla_image embla-first_image"
                    }
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="embla_double_image"
                  >
                    <source src={slide?.video} type="video/mp4" />
                    Ваш браузер не поддерживает видео
                  </video>
                )}
                <img src={slide.data.images[1]} className="embla_image" />
              </div>
            ))}
          </div>
        </div>

        {/* прогрессбар */}
       
      </div>
    </Container>
  );
}
