"use client"
import { useState, useEffect, useRef } from "react";
import Container from "../Container/Container";
import styles from './premixis.module.scss'

const baseItems = [
  {
    title: "Заготовки на Лимонады",
    text: "100мл заготовки + 150мл газировки + лёд",
    desktop: { top: "20%", left: "20%" },
    mobile: { top: "15%", left: "10%" }
  },
  {
    title: "Заготовки на Авторские Чаи",
    text: "100мл заготовки + кипяток",
    desktop: { top: "45%", left: "15%" },
    mobile: { top: "42%", left: "5%" }
  },
  {
    title: "Натуральные концентраты на Колд брю",
    text: "Вишня, гранат, малина",
    desktop: { top: "70%", left: "20%" },
    mobile: { bottom: "12%", left: "10%" }
  },
  {
    title: "Premix'ы",
    text: "Лимонады, гранатовый тоник, колд брю и матча - с собой!",
    desktop: { top: "20%", right: "20%" },
    mobile: { top: "15%", right: "10%" }
  },
  {
    title: "Колд брю",
    text: "Готовые бутылочки колд брю с собой",
    desktop: { top: "45%", right: "15%" },
    mobile: { top: "42%", right: "8%" }
  },
  {
    title: "Шоты",
    text: "Натуральны шоты - щавель, айва-грейпфрут, гранат, имбирь-лимон",
    desktop: { top: "70%", right: "20%" },
    mobile: { bottom: "12%", right: "10%" }
  }
];

export default function PremixIs() {
  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 550);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Клик вне карточки закрывает её
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (active !== null && cardRefs.current[active] && !cardRefs.current[active].contains(e.target)) {
        setActive(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [active]);

  return (
    <div className="bg-[#BB0000] py-16">
      <Container>
        <div className="grid grid-cols-3 gap-8 items-center max-[770px]:grid-cols-1">
          
          {/* Левая колонка */}
          <div className="flex flex-col gap-12 text-right pr-4 max-[770px]:hidden">
            {baseItems.slice(0,3).map((item, i) => (
              <div key={i}>
                <h3 className="text-white text-lg font-bold">{item.title}</h3>
                <p className="text-white text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Центр (картинка + иконки для мобилы) */}
          <div className="relative flex justify-center">
            <img src='/live/allpositions.jpg' className={`${styles.image} max-h-[420px]`} />
            
            {/* Иконки поверх картинки */}
            <div className="hidden max-[770px]:block absolute inset-0">
              {baseItems.map((item, i) => (
                <div
                  key={i}
                  className="absolute flex flex-col items-center"
                  style={isMobile ? item.mobile : item.desktop}
                  ref={el => cardRefs.current[i] = el}
                >
                  {/* мягкий пинг */}
                  <span className="absolute inline-flex h-12 w-12 rounded-full bg-[#BB0000] opacity-75 softPing" />

                  {/* кнопка */}
                  <button
                    className="relative bg-white rounded-full w-12 h-12 text-[#BB0000] font-bold z-10"
                    onClick={() => setActive(active === i ? null : i)}
                  >
                    i
                  </button>

                  {/* карточка */}
                  <div
                    className={`absolute top-14 text-center transition-all duration-200 z-11 ease-in-out overflow-hidden ${
                      active === i
                        ? "opacity-100 translate-y-0 max-h-40"
                        : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
                    } bg-white text-black text-xs rounded-lg shadow-md p-3 w-40`}
                  >
                    <h4 className="font-bold">{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка */}
          <div className="flex flex-col gap-12 text-left pl-4 max-[770px]:hidden">
            {baseItems.slice(3).map((item, i) => (
              <div key={i}>
                <h3 className="text-white text-lg font-bold">{item.title}</h3>
                <p className="text-white text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
