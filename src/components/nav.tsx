"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/components/cart-provider";

const links = [
  { href: "/collections", label: "Collections" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/caravan", label: "Caravan" },
];

export function Nav({
  transparentOnTop = false,
}: {
  transparentOnTop?: boolean;
}) {
  const [scrolled, setScrolled] = useState(!transparentOnTop);
  const [open, setOpen] = useState(false);
  const { cartCount, openCart } = useCart();

  useEffect(() => {
    if (!transparentOnTop) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  const dark = transparentOnTop && !scrolled;

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-ivory/95 backdrop-blur-md border-b border-border/60"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-20 md:h-24">
          {/* Left nav (desktop) */}
          <nav className="hidden md:flex items-center gap-10">
            {links.slice(0, 2).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "text-[0.72rem] tracking-[0.22em] uppercase link-underline transition-colors",
                  dark
                    ? "text-ivory/90 hover:text-ivory"
                    : "text-charcoal/80 hover:text-charcoal",
                ].join(" ")}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            className="md:hidden justify-self-start"
            onClick={() => setOpen(true)}
          >
            <span
              className={[
                "block w-6 h-px mb-1.5",
                dark ? "bg-ivory" : "bg-charcoal",
              ].join(" ")}
            />
            <span
              className={[
                "block w-6 h-px mb-1.5",
                dark ? "bg-ivory" : "bg-charcoal",
              ].join(" ")}
            />
            <span
              className={[
                "block w-4 h-px",
                dark ? "bg-ivory" : "bg-charcoal",
              ].join(" ")}
            />
          </button>

          {/* Logo */}
          <Link href="/" className="justify-self-center">
            <span
              className={[
                "font-display text-2xl md:text-3xl tracking-wide transition-colors duration-700",
                dark ? "text-ivory" : "text-charcoal",
              ].join(" ")}
            >
              DELAARA
            </span>
          </Link>

          {/* Right nav */}
          <nav className="hidden md:flex items-center gap-10 justify-self-end">
            {links.slice(2).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "text-[0.72rem] tracking-[0.22em] uppercase link-underline transition-colors",
                  dark
                    ? "text-ivory/90 hover:text-ivory"
                    : "text-charcoal/80 hover:text-charcoal",
                ].join(" ")}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={openCart}
              className={[
                "text-[0.72rem] tracking-[0.22em] uppercase link-underline transition-colors cursor-pointer",
                dark
                  ? "text-ivory/90 hover:text-ivory"
                  : "text-charcoal/80 hover:text-charcoal",
              ].join(" ")}
            >
              Bag ({cartCount})
            </button>
          </nav>

          <button
            onClick={openCart}
            className="md:hidden justify-self-end"
          >
            <span
              className={[
                "text-[0.65rem] tracking-[0.22em] uppercase",
                dark ? "text-ivory" : "text-charcoal",
              ].join(" ")}
            >
              Bag ({cartCount})
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-ivory md:hidden fade-slow">
          <div className="flex items-center justify-between h-20 px-6 border-b border-border/60">
            <span className="font-display text-2xl tracking-wide text-charcoal">
              DELAARA
            </span>
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="text-2xl text-charcoal"
            >
              ×
            </button>
          </div>
          <nav className="flex flex-col p-10 gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-charcoal"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
