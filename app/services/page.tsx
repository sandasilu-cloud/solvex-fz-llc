import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SOLVEX Engineering services: system design & commissioning, water quality monitoring, technical testing & inspection, predictive maintenance, non-destructive testing, energy management, O&M, and AMC.",
};

const services = [
  { title: "System Design, Integration & Commissioning", body: "End-to-end design and handover of MEP and smart building systems, from concept through commissioning.", benefits: ["Code-compliant design", "Coordinated MEP integration", "Documented commissioning"], industries: "Hospitality, Commercial, Industrial", img: "/images/services/system-design-integration.avif" },
  { title: "Water Quality Monitoring", body: "Continuous monitoring programs that safeguard potable and process water systems against contamination risk.", benefits: ["Real-time monitoring", "Regulatory compliance", "Risk reporting"], industries: "Hotels, Healthcare, Utilities", img: "/images/services/water-quality-monitoring.avif" },
  { title: "Technical Testing & Inspection", body: "Independent verification of electrical, mechanical, and plumbing systems against design intent.", benefits: ["Third-party verification", "Detailed inspection reports", "Defect identification"], industries: "All sectors", img: "/images/services/testing-inspections.avif" },
  { title: "Predictive Maintenance & Asset Management", body: "Condition-based monitoring programs that extend asset life and reduce unplanned downtime.", benefits: ["Condition monitoring", "Lifecycle planning", "Reduced downtime"], industries: "Industrial, Data Centres, Hospitality", img: "/images/services/predictive-maintenance.avif" },
  { title: "Non-Destructive Testing", body: "Thermal imaging, ultrasonic, and other inspection methods that protect uptime without disrupting operations.", benefits: ["Thermal imaging", "Ultrasonic testing", "Non-intrusive methods"], industries: "Industrial, Infrastructure", img: "/images/services/non-destructive-testing.avif" },
  { title: "Energy Management", body: "Metering, analytics, and optimization strategies that cut operating cost and improve sustainability metrics.", benefits: ["Sub-metering & analytics", "Energy audits", "Optimization roadmaps"], industries: "Commercial, Hospitality, Government", img: "/images/services/energy-management.avif" },
  { title: "Operation & Maintenance (O&M)", body: "Day-to-day operational support that keeps building and facility systems running at design performance.", benefits: ["Scheduled servicing", "24/7 support coverage", "Performance reporting"], industries: "All sectors", img: "/images/services/operation-maintenance.avif" },
  { title: "User Training & Technical Support", body: "Hands-on training for facility teams to operate and troubleshoot installed systems with confidence.", benefits: ["On-site training", "Operating manuals", "Ongoing technical support"], industries: "All sectors", img: "/images/services/user-training.avif" },
  { title: "Warranty & Spare Parts", body: "Warranty management and spare parts supply that minimizes disruption when components need replacement.", benefits: ["Warranty administration", "Spare parts sourcing", "Fast turnaround"], industries: "All sectors", img: "/images/services/warranty-spares.avif" },
  { title: "Post-Installation Assistance & Annual Maintenance Contracts (AMC)", body: "Structured maintenance agreements that give facility owners predictable cost and consistent system reliability.", benefits: ["Predictable cost", "Scheduled visits", "Priority response"], industries: "All sectors", img: "/images/services/post-installation-amc.avif" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Full lifecycle engineering, from design to long-term support"
        subtitle="Core service lines covering design, installation, asset management, warranties and maintenance of systems."
        image="/images/services.avif"
      />
      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.05}>
                <div className="group h-full overflow-hidden rounded-sm border border-gray-200 bg-white transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(16,42,67,0.1)]">
                  <div className="h-[180px] overflow-hidden">
                    <Image src={s.img} alt={s.title} width={500} height={300} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-[16.5px] font-semibold">{s.title}</h3>
                    <p className="mb-4 text-[13.5px] text-gray-500">{s.body}</p>
                    <ul className="mb-4 space-y-1.5">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="h-1 w-1 rounded-full bg-gold" /> {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mb-4 text-[11.5px] font-medium text-navy/70">
                      Industries: {s.industries}
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-cyan">
                      Request a Quote <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
