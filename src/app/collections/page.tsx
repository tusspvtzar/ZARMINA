import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Kashmiri phirans, chikankari, formals, and lawn — the Zarmina collections, curated by tradition.",
  openGraph: {
    title: "Collections — Zarmina",
    description: "Explore the Zarmina collections.",
    images: ["/images/hero-teal.png"],
    url: "/collections",
  },
  alternates: { canonical: "/collections" },
};

const collections = [
  {
    name: "Kashmiri Phirans",
    tag: "Heritage · Kashmir",
    image: "/images/hero-teal.png",
    copy: "Hand-embroidered woolen silhouettes, worked in aari and sozni over months.",
  },
  {
    name: "Chikankari",
    tag: "Whitework · Lucknow",
    image: "/images/artisan-brown.png",
    copy: "Whisper-fine shadow work stitched on mul, cotton, and silk-organza.",
  },
  {
    name: "Pakistani Formals",
    tag: "Occasion · Lahore",
    image: "/images/product-blue.png",
    copy: "Ceremonial ensembles woven with heirloom zardozi, dabka, and gota.",
  },
  {
    name: "Lawn Collection",
    tag: "Seasonal",
    image: "/images/detail-teal.png",
    copy: "Featherlight cottons printed and embroidered for warmer days.",
  },
  {
    name: "Abayas & Outerwear",
    tag: "Everyday luxe",
    image: "/images/product-black.png",
    copy: "Modest silhouettes tailored in wool, silk, and structured cotton.",
  },
  {
    name: "Signature Embroidery",
    tag: "Archive",
    image: "/images/detail-sleeve.png",
    copy: "Zarmina's continuing archive of motif studies and technique revivals.",
  },
];

export default function CollectionsPage() {
  return (
    <div className="bg-ivory text-charcoal">
      <Nav />
      <section className="pt-40 md:pt-52 pb-16 px-6 md:px-16">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="eyebrow mb-8">The Atelier</div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-5xl md:text-8xl leading-[0.95] text-charcoal max-w-4xl">
              Collections, gathered by{" "}
              <em className="text-royal">tradition.</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-charcoal/70 font-serif text-lg leading-relaxed">
              Six living collections, drawn from the regions and workshops that
              shape South Asian dress.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32 px-0 md:px-4">
        <div className="grid gap-2 md:gap-3 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <Link
                href="/collections"
                className="group relative block overflow-hidden aspect-[4/5]"
              >
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/75 via-midnight/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="text-gold-soft eyebrow mb-3">{c.tag}</div>
                  <h3 className="font-display text-4xl text-ivory">
                    {c.name}
                  </h3>
                  <p className="mt-3 text-ivory/80 text-sm leading-relaxed max-w-sm">
                    {c.copy}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
