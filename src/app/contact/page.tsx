import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Delaara for any queries, order updates, or support.",
};

export default function ContactPage() {
  return (
    <div className="bg-ivory text-charcoal min-h-screen flex flex-col">
      <Nav />
      
      <main className="flex-grow pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <Reveal>
          <div className="eyebrow mb-6">Contact</div>
          <h1 className="font-display text-5xl md:text-6xl mb-4">
            Contact Us
          </h1>
          <p className="text-charcoal/60 text-sm tracking-widest uppercase mb-16">
            Last updated: 20 July 2026
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <Reveal delay={100}>
            <div className="prose prose-lg prose-charcoal max-w-none font-serif text-charcoal/80 leading-relaxed space-y-12">
              <p className="text-xl">
                We'd love to hear from you - whether it's a question about a piece, an order update, or anything else.
              </p>

              <section>
                <h2 className="font-display text-3xl text-charcoal mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <p className="m-0"><strong>Business name:</strong> Delaara</p>
                  <p className="m-0"><strong>Based in:</strong> Moradabad, Uttar Pradesh, India</p>
                  <p className="m-0"><strong>Email:</strong> <a href="mailto:delaaraofficial@gmail.com" className="text-gold-soft hover:text-gold link-underline">delaaraofficial@gmail.com</a></p>
                  <p className="m-0"><strong>WhatsApp:</strong> <span className="text-gold-soft">+91 99973 62634</span> <span className="text-sm text-charcoal/60 ml-2">(for order queries, support, and returns)</span></p>
                  <p className="m-0"><strong>Website:</strong> delaara.in</p>
                </div>
                <p className="mt-6 text-charcoal/70 italic">
                  We aim to respond to all emails and WhatsApp messages within 24-48 hours on working days.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl text-charcoal mb-6">Grievance / Contact Person</h2>
                <p className="mb-4">
                  In line with the Consumer Protection (E-Commerce) Rules, 2020, the person responsible for addressing customer grievances at Delaara is:
                </p>
                <div className="space-y-4 mb-6">
                  <p className="m-0"><strong>Name:</strong> Tabna Usman</p>
                  <p className="m-0"><strong>Email:</strong> <a href="mailto:delaaraofficial@gmail.com" className="text-gold-soft hover:text-gold link-underline">delaaraofficial@gmail.com</a></p>
                  <p className="m-0"><strong>WhatsApp:</strong> <span className="text-gold-soft">+91 99973 62634</span></p>
                </div>
                <p className="text-charcoal/70 italic">
                  Complaints are acknowledged within 48 hours and resolved within 30 days wherever possible.
                </p>
              </section>

              <section className="bg-beige p-8 rounded-sm">
                <h2 className="font-display text-2xl text-charcoal mb-4">A Quick Note</h2>
                <p className="m-0">
                  Delaara is currently run as an informal, sole-proprietorship business based out of Moradabad, Uttar Pradesh. Formal business registration is in progress, and this page will be updated with additional registration details once complete.
                </p>
              </section>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-white p-8 md:p-12 shadow-sm rounded-sm">
              <h2 className="font-display text-3xl text-charcoal mb-8">Send a Message</h2>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
