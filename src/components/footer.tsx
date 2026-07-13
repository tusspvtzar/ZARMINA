import Link from "next/link";

const cols = [
  {
    title: "Maison",
    links: [
      { href: "/about", label: "Our Story" },
      { href: "/journal", label: "Journal" },
      { href: "/caravan", label: "The Caravan" },
    ],
  },
  {
    title: "Atelier",
    links: [
      { href: "/collections", label: "Collections" },
      { href: "/collections", label: "Kashmiri Phirans" },
      { href: "/collections", label: "Chikankari" },
    ],
  },
  {
    title: "Care",
    links: [
      { href: "/about", label: "Shipping" },
      { href: "/about", label: "Returns" },
      { href: "/about", label: "Size Guide" },
      { href: "/about", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-midnight text-ivory">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-3xl tracking-wide text-ivory block mb-6">
              ZARMINA
            </span>
            <p className="text-ivory/60 text-sm leading-relaxed max-w-xs font-serif italic text-lg">
              Grace woven in every thread. Curated handcrafted fashion
              celebrating timeless artistry.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="eyebrow text-gold mb-6">{c.title}</div>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-ivory/70 hover:text-gold transition-colors text-sm"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-ivory/10 grid gap-4 md:grid-cols-[1fr_auto] items-center">
          <p className="text-ivory/40 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Zarmina — All rights reserved
          </p>
          <div className="flex gap-6 text-ivory/60 text-xs tracking-widest uppercase">
            <a href="#" className="hover:text-gold transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
