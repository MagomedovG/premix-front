"use client";

import { Plus } from "lucide-react";
import { CATALOG_SHOW_IMAGES, type CatalogProduct } from "@/data/catalog";
import { cn } from "@/lib/utils";

type CatalogItemProps = {
  product: CatalogProduct;
  defaultUnit?: string;
  onAdd: () => void;
};

export default function CatalogItem({
  product,
  defaultUnit = "л",
  onAdd,
}: CatalogItemProps) {
  const unit = product.unit ?? defaultUnit;

  if (CATALOG_SHOW_IMAGES) {
    return (
      <article
        className={cn(
          "group flex flex-col rounded-2xl border border-[#264653]/10 bg-white p-4",
          "transition-all duration-300 hover:border-[#264653]/20 hover:shadow-md"
        )}
      >
        <div className="aspect-square w-full rounded-xl overflow-hidden bg-[#f7f9fa] border border-[#264653]/8 mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        <h3 className="text-sm md:text-base font-semibold text-[#264653] leading-snug mb-1 flex-1">
          {product.name}
        </h3>

        <p className="text-base font-bold text-[#BB0000] tabular-nums mb-3">
          {product.price} ₽
          <span className="text-xs font-medium text-[#264653]/45"> / {unit}</span>
        </p>

        <button
          type="button"
          onClick={onAdd}
          className={cn(
            "flex cursor-pointer items-center justify-center gap-1.5 w-full rounded-xl py-2.5 text-sm font-semibold",
            "bg-[#264653] text-white transition-colors duration-200",
            "hover:bg-[#1e3844] active:scale-[0.98]"
          )}
        >
          <Plus className="w-4 h-4" strokeWidth={2.5} />
          В корзину
        </button>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group flex items-center gap-2.5 rounded-xl border border-[#264653]/10 bg-white px-3 py-2.5",
        "transition-all duration-200 hover:border-[#264653]/20 hover:bg-[#f7f9fa]/60"
      )}
    >
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-[#264653] leading-snug line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm font-bold text-[#BB0000] tabular-nums mt-0.5">
          {product.price} ₽
          <span className="text-xs font-medium text-[#264653]/40"> / {unit}</span>
        </p>
      </div>

      <button
        type="button"
        onClick={onAdd}
        aria-label={`Добавить ${product.name} в корзину`}
        className={cn(
          "shrink-0 cursor-pointer w-8 h-8 rounded-lg flex items-center justify-center",
          "bg-[#264653] text-white transition-colors duration-200",
          "hover:bg-[#BB0000] active:scale-95"
        )}
      >
        <Plus className="w-4 h-4" strokeWidth={2.5} />
      </button>
    </article>
  );
}
