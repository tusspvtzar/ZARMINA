import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description: "Shipping, delivery, and returns policy for Delaara.",
};

export default function ShippingPage() {
  return (
    <div className="bg-ivory text-charcoal min-h-screen flex flex-col">
      <Nav />
      
      <main className="flex-grow pt-32 pb-24 px-6 md:px-16 max-w-4xl mx-auto w-full">
        <Reveal>
          <div className="eyebrow mb-6">Policies</div>
          <h1 className="font-display text-5xl md:text-6xl mb-4">
            Shipping & Returns
          </h1>
          <p className="text-charcoal/60 text-sm tracking-widest uppercase mb-16">
            Last updated: 20 July 2026
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="prose prose-lg prose-charcoal max-w-none font-serif text-charcoal/80 leading-relaxed space-y-12">
            
            <p className="text-xl">
              This policy applies to confirmed, paid orders placed through delaara.in or confirmed via WhatsApp. Filling out an interest or pre-order form (such as our demand-validation form) does not constitute a confirmed purchase and falls outside this policy. These forms simply help us gauge interest before producing or stocking a design.
            </p>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">1. Shipping Within India</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-gold-soft">
                <li>We currently ship exclusively within India. International shipping is in the works (see Section 2).</li>
                <li>Orders are dispatched within 2 to 4 business days of confirmation, subject to stock availability and production time.</li>
                <li>Estimated delivery time is 5 to 7 business days from dispatch, depending on your location and courier serviceability.</li>
                <li>Shipping charges, if applicable, are displayed at checkout before payment or communicated via WhatsApp for orders placed there.</li>
                <li>A small number of pin codes may not be serviceable by our courier partners. If we are unable to deliver to your address, we will inform you and provide a full refund.</li>
                <li>Once your order is dispatched, we will share tracking details with you via WhatsApp or email.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">2. International Shipping</h2>
              <p className="mb-4">
                We are actively working on making Delaara available globally. Until our international shipping formally launches, we are unable to accept international orders. Once live, the following terms will apply:
              </p>
              <ul className="list-disc pl-5 space-y-3 marker:text-gold-soft mb-4">
                <li>International orders must be prepaid. Cash on Delivery is not available outside India.</li>
                <li>The buyer bears the actual international shipping cost, which will be calculated and displayed at checkout prior to payment. We do not absorb this cost as courier rates fluctuate without notice.</li>
                <li>Any customs duties, import taxes, or clearance charges levied by the destination country are the buyer's responsibility and are not included in the product or shipping price.</li>
                <li>Delivery timelines for international orders vary by country and will be shared at the time of order confirmation.</li>
              </ul>
              <p>We will update this section with comprehensive details once international shipping officially launches.</p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">3. Cash on Delivery (COD)</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-gold-soft">
                <li>Cash on Delivery is available for orders within India.</li>
                <li>We may confirm COD orders via a WhatsApp call or message prior to dispatch.</li>
                <li>Delaara reserves the right to cancel any COD order that cannot be confirmed, or in cases where there is a history of refused or undelivered COD orders. This ensures the option remains sustainable for all our customers.</li>
                <li>Please keep exact change ready where possible and inspect the package before accepting delivery.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">4. Order Cancellation</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-gold-soft">
                <li>You may cancel an order anytime before it is dispatched by messaging us on WhatsApp. No cancellation fee will be charged.</li>
                <li>Once an order has been dispatched, it cannot be cancelled. Please refer to our returns policy below in case of a genuine defect.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl text-charcoal mb-6">5. Returns, Exchanges & Refunds</h2>
              <p className="mb-4">
                Every Phiran is handcrafted and embroidered. This means small, natural variations in embroidery placement, color, or texture are inherent to the craft and are not considered defects. To preserve the integrity of our process and ensure fairness for genuine buyers, we do not offer returns or exchanges for reasons such as change of mind or personal preference. Our Phirans are free-size, so sizing is not considered a valid reason for return.
              </p>
              <p className="mb-4">
                We will accept a return or refund request only if your item arrives genuinely defective or damaged, subject to all the following conditions:
              </p>
              <ul className="list-disc pl-5 space-y-3 marker:text-gold-soft mb-6">
                <li>You must report the issue within 24 hours of delivery by messaging us on WhatsApp. Please include an unedited unboxing video showing the sealed package being opened, along with clear photos or video of the specific defect.</li>
                <li>Requests made after 24 hours, or without a valid unboxing video, cannot be accepted. The unboxing video is our only way of confirming the item left our hands in the reported condition.</li>
                <li>The item must remain unworn, unwashed, and with all original tags and packaging intact.</li>
              </ul>
              <p className="mb-4">
                Once we verify the defect and approve the claim:
              </p>
              <ul className="list-disc pl-5 space-y-3 marker:text-gold-soft mb-6">
                <li>Delaara will arrange for the item to be picked up and will bear the return shipping cost. A confirmed manufacturing defect is our responsibility.</li>
                <li>Refunds are issued via bank transfer or UPI to the details you provide within 7 business days of the returned item reaching us and passing inspection. We do not offer store credit.</li>
              </ul>
              <p>
                If a claim is not approved (for instance, if the reported issue is not visible in the unboxing video or falls outside the 24-hour window), the item will be shipped back to you and no refund will be issued.
              </p>
            </section>

            <section className="bg-beige p-8 rounded-sm">
              <h2 className="font-display text-2xl text-charcoal mb-4">6. Questions?</h2>
              <p className="m-0">
                Reach out to us anytime at <a href="mailto:delaaraofficial@gmail.com" className="text-gold-soft hover:text-gold link-underline">delaaraofficial@gmail.com</a> or on WhatsApp at <span className="text-gold-soft">+91 99973 62634</span>. We are always happy to help.
              </p>
            </section>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
