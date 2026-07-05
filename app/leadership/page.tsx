import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the leadership team behind SOLVEX Engineering FZ LLC, bringing decades of international MEP and engineering project delivery experience.",
};

const leaders = [
  { role: "Co-Founder/Managing Director", focus: "M. W. Meuranga Fernando ", bio: "Over sixteen years of expertise in MEP project management and design‑build solutions for swimming pools, hot water, water treatment, and solid waste systems. Combines international exposure with strengths in customer service, sales management, and business planning. Bridges strategic growth with technical execution, building client trust and delivering complex projects with excellence.", img: "/images/meuranga.avif" },
  { role: "Co-Founder/Technical Director", focus: "Sudhara S. B. Udugampala", bio: "Fourteen years of expertise in Building Services Engineering and MEP project management across hospitality, mixed‑use, and infrastructure developments in Sri Lanka, Seychelles, and the Maldives. Experienced in full lifecycle delivery including design, installation, systems integration, and commissioning. Combines technical depth with team leadership to deliver MEP systems for landmark projects.", img: "/images/sudhara.avif" },
];

const competencies = [
  "MEP Engineering", "Smart Building Technology", "Testing & Commissioning",
  "Energy Management", "Predictive Maintenance", "Industrial Engineering",
  "Water Treatment Systems", "Power Distribution Design", "Solid Waste Management systems",
  "D&B of Swimming Pool Systems ", "HVAC Systems", "D&B of Reverse Osmosis Systems", "Building Automation Systems",
  
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Engineering leadership built on experience"
        subtitle="Founders and technical directors with decades of regional and international project delivery."
        image="/images/leadership.avif"
      />
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {leaders.map((l, i) => (
              <Reveal key={l.role} delay={i * 0.1} className="flex gap-7">
                <div className="h-[180px] w-[150px] flex-shrink-0 overflow-hidden rounded-sm">
                  <Image src={l.img} alt={`${l.role} portrait`} width={300} height={360} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{l.role}</h3>
                  <div className="my-2 text-xs font-semibold uppercase tracking-wide text-cyan">{l.focus}</div>
                  <p className="text-[13.5px] text-gray-500">{l.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide text-navy/70">
              Core Technical Competencies
            </h4>
            <div className="flex flex-wrap gap-3">
              {competencies.map((c) => (
                <span key={c} className="rounded-full border border-gray-200 px-5 py-2.5 text-[12.5px] font-medium text-navy">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
