import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ProjectGallery from "@/components/ProjectGallery";


export const metadata: Metadata = {
  title: "Featured Projects",
  description:
    "Selected engineering projects delivered by SOLVEX Engineering across hospitality, industrial, and commercial sectors in the UAE.",
};

const projects = [
  { tag: "Hospitality — Dubai", title: "Five-Star Resort MEP Upgrade", scope: "Full MEP retrofit & energy optimization", desc: "Complete mechanical, electrical, and plumbing system upgrade for a luxury beachfront resort, including energy metering and HVAC optimization.", images: ["/images/projects/project-1/project-abc-1.avif","/images/projects/project-abc-3.avif" ,"/images/projects/project-abc-4.avif","/images/projects/project-abc-5.avif","/images/projects/project-abc-6.avif"] },
  { tag: "Industrial — Sharjah", title: "Manufacturing Plant Commissioning", scope: "Testing & commissioning of power systems", desc: "End-to-end testing and commissioning of LV/MV power distribution and process control systems for a manufacturing facility.", images: ["/images/projects/project-abc-1.avif", "/images/projects/project-abc-1b.avif"] },
  { tag: "Commercial — Abu Dhabi", title: "Smart Tower Building Management", scope: "BMS integration & predictive maintenance", desc: "Building management system integration paired with a predictive maintenance program for a multi-tenant commercial tower.", images: ["/images/projects/project-abc-1.avif", "/images/projects/project-abc-1b.avif"] },
  { tag: "Healthcare — Dubai", title: "Hospital MEP Compliance Review", scope: "Technical testing & inspection", desc: "Independent inspection and compliance verification of critical MEP systems across a multi-floor healthcare facility.", images: ["/images/projects/project-abc-1.avif", "/images/projects/project-abc-1b.avif"] },
  { tag: "Luxury Residential — Colombo", title: "Colombo City Centre", scope: "Video Door Phone System", desc: "192 luxury apartments have been equipped with 7‑inch ART7/G+ monitors, supported by 5 entrance panels and 2 Porter concierge units, delivering a complete video door entry and concierge solution.", images: ["/images/projects/ccc/vdp-01.avif", "/images/projects/ccc/vdp-02.avif","/images/projects/ccc/vdp-03.avif","/images/projects/ccc/vdp-04.avif","/images/projects/ccc/vdp-05.avif","/images/projects/ccc/vdp-06.avif"] },
  { tag: "Data Centre — Dubai", title: "Critical Cooling Reliability Program", scope: "Predictive maintenance & asset management", desc: "Condition-based maintenance program for cooling and power redundancy systems supporting a Tier III data centre.", images: ["/images/projects/project-abc-1.avif", "/images/projects/project-abc-1b.avif"] },
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
                  <ProjectGallery images={p.images} title={p.title} />
                  
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
