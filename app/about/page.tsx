import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SOLVEX Engineering FZ LLC is a UAE engineering consultancy delivering MEP, smart infrastructure, and technical engineering solutions led by an experienced leadership team.",
};

const stats = [
  { num: "16+", label: "Years Experience" },
  { num: "4+", label: "Countries Served" },
  { num: "100+", label: "Projects Supported" },
  { num: "24/7", label: "Technical Support" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Solvex"
        title = "An engineering partner built on technical discipline"
        subtitle="Sixteen years of MEP and infrastructure engineering across the UAE and international markets."
        image="/images/about-solvex.avif"
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="eyebrow">Our Story</div>
            <h2 className="mt-4 mb-5 text-[clamp(26px,3vw,38px)] font-bold leading-tight">
              Engineering solutions, not just installations
            </h2>
            <p className="mb-5 text-[16px] text-gray-600">
            At SOLVEX Engineering, we focus on delivering Mechanical, Electrical, and Plumbing (MEP) systems that combine technical excellence with practical reliability. Founded by experienced engineers Mr. Sudhara Sandasilu (Co‑Founder & Technical Director) and Mr. Meuranga Fernando (Co‑Founder & Managing Director), the company builds on more than 16 years of specialized expertise in MEP design, installation, and maintenance. 
            </p>
            <p className="text-[16px] text-gray-600">
            Guided by the founders’ leadership, our team works closely with clients to provide solutions tailored to each project’s structural and operational requirements. Every system is designed and executed with attention to detail, ensuring performance, safety, and long‑term value.
            </p>
            <p className="text-[16px] text-gray-600">
              Headquartered in the United Arab Emirates (UAE), with an operational office in Sri Lanka, SOLVEX Engineering supports projects across Sri Lanka, Maldives, Seychelles, and is steadily expanding into Asia and Africa. Our professionals serve a diverse portfolio of clients worldwide, offering dependable support around the clock.

            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/images/our-story.avif"
              alt="Engineers inspecting industrial infrastructure"
              fill
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center text-white">
              <div className="font-heading text-4xl font-extrabold text-cyan">{s.num}</div>
              <div className="mt-2 text-[12.5px] text-white/70">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="eyebrow justify-center">Our Commitment</div>
            <h2 className="mt-4 text-[clamp(26px,3vw,38px)] font-bold leading-tight">
              Smart engineering, sustainable infrastructure, operational reliability
            </h2>
            <p className="mt-5 text-[16px] text-gray-600">
              Every engagement is built on the same foundation: rigorous
              design, documented testing, and long-term technical
              accountability for the assets we help deliver.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
