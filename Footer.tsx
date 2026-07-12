import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/zarmina-logo.png.asset.json";

const cols = [
  {
    title: "Maison",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "/caravan", label: "The Caravan" },
    ],
  },
  {
    title: "Atelier",
    links: [
      { to: "/collections", label: "Collections" },
      { to: "/collections", label: "Kashmiri Phirans" },
      { to: "/collections", label: "Chikankari" },
    ],
  },
  {
    title: "Care",
    links: [
      { to: "/about", label: "Shipping" },
      { to: "/about", label: "Returns" },
      { to: "/about", label: "Size Guide" },
      { to: "/about", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-midnight text-ivory">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={logoAsset.url} alt="Zarmina" className="h-10 mb-6 invert" />
            <p className="text-ivory/60 text-sm leading-relaxed max-w-xs font-serif italic text-lg">
              Grace woven in every thread. Curated handcrafted fashion celebrating timeless artistry.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="eyebrow text-gold mb-6">{c.title}</div>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-ivory/70 hover:text-gold transition-colors text-sm">
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
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
