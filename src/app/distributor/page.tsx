import SubmitSection from "@/components/SubmitSection/SubmitSection";
import Link from "next/link";

export default function DistributorsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="bg-gradient-to-r from-[#a40404] to-[#ff1f1f] text-white pt-50 pb-15 px-6 text-center">
        <div className="flex flex-col items-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Станьте дистрибьютором Premix Lab
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-18">
            Авторские лимонады, cold brew и чаи — премиальные напитки,
            которые востребованы по всей России.
          </p>
          <div  className="shadow-lg rounded-lg animate-bounce">
            <Link 
                href="/files/Коммерческое предложение для дистрибюторов.pdf" 
                target="_blank" 
                className="bg-[#264653] hover:bg-[#264653] text-white font-semibold text-sm text-center md:text-lg px-10 py-4 rounded-lg transition duration-300 transform"
            >
              Показать условия
            </Link>
          </div>
          <p className="text-sm opacity-70">в коммерческом предложении описаны условия сотрудничества*</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Что такое дистрибьюторство?
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Дистрибьютор Premix Lab — это ваш бизнес в вашем регионе. 
              Вы получаете готовый продукт, условия оптовых закупок, 
              маркетинговую поддержку и развиваете рынок напитков 
              в своём городе.  
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Ваша задача — продавать наши заготовки для баров и кофеен, 
              мы обеспечиваем качество, бренд и стабильные поставки.  
            </p>
          </div>
          <img src="/distributorillustration.png"  className="hidden md:flex w-full object-contain bg-[#fff9ee] rounded-2xl h-64  items-center justify-center text-orange-400 font-bold text-xl"/>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src="/live/premixshavel.jpeg" className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl  flex items-center justify-center text-gray-400 font-bold text-xl"/>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Что за продукт вы продаёте?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              • Линейка заготовок на лимонады на натуральных ингредиентах  
              • Авторские чаи и cold brew  
              • Готовые премиксы в удобной упаковке  
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Продукция в банках, выглядит стильно и продаётся 
              не только вкусом, но и визуалом. Каждый продукт имеет техкарты 
              и легко внедряется в меню заведения.  
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Выгода и перспективы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#264653]/90 rounded-2xl shadow-md ">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Высокая маржа
              </h3>
              <p className="text-white opacity-70">
                До 43% маржи при оптовых продажах. 
                Продукт продаётся легко и имеет устойчивый спрос.  
              </p>
            </div>
            <div className="p-6 bg-[#264653]/90  rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Лестница скидок
              </h3>
              <p className="text-white opacity-70">
                Чем больше объем заказа - тем больше выгода. Зарабатывайте на объеме  
              </p>
            </div>
            <div className="p-6 bg-[#264653]/90  rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Поддержка
              </h3>
              <p className="text-white opacity-70">
                Постоянная обратная связь, консультации и помощь в работе.  
              </p>
            </div>
          </div>
        </div>
      </section>
      <SubmitSection/>
    </div>
  );
}
