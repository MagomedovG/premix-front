"use client";

import SubmitSection from "@/components/SubmitSection/SubmitSection";
import Link from "next/link";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { Package, BookOpen, Store } from "lucide-react";
import { useRef } from "react";


function StatCard({ value, suffix, label, delay }: { 
  value: number; 
  suffix: string; 
  label: string; 
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="p-6 sm:p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl"
    >
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-yellow-300">
        {inView ? <CountUp end={value} duration={2} /> : 0} {suffix}
      </h3>
      <p className="text-base sm:text-lg opacity-90">{label}</p>
    </motion.div>
  );
}

export default function DistributorsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative min-h-[80vh] md:h-[90vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <img
            src="/live/premixshavel.jpeg"
            className="w-full h-full object-cover"
            alt="Premix Lab Drinks"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Станьте дистрибьютором Premix Lab
          </h1>
          <p className="text-base sm:text-lg md:text-2xl opacity-90">
            Авторские лимонады, cold brew и чаи. <br />
            Высокая маржа. Готовый бренд. Поддержка.
          </p>
          <Link
            href="/files/Коммерческоепредложениедлядистрибюторов.pdf"
            target="_blank"
            className="bg-[#BB0000] hover:bg-[#c73939] text-white font-bold text-base sm:text-lg md:text-2xl px-8 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full shadow-2xl transform hover:scale-105 transition duration-300 flex items-center gap-2 sm:gap-3 animate-pulse"
          >
            Посмотреть условия
          </Link>
          <p className="text-xs sm:text-sm opacity-70">
            *в PDF описаны цены, акции и условия сотрудничества
          </p>
        </div>
      </section>

      {/* Выгода */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-r from-[#a40404] to-[#ff1f1f] text-white">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Ваша выгода как дистрибьютора
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            <StatCard value={43} suffix="%" label="Маржа на оптовых продажах" delay={0} />
            <StatCard value={250} suffix="%" label="Маржа для заведений" delay={0.2} />
            <StatCard value={8300} suffix="₽" label="Прибыль с партии (50л)" delay={0.4} />
          </div>
        </div>
      </section>

      {/* Продукт */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12 md:space-y-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Что вы продаёте?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                img: "/live/allin2.jpg",
                title: "Лимонады",
                desc: "10 порций из 1 литра. Натуральные ингредиенты.",
              },
              {
                img: "/live/allpositions.jpg",
                title: "Авторские чаи",
                desc: "Техкарты для бариста. Быстрая подача.",
              },
              {
                img: "/live/premixjeff.jpeg",
                title: "Cold Brew",
                desc: "Стильно выглядит и легко продаётся.",
              },
              {
                img: "/live/banks.JPG",
                title: "Премиксы в банках",
                desc: "Удобная фасовка. Готовые решения.",
              },
              {
                img: "/live/premixshavel.jpeg",
                title: "Хит — Щавель",
                desc: "Залог стабильных заказов и оборота.",
              },
              {
                img: "/live/shotgranate.jpg",
                title: "Гранат",
                desc: "Для лимонадов, чаёв, тоника и бамбла.",
              },
            ].map((p, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-52 sm:h-64 md:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-100 md:opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-90">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center space-y-10 sm:space-y-12 md:space-y-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Как всё устроено
          </h2>
          <div className="relative border-l-4 border-[#a40404] mx-auto max-w-xl sm:max-w-2xl">
            {[
              {
                title: "Делаешь заказ",
                desc: "Минимум 3л по Махачкале или от 8л в регионы",
                icon: <Package className="w-5 h-5 sm:w-6 sm:h-6 text-[#a40404]" />,
              },
              {
                title: "Получаешь инструкции",
                desc: "Техкарты и советы по ценообразованию",
                icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-[#a40404]" />,
              },
              {
                title: "Реализуешь продукт",
                desc: "Зарабатываешь на продажах под брендом Premix Lab",
                icon: <Store className="w-5 h-5 sm:w-6 sm:h-6 text-[#a40404]" />,
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.3 }}
                viewport={{ once: true }}
                className="mb-8 sm:mb-10 md:mb-12 ml-4 sm:ml-6 text-left"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-full shadow-md">
                    {step.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 ml-10 sm:ml-12">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#a40404] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Готовы начать?
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90">
            Ознакомьтесь с коммерческим предложением и свяжитесь с нами для обсуждения
            условий
          </p>
          <p className="text-xs sm:text-sm opacity-70">
            +7 928 545-58-96 • @premixlab • premixlab.ru
          </p>
        </div>
      </section>

      {/* <SubmitSection /> */}
    </div>
  );
}
