import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import a from "@/assets/artisan-brown.jpg.asset.json";
import b from "@/assets/detail-teal.jpg.asset.json";
import c from "@/assets/hero-teal.jpg.asset.json";
import d from "@/assets/detail-sleeve.jpg.asset.json";
import e from "@/assets/product-blue.jpg.asset.json";

export const Route = createFileRoute("/journal")({
  component: Journal,
  head: () => ({
    meta: [
      { title: "Journal — Zarmina" },
      { name: "description", content: "Essays on craftsmanship, embroidery traditions, styling and the artisans behind Zarmina." },
      { property: "og:title", content: "Journal — Zarmina" },
      { property: "og:description", content: "The Zarmina Journal — essays on craft and heritage." },
      { property: "og:image", content: a.url },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
});

const posts = [
  { cat: "Craftsmanship", title: "The seven months of a single sozni sleeve", excerpt: "Inside a Kashmiri atelier where every needle-point is counted, not clocked.", image: a.url, date: "Nov 2025", size: "lg" },
  { cat: "Embroidery", title: "Chikankari: the whitework of memory", excerpt: "How Lucknow's shadow stitch became the vocabulary of an entire region.", image: b.url, date: "Oct 2025" },
  { cat: "Founder", title: "Why we chose slow", excerpt: "A letter on building a house that ships less, and means more.", image: c.url, date: "Oct 2025" },
  { cat: "Styling", title: "The winter phiran, worn three ways", excerpt: "From heirloom formality to weekday quiet.", image: d.url, date: "Sep 2025" },
  { cat: "Artisans", title: "The names on the tag", excerpt: "Meet three of the ateliers behind this season's pieces.", image: e.url, date: "Sep 2025" },
];

function Journal() {
  const [feature, ...rest] = posts;
  return (
    <div className="bg-ivory text-charcoal">
      <Nav />
      <section className="pt-40 md:pt-52 pb-16 px-6 md:px-16">
        <div className="mx-auto max-w-[1400px]">
          <Reveal><div className="eyebrow mb-8">The Journal</div></Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-5xl md:text-8xl leading-[0.95] max-w-4xl">
              Essays on <em className="text-emerald">craft,</em> heritage, and the hands behind it.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-16 pb-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <a href="#" className="group grid gap-10 md:grid-cols-2 items-center">
              <div className="relative aspect-[5/4] overflow-hidden">
                <img src={feature.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-[1.05]" />
              </div>
              <div>
                <div className="eyebrow text-royal mb-4">{feature.cat} · {feature.date}</div>
                <h2 className="font-display text-4xl md:text-6xl leading-tight text-charcoal">
                  {feature.title}
                </h2>
                <p className="mt-6 font-serif text-lg text-charcoal/75 leading-relaxed max-w-lg">{feature.excerpt}</p>
                <div className="mt-8 eyebrow link-underline text-charcoal">Read essay →</div>
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
                  <img src={p.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-[1.05]" />
                </div>
                <div className="eyebrow text-royal mb-3">{p.cat} · {p.date}</div>
                <h3 className="font-display text-3xl md:text-4xl text-charcoal">{p.title}</h3>
                <p className="mt-3 text-charcoal/70 max-w-md font-serif">{p.excerpt}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
