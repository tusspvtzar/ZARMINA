import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductByHandle, getAllProducts, isShopifyConfigured } from "@/lib/shopify";
import { ProductDetail } from "./product-detail";

interface Props {
  params: Promise<{ handle: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;

  if (!isShopifyConfigured()) {
    return {
      title: "Product",
      description: "Product details — Zarmina",
    };
  }

  const product = await getProductByHandle(handle);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.title,
    description: product.description.slice(0, 160),
    openGraph: {
      title: `${product.title} — Zarmina`,
      description: product.description.slice(0, 160),
      images: product.featuredImage ? [product.featuredImage.url] : [],
      url: `/product/${handle}`,
    },
    alternates: { canonical: `/product/${handle}` },
  };
}

// Fallback products for when Shopify isn't configured
const fallbackProducts = [
  {
    handle: "firdaus-phiran",
    title: "Firdaus Phiran",
    description: "Hand-embroidered Kashmiri phiran in pure pashmina wool. Each motif is worked in traditional aari needlework by master artisans from Srinagar, taking over three months to complete. The phiran features intricate paisley borders and a flowing silhouette designed for both warmth and grace.",
    descriptionHtml: "",
    vendor: "Zarmina",
    productType: "Phiran",
    tags: ["kashmir", "aari", "wool"],
    availableForSale: true,
    priceRange: { minVariantPrice: { amount: "48000", currencyCode: "INR" }, maxVariantPrice: { amount: "48000", currencyCode: "INR" } },
    images: [{ url: "/images/hero-teal.png", altText: "Firdaus Phiran", width: 1200, height: 1500 }],
    variants: [{ id: "demo-1", title: "Default Title", availableForSale: true, price: { amount: "48000", currencyCode: "INR" }, compareAtPrice: null, selectedOptions: [], image: null }],
    options: [],
    featuredImage: { url: "/images/hero-teal.png", altText: "Firdaus Phiran", width: 1200, height: 1500 },
    id: "demo-1",
  },
  {
    handle: "meher-kurta",
    title: "Meher Kurta",
    description: "Whisper-fine chikankari on mul cotton from Lucknow. Shadow-work stitched by hand using techniques passed down across five generations. The kurta features delicate jaali and phanda work across the yoke and sleeves.",
    descriptionHtml: "",
    vendor: "Zarmina",
    productType: "Kurta",
    tags: ["lucknow", "chikankari", "cotton"],
    availableForSale: true,
    priceRange: { minVariantPrice: { amount: "22500", currencyCode: "INR" }, maxVariantPrice: { amount: "22500", currencyCode: "INR" } },
    images: [{ url: "/images/artisan-brown.png", altText: "Meher Kurta", width: 1200, height: 1500 }],
    variants: [{ id: "demo-2", title: "Default Title", availableForSale: true, price: { amount: "22500", currencyCode: "INR" }, compareAtPrice: null, selectedOptions: [], image: null }],
    options: [],
    featuredImage: { url: "/images/artisan-brown.png", altText: "Meher Kurta", width: 1200, height: 1500 },
    id: "demo-2",
  },
  {
    handle: "noor-ensemble",
    title: "Noor Ensemble",
    description: "Ceremonial ensemble in raw silk with heirloom zardozi embroidery from Lahore. Metallic threads and sequins are hand-couched onto the fabric in traditional floral motifs. Includes a fully lined kurta, dupatta with four-sided border, and trousers.",
    descriptionHtml: "",
    vendor: "Zarmina",
    productType: "Formal",
    tags: ["lahore", "zardozi", "silk"],
    availableForSale: true,
    priceRange: { minVariantPrice: { amount: "72000", currencyCode: "INR" }, maxVariantPrice: { amount: "72000", currencyCode: "INR" } },
    images: [{ url: "/images/product-blue.png", altText: "Noor Ensemble", width: 1200, height: 1500 }],
    variants: [{ id: "demo-3", title: "Default Title", availableForSale: true, price: { amount: "72000", currencyCode: "INR" }, compareAtPrice: null, selectedOptions: [], image: null }],
    options: [],
    featuredImage: { url: "/images/product-blue.png", altText: "Noor Ensemble", width: 1200, height: 1500 },
    id: "demo-3",
  },
  {
    handle: "zeba-abaya",
    title: "Zeba Abaya",
    description: "Kashida-embroidered abaya in charcoal wool. The geometric Kashida motifs are native to Kashmir and are worked in silk thread along the neckline, cuffs, and hem. Designed for everyday elegance with a structured A-line silhouette.",
    descriptionHtml: "",
    vendor: "Zarmina",
    productType: "Abaya",
    tags: ["kashmir", "kashida", "wool"],
    availableForSale: true,
    priceRange: { minVariantPrice: { amount: "38000", currencyCode: "INR" }, maxVariantPrice: { amount: "38000", currencyCode: "INR" } },
    images: [{ url: "/images/product-black.png", altText: "Zeba Abaya", width: 1200, height: 1500 }],
    variants: [{ id: "demo-4", title: "Default Title", availableForSale: true, price: { amount: "38000", currencyCode: "INR" }, compareAtPrice: null, selectedOptions: [], image: null }],
    options: [],
    featuredImage: { url: "/images/product-black.png", altText: "Zeba Abaya", width: 1200, height: 1500 },
    id: "demo-4",
  },
];

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;

  if (isShopifyConfigured()) {
    const product = await getProductByHandle(handle);
    if (!product) notFound();
    return <ProductDetail product={product} />;
  }

  // Fallback mode
  const product = fallbackProducts.find((p) => p.handle === handle);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
