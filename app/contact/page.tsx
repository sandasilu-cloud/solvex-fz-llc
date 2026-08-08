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
  { label: "Head Office", value: "CWEP7677,\n Compass Building,\n Al Shohada Rd,\nAl Hamra Industrial Zone-FZ,\n Ras Al Khaimah,\nUnited Arab Emirates" },
  { label: "Operational Office", value: "Colombo, Sri Lanka" },
  { label: "Phone", value: "+1 (905) 581 3963" },
  { label: "Email", value: "sales@solvexeng.com" },
  { label: "WhatsApp", value: "+1 (905) 581 3963" },
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
              <iframe
                src="https://www.google.com/maps?q=25.665052,55.786282&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SOLVEX Head Office Location"
              />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {info.map((c) => (
                <div key={c.label} className="rounded-sm border border-gray-200 p-5">
                  <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-gold">
                    {c.label}
                  </div>
                  <div className="text-sm font-medium text-navy whitespace-pre-line">{c.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
