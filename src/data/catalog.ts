export type CatalogProduct = {
  id: string;
  name: string;
  price: number;
  unit?: string;
  image: string;
};

export type CatalogCategory = {
  id: string;
  title: string;
  shortTitle: string;
  description?: string;
  defaultUnit?: string;
  products: CatalogProduct[];
};

export const WHATSAPP_ORDER_PHONE = "79285455896";

/** Включить фото в каталоге, когда все позиции отсняты */
export const CATALOG_SHOW_IMAGES = false;

const productImage = (file: string) => `/product-images/${file}`;
const sticker = (slug: string) => `/catalog-stickers/${slug}.jpg`;
const fallback = "/catalog/catalog1page.png";

export const catalogCategories: CatalogCategory[] = [
  {
    id: "lemonades",
    title: "Заготовки на лимонады",
    shortTitle: "Лимонады",
    description: "100 мл заготовки + 150 мл газировки + лёд",
    defaultUnit: "л",
    products: [
      { id: "lemonades-1", name: "Щавель", price: 380, image: productImage("щавель.JPG") },
      { id: "lemonades-2", name: "Ананас-гранат", price: 480, image: productImage("ананасгранат.JPG") },
      { id: "lemonades-3", name: "Малина-маракуйя", price: 530, image: productImage("малинамаракуйя.JPG") },
      { id: "lemonades-4", name: "Манго-маракуйя", price: 530, image: productImage("мангомаракуйя.JPG") },
      { id: "lemonades-5", name: "Киви-клубника", price: 480, image: sticker("кивиклубникасъемки") },
      { id: "lemonades-6", name: "Айва-грейпфрут", price: 530, image: productImage("айвагрейпфрут.jpg") },
      { id: "lemonades-7", name: "Цитрус", price: 420, image: productImage("цитрус.JPG") },
      { id: "lemonades-8", name: "Гранат", price: 530, image: productImage("гранат.JPG") },
      { id: "lemonades-9", name: "Вишня-гранат", price: 480, image: productImage("вишнягранат.JPG") },
      { id: "lemonades-10", name: "Щавель ПП", price: 650, image: productImage("щавельпремикс.JPG") },
      { id: "lemonades-11", name: "Мохито классический", price: 480, image: productImage("мохитоклассика.JPG") },
      { id: "lemonades-12", name: "Апероль", price: 750, image: fallback },
      { id: "lemonades-13", name: "Мята-абрикос", price: 530, image: fallback },
      { id: "lemonades-14", name: "Смородина-слива", price: 580, image: sticker("смородинасъемки") },
      { id: "lemonades-15", name: "Ежевика-лемонграсс", price: 580, image: sticker("тониклемонграсссъемки") },
    ],
  },
  {
    id: "teas",
    title: "Заготовки на авторские чаи",
    shortTitle: "Чаи",
    description: "100 мл заготовки + 200 мл кипятка (желательно подогреть)",
    defaultUnit: "л",
    products: [
      { id: "teas-1", name: "Малина-имбирь", price: 480, image: productImage("малинаимбирь.JPG") },
      { id: "teas-2", name: "Ягодный", price: 470, image: productImage("ягодамалина.jpg") },
      { id: "teas-3", name: "Смородина-розмарин", price: 480, image: productImage("смородинаразмарин.JPG") },
      { id: "teas-4", name: "Облепиховый", price: 480, image: sticker("облепихасъемки") },
      { id: "teas-5", name: "Имбирный", price: 400, image: sticker("имбирныйсъемки") },
      { id: "teas-6", name: "Марокканский", price: 480, image: productImage("марроканский.jpg") },
      { id: "teas-7", name: "Шиповник-темьян", price: 480, image: productImage("шиповни-темьян.jpg") },
      { id: "teas-8", name: "Глинтвейн красный", price: 480, image: productImage("глинтвейнкрасный.JPG") },
      { id: "teas-9", name: "Глинтвейн белый", price: 480, image: "/catalog/catalog2page.png" },
    ],
  },
  {
    id: "concentrates",
    title: "Натуральные концентраты для Колд брю",
    shortTitle: "Концентраты",
    description:
      "Добавляется по вкусу и зависит от используемого кофе",
    defaultUnit: "л",
    products: [
      { id: "concentrates-1", name: "Малина концентрат", price: 530, image: productImage("малинамаракуйя.JPG") },
      { id: "concentrates-2", name: "Смородина концентрат", price: 530, image: productImage("смородинаразмарин.JPG") },
      { id: "concentrates-3", name: "Вишня концентрат", price: 530, image: productImage("вишнягранат.JPG") },
    ],
  },
  {
    id: "shots",
    title: "Заготовки на шоты",
    shortTitle: "Шоты",
    description: "Готовый продукт, ни с чем не нужно разбавлять",
    defaultUnit: "шт",
    products: [
      { id: "shots-1", name: "Шот гранатовый", price: 200, image: sticker("шотгранатсъемки") },
      { id: "shots-2", name: "Шот лимон-имбирь", price: 200, image: sticker("шотимбирныйсъемки") },
      { id: "shots-3", name: "Шот айва-грейпфрут", price: 200, image: sticker("шотайвагрейпсъемки") },
      { id: "shots-4", name: "Шот щавель", price: 200, image: sticker("шотщавельсъемки") },
      { id: "shots-5", name: "Комплект шотов", price: 700, unit: "комплект", image: "/catalog/catalogshotspage.png" },
    ],
  },
  {
    id: "cold-brew",
    title: "Колд брю",
    shortTitle: "Колд брю",
    defaultUnit: "л",
    products: [
      { id: "cold-brew-1", name: "Колд брю", price: 480, unit: "л", image: sticker("колдбрюсъемки") },
      { id: "cold-brew-2", name: "Колд брю гранат", price: 160, unit: "банка", image: productImage("колдбрюгранат.JPG") },
      { id: "cold-brew-3", name: "Колд брю вишня", price: 160, unit: "банка", image: productImage("колдбрювишня.JPG") },
      { id: "cold-brew-4", name: "Колд брю смородина", price: 160, unit: "банка", image: productImage("колдбрюсмородина.JPG") },
    ],
  },
];
