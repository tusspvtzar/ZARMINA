"use client";

import Image from "next/image";
import { useState } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export default function CaravanPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-ivory text-charcoal min-h-dvh">
      <Nav transparentOnTop />

      <section className="relative min-h-dvh flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/detail-teal.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-royal/85" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-16 py-32 text-ivory">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="font-display text-6xl text-ivory/90 mb-10">
                ✦
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="eyebrow text-gold-soft mb-6">
                By invitation only
              </div>
            </Reveal>
            <Reveal delay={200}>
              <h1 className="font-display text-6xl md:text-8xl leading-[0.95]">
                The Delaara <em className="text-gold-soft">Caravan.</em>
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-8 font-serif italic text-xl md:text-2xl text-ivory/90 leading-relaxed">
                A private circle for those who appreciate craftsmanship beyond
                trends - and want to help shape what Delaara becomes.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-16 grid gap-4 sm:grid-cols-2 text-left max-w-2xl mx-auto">
                {[
                  "Early access to new collections",
                  "Behind-the-scenes artisan stories",
                  "Vote on upcoming colours & embroideries",
                  "Private previews before public launches",
                  "Curated styling letters",
                  "Personal notes from the founder",
                ].map((b) => (
                  <div
                    key={b}
                    className="flex gap-3 items-start text-ivory/90 text-sm"
                  >
                    <span className="mt-2 h-px w-6 bg-gold shrink-0" /> {b}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={500}>
              {sent ? (
                <p className="mt-16 font-display text-4xl italic text-gold-soft">
                  Welcome to the Caravan.
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSent(true);
                  }}
                  className="mt-16 mx-auto max-w-lg flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 bg-transparent border border-ivory/40 focus:border-gold outline-none px-5 py-4 text-ivory placeholder:text-ivory/50 text-sm tracking-wide"
                  />
                  <button
                    type="submit"
                    className="btn-luxe-invert whitespace-nowrap"
                  >
                    Join the Caravan
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
