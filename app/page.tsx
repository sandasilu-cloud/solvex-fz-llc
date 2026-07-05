import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  Hotel, Building2, Factory, Cog, Cross, Landmark, Train, ShoppingBag,
  GraduationCap, Droplets, Server, Wrench, ArrowRight,
} from "lucide-react";

const trust = [
  { num: "16+", label: "Years Experience" },
  { num: "4+", label: "Countries Served" },
  { num: "100+", label: "Projects Supported" },
  { num: "24/7", label: "Technical Support" },
  { num: "★", label: "Hospitality Specialists" },
  { num: "⚡", label: "Energy Efficient Solutions" },
];

const whyCards = [
  { n: "01", title: "Engineering Excellence", body: "Rigorous design and execution standards across every MEP and smart infrastructure discipline." },
  { n: "02", title: "Experienced Leadership", body: "Founders and technical directors with decades of regional and international project delivery." },
  { n: "03", title: "International Expertise", body: "Project experience spanning multiple countries, codes, and regulatory environments." },
  { n: "04", title: "Energy Efficient Solutions", body: "Designs that reduce lifecycle energy and operating cost without compromising performance." },
  { n: "05", title: "Quality Assurance", body: "Documented testing, inspection, and commissioning protocols on every engagement." },
  { n: "06", title: "Long-Term Technical Support", body: "Maintenance, monitoring, and asset performance support that continues after handover." },
];

const industries = [
  { icon: Hotel, label: "Hotels & Resorts" },
  { icon: Building2, label: "Commercial Buildings" },
  { icon: Factory, label: "Industrial Facilities" },
  { icon: Cog, label: "Factories" },
  { icon: Cross, label: "Hospitals" },
  { icon: Landmark, label: "Government" },
  { icon: Train, label: "Infrastructure" },
  { icon: ShoppingBag, label: "Shopping Malls" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: Droplets, label: "Utilities" },
  { icon: Server, label: "Data Centres" },
  { icon: Wrench, label: "Consultants & Contractors" },
];

