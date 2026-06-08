import Container from "../Container/Container";

const clients = [
  "Bisou bisou",
  "Wake up",
  "Гостинная",
  "Liu",
  "Jeff",
  "Fes",
  "Центр",
  "B1",
  "Юта",
  "Seasons of coffee",
  "Пора вставать",
  "Dose coffee",
  "Le coffee",
  "Coffee point",
  "Pekarius",
  "IMC",
  "Парамакс",
  "Kihas",
  "Anish",
  "Маяк",
  "Twenty",
  "Lit coffee",
  "Location",
  "Piko",
  "Паразит",
  "Coffeeteri",
  "Safari",
  "Орота",
  "Baker park",
  "Rush coffee",
  "Costa rika",
  "Camelia",
  "Shirin coffee",
  "B144",
  "Unkai",
  "Вшоколаде",
  "Пикабу",
  "Урбеч",
  "Кик",
  "Пять звезд",
  "Рахат",
  "Cava",
  "Sv33",
  "Village",
  "Sharab coffee",
  "Yr",
  "Brioche",
  "Mono",
  "Velvet flowers",
  "Mond",
  "Ribsher",
  "Астрамед",
  "Чечня",
  "Ингушетия",
  "Симферополь",
  "Татарстан",
  "Москва",
];

export default function ClientsSection() {
  return (
    <Container>
      <section className="my-24 max-w-5xl mx-auto">
        <h3 className="text-black text-[53px] md:text-[68px] font-bold mb-6 leading-[64px] md:leading-[74px] text-center">
          Наши клиенты
        </h3>
        <p className="text-black max-w-2xl mx-auto text-center text-[18px] md:text-[20px] leading-[28px] font-semibold mb-12">
          Нам доверяют вопрос вкуса и качества.
        </p>

        <p className="clients-typewriter text-[15px] md:text-[17px] leading-[1.9] md:leading-[2] text-[#264653] text-center md:text-left">
          {clients.map((name, index) => (
            <span key={name}>
              <span className="transition-colors duration-200 hover:text-[#BB0000]">
                {name}
              </span>
              {index < clients.length - 1 && (
                <span className="text-[#264653]/25 select-none"> · </span>
              )}
            </span>
          ))}
        </p>
      </section>
    </Container>
  );
}
