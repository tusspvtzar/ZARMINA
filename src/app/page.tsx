"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

const collections = [
  {
    name: "Kashmiri Phirans",
    tag: "Heritage",
    image: "/images/hero-teal.png",
    copy: "Hand-embroidered woolen silhouettes from the vale of Kashmir.",
  },
  {
    name: "Chikankari",
    tag: "Lucknow",
    image: "/images/artisan-brown.png",
    copy: "Whisper-fine white-on-white shadow work, stitched over months.",
  },
  {
    name: "Pakistani Formals",
    tag: "Occasion",
    image: "/images/product-blue.png",
    copy: "Ceremonial ensembles woven with heirloom zardozi and dabka.",
  },
  {
    name: "Lawn Collection",
    tag: "Seasonal",
    image: "/images/detail-teal.png",
    copy: "Featherlight cottons printed and embroidered for warmer days.",
  },
];

const products = [
  {
    name: "Firdaus Phiran",
    meta: "Aari on wool · Kashmir",
    price: "₹ 48,000",
    image: "/images/hero-teal.png",
  },
  {
    name: "Meher Kurta",
    meta: "Chikankari on mul · Lucknow",
    price: "₹ 22,500",
    image: "/images/artisan-brown.png",
  },
  {
    name: "Noor Ensemble",
    meta: "Zardozi on raw silk",
    price: "₹ 72,000",
    image: "/images/product-blue.png",
  },
  {
    name: "Zeba Abaya",
    meta: "Kashida on charcoal wool",
    price: "₹ 38,000",
    image: "/images/product-black.png",
  },
];

export default function Home() {
  return (
    <div className="bg-ivory text-charcoal">
      <Nav transparentOnTop />
      <Hero />
      <EditorialIntro />
      <Collections />
      <Philosophy />
      <ArtisanStory />
      <FeaturedProducts />
      <Caravan />
      <Testimonials />
      <InstagramGallery />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative h-dvh min-h-[720px] w-full overflow-hidden">
      <div className="absolute inset-0 ken-burns">
        <Image
          src="/images/hero-teal.png"
          alt="Woman in emerald Kashmiri phiran"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-midnight/15 to-midnight/60" />

      <div className="relative z-10 flex h-full flex-col justify-end pb-24 md:pb-32 px-6 md:px-16">
        <div className="max-w-3xl">
          <div className="fade-slow text-ivory/80 eyebrow mb-6">
            <span className="hairline w-10 mr-4" />
            The house of Zarmina
          </div>
          <h1
            className="reveal-up font-display text-ivory text-[3.4rem] leading-[0.95] sm:text-7xl md:text-[6.5rem] md:leading-[0.92] tracking-[-0.02em]"
            style={{ animationDelay: "150ms" }}
          >
            Crafted heritage.
            <br />
            <span className="italic text-gold-soft">Worn today.</span>
          </h1>
          <p
            className="reveal-up mt-8 max-w-xl text-ivory/85 text-base md:text-lg leading-relaxed"
            style={{ animationDelay: "500ms" }}
          >
            Curated handcrafted fashion celebrating timeless artistry,
            exceptional craftsmanship, and modern elegance.
          </p>
          <div
            className="reveal-up mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "750ms" }}
          >
            <Link href="/collections" className="btn-luxe-invert">
              Explore Collection
            </Link>
            <Link href="/about" className="btn-luxe-invert">
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/70 z-10">
        <span className="text-[0.6rem] tracking-[0.35em] uppercase">
          Scroll
        </span>
        <span className="scroll-hint block w-px h-10 bg-ivory/60" />
      </div>
    </section>
  );
}

