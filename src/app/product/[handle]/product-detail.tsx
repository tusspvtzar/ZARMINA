"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { useCart } from "@/components/cart-provider";
import { formatPrice } from "@/lib/shopify";
import type { ShopifyProduct } from "@/lib/shopify-types";

export function ProductDetail({ product }: { product: ShopifyProduct }) {
  const { addToCart, isLoading } = useCart();
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [mainImageIdx, setMainImageIdx] = useState(0);
  const [added, setAdded] = useState(false);

  const variant = product.variants[selectedVariantIdx] ?? product.variants[0];
  const images = product.images.length > 0 ? product.images : product.featuredImage ? [product.featuredImage] : [];
  const mainImage = images[mainImageIdx] ?? images[0];
  const hasMultipleVariants = product.variants.length > 1 || (product.variants[0]?.title !== "Default Title");

  const handleAddToCart = async () => {
    if (!variant) return;
    await addToCart(variant.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-ivory text-charcoal">
      <Nav />

      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-16">
        <div className="mx-auto max-w-[1400px]">
          {/* Breadcrumb */}
          <Reveal>
            <nav className="eyebrow mb-10 flex items-center gap-2">
              <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/collections" className="hover:text-charcoal transition-colors">Collections</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-charcoal">{product.title}</span>
            </nav>
          </Reveal>

          <div className="grid gap-12 md:gap-20 md:grid-cols-[1.2fr_1fr] items-start">
            {/* Image gallery */}
            <Reveal>
              <div className="space-y-3">
                {/* Main image */}
                {mainImage && (
                  <div className="relative aspect-[4/5] overflow-hidden bg-beige">
                    <Image
                      src={mainImage.url}
                      alt={mainImage.altText ?? product.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setMainImageIdx(i)}
                        className={[
                          "relative aspect-square overflow-hidden bg-beige border-2 transition-colors",
                          i === mainImageIdx ? "border-charcoal" : "border-transparent hover:border-stone",
                        ].join(" ")}
                      >
                        <Image
                          src={img.url}
                          alt={img.altText ?? ""}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>

            {/* Product info */}
            <div className="md:sticky md:top-32">
              <Reveal delay={100}>
                {product.vendor && (
                  <div className="eyebrow text-royal mb-4">{product.vendor}</div>
                )}
                <h1 className="font-display text-4xl md:text-6xl text-charcoal leading-tight">
                  {product.title}
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-6 flex items-baseline gap-4">
                  <span className="font-display text-2xl text-charcoal">
                    {formatPrice(
                      variant?.price.amount ?? product.priceRange.minVariantPrice.amount,
                      variant?.price.currencyCode ?? product.priceRange.minVariantPrice.currencyCode,
                    )}
                  </span>
                  {variant?.compareAtPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(variant.compareAtPrice.amount, variant.compareAtPrice.currencyCode)}
                    </span>
                  )}
                </div>
              </Reveal>

              {/* Variant selector */}
              {hasMultipleVariants && (
                <Reveal delay={250}>
                  <div className="mt-8 space-y-4">
                    {product.options.map((option) => (
                      <div key={option.id}>
                        <label className="eyebrow text-charcoal mb-3 block">
                          {option.name}
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {option.values.map((value) => {
                            const isSelected = variant?.selectedOptions.some(
                              (o) => o.name === option.name && o.value === value,
                            );
                            return (
                              <button
                                key={value}
                                onClick={() => {
                                  const idx = product.variants.findIndex((v) =>
                                    v.selectedOptions.some(
                                      (o) => o.name === option.name && o.value === value,
                                    ),
                                  );
                                  if (idx >= 0) setSelectedVariantIdx(idx);
                                }}
                                className={[
                                  "px-5 py-2.5 text-xs tracking-widest uppercase border transition-all",
                                  isSelected
                                    ? "border-charcoal bg-charcoal text-ivory"
                                    : "border-border hover:border-charcoal text-charcoal",
                                ].join(" ")}
                              >
                                {value}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {/* Add to bag */}
              <Reveal delay={300}>
                <button
                  onClick={handleAddToCart}
                  disabled={isLoading || !variant?.availableForSale}
                  className={[
                    "mt-10 w-full btn-luxe justify-center text-sm transition-all",
                    added
                      ? "bg-emerald text-ivory border-emerald"
                      : "bg-charcoal text-ivory border-charcoal hover:bg-royal hover:border-royal",
                    (!variant?.availableForSale) ? "opacity-50 cursor-not-allowed" : "",
                  ].join(" ")}
                >
                  {!variant?.availableForSale
                    ? "Sold Out"
                    : added
                      ? "✓ Added to Bag"
                      : isLoading
                        ? "Adding…"
                        : "Add to Bag"}
                </button>
              </Reveal>

              {/* Description */}
              <Reveal delay={400}>
                <div className="mt-12 border-t border-border/60 pt-8">
                  <div className="eyebrow mb-4">About this piece</div>
                  <p className="font-serif text-lg text-charcoal/80 leading-[1.8]">
                    {product.description}
                  </p>
                </div>
              </Reveal>

              {/* Details */}
              <Reveal delay={450}>
                <div className="mt-8 border-t border-border/60 pt-8 space-y-3">
                  {product.productType && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Category</span>
                      <span className="text-charcoal">{product.productType}</span>
                    </div>
                  )}
                  {product.vendor && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Atelier</span>
                      <span className="text-charcoal">{product.vendor}</span>
                    </div>
                  )}
                  {product.tags.length > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Craft</span>
                      <span className="text-charcoal capitalize">
                        {product.tags.slice(0, 3).join(", ")}
                      </span>
                    </div>
                  )}
                </div>
              </Reveal>

              {/* Shipping note */}
              <Reveal delay={500}>
                <div className="mt-8 p-5 bg-beige/60 text-xs text-charcoal/70 leading-relaxed">
                  <span className="font-medium text-charcoal">Complimentary shipping</span>
                  {" "}on all orders. Each piece is made to order and ships within 2–4 weeks, 
                  carefully wrapped in our signature linen packaging.
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
