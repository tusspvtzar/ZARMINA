"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import { formatPrice, isShopifyConfigured } from "@/lib/shopify";

export function CartDrawer() {
  const { cart, isOpen, closeCart, updateQuantity, removeItem, isLoading } =
    useCart();

  if (!isOpen) return null;

  const lines = cart?.lines ?? [];
  const isEmpty = lines.length === 0;
  const configured = isShopifyConfigured();

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-midnight/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-ivory flex flex-col shadow-2xl fade-slow">
        {/* Header */}
        <div className="flex items-center justify-between h-20 px-6 border-b border-border/60 shrink-0">
          <span className="eyebrow text-charcoal">
            Your Bag ({cart?.totalQuantity ?? 0})
          </span>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-2xl text-charcoal hover:text-royal transition-colors"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          {!configured ? (
            /* Not connected to Shopify yet */
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="font-display text-5xl text-gold mb-6">✦</div>
              <h3 className="font-display text-2xl text-charcoal mb-3">
                Coming soon
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Our shop is being prepared. Join the Caravan to be the first to
                know when we launch.
              </p>
              <Link
                href="/caravan"
                onClick={closeCart}
                className="mt-8 btn-luxe"
              >
                Join the Caravan
              </Link>
            </div>
          ) : isEmpty ? (
            /* Empty cart */
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="font-display text-5xl text-gold mb-6">✦</div>
              <h3 className="font-display text-2xl text-charcoal mb-3">
                Your bag is empty
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Explore our collections and find something that speaks to you.
              </p>
              <Link
                href="/collections"
                onClick={closeCart}
                className="mt-8 btn-luxe"
              >
                Explore Collections
              </Link>
            </div>
          ) : (
            /* Cart items */
            <ul className="space-y-6">
              {lines.map((line) => {
                const img =
                  line.merchandise.image ??
                  line.merchandise.product.featuredImage;
                const variant =
                  line.merchandise.title !== "Default Title"
                    ? line.merchandise.title
                    : null;

                return (
                  <li
                    key={line.id}
                    className="flex gap-4 pb-6 border-b border-border/40"
                  >
                    {/* Image */}
                    {img && (
                      <Link
                        href={`/product/${line.merchandise.product.handle}`}
                        onClick={closeCart}
                        className="relative w-24 h-28 shrink-0 bg-beige overflow-hidden"
                      >
                        <Image
                          src={img.url}
                          alt={img.altText ?? line.merchandise.product.title}
                          fill
                          className="object-cover"
                        />
                      </Link>
                    )}

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <Link
                          href={`/product/${line.merchandise.product.handle}`}
                          onClick={closeCart}
                          className="font-display text-lg text-charcoal hover:text-royal transition-colors line-clamp-1"
                        >
                          {line.merchandise.product.title}
                        </Link>
                        {variant && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {variant}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-border/60">
                          <button
                            onClick={() =>
                              line.quantity > 1
                                ? updateQuantity(line.id, line.quantity - 1)
                                : removeItem(line.id)
                            }
                            disabled={isLoading}
                            className="w-8 h-8 flex items-center justify-center text-sm text-charcoal hover:bg-beige transition-colors disabled:opacity-50"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="w-8 h-8 flex items-center justify-center text-xs text-charcoal border-x border-border/60">
                            {line.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(line.id, line.quantity + 1)
                            }
                            disabled={isLoading}
                            className="w-8 h-8 flex items-center justify-center text-sm text-charcoal hover:bg-beige transition-colors disabled:opacity-50"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <span className="text-sm text-charcoal">
                          {formatPrice(
                            line.cost.totalAmount.amount,
                            line.cost.totalAmount.currencyCode,
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(line.id)}
                      disabled={isLoading}
                      className="self-start text-xs text-muted-foreground hover:text-charcoal transition-colors disabled:opacity-50"
                      aria-label="Remove item"
                    >
                      ✕
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer — only when cart has items */}
        {configured && !isEmpty && (
          <div className="shrink-0 border-t border-border/60 px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="eyebrow text-charcoal">Subtotal</span>
              <span className="font-display text-xl text-charcoal">
                {formatPrice(
                  cart!.cost.subtotalAmount.amount,
                  cart!.cost.subtotalAmount.currencyCode,
                )}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Shipping and taxes calculated at checkout.
            </p>
            <a
              href={cart!.checkoutUrl}
              className="btn-luxe w-full justify-center bg-charcoal text-ivory hover:bg-royal hover:text-ivory border-charcoal"
            >
              {isLoading ? "Updating…" : "Proceed to Checkout"}
            </a>
            <button
              onClick={closeCart}
              className="w-full text-center eyebrow text-charcoal link-underline text-xs"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
