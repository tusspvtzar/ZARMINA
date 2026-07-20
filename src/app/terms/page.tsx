import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Delaara.",
};

export default function TermsPage() {
  return (
    <div className="bg-ivory text-charcoal min-h-screen flex flex-col">
      <Nav />
      
      <main className="flex-grow pt-32 pb-24 px-6 md:px-16 max-w-4xl mx-auto w-full">
        <Reveal>
          <div className="eyebrow mb-6">Policies</div>
          <h1 className="font-display text-5xl md:text-6xl mb-4">
            Terms & Conditions
          </h1>
          <p className="text-charcoal/60 text-sm tracking-widest uppercase mb-16">
            Last updated: 20 July 2026
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="prose prose-lg prose-charcoal max-w-none font-serif text-charcoal/80 leading-relaxed space-y-12">
            
            <p className="text-xl">
              Welcome to Delaara. By visiting delaara.in, placing an order, or contacting us over WhatsApp/email, you agree to the following terms. Please read them carefully.
            </p>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">1. About Delaara</h2>
              <p>
                Delaara is currently operated as an informal sole proprietorship business based in Moradabad, Uttar Pradesh, India, run by Tabna Usman. Formal business registration is in progress; this page will be updated with registration details (business registration number, GSTIN, etc.) once complete.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">2. Our Products</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-gold-soft mb-4">
                <li>Delaara sells handcrafted, embroidered Kashmiri Phirans.</li>
                <li>Our Phirans are free-size and designed to fit comfortably across a range of body types; no separate size chart is provided.</li>
                <li>Because each piece is handcrafted, small variations in embroidery, colour, or texture between the photographed sample and the delivered piece are natural and not considered defects.</li>
                <li>We make reasonable efforts to display product colours and details accurately, but slight variation due to screen settings or lighting is possible.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">3. Pre-Order / Interest Forms</h2>
              <p>
                From time to time, we may run interest or pre-order forms (for example, to gauge demand before producing or restocking a design). Filling such a form does not create a confirmed order or a binding sale - it simply registers your interest. A confirmed order exists only once we've accepted payment or confirmed a Cash on Delivery order with you.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">4. Pricing & Payment</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-gold-soft mb-4">
                <li>All prices listed are in Indian Rupees (INR) and are inclusive of the taxes applicable at the time of listing, unless stated otherwise.</li>
                <li>As Delaara is not yet GST-registered, we're currently unable to issue GST tax invoices; you'll receive an order confirmation/receipt instead.</li>
                <li>We accept Cash on Delivery (COD) and prepaid payment through the options shown at checkout or shared over WhatsApp.</li>
                <li>We reserve the right to correct genuine pricing errors and to cancel an order affected by such an error, with a full refund if payment was already made.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">5. Orders, Shipping, Cancellations & Returns</h2>
              <p>
                Shipping timelines, Cash on Delivery terms, cancellation windows, and our returns/refund process are set out in detail in our Shipping & Returns Policy, which forms part of these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">6. Intellectual Property</h2>
              <p>
                All content on delaara.in and our social media - including photographs, product descriptions, logos, and design names - belongs to Delaara unless otherwise credited, and may not be copied, reproduced, or used commercially without our written permission.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">7. Your Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-gold-soft mb-4">
                <li>Provide accurate order, contact, and delivery information.</li>
                <li>Use delaara.in and our products for lawful, personal purposes.</li>
                <li>Cooperate reasonably with us and our courier partner to complete delivery (for example, being reachable for COD confirmation).</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">8. Limitation of Liability</h2>
              <p>
                We work carefully to describe and package our products accurately. That said, to the extent permitted by law, Delaara's liability for any claim relating to an order is limited to the value of that order. We are not responsible for delays or losses caused by courier partners, incorrect addresses provided by the buyer, or events beyond our reasonable control.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">9. Grievance Redressal</h2>
              <p>
                If you have a complaint about an order, this website, or these Terms, please contact:
              </p>
              <div className="mt-2 text-charcoal/80 mb-4">
                <p className="m-0"><strong>Name:</strong> Tabna Usman</p>
                <p className="m-0"><strong>Email:</strong> <a href="mailto:delaaraofficial@gmail.com" className="text-gold-soft hover:text-gold link-underline">delaaraofficial@gmail.com</a></p>
                <p className="m-0"><strong>WhatsApp:</strong> <span className="text-gold-soft">+91 99973 62634</span></p>
              </div>
              <p>
                We aim to acknowledge complaints within 48 hours and resolve them within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">10. Governing Law & Jurisdiction</h2>
              <p>
                These Terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts at Moradabad, Uttar Pradesh.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">11. Changes to These Terms</h2>
              <p>
                We may update these Terms as our business grows or registration status changes. The "Last updated" date above reflects the latest revision. Continuing to use delaara.in after changes means you accept the updated Terms.
              </p>
            </section>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
