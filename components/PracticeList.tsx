import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { practices } from "@/content/practices";

/**
 * Two-column index of practice areas (after the TEMPLARS capabilities list).
 * - tone="dark": minimal white-on-navy rows with a hairline rule and arrow.
 * - tone="light": richer rows with numeral and tagline for the index page.
 */
export function PracticeList({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className="grid sm:grid-cols-2 sm:gap-x-14">
      {practices.map((p, i) => (
        <Reveal key={p.slug} delay={(i % 2) * 60}>
          <Link
            href={`/practices/${p.slug}`}
            className={`group flex items-center justify-between gap-6 border-t py-6 transition-colors duration-300 ${
              dark ? "border-white/15" : "border-line"
            }`}
          >
            <span className="flex items-baseline gap-4">
              {!dark ? (
                <span className="font-serif text-sm tabular-nums text-gold">{p.index}</span>
              ) : null}
              <span className="flex flex-col gap-1">
                <span
                  className={`font-serif text-[1.45rem] leading-tight transition-colors duration-300 sm:text-[1.6rem] ${
                    dark
                      ? "text-white group-hover:text-gold-soft"
                      : "text-ink group-hover:text-navy"
                  }`}
                >
                  {p.title}
                </span>
                {!dark ? (
                  <span className="max-w-md text-[0.95rem] leading-relaxed text-muted">
                    {p.tagline}
                  </span>
                ) : null}
              </span>
            </span>
            <span
              aria-hidden
              className={`shrink-0 text-lg transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1.5 ${
                dark ? "text-gold-soft" : "text-gold"
              }`}
            >
              →
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
