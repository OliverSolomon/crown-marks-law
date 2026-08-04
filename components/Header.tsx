"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { firm, nav } from "@/content/firm";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-canvas transition-shadow duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        scrolled ? "shadow-[0_1px_0_var(--color-line),0_8px_24px_-18px_rgba(6,47,46,0.45)]" : "border-b border-line"
      }`}
    >
      {/* Utility strip (CC-style) */}
      <div className="hidden border-b border-line bg-ivory md:block">
        <div className="mx-auto flex h-9 w-full max-w-[88rem] items-center justify-between px-6 sm:px-8 lg:px-12">
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-muted">
            {firm.city}, {firm.country}
          </span>
          <div className="flex items-center gap-6 text-[0.78rem] font-medium text-muted">
            <a href={firm.contact.phoneHref} className="link-underline hover:text-navy">
              {firm.contact.phone}
            </a>
            <Link href="/contact" className="link-underline hover:text-navy">
              Client enquiries
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex h-[4.75rem] w-full max-w-[88rem] items-center justify-between px-6 sm:px-8 lg:px-12">
        <Logo tone="light" priority className="w-[10.5rem] sm:w-[12.5rem]" />

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-1 text-[0.9rem] font-medium tracking-tight transition-colors ${
                isActive(item.href) ? "text-navy" : "text-ink/75 hover:text-navy"
              }`}
            >
              {item.label}
              <span
                aria-hidden
                className={`absolute -bottom-0.5 left-0 h-0.5 bg-gold-bright transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  isActive(item.href) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <span aria-hidden className="h-6 w-px bg-line" />
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-sm bg-navy px-5 py-2.5 text-[0.86rem] font-medium text-white transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-navy-deep active:scale-[0.97]"
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
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
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
        className={`overflow-hidden border-t border-line bg-canvas lg:hidden transition-[max-height] duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open ? "max-h-[26rem]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`border-b border-line py-4 text-lg ${
                isActive(item.href) ? "text-navy" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 mb-3 inline-flex items-center justify-center rounded-sm bg-navy px-5 py-3.5 text-sm font-medium text-white"
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
      className={`absolute left-0 block h-px w-6 bg-current transition-all duration-300 ${className}`}
    />
  );
}
