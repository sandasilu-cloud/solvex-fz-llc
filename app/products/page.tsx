import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Engineered systems and equipment from SOLVEX: smart building systems, pool systems, RO systems, STPs, waste management, hot water systems, boilers, cooling towers, and LV/MV/ELV systems.",
};

const products = [
  { name: "Smart Building Systems", desc: "Integrated BMS, controls, and automation platforms for connected facilities.", applications: "HVAC control, lighting, access", img: "/images/products/smart-building-systems.avif" },
  { name: "Swimming Pool Equipment & Spare Parts", desc: "Filtration, circulation, and water treatment systems for pools of any scale.", applications: "Hotels, resorts, residential", img: "/images/products/swimming-pool-systems.avif" },
  { name: "Reverse Osmosis (RO) Systems & Spare Parts", desc: "Water treatment and purification systems for potable and process water.", applications: "Desalination, process water", img: "/images/products/reverse-osmosis-systems.avif" },
  { name: "Sewage Treatment (STP) Plants & Spare Parts", desc: "Compact biological treatment systems engineered for site-specific capacity.", applications: "Hospitality, residential, industrial", img: "/images/products/sewage-treatment-plants.avif" },
  { name: "Solid Waste Management (SWM) Systems & Spare Parts", desc: "Compaction, sorting, incineration, and handling systems for facility waste streams.", applications: "Commercial, industrial facilities", img: "/images/products/solid-waste-management.avif" },
  { name: "Hot Water Systems & Spare Parts", desc: "Centralised hot water generation and storage systems sized to demand.", applications: "Hospitality, healthcare, residential", img: "/images/products/hot-water-systems.avif" },
  { name: "Boiler Systems & Spare Parts", desc: "Steam and hot water boiler systems for process and comfort heating.", applications: "Industrial, hospitality", img: "/images/products/boiler-systems.avif" },
  { name: "Cooling Towers & Spare Parts", desc: "Heat rejection systems engineered for HVAC and process cooling loads.", applications: "Commercial, industrial HVAC", img: "/images/products/cooling-towers.avif" },
  { name: "Low Voltage Systems", desc: "LV distribution, LPS , Lighting, Switch Sockets, Cable containment, Terminal boxes & accessories", applications: "All facility types", img: "/images/products/low-voltage-systems.avif" },
  { name: "Medium Voltage Systems", desc: "MV switchgear, Transformers, MV cables and termination accessories for facilities.", applications: "Industrial, infrastructure, hospitality", img: "/images/products/medium-voltage-systems.avif" },
  { name: "Extra Low Voltage Systems", desc: "ELV systems including CCTV, access control, structured cabling, BAS , VDP .", applications: "Commercial, hospitality, government", img: "/images/products/elv-systems.avif" },
  { name: "HVAC Systems", desc: "Heating, ventilation, and air conditioning systems designed for efficiency.", applications: "All facility types", img: "/images/products/hvac-systems.avif" },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Engineered systems and equipment"
        subtitle="Specified, supplied, and integrated to support reliable building and infrastructure performance."
        image="/images/products.avif"
      />
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 0.04}>
                <div className="h-full overflow-hidden rounded-sm border border-gray-200 transition-colors hover:border-cyan">
                  <div className="h-[150px] overflow-hidden">
                    <Image src={p.img} alt={p.name} width={400} height={300} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-[15px] font-semibold">{p.name}</h3>
                    <p className="mb-2 text-[12.5px] text-gray-500">{p.desc}</p>
                    <p className="mb-3 text-[11px] font-medium text-navy/60">{p.applications}</p>
                    <Link href="/contact" className="text-[11.5px] font-semibold tracking-wide text-navy">
                      Request Product Information →
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