function EditorialIntro() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-16">
      <div className="mx-auto max-w-[1400px] grid gap-16 md:gap-24 md:grid-cols-[1fr_1.1fr] items-center">
        <Reveal className="relative aspect-[4/5] overflow-hidden bg-beige">
          <Image
            src="/images/detail-teal.png"
            alt="Embroidery detail"
            fill
            className="object-cover"
          />
        </Reveal>
        <div>
          <Reveal>
            <div className="eyebrow mb-8">
              <span className="hairline w-8 mr-3 align-middle" /> A quiet
              philosophy
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02] text-charcoal">
              Luxury is <em className="text-royal">remembered.</em>
              <br />
              Not rushed.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 text-charcoal/75 text-lg leading-[1.8] max-w-xl font-serif">
              Zarmina is not a boutique. It is a considered archive of the
              artisans, regions, and traditions that shape South Asian dress.
              Each garment we curate is chosen for the years it has taken to
              learn — and the years it will live in your wardrobe.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <Link
              href="/about"
              className="mt-10 inline-block eyebrow text-charcoal link-underline"
            >
              Read the manifesto →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="px-6 md:px-16 mb-16 md:mb-24">
        <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Reveal>
              <div className="eyebrow mb-6">The Collections</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-5xl md:text-6xl text-charcoal max-w-2xl">
                Four traditions, one atelier.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link
              href="/collections"
              className="eyebrow link-underline text-charcoal"
            >
              View all collections →
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="grid gap-2 md:gap-3 md:grid-cols-2">
        {collections.map((c, i) => (
          <Reveal key={c.name} delay={i * 80}>
            <Link
              href="/collections"
              className="group relative block overflow-hidden aspect-[4/5] md:aspect-[5/6]"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14">
                <div className="text-gold-soft eyebrow mb-3">{c.tag}</div>
                <h3 className="font-display text-4xl md:text-5xl text-ivory">
                  {c.name}
                </h3>
                <p className="mt-3 text-ivory/80 max-w-md text-sm md:text-base leading-relaxed">
                  {c.copy}
                </p>
                <div className="mt-6 eyebrow text-ivory/90 link-underline w-fit">
                  Discover →
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Philosophy() {
  const points = [
    {
      n: "01",
      t: "Quality over quantity",
      d: "A single well-made garment outlives a season of trends.",
    },
    {
      n: "02",
      t: "Timeless silhouettes",
      d: "Shapes that honour the body without asking anything of it.",
    },
    {
      n: "03",
      t: "Thoughtful craftsmanship",
      d: "Every stitch is placed with intention by named artisans.",
    },
    {
      n: "04",
      t: "Conscious curation",
      d: "We ship less, and choose slower — always.",
    },
  ];
  return (
    <section className="py-28 md:py-40 bg-beige/60 px-6 md:px-16">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="eyebrow mb-8">Our philosophy</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-5xl md:text-7xl text-charcoal max-w-3xl leading-[1.05]">
            Designed to last{" "}
            <em className="text-emerald">beyond seasons.</em>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <Reveal key={p.n} delay={i * 100}>
              <div className="border-t border-charcoal/25 pt-6">
                <div className="font-display text-gold text-3xl mb-4">
                  {p.n}
                </div>
                <h3 className="font-display text-2xl mb-3 text-charcoal">
                  {p.t}
                </h3>
                <p className="text-charcoal/70 leading-relaxed text-sm">
                  {p.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtisanStory() {
  return (
    <section className="relative">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[500px] md:min-h-[820px] overflow-hidden">
          <Image
            src="/images/artisan-brown.png"
            alt="Artisan hands"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-midnight text-ivory flex items-center px-8 md:px-20 py-24 md:py-32">
          <div className="max-w-lg">
            <Reveal>
              <div className="eyebrow text-gold mb-8">
                <span className="hairline w-8 mr-3 align-middle bg-gold" />{" "}
                Hands that remember
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
                Generations, held in a single seam.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-ivory/75 leading-[1.9] font-serif text-lg">
                Behind every embroidered motif is a family — a mother, a
                grandfather, an entire village whose fingers have memorised the
                same knots since childhood. We work directly with these ateliers
                so their names, their pace, and their fair earnings travel with
                every piece.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link
                href="/journal"
                className="mt-10 inline-block eyebrow text-gold link-underline"
              >
                Meet the artisans →
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-16">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <Reveal>
              <div className="eyebrow mb-6">The Atelier</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-5xl md:text-6xl text-charcoal max-w-xl">
                Recently added to the archive.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link
              href="/collections"
              className="eyebrow link-underline text-charcoal"
            >
              Enter the atelier →
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] bg-beige">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <button
                    aria-label={`Save ${p.name} to wishlist`}
                    className="absolute top-4 right-4 h-9 w-9 rounded-full bg-ivory/90 backdrop-blur text-charcoal opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                  >
                    ♡
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <div className="btn-luxe-invert w-full text-[0.65rem]">
                      Quick view
                    </div>
                  </div>
                </div>
                <div className="pt-5">
                  <h3 className="font-display text-2xl text-charcoal">
                    {p.name}
                  </h3>
                  <div className="mt-1 text-xs text-muted-foreground tracking-wide">
                    {p.meta}
                  </div>
                  <div className="mt-3 text-sm text-charcoal">{p.price}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Caravan() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/detail-sleeve.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-royal/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-10 text-center text-ivory">
        <Reveal>
          <div className="font-display text-5xl text-ivory/90 mb-8">✦</div>
        </Reveal>
        <Reveal delay={100}>
          <div className="eyebrow text-gold-soft mb-6">By invitation</div>
        </Reveal>
        <Reveal delay={200}>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.02]">
            Join the <em className="text-gold-soft">Zarmina Caravan.</em>
          </h2>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-6 text-ivory/85 text-lg font-serif italic">
            A private circle for those who appreciate craftsmanship beyond
            trends.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 text-left max-w-2xl mx-auto text-sm text-ivory/85">
            {[
              "Early access to new collections",
              "Behind-the-scenes stories from artisans",
              "Vote on upcoming colours & embroideries",
              "Private previews before public launches",
              "Styling inspiration",
              "Letters from the founder",
            ].map((b) => (
              <li key={b} className="flex gap-3 items-start">
                <span className="mt-2 h-px w-4 bg-gold shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={500}>
          {sent ? (
            <p className="mt-14 font-display text-3xl text-gold-soft italic">
              Welcome to the Caravan.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
              className="mt-14 mx-auto max-w-lg flex flex-col sm:flex-row gap-3 items-stretch"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent border border-ivory/40 focus:border-gold outline-none px-5 py-4 text-ivory placeholder:text-ivory/50 text-sm tracking-wide"
              />
              <button type="submit" className="btn-luxe-invert whitespace-nowrap">
                Join the Caravan
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "It arrived in a linen pouch, and I understood immediately. This is not clothing — it is inheritance.",
      a: "Amaya R.",
      c: "Dubai",
    },
    {
      q: "The chikankari is impossibly fine. My grandmother recognised the stitch on sight and wept a little.",
      a: "Sonia K.",
      c: "London",
    },
    {
      q: "Zarmina is the first brand that made me want to keep something forever.",
      a: "Nadia F.",
      c: "Karachi",
    },
  ];
  return (
    <section className="py-28 md:py-40 bg-ivory px-6 md:px-16">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="eyebrow text-center mb-8">In their words</div>
        </Reveal>
        <div className="grid gap-14 md:grid-cols-3 mt-14">
          {items.map((t, i) => (
            <Reveal key={t.a} delay={i * 120}>
              <figure className="text-center px-4">
                <div className="text-gold font-display text-5xl leading-none mb-6">
                  &ldquo;
                </div>
                <blockquote className="font-serif italic text-2xl md:text-3xl leading-[1.4] text-charcoal">
                  {t.q}
                </blockquote>
                <figcaption className="mt-8 eyebrow text-charcoal">
                  {t.a}{" "}
                  <span className="text-muted-foreground">— {t.c}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramGallery() {
  const imgs = [
    "/images/hero-teal.png",
    "/images/detail-teal.png",
    "/images/artisan-brown.png",
    "/images/product-blue.png",
    "/images/product-black.png",
    "/images/detail-sleeve.png",
  ];
  return (
    <section className="py-24 md:py-32 px-6 md:px-10">
      <div className="text-center mb-14">
        <Reveal>
          <div className="eyebrow mb-4">@zarmina</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">
            Follow the thread.
          </h2>
        </Reveal>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
        {imgs.map((src, i) => (
          <Reveal key={i} delay={i * 60}>
            <a
              href="#"
              className="group block relative aspect-square overflow-hidden bg-beige"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/30 transition-colors duration-500" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