const services = [
  { title: "System Design, Integration & Commissioning", body: "End-to-end design and handover of MEP and smart building systems.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900&auto=format&fit=crop" },
  { title: "Water Quality Monitoring", body: "Continuous monitoring to safeguard potable and process water systems.", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=900&auto=format&fit=crop" },
  { title: "Technical Testing & Inspection", body: "Independent verification of electrical, mechanical, and plumbing systems.", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=900&auto=format&fit=crop" },
  { title: "Predictive Maintenance & Asset Management", body: "Condition-based monitoring that extends asset life and reduces downtime.", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=900&auto=format&fit=crop" },
  { title: "Non-Destructive Testing", body: "Thermal imaging, ultrasonic, and inspection methods that protect uptime.", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=900&auto=format&fit=crop" },
  { title: "Energy Management", body: "Metering, analytics, and optimization strategies that cut operating cost.", img: "https://images.unsplash.com/photo-1581093588401-7e3b4a3b5d0d?q=80&w=900&auto=format&fit=crop" },
];

const products = [
  { name: "Smart Building Systems", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600&auto=format&fit=crop" },
  { name: "Swimming Pool Systems", img: "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?q=80&w=600&auto=format&fit=crop" },
  { name: "Reverse Osmosis Systems", img: "https://images.unsplash.com/photo-1581093458791-9d42cf6c1f2c?q=80&w=600&auto=format&fit=crop" },
  { name: "Sewage Treatment Plants", img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=600&auto=format&fit=crop" },
  { name: "Solid Waste Management", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop" },
  { name: "Hot Water Systems", img: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=600&auto=format&fit=crop" },
  { name: "Cooling Towers", img: "https://images.unsplash.com/photo-1581093196277-9f608bb3b511?q=80&w=600&auto=format&fit=crop" },
  { name: "LV / MV / ELV Systems", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop" },
];

const projects = [
  { tag: "Hospitality — Dubai", title: "Five-Star Resort MEP Upgrade", body: "Full MEP retrofit & energy optimization", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop" },
  { tag: "Industrial — Sharjah", title: "Manufacturing Plant Commissioning", body: "Testing & commissioning of power systems", img: "https://images.unsplash.com/photo-1581094651181-35942459ef62?q=80&w=900&auto=format&fit=crop" },
  { tag: "Commercial — Abu Dhabi", title: "Smart Tower Building Management", body: "BMS integration & predictive maintenance", img: "https://images.unsplash.com/photo-1545179605-1296651e9d43?q=80&w=900&auto=format&fit=crop" },
];

const process = [
  { n: "1", title: "Consultation", body: "Understand requirements and project objectives" },
  { n: "2", title: "Engineering Design", body: "Detailed, code-compliant system design" },
  { n: "3", title: "Execution", body: "Installation and integration on site" },
  { n: "4", title: "Testing & Commissioning", body: "Verification against design intent" },
  { n: "5", title: "Long-Term Support", body: "Maintenance and performance monitoring" },
];

export default function Home() {
  return (
    <>
      <section className="relative flex h-screen min-h-[680px] items-center overflow-hidden bg-[#0a1c2e]">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1800&auto=format&fit=crop"
          alt="Dubai skyline engineering infrastructure at dusk"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/55 via-navy-deep/78 to-navy-deep" />
        <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="max-w-[780px]">
            <div className="eyebrow mb-5 text-gold">SOLVEX Engineering FZ LLC — UAE</div>
            <h1 className="font-heading text-[clamp(38px,5.4vw,64px)] font-bold leading-[1.08] text-white">
              Engineering Smarter.<br />Building Better.
            </h1>
            <p className="mt-5 max-w-[600px] text-lg text-white/82">
              Delivering innovative Mechanical, Electrical & Plumbing (MEP), Smart
              Infrastructure, Energy Management, Testing & Commissioning,
              Predictive Maintenance, and Industrial Engineering solutions across
              the UAE and international markets.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-sm bg-cyan px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0093cc] hover:shadow-[0_10px_25px_rgba(0,168,232,0.3)]">
                Request a Quote
              </Link>
              <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer" className="rounded-sm border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-9 left-6 z-10 flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-white/60 lg:left-8">
          Scroll
          <span className="animate-scroll-cue h-9 w-px bg-white/40" />
        </div>
      </section>

      <div className="bg-navy py-9">
        <div className="mx-auto grid max-w-[1240px] grid-cols-3 gap-5 px-6 lg:grid-cols-6 lg:px-8">
          {trust.map((t) => (
            <div key={t.label} className="text-center text-white">
              <div className="font-heading text-2xl font-extrabold text-cyan">{t.num}</div>
              <div className="mt-1 text-[11.5px] text-white/70">{t.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-28">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 px-6 lg:grid-cols-[0.85fr_1fr] lg:gap-[70px] lg:px-8">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1000&auto=format&fit=crop"
                alt="SOLVEX engineers reviewing technical drawings on site"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -z-10 left-6 top-6 h-[90%] w-[90%] border border-gold" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="eyebrow">About Solvex</div>
            <h2 className="mt-4 text-[clamp(28px,3.4vw,42px)] font-bold leading-tight">
              An engineering partner, not just a contractor
            </h2>
            <p className="mt-5 mb-8 text-[16.5px] text-gray-600">
              SOLVEX Engineering FZ LLC is a forward-thinking engineering company
              delivering advanced Mechanical, Electrical & Plumbing (MEP)
              systems, smart technologies, testing & commissioning, predictive
              maintenance, and sustainable engineering solutions. Led by
              experienced founders with extensive international expertise,
              SOLVEX supports hospitality, commercial, industrial, healthcare,
              and infrastructure projects across the UAE and international
              markets.
            </p>
            <div className="grid grid-cols-2 gap-6 border-t border-gray-200 pt-8 sm:grid-cols-4">
              {trust.slice(0, 4).map((t) => (
                <div key={t.label}>
                  <div className="font-heading text-3xl font-extrabold text-navy">{t.num}</div>
                  <div className="mt-1.5 text-[12.5px] text-gray-500">{t.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <Reveal className="mb-14 max-w-xl">
            <div className="eyebrow">Why Solvex</div>
            <h2 className="mt-4 text-[clamp(28px,3.4vw,42px)] font-bold leading-tight">
              Engineering judgment you can build on
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="h-full rounded-sm border border-gray-200 p-9 transition-all hover:-translate-y-1 hover:border-cyan hover:shadow-[0_18px_40px_rgba(16,42,67,0.07)]">
                  <div className="font-heading mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-cyan/10 font-bold text-cyan">
                    {c.n}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{c.title}</h3>
                  <p className="text-[14.5px] text-gray-500">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-28">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <Reveal className="mb-14 max-w-xl">
            <div className="eyebrow">Industries We Serve</div>
            <h2 className="mt-4 text-[clamp(28px,3.4vw,42px)] font-bold leading-tight text-white">
              Built for complex, demanding environments
            </h2>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-4">
              {industries.map((ind) => (
                <div key={ind.label} className="flex flex-col items-center bg-navy px-5 py-8 text-center transition-colors hover:bg-[#16314f]">
                  <ind.icon className="mb-3.5 text-cyan" size={26} />
                  <span className="text-[13.5px] font-medium text-white">{ind.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <Reveal className="mb-14 max-w-xl">
            <div className="eyebrow">Services</div>
            <h2 className="mt-4 text-[clamp(28px,3.4vw,42px)] font-bold leading-tight">
              Full lifecycle engineering, from design to long-term support
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group h-full overflow-hidden rounded-sm border border-gray-200 bg-white transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(16,42,67,0.1)]">
                  <div className="h-[190px] overflow-hidden">
                    <Image src={s.img} alt={s.title} width={500} height={300} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-[17.5px] font-semibold">{s.title}</h3>
                    <p className="mb-4 text-sm text-gray-500">{s.body}</p>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-cyan">
                      Enquire <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-block rounded-sm bg-navy px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0a1f33]">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <Reveal className="mb-14 max-w-xl">
            <div className="eyebrow">Products</div>
            <h2 className="mt-4 text-[clamp(28px,3.4vw,42px)] font-bold leading-tight">
              Engineered systems and equipment
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.04}>
                <div className="overflow-hidden rounded-sm border border-gray-200 transition-colors hover:border-cyan">
                  <div className="h-[150px] overflow-hidden">
                    <Image src={p.img} alt={p.name} width={400} height={300} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h4 className="mb-2 text-[14.5px] font-semibold">{p.name}</h4>
                    <Link href="/contact" className="text-[11.5px] font-semibold tracking-wide text-navy">
                      Request Information →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <Reveal className="mb-14 max-w-xl">
            <div className="eyebrow">Featured Projects</div>
            <h2 className="mt-4 text-[clamp(28px,3.4vw,42px)] font-bold leading-tight">
              Selected engineering work
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-106" />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-deep/92 via-transparent to-transparent p-7">
                    <div className="mb-2 text-[11px] uppercase tracking-[0.12em] text-gold">{p.tag}</div>
                    <h3 className="mb-1.5 text-[19px] font-semibold text-white">{p.title}</h3>
                    <p className="text-[12.5px] text-white/70">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-28">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <Reveal className="mb-16 max-w-xl">
            <div className="eyebrow">Engineering Process</div>
            <h2 className="mt-4 text-[clamp(28px,3.4vw,42px)] font-bold leading-tight text-white">
              A disciplined path from concept to long-term performance
            </h2>
          </Reveal>
          <Reveal>
            <div className="relative flex flex-col gap-10 lg:flex-row lg:justify-between">
              <div className="absolute top-6 left-0 right-0 hidden h-px bg-white/15 lg:block" />
              {process.map((p) => (
                <div key={p.n} className="relative flex-1 text-center">
                  <div className="font-heading relative z-10 mx-auto mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-full border border-cyan bg-navy-deep font-bold text-cyan">
                    {p.n}
                  </div>
                  <h4 className="mb-1.5 text-[14.5px] font-semibold text-white">{p.title}</h4>
                  <p className="mx-auto max-w-[150px] text-xs text-white/55">{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <p className="font-heading mb-7 text-[22px] font-medium leading-relaxed text-navy">
              &ldquo;SOLVEX brought a level of technical discipline to our MEP
              commissioning that we hadn&rsquo;t seen from previous
              contractors. The handover was clean, documented, and on
              schedule.&rdquo;
            </p>
            <div className="text-[13.5px] text-gray-500">
              <b className="text-navy">Facilities Director</b> — Luxury Hospitality Group, Dubai
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-24 text-center">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <Reveal>
            <div className="eyebrow justify-center">Get In Touch</div>
            <h2 className="mx-auto mt-4 max-w-[680px] text-[clamp(28px,3.6vw,44px)] font-bold leading-tight text-white">
              Let&rsquo;s Solve Engineering Complexity Together
            </h2>
            <p className="mx-auto mt-4 mb-9 max-w-[520px] text-white/70">
              Partner with SOLVEX Engineering for reliable, innovative, and future-ready engineering solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="rounded-sm bg-cyan px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0093cc]">
                Request a Quote
              </Link>
              <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer" className="rounded-sm border border-white/40 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10">
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
