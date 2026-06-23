import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { GeometricPattern } from "@/components/GeometricPattern";

export type Crumb = { label: string; href?: string };

/**
 * Navy header for interior pages, with the brand line-motif (after TEMPLARS
 * interior heroes). Clears the fixed bar and sets the editorial tone.
 */
export function PageHeader({
  eyebrow,
  title,
  lede,
  crumbs,
  meta,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  crumbs?: Crumb[];
  meta?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-ink text-white">
      <GeometricPattern
        rows={5}
        cols={10}
        className="pointer-events-none absolute right-0 top-0 h-full w-[55%] opacity-50 [mask-image:linear-gradient(to_left,black,transparent)]"
      />
      <Container className="relative pb-16 pt-36 sm:pt-40 lg:pb-20 lg:pt-44">
        {crumbs?.length ? (
          <Reveal>
            <nav className="mb-8 flex items-center gap-2 text-sm text-white/45">
              {crumbs.map((c, i) => (
                <span key={c.label} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/70">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 ? <span aria-hidden>/</span> : null}
                </span>
              ))}
            </nav>
          </Reveal>
        ) : null}

        <div className="flex max-w-3xl flex-col gap-6">
          {eyebrow ? (
            <Reveal>
              <Eyebrow tone="light">{eyebrow}</Eyebrow>
            </Reveal>
          ) : null}
          <Reveal delay={80}>
            <h1 className="text-balance font-serif text-4xl leading-[1.04] sm:text-5xl lg:text-[3.7rem]">
              {title}
            </h1>
          </Reveal>
          {lede ? (
            <Reveal delay={160}>
              <p className="max-w-2xl text-lg leading-relaxed text-white/70">{lede}</p>
            </Reveal>
          ) : null}
          {meta ? <Reveal delay={220}>{meta}</Reveal> : null}
        </div>
      </Container>
    </section>
  );
}
