import React from 'react';
import styles from './mainsection.module.scss';
import Link from 'next/link';

const MainSection = () => {
  return (
    <section className="bg-[#264653] relative h-screen w-full overflow-hidden pt-12">
      {/* Видео с "растворяющимися" краями */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-16 right-0 w-full md:w-[60%] h-full object-cover"
      >
        <source src="/movie/open.MOV" type="video/mp4" />
        Ваш браузер не поддерживает видео
      </video>

      {/* Затемнение поверх видео, чтобы текст лучше читался */}
      <div className="absolute top-16 right-0  w-full md:w-[60%] h-full bg-black/70"></div>

      {/* Контент по центру */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full max-w-4xl mx-auto px-4">
        <h2 className="text-white text-[53px] md:text-[68px] font-bold mb-6 leading-[64px] md:leading-[74px]">
          Что такое<br />Premix?
        </h2>
        <p className="text-white max-w-2xl mx-auto text-[18px] md:text-[20px] leading-[28px] font-semibold mb-8">
          PREMIX LAB – это цех по производству натуральных заготовок для бара кофеен и кафе.
        </p>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-4 mb-6">
          <Link
            href="#price-section"
            className={`${styles.button} cursor-pointer bg-transparent hover:bg-[#BB0000] border border-[#BB0000] text-white py-3 px-8 rounded-full transition duration-300`}
          >
            СМОТРЕТЬ КАТАЛОГ
          </Link>
          <Link
            href="#clients-section"
            className={`${styles.button} cursor-pointer bg-[#BB0000] hover:bg-[#c73939] text-white py-3 px-8 rounded-full transition duration-300`}
          >
            ГДЕ ПОПРОБОВАТЬ?
          </Link>
        </div>

        {/* Партнерская кнопка */}
        <Link
          href="#submit-section"
          className={`${styles.button} cursor-pointer bg-[#BB0000] hover:bg-[#c73939] text-white py-3 px-8 rounded-full transition duration-300`}
        >
          СТАТЬ ПАРТНЕРОМ
        </Link>
      </div>
    </section>
  );
};

export default MainSection;
