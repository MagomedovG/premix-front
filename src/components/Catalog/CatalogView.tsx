"use client";

import { useMemo, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import CatalogItem from "@/components/Catalog/CatalogItem";
import CatalogCart from "@/components/Catalog/CatalogCart";
import { catalogCategories } from "@/data/catalog";
import { getCartTotal, type CartLine } from "@/lib/catalog-order";
import { cn } from "@/lib/utils";

export default function CatalogView() {
  const [activeCategoryId, setActiveCategoryId] = useState(
    catalogCategories[0].id
  );
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const activeCategory = useMemo(
    () =>
      catalogCategories.find((c) => c.id === activeCategoryId) ??
      catalogCategories[0],
    [activeCategoryId]
  );

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = getCartTotal(cart);

  const addToCart = (product: (typeof catalogCategories)[0]["products"][0]) => {
    const unit = product.unit ?? activeCategory.defaultUnit ?? "л";

    setCart((prev) => {
      const existing = prev.find((item) => item.productId === product.id);
      if (existing) {
        return prev.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          unit,
          quantity: 1,
        },
      ];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.productId !== productId));
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.productId !== productId));
  };

  return (
    <main className="pt-6 md:pt-8 pb-24 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10">
          <BlurFade inView>
            <h1 className="text-black text-[42px] md:text-[56px] font-bold mb-4 leading-tight text-center">
              Каталог продукции
            </h1>
            <p className="text-center text-[#264653]/70 text-base md:text-lg font-semibold mb-8 max-w-2xl mx-auto">
              Заготовки для кофеен, баров и ресторанов. Выберите категорию и
              добавьте позиции в корзину.
            </p>
          </BlurFade>

          <nav className="sticky top-0 z-40 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 py-3 mb-8 bg-white/90 backdrop-blur-md border-y border-[#264653]/10">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {catalogCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategoryId(category.id)}
                  className={cn(
                    "shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                    activeCategoryId === category.id
                      ? "bg-[#264653] text-white shadow-sm"
                      : "bg-[#f7f9fa] text-[#264653]/70 hover:bg-[#264653]/5 hover:text-[#264653]"
                  )}
                >
                  {category.shortTitle}
                  <span className="ml-1.5 text-xs opacity-60">
                    {category.products.length}
                  </span>
                </button>
              ))}
            </div>
          </nav>

          <BlurFade key={activeCategory.id} inView delay={0.05}>
            <section>
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#264653] mb-2">
                  {activeCategory.title}
                </h2>
                {activeCategory.description && (
                  <p className="text-sm md:text-base text-[#264653]/65 font-medium leading-relaxed max-w-3xl rounded-xl bg-[#f7f9fa] border border-[#264653]/8 px-4 py-3">
                    {activeCategory.description}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                {activeCategory.products.map((product) => (
                  <CatalogItem
                    key={product.id}
                    product={product}
                    defaultUnit={activeCategory.defaultUnit}
                    onAdd={() => addToCart(product)}
                  />
                ))}
              </div>
            </section>
          </BlurFade>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {catalogCategories
              .filter((c) => c.id !== activeCategoryId)
              .map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategoryId(category.id)}
                  className="text-sm font-semibold text-[#264653]/50 hover:text-[#BB0000] transition-colors underline-offset-4 hover:underline"
                >
                  → {category.shortTitle}
                </button>
              ))}
          </div>
      </div>

      <button
        type="button"
        onClick={() => setCartOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-3.5",
          "bg-[#BB0000] text-white font-semibold shadow-lg",
          "hover:bg-[#a30000] transition-all duration-200 hover:scale-[1.02]"
        )}
      >
        <ShoppingBag className="w-5 h-5" />
        Корзина
        {cartCount > 0 && (
          <span className="bg-white text-[#BB0000] text-xs font-bold rounded-full min-w-[22px] h-[22px] flex items-center justify-center px-1">
            {cartCount}
          </span>
        )}
        {cartTotal > 0 && (
          <span className="text-sm opacity-90 hidden sm:inline tabular-nums">
            {cartTotal} ₽
          </span>
        )}
      </button>

      <CatalogCart
        items={cart}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onClear={() => setCart([])}
      />
    </main>
  );
}
