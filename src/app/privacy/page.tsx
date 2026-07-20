import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Delaara.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-ivory text-charcoal min-h-screen flex flex-col">
      <Nav />
      
      <main className="flex-grow pt-32 pb-24 px-6 md:px-16 max-w-4xl mx-auto w-full">
        <Reveal>
          <div className="eyebrow mb-6">Policies</div>
          <h1 className="font-display text-5xl md:text-6xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-charcoal/60 text-sm tracking-widest uppercase mb-16">
            Last updated: 20 July 2026
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="prose prose-lg prose-charcoal max-w-none font-serif text-charcoal/80 leading-relaxed space-y-12">
            
            <p className="text-xl">
              This Privacy Policy explains how Delaara ("we", "us", "our"), operated as a sole proprietorship based in Moradabad, Uttar Pradesh, India, collects, uses, and protects your personal information when you visit delaara.in, place an order, or contact us over WhatsApp or email.
            </p>
            <p>
              We aim to handle your data in line with India's Digital Personal Data Protection Act, 2023 (DPDP Act) and the Consumer Protection (E-Commerce) Rules, 2020.
            </p>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">1. Information We Collect</h2>
              <p className="mb-4">We collect information you give us directly, such as:</p>
              <ul className="list-disc pl-5 space-y-3 marker:text-gold-soft mb-4">
                <li>Name, phone number, delivery address, and email address, when you place an order or fill an interest/pre-order form.</li>
                <li>Bank account/UPI details, only if you're due a refund and need to share them for a bank transfer.</li>
                <li>Messages, photos, or videos you send us over WhatsApp/email - for example, unboxing videos for a return request.</li>
                <li>Basic technical information (like browser type or approximate location) if our website uses analytics tools.</li>
              </ul>
              <p>We do not knowingly collect card or full payment details ourselves - those are handled directly by our payment gateway/courier partner for prepaid or COD collection, not stored by us.</p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">2. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-gold-soft mb-4">
                <li>To process, confirm, and deliver your order, including COD collection.</li>
                <li>To communicate with you about your order, refunds, or queries.</li>
                <li>To process a refund via bank transfer/UPI, where applicable.</li>
                <li>To improve our products, website, and customer experience.</li>
                <li>To meet legal or regulatory requirements where applicable.</li>
              </ul>
              <p>We do not use your data for anything beyond the purposes above, and we do not sell your personal data to anyone.</p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">3. Sharing of Information</h2>
              <p className="mb-4">We only share your information with third parties where necessary to fulfil your order, such as:</p>
              <ul className="list-disc pl-5 space-y-3 marker:text-gold-soft mb-4">
                <li>Courier/logistics partners, to deliver your order.</li>
                <li>Payment gateway providers, if you pay online (we don't see or store your card/UPI credentials).</li>
              </ul>
              <p>We do not share, rent, or sell your personal data to advertisers or unrelated third parties.</p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">4. Data Storage & Security</h2>
              <p>
                We take reasonable steps to keep your information secure - for example, restricting who has access to order and contact details, and using secure channels (WhatsApp, email, and our payment gateway's secure checkout) to communicate. As a small, growing business, we're continuing to strengthen these practices as we scale.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">5. Data Retention</h2>
              <p>
                We retain your order and contact information for as long as needed to fulfil your order, handle any returns/refunds, and meet applicable legal or tax record-keeping requirements, after which it is deleted or anonymised.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">6. Your Rights</h2>
              <p className="mb-4">Under the DPDP Act, you (as a "Data Principal") have the right to:</p>
              <ul className="list-disc pl-5 space-y-3 marker:text-gold-soft mb-4">
                <li>Ask us what personal data we hold about you.</li>
                <li>Ask us to correct or update inaccurate information.</li>
                <li>Ask us to delete your personal data, subject to any legal record-keeping requirements.</li>
                <li>Withdraw consent for us to contact you (for example, opting out of promotional messages).</li>
              </ul>
              <p>To exercise any of these rights, email us at <a href="mailto:delaaraofficial@gmail.com" className="text-gold-soft hover:text-gold link-underline">delaaraofficial@gmail.com</a> or message us on WhatsApp at <span className="text-gold-soft">+91 99973 62634</span>. We'll respond within a reasonable time.</p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">7. Cookies & Website Analytics</h2>
              <p>
                If delaara.in uses cookies or similar tools (for example, to understand how visitors use the site), we'll only use them for basic analytics and site functionality - not to build advertising profiles. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">8. Children's Privacy</h2>
              <p>
                Delaara's products and website are intended for adults. We do not knowingly collect personal data from children.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">9. Grievance Officer</h2>
              <p>
                For any privacy-related concerns or complaints, please contact:
              </p>
              <div className="mt-2 text-charcoal/80">
                <p className="m-0"><strong>Name:</strong> Tabna Usman</p>
                <p className="m-0"><strong>Email:</strong> <a href="mailto:delaaraofficial@gmail.com" className="text-gold-soft hover:text-gold link-underline">delaaraofficial@gmail.com</a></p>
                <p className="m-0"><strong>WhatsApp:</strong> <span className="text-gold-soft">+91 99973 62634</span></p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time as our business grows or as laws change. The "Last updated" date at the top will reflect the latest revision. Continued use of delaara.in after changes means you accept the updated policy.
              </p>
            </section>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
