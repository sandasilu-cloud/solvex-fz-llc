import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SOLVEX Engineering FZ LLC for MEP, smart infrastructure, energy management, and technical engineering enquiries across the UAE.",
};

const info = [
  { label: "Head Office", value: "Dubai, UAE" },
  { label: "Operational Office", value: "Colombo, Sri Lanka" },
  { label: "Phone", value: "+971 00 000 0000" },
  { label: "Email", value: "sales@solvexeng.com" },
  { label: "WhatsApp", value: "+971 11 000 0000" },
  { label: "Business Hours", value: "Mon–Fri, 8:00–18:00" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project"
        subtitle="Reach our technical team directly via the form, email, or WhatsApp — we typically respond within one business day."
        image="/images/contact-us.avif"
      />
      <section className="py-24">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mb-7 flex h-60 items-center justify-center rounded-sm bg-gray-100 text-sm text-gray-400">
              Google Map — Head Office Location
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {info.map((c) => (
                <div key={c.label} className="rounded-sm border border-gray-200 p-5">
                  <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-gold">
                    {c.label}
                  </div>
                  <div className="text-sm font-medium text-navy">{c.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
