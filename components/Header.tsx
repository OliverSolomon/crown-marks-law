"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { nav } from "@/content/firm";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        solid
          ? "border-b border-white/10 bg-navy-ink/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] w-full max-w-[88rem] items-center justify-between px-6 sm:px-8 lg:px-12">
        <Logo tone="dark" priority className="w-[10.5rem] sm:w-[12rem]" />

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`link-underline text-[0.92rem] font-medium tracking-tight transition-colors ${
                isActive(item.href) ? "text-gold-soft" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[0.9rem] font-medium text-navy-ink transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-gold-soft active:scale-[0.97]"
          >
            Book a consultation
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-4 w-6">
            <Bar className={open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5"} />
            <Bar className={`top-1/2 -translate-y-1/2 ${open ? "opacity-0" : "opacity-100"}`} />
            <Bar className={open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0.5"} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-navy-ink md:hidden transition-[max-height] duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`border-b border-white/10 py-4 text-lg ${
                isActive(item.href) ? "text-gold-soft" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 mb-3 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3.5 text-sm font-medium text-navy-ink"
          >
            Book a consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Bar({ className }: { className: string }) {
  return (
    <span
      className={`absolute left-0 block h-px w-6 bg-white transition-all duration-300 ${className}`}
    />
  );
}
