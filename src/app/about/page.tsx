import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Zarmina is a curated house of South Asian handcrafted luxury — honouring the artisans, regions, and traditions behind every garment.",
  openGraph: {
    title: "Our Story — Zarmina",
    description: "The maison, the mission, the makers behind Zarmina.",
    images: ["/images/artisan-brown.png"],
    url: "/about",
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="bg-ivory text-charcoal">
      <Nav transparentOnTop />

      <section className="relative h-[75dvh] min-h-[520px] overflow-hidden">
        <Image
          src="/images/hero-teal.png"
          alt=""
          fill
          className="object-cover ken-burns"
          priority
        />
        <div className="absolute inset-0 bg-midnight/50" />
        <div className="relative z-10 flex h-full items-end px-6 md:px-16 pb-20">
          <div>
            <div className="fade-slow eyebrow text-gold-soft mb-6">
              The House of Zarmina
            </div>
            <h1 className="reveal-up font-display text-ivory text-5xl md:text-8xl leading-[0.95]">
              A quiet <em className="text-gold-soft">devotion</em>
              <br /> to craft.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-40 px-6 md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="eyebrow mb-6">Our Manifesto</div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display text-3xl md:text-5xl leading-[1.25] text-charcoal">
              We believe clothing carries stories. Behind every embroidered
              motif and every woven thread are generations of artistry that
              deserve to be{" "}
              <em className="text-royal">celebrated, not commodified.</em>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <Reveal className="relative min-h-[500px] md:min-h-[700px]">
          <Image
            src="/images/artisan-brown.png"
            alt="Artisan at work"
            fill
            className="object-cover"
          />
        </Reveal>
        <div className="bg-beige px-8 md:px-20 py-24 flex items-center">
          <div className="max-w-lg">
            <Reveal>
              <div className="eyebrow mb-6">Why Zarmina exists</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                To make heritage relevant, and to keep artisans paid what their
                skill is worth.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-charcoal/75 leading-[1.9] font-serif text-lg">
                Fast fashion has taught us to forget. Zarmina asks you to
                remember — the maker, the region, the technique, the hours held
                inside a single sleeve. We work directly with ateliers across
                Kashmir, Lucknow, and Lahore, at their pace, with their names on
                every tag.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="bg-midnight text-ivory px-8 md:px-20 py-24 flex items-center order-2 md:order-1">
          <div className="max-w-lg">
            <Reveal>
              <div className="eyebrow text-gold mb-6">The vision</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                A modern wardrobe rooted in ancestral craft.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-ivory/75 leading-[1.9] font-serif text-lg">
                We are building the house we always wished existed — one where a
                Kashmiri phiran sits beside a linen trouser, where chikankari
                feels as current as it is centuries-old, and where every purchase
                quietly sustains the hands that made it.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link
                href="/caravan"
                className="mt-10 inline-block eyebrow text-gold link-underline"
              >
                Join the Caravan →
              </Link>
            </Reveal>
          </div>
        </div>
        <Reveal className="relative min-h-[500px] md:min-h-[700px] order-1 md:order-2">
          <Image
            src="/images/detail-sleeve.png"
            alt=""
            fill
            className="object-cover"
          />
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
