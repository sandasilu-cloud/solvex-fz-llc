import Link from "next/link";
import { Link2, Share2, Camera, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-deep pt-16 pb-7 text-white/65">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-heading mb-3 text-xl font-extrabold text-white">
              SOLVEX<span className="text-cyan">.</span>
            </div>
            <p className="max-w-[280px] text-[13.5px] text-white/50">
              Engineering Smarter. Building Better. SOLVEX Engineering FZ LLC 
              delivers premium MEP, smart infrastructure, and technical consulting 
              across the region and beyond.
            </p>
          </div>
          <div>
            <h5 className="mb-4 text-[13px] uppercase tracking-wider text-white">
              Company
            </h5>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-[13.5px] hover:text-cyan">About</Link>
              <Link href="/leadership" className="text-[13.5px] hover:text-cyan">Leadership</Link>
              <Link href="/projects" className="text-[13.5px] hover:text-cyan">Projects</Link>
              <Link href="/contact" className="text-[13.5px] hover:text-cyan">Contact</Link>
            </div>
          </div>
          <div>
            <h5 className="mb-4 text-[13px] uppercase tracking-wider text-white">
              Work
            </h5>
            <div className="flex flex-col gap-3">
              <Link href="/services" className="text-[13.5px] hover:text-cyan">Services</Link>
              <Link href="/products" className="text-[13.5px] hover:text-cyan">Products</Link>
              <Link href="/industries" className="text-[13.5px] hover:text-cyan">Industries</Link>
            </div>
          </div>
          <div>
            <h5 className="mb-4 text-[13px] uppercase tracking-wider text-white">
              Legal
            </h5>
            <div className="flex flex-col gap-3">
              <Link href="/privacy-policy" className="text-[13.5px] hover:text-cyan">Privacy Policy</Link>
              <Link href="/terms" className="text-[13.5px] hover:text-cyan">Terms of Use</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[12.5px] text-white/40">
          <div>© {new Date().getFullYear()} SOLVEX Engineering FZ LLC. All rights reserved.</div>
          <div className="flex gap-3">
            {[Link2, Share2, Camera, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-8.5 w-8.5 items-center justify-center rounded-full border border-white/18 transition-colors hover:border-cyan hover:text-cyan"
                aria-label="Social link"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
