import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import {
  getCollectionByHandle,
  isShopifyConfigured,
  formatPrice,
} from "@/lib/shopify";

interface Props {
  params: Promise<{ handle: string }>;
}

/* Fallback collections for demo mode */
const fallbackCollections: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    products: {
      handle: string;
      title: string;
      meta: string;
      price: string;
      image: string;
    }[];
  }
> = {
  "kashmiri-phirans": {
    title: "Kashmiri Phirans",
    description:
      "Hand-embroidered woolen silhouettes from the vale of Kashmir, worked in aari and sozni over months.",
    image: "/images/hero-teal.png",
    products: [
      {
        handle: "firdaus-phiran",
        title: "Firdaus Phiran",
        meta: "Aari on wool · Kashmir",
        price: "₹ 48,000",
        image: "/images/hero-teal.png",
      },
    ],
  },
  chikankari: {
    title: "Chikankari",
    description:
      "Whisper-fine shadow work stitched on mul, cotton, and silk-organza from Lucknow.",
    image: "/images/artisan-brown.png",
    products: [
      {
        handle: "meher-kurta",
        title: "Meher Kurta",
        meta: "Chikankari on mul · Lucknow",
        price: "₹ 22,500",
        image: "/images/artisan-brown.png",
      },
    ],
  },
  "pakistani-formals": {
    title: "Pakistani Formals",
    description:
      "Ceremonial ensembles woven with heirloom zardozi, dabka, and gota from Lahore.",
    image: "/images/product-blue.png",
    products: [
      {
        handle: "noor-ensemble",
        title: "Noor Ensemble",
        meta: "Zardozi on raw silk",
        price: "₹ 72,000",
        image: "/images/product-blue.png",
      },
    ],
  },
  "lawn-collection": {
    title: "Lawn Collection",
    description:
      "Featherlight cottons printed and embroidered for warmer days.",
    image: "/images/detail-teal.png",
    products: [],
  },
  "abayas-outerwear": {
    title: "Abayas & Outerwear",
    description:
      "Modest silhouettes tailored in wool, silk, and structured cotton.",
    image: "/images/product-black.png",
    products: [
      {
        handle: "zeba-abaya",
        title: "Zeba Abaya",
        meta: "Kashida on charcoal wool",
        price: "₹ 38,000",
        image: "/images/product-black.png",
      },
    ],
  },
  "signature-embroidery": {
    title: "Signature Embroidery",
    description:
      "Zarmina's continuing archive of motif studies and technique revivals.",
    image: "/images/detail-sleeve.png",
    products: [],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;

  if (isShopifyConfigured()) {
    const collection = await getCollectionByHandle(handle);
    if (!collection) return { title: "Collection Not Found" };
    return {
      title: collection.title,
      description: collection.description?.slice(0, 160),
      openGraph: {
        title: `${collection.title} — Zarmina`,
        description: collection.description?.slice(0, 160),
        images: collection.image ? [collection.image.url] : [],
        url: `/collections/${handle}`,
      },
      alternates: { canonical: `/collections/${handle}` },
    };
  }

  const fb = fallbackCollections[handle];
  if (!fb) return { title: "Collection Not Found" };
  return {
    title: fb.title,
    description: fb.description,
    openGraph: {
      title: `${fb.title} — Zarmina`,
      description: fb.description,
      url: `/collections/${handle}`,
    },
    alternates: { canonical: `/collections/${handle}` },
  };
}

export default async function CollectionPage({ params }: Props) {
  const { handle } = await params;

  /* ── Shopify mode ── */
  if (isShopifyConfigured()) {
    const collection = await getCollectionByHandle(handle);
    if (!collection) notFound();

    return (
      <div className="bg-ivory text-charcoal">
        <Nav transparentOnTop />

        {/* Hero */}
        <section className="relative h-[60dvh] min-h-[420px] overflow-hidden">
          {collection.image && (
            <Image
              src={collection.image.url}
              alt={collection.image.altText ?? collection.title}
              fill
              className="object-cover ken-burns"
              priority
            />
          )}
          <div className="absolute inset-0 bg-midnight/50" />
          <div className="relative z-10 flex h-full items-end px-6 md:px-16 pb-16">
            <div>
              <div className="fade-slow eyebrow text-gold-soft mb-4">
                Collection
              </div>
              <h1 className="reveal-up font-display text-ivory text-5xl md:text-8xl leading-[0.95]">
                {collection.title}
              </h1>
              {collection.description && (
                <p className="mt-4 text-ivory/80 max-w-xl text-base md:text-lg font-serif">
                  {collection.description}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section className="py-20 md:py-28 px-6 md:px-16">
          <div className="mx-auto max-w-[1500px]">
            {collection.products.length === 0 ? (
              <div className="text-center py-20">
                <div className="font-display text-5xl text-gold mb-6">✦</div>
                <h3 className="font-display text-2xl text-charcoal mb-3">
                  Coming soon
                </h3>
                <p className="text-sm text-muted-foreground">
                  New pieces are being prepared for this collection.
                </p>
              </div>
            ) : (
              <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {collection.products.map((product, i) => (
                  <Reveal key={product.id} delay={i * 80}>
                    <Link
                      href={`/product/${product.handle}`}
                      className="group block"
                    >
                      <div className="relative overflow-hidden aspect-[4/5] bg-beige">
                        {product.featuredImage && (
                          <Image
                            src={product.featuredImage.url}
                            alt={
                              product.featuredImage.altText ?? product.title
                            }
                            fill
                            className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                          />
                        )}
                        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                          <div className="btn-luxe-invert w-full text-[0.65rem]">
                            View details
                          </div>
                        </div>
                      </div>
                      <div className="pt-5">
                        <h3 className="font-display text-2xl text-charcoal">
                          {product.title}
                        </h3>
                        {product.vendor && (
                          <div className="mt-1 text-xs text-muted-foreground tracking-wide">
                            {product.vendor} · {product.productType}
                          </div>
                        )}
                        <div className="mt-3 text-sm text-charcoal">
                          {formatPrice(
                            product.priceRange.minVariantPrice.amount,
                            product.priceRange.minVariantPrice.currencyCode,
                          )}
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  /* ── Fallback mode ── */
  const fb = fallbackCollections[handle];
  if (!fb) notFound();

  return (
    <div className="bg-ivory text-charcoal">
      <Nav transparentOnTop />

      {/* Hero */}
      <section className="relative h-[60dvh] min-h-[420px] overflow-hidden">
        <Image
          src={fb.image}
          alt={fb.title}
          fill
          className="object-cover ken-burns"
          priority
        />
        <div className="absolute inset-0 bg-midnight/50" />
        <div className="relative z-10 flex h-full items-end px-6 md:px-16 pb-16">
          <div>
            <div className="fade-slow eyebrow text-gold-soft mb-4">
              Collection
            </div>
            <h1 className="reveal-up font-display text-ivory text-5xl md:text-8xl leading-[0.95]">
              {fb.title}
            </h1>
            <p className="mt-4 text-ivory/80 max-w-xl text-base md:text-lg font-serif">
              {fb.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20 md:py-28 px-6 md:px-16">
        <div className="mx-auto max-w-[1500px]">
          {fb.products.length === 0 ? (
            <div className="text-center py-20">
              <div className="font-display text-5xl text-gold mb-6">✦</div>
              <h3 className="font-display text-2xl text-charcoal mb-3">
                Coming soon
              </h3>
              <p className="text-sm text-muted-foreground">
                New pieces are being prepared for this collection.
              </p>
            </div>
          ) : (
            <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {fb.products.map((p, i) => (
                <Reveal key={p.handle} delay={i * 80}>
                  <Link
                    href={`/product/${p.handle}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden aspect-[4/5] bg-beige">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <div className="btn-luxe-invert w-full text-[0.65rem]">
                          View details
                        </div>
                      </div>
                    </div>
                    <div className="pt-5">
                      <h3 className="font-display text-2xl text-charcoal">
                        {p.title}
                      </h3>
                      <div className="mt-1 text-xs text-muted-foreground tracking-wide">
                        {p.meta}
                      </div>
                      <div className="mt-3 text-sm text-charcoal">
                        {p.price}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
