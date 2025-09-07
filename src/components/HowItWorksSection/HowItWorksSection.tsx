'use client'
import React from 'react'
import { motion } from 'framer-motion'
// import { ArrowRight } from 'lucide-react'

// HowItWorksSection.jsx
// Next.js / React component styled with Tailwind CSS.
// Enhanced with animations (Framer Motion) and playful interactions.

const steps = [
  {
    title: 'Стабильный вкус и качество.',
    desc: 'Исключаем проблему зависимости вкуса от баристы на смене',
    // link: 'Подробнее',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 8c0-1.657 1.567-3 3.5-3S10 6.343 10 8s-1.567 3-3.5 3S3 9.657 3 8z" fill="#F59E0B" />
        <path d="M14 7h6v10a2 2 0 0 1-2 2h-4V7z" fill="#FDE68A" />
      </svg>
    ),
  },
  {
    title: 'Стабильная себестоимость',
    desc: 'Стабильность цены с минимальной разницей между нашими заготовками и ваших проработок.',
    // link: 'Условия',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 12h18v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6z" fill="#F59E0B" />
        <path d="M7 8a5 5 0 1 1 10 0v4H7V8z" fill="#FDE68A" />
      </svg>
    ),
  },
  {
    title: 'Минимум усилий',
    desc: 'Нет хаоса на баре при большом потоке клиентов. Приготовить вкусный напиток сможет даже стажер.',
    // link: 'Преимущества',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2l3 6h6l-4.5 3.5L20 18l-8-5-8 5 1.5-6.5L1 8h6l3-6z" fill="#F59E0B" />
      </svg>
    ),
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden bg-[#264653]">
      {/* bg-gradient-to-b 
      from-white to-[#7C868A]  */}

      <motion.div
        className="absolute top-10 -left-10 h-32 w-32 rounded-full bg-amber-200 opacity-30 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-10 -right-10 h-40 w-40 rounded-full bg-orange-200 opacity-30 blur-3xl"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <div className="container text-white mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Кому мы нужны?
          </motion.h2>
          <motion.p
            className="mt-3 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            3 Преимущества работы с нами.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-10 grid-cols-1 md:grid-cols-3 items-start">
          {steps.map((step, i) => (
            <motion.article
              key={i}
              className="group relative p-6 rounded-2xl border border-amber-100 bg-white shadow-sm hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-amber-50 ring-1 ring-amber-100 group-hover:bg-amber-100 transition">
                {step.icon}
              </div>

              <h3 className="mt-4 text-xl text-black font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.desc}</p>

              <motion.div
                className="mt-4 flex items-center text-amber-600 font-medium"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {/* <span className="mr-2">{step.link}</span> */}
                {/* <ArrowRight className="h-4 w-4" /> */}
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-14 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-slate-700">Готовы начать? Оставьте заявку — мы свяжемся в течение рабочего дня.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-700 transition"
            >
              Оставить заявку
            </a>
            <a
              href="/catalog.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-amber-200 px-5 py-3 text-sm font-medium text-amber-700 hover:bg-amber-50 transition"
            >
              Скачать прайс
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
