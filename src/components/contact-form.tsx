"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        console.error("Form submission failed:", data);
        setStatus("idle");
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("idle");
      alert("An error occurred while sending the message.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-beige p-8 text-center rounded-sm">
        <h3 className="font-display text-3xl mb-4 text-charcoal">Thank You</h3>
        <p className="text-charcoal/80 font-serif text-lg">
          Your message has been sent successfully. We will get back to you within 24-48 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm uppercase tracking-widest text-gold-soft hover:text-gold link-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm uppercase tracking-widest text-charcoal/60">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-transparent border-b border-charcoal/20 py-3 text-charcoal placeholder-charcoal/30 focus:border-gold-soft focus:outline-none transition-colors font-serif text-lg"
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm uppercase tracking-widest text-charcoal/60">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-transparent border-b border-charcoal/20 py-3 text-charcoal placeholder-charcoal/30 focus:border-gold-soft focus:outline-none transition-colors font-serif text-lg"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm uppercase tracking-widest text-charcoal/60">
          Phone Number (Optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full bg-transparent border-b border-charcoal/20 py-3 text-charcoal placeholder-charcoal/30 focus:border-gold-soft focus:outline-none transition-colors font-serif text-lg"
          placeholder="+91"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm uppercase tracking-widest text-charcoal/60">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full bg-transparent border-b border-charcoal/20 py-3 text-charcoal placeholder-charcoal/30 focus:border-gold-soft focus:outline-none transition-colors font-serif text-lg resize-none"
          placeholder="How can we help you?"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-charcoal text-ivory px-10 py-4 uppercase tracking-widest text-sm hover:bg-gold-soft transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
