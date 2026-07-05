import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative flex h-[56vh] min-h-[420px] items-end overflow-hidden bg-navy-deep pt-24 pb-16">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/70 to-navy-deep" />
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 lg:px-8">
        <div className="eyebrow mb-4 text-gold">{eyebrow}</div>
        <h1 className="font-heading max-w-2xl text-[clamp(30px,4.4vw,48px)] font-bold leading-tight !text-gold">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-[15.5px] text-white/75">{subtitle}</p>
      </div>
    </section>
  );
}
