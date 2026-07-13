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
  { tag: "Hospitality — Maldives", title: "Curio Collection by Hilton", scope: "Infinity Pool", desc: "Design, Supply and Installation supervision of 495m3 Main pool at Crossroads Maldives (infinity pool at SAii Lagoon Maldives, Curio Collection by Hilton) with Astral Pool (Spain) Swimming Pool Equipment", images: ["/images/projects/curio/curio-01.avif","/images/projects/curio/curio-02.avif" ,"/images/projects/curio/curio-03.avif","/images/projects/curio/curio-04.avif","/images/projects/curio/curio-05.avif","/images/projects/curio/curio-06.avif","/images/projects/curio/curio-07.avif"] },
  { tag: "Hospitality — Maldives", title: "Cocoon Maldives Resort", scope: "Private Pools", desc: "Design, Supply and Installation supervision of 20 Private Plunge pools at Cocoon Maldives Resort with Astral Pool (Spain) Swimming Pool Equipment.", images: ["/images/projects/cocoon/cocoon-01.avif","/images/projects/cocoon/cocoon-02.avif" ,"/images/projects/cocoon/cocoon-03.avif","/images/projects/cocoon/cocoon-04.avif","/images/projects/cocoon/cocoon-05.avif","/images/projects/cocoon/cocoon-06.avif"]},
  { tag: "Hospitality — Maldives", title: "Nika Maldives Resort", scope: "Solid Waste Management", desc: "Design, Supply, Installation, Testing and commissioning with user trainings of Solid Waste Incineration system at Nika Maldives Resort.", images: ["/images/projects/nika/nika-01.avif","/images/projects/nika/nika-02.avif" ,"/images/projects/nika/nika-03.avif","/images/projects/nika/nika-04.avif","/images/projects/nika/nika-05.avif","/images/projects/nika/nika-06.avif"]},
  { tag: "Hospitality — Maldives", title: "Alila Kotheifaru Maldives", scope: "Solid Waste Management", desc: "Design, Supply, Installation, Testing and commissioning with user trainings of Organic Solid Waste Composter systems at Alila Kotheifaru Maldives.", images: ["/images/projects/alila/alila-01.avif","/images/projects/alila/alila-02.avif" ,"/images/projects/alila/alila-03.avif","/images/projects/alila/alila-04.avif","/images/projects/alila/alila-05.avif","/images/projects/alila/alila-06.avif"]},
  { tag: "Hospitality — Maldives", title: "Westin Maldives Miriandhoo Resort", scope: "Private Plunge Pools & Hot Water System", desc: "Design, Supply and Installation supervision of 70 Private Plunge pools and 1 Main Pool at The Westin Maldives Miriandhoo Resort with Astral Pool (Spain) Swimming Pool Equipment.  Design, Supply and Installation supervision of Solahart (Australia) hot water system systems at The Westin Maldives Miriandhoo Resort.", images: ["/images/projects/miriandhoo/miriandhoo-01.avif", "/images/projects/miriandhoo/miriandhoo-02.avif","/images/projects/miriandhoo/miriandhoo-03.avif", "/images/projects/miriandhoo/miriandhoo-04.avif", "/images/projects/miriandhoo/miriandhoo-05.avif", "/images/projects/miriandhoo/miriandhoo-06.avif", "/images/projects/miriandhoo/miriandhoo-07.avif"] },
  { tag: "Hospitality - Maldives", title: "Joy Maldives Resort", scope: "Solid Waste Management", desc: "Supply, Installation, Testing and commissioning with user trainings of Solid Waste Compactor and Glass Crusher system at Joy Maldives Resort.", images: ["/images/projects/joy/joy-01.avif", "/images/projects/joy/joy-02.avif","/images/projects/joy/joy-03.avif"] },
  { tag: "Luxury Residential — Colombo", title: "Colombo City Centre", scope: "Video Door Phone System", desc: "192 luxury apartments have been equipped with 7‑inch ART7/G+ monitors, supported by 5 entrance panels and 2 Porter concierge units, delivering a complete video door entry and concierge solution.", images: ["/images/projects/ccc/vdp-01.avif", "/images/projects/ccc/vdp-02.avif","/images/projects/ccc/vdp-03.avif","/images/projects/ccc/vdp-04.avif","/images/projects/ccc/vdp-05.avif","/images/projects/ccc/vdp-06.avif"] },
  { tag: "Hospitality - Maldives", title: "Niva Dhigali Maldives Resort", scope: "Solid Waste Management", desc: "Design, Supply, Installation, Testing and commissioning with user trainings of Solid Waste Incineration system at Niva Dhigali Maldives Resort.", images: ["/images/projects/dhigali/dhigali-01.avif","/images/projects/dhigali/dhigali-02.avif","/images/projects/dhigali/dhigali-04.avif","/images/projects/dhigali/dhigali-05.avif","/images/projects/dhigali/dhigali-06.avif","/images/projects/dhigali/dhigali-07.avif"] },
  { tag: "Hospitality - Maldives", title: "Cora Cora Maldives Resort.", scope: "Solid Waste Management", desc: "Design, Supply, Installation, Testing and commissioning with user trainings of Solid Waste Incineration system at Cora Cora Maldives Resort.", images: ["/images/projects/cora-cora/cora-cora-01.avif","/images/projects/cora-cora/cora-cora-02.avif","/images/projects/cora-cora/cora-cora-03.avif","/images/projects/cora-cora/cora-cora-04.avif","/images/projects/cora-cora/cora-cora-05.avif","/images/projects/cora-cora/cora-cora-06.avif","/images/projects/dhigali/dhigali-07.avif"] },
  {tag: "Hospitality - Maldives", title: "Amari Raaya Maldives.", scope: "Solid Waste Management", desc: "Design, Supply, Installation, Testing and commissioning with user trainings of Solid Waste Management systems (Incinerator / Waste Compactor / Glass Crusher) at Amari Raaya Maldives Kudakurathu island development project..", images: ["/images/projects/amari/amari-01.avif","/images/projects/amari/amari-02.avif","/images/projects/amari/amari-03.avif"] },
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
