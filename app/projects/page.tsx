import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Featured Projects",
  description:
    "Selected engineering projects delivered by SOLVEX Engineering across hospitality, industrial, and commercial sectors in the UAE.",
};

const projects = [
  { tag: "Hospitality — Dubai", title: "Five-Star Resort MEP Upgrade", scope: "Full MEP retrofit & energy optimization", desc: "Complete mechanical, electrical, and plumbing system upgrade for a luxury beachfront resort, including energy metering and HVAC optimization.", img: "/images/projects/project-abc-1.avif" },
  { tag: "Industrial — Sharjah", title: "Manufacturing Plant Commissioning", scope: "Testing & commissioning of power systems", desc: "End-to-end testing and commissioning of LV/MV power distribution and process control systems for a manufacturing facility.", img: "/images/projects/project-abc-2.avif" },
  { tag: "Commercial — Abu Dhabi", title: "Smart Tower Building Management", scope: "BMS integration & predictive maintenance", desc: "Building management system integration paired with a predictive maintenance program for a multi-tenant commercial tower.", img: "/images/projects/project-abc-3.avif" },
  { tag: "Healthcare — Dubai", title: "Hospital MEP Compliance Review", scope: "Technical testing & inspection", desc: "Independent inspection and compliance verification of critical MEP systems across a multi-floor healthcare facility.", img: "/images/projects/project-abc-4.avif" },
  { tag: "Infrastructure — UAE", title: "Utility Water Treatment Support", scope: "Water quality monitoring", desc: "Ongoing water quality monitoring and reporting for a regional utility water treatment program.", img: "/images/projects/project-abc-5.avif" },
  { tag: "Data Centre — Dubai", title: "Critical Cooling Reliability Program", scope: "Predictive maintenance & asset management", desc: "Condition-based maintenance program for cooling and power redundancy systems supporting a Tier III data centre.", img: "/images/projects/project-abc-6.avif" },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Featured Projects"
        title="Selected engineering work"
        subtitle="A representative sample of recent project scopes across the sectors SOLVEX serves."
        image="/images/projects.avif"
      />
      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.06}>
                <div className="overflow-hidden rounded-sm border border-gray-200 bg-white">
                  <div className="relative h-[260px]">
                    <Image src={p.img} alt={p.title} fill className="object-cover" />
                  </div>
                  <div className="p-7">
                    <div className="eyebrow mb-3">{p.tag}</div>
                    <h3 className="mb-2 text-[19px] font-semibold">{p.title}</h3>
                    <div className="mb-3 text-[12.5px] font-medium text-cyan">{p.scope}</div>
                    <p className="text-[14px] text-gray-500">{p.desc}</p>
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
