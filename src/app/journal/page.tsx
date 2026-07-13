import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Essays on craftsmanship, embroidery traditions, styling and the artisans behind Zarmina.",
  openGraph: {
    title: "Journal — Zarmina",
    description: "The Zarmina Journal — essays on craft and heritage.",
    images: ["/images/artisan-brown.png"],
    url: "/journal",
  },
  alternates: { canonical: "/journal" },
};

const posts = [
  {
    cat: "Craftsmanship",
    title: "The seven months of a single sozni sleeve",
    excerpt:
      "Inside a Kashmiri atelier where every needle-point is counted, not clocked.",
    image: "/images/artisan-brown.png",
    date: "Nov 2025",
    size: "lg",
  },
  {
    cat: "Embroidery",
    title: "Chikankari: the whitework of memory",
    excerpt:
      "How Lucknow's shadow stitch became the vocabulary of an entire region.",
    image: "/images/detail-teal.png",
    date: "Oct 2025",
  },
  {
    cat: "Founder",
    title: "Why we chose slow",
    excerpt:
      "A letter on building a house that ships less, and means more.",
    image: "/images/hero-teal.png",
    date: "Oct 2025",
  },
  {
    cat: "Styling",
    title: "The winter phiran, worn three ways",
    excerpt: "From heirloom formality to weekday quiet.",
    image: "/images/detail-sleeve.png",
    date: "Sep 2025",
  },
  {
    cat: "Artisans",
    title: "The names on the tag",
    excerpt:
      "Meet three of the ateliers behind this season's pieces.",
    image: "/images/product-blue.png",
    date: "Sep 2025",
  },
];

export default function JournalPage() {
  const [feature, ...rest] = posts;
  return (
    <div className="bg-ivory text-charcoal">
      <Nav />
      <section className="pt-40 md:pt-52 pb-16 px-6 md:px-16">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="eyebrow mb-8">The Journal</div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-5xl md:text-8xl leading-[0.95] max-w-4xl">
              Essays on <em className="text-emerald">craft,</em> heritage,
              and the hands behind it.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-16 pb-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <a
              href="#"
              className="group grid gap-10 md:grid-cols-2 items-center"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={feature.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.05]"
                />
              </div>
              <div>
                <div className="eyebrow text-royal mb-4">
                  {feature.cat} · {feature.date}
                </div>
                <h2 className="font-display text-4xl md:text-6xl leading-tight text-charcoal">
                  {feature.title}
                </h2>
                <p className="mt-6 font-serif text-lg text-charcoal/75 leading-relaxed max-w-lg">
                  {feature.excerpt}
                </p>
                <div className="mt-8 eyebrow link-underline text-charcoal">
                  Read essay →
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-16 pb-32">
        <div className="mx-auto max-w-[1400px] grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <a href="#" className="group block">
                <div className="relative aspect-[5/4] overflow-hidden mb-6">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-[1500ms] group-hover:scale-[1.05]"
                  />
                </div>
                <div className="eyebrow text-royal mb-3">
                  {p.cat} · {p.date}
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-charcoal">
                  {p.title}
                </h3>
                <p className="mt-3 text-charcoal/70 max-w-md font-serif">
                  {p.excerpt}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
