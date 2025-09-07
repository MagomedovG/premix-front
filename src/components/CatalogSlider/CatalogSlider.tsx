'use client'
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";


export default function EmblaInfiniteSquares({ slides = 12, squareSize = 150 }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [AutoScroll({ speed: 0.7, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

//   const items = Array.from({ length: slides }).map((_, i) => i + 1);
const items = [
  { name: 'щавельсъемки', price: '380' },
  { name: 'малинамарсъемки', price: '530' },
  { name: 'вишнягранатсъемки', price: '480' },
  { name: 'имбирныйсъемки', price: '400' },
  { name: 'кивиклубникасъемки', price: '480' },
  { name: 'колдбрюсъемки', price: '480' },
  { name: 'малинаимбсъемки', price: '480' },
  { name: 'мангомараксъемки', price: '530' },
  { name: 'мохитоклассикасъемки', price: '480' },
  { name: 'мохитоклубсъемки', price: '480' },
  { name: 'облепихасъемки', price: '480' },
  { name: 'ппщавельсъемки', price: '650' },
  { name: 'смородинасъемки', price: '480' },
  { name: 'тониклемонграсссъемки', price: '500' },
  { name: 'цитруссъемки', price: '420' },
  { name: 'шотайвагрейпсъемки', price: '200' },
  { name: 'шотгранатсъемки', price: '200' },
  { name: 'шотимбирныйсъемки', price: '200' },
  { name: 'шотщавельсъемки', price: '200' },
  { name: 'ягодныйчайсъемки', price: '470' },
  { name: 'айвагрейпсъемки', price: '530' },
  { name: 'гранатсъемки', price: '530' },
  { name: 'ананасгранатсъемки', price: '480' },
];

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div className="w-full mt-24 ">
      {/* Embla viewport */}
      <div className="relative">
            <div style={{position:'absolute', bottom:'-30px', width:'100vw', backgroundColor:'#264653', height:'1px'}}/>
            <div style={{position:'absolute', top:'-30px', width:'100vw', backgroundColor:'#264653', height:'1px'}}/>
        <div
          className="embla overflow-hidden w-full"
          ref={emblaRef}
          aria-label="infinite white squares carousel"
        >
          <div className="embla__container flex gap-2 items-center py-6" style={{ paddingLeft: 16, paddingRight: 16 }}>
            {items.map((n, index) => (
              <div
                key={index}
                className="embla__slidess flex-none gap-2 flex justify-center items-center flex-col"
                style={{ width: squareSize, height: squareSize }}
              >
                <div className="w-[100px] h-full bg-white rounded-lg shadow-md flex items-center flex-col justify-center select-none"
                     style={{ border: '1px solid rgba(0,0,0,0.06)' }}>

                  {/* <span className="text-sm font-medium text-gray-700">{n}</span> */}
                  <img src={`/catalog-stickers/${n.name}.jpg`} alt="" className="h-[80%]"/>
                </div>
                <p style={{opacity:0.45, color:'black'}}>{n.price} руб.</p>

              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        
      </div>

      {/* small hint */}
    </div>
  );
}
