"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-100 transition-all duration-300 ${
        solid ? "bg-white shadow-[0_2px_24px_rgba(16,42,67,0.08)] py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className={`font-heading text-xl font-extrabold tracking-wide ${
            solid ? "text-navy" : "text-white"
          }`}
        >
          SOLVEX<span className="text-cyan">.</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-cyan ${
                solid ? "text-text" : "text-white/90"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-sm bg-cyan px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0093cc] hover:shadow-[0_10px_25px_rgba(0,168,232,0.3)]"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className={`lg:hidden ${solid ? "text-navy" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-white px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-text"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-sm bg-cyan px-6 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
