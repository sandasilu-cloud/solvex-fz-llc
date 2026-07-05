import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import {
  Hotel, Building2, Factory, Cog, Cross, Landmark, Train, ShoppingBag,
  GraduationCap, Droplets, Server, Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "SOLVEX Engineering serves hotels & resorts, commercial buildings, industrial facilities, factories, hospitals, government, infrastructure, malls, education, utilities, and data centres.",
};

const industries = [
  { icon: Hotel, label: "Hotels & Resorts", body: "MEP and energy solutions tailored to luxury hospitality operations." },
  { icon: Building2, label: "Commercial Buildings", body: "Office towers and mixed-use developments with smart building integration." },
  { icon: Factory, label: "Industrial Facilities", body: "Process-critical MEP, testing, and commissioning for industrial sites." },
  { icon: Cog, label: "Factories", body: "Power distribution, controls, and maintenance for manufacturing plants." },
  { icon: Cross, label: "Hospitals", body: "Mission-critical systems with stringent reliability and compliance needs." },
  { icon: Landmark, label: "Government", body: "Public sector infrastructure delivered to regulatory and security standards." },
  { icon: Train, label: "Infrastructure", body: "Large-scale infrastructure projects requiring multi-discipline coordination." },
  { icon: ShoppingBag, label: "Shopping Malls", body: "High-occupancy retail environments with complex MEP demands." },
  { icon: GraduationCap, label: "Educational Institutions", body: "Campus-wide systems built for safety, comfort, and efficiency." },
  { icon: Droplets, label: "Utilities", body: "Water, wastewater, and energy utility infrastructure support." },
  { icon: Server, label: "Data Centres", body: "Cooling, power redundancy, and predictive maintenance for critical uptime." },
  { icon: Wrench, label: "Consultants & Contractors", body: "Technical partnership support for consultants and main contractors." },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Built for complex, demanding environments"
        subtitle="Engineering depth across eleven sectors, from luxury hospitality to mission-critical infrastructure."
        image="/images/industries-we-serve.avif"
      />
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.label} delay={(i % 3) * 0.05}>
                <div className="h-full rounded-sm border border-gray-200 p-8 transition-all hover:-translate-y-1 hover:border-cyan hover:shadow-[0_18px_40px_rgba(16,42,67,0.07)]">
                  <ind.icon className="mb-4 text-cyan" size={28} />
                  <h3 className="mb-2 text-[16.5px] font-semibold">{ind.label}</h3>
                  <p className="text-[13.5px] text-gray-500">{ind.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
