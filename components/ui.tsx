import Link from "next/link";
import type { ReactNode } from "react";

/* ── Eyebrow ──────────────────────────────────────────────────
   Editorial label: italic display serif followed by a hairline rule
   (after TEMPLARS). Not uppercase-tracked. */
export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light"; // dark = on light ground; light = on dark ground
  className?: string;
}) {
  const text = tone === "light" ? "text-white/85" : "text-navy";
  return (
    <span className={`inline-flex items-center gap-4 ${className}`}>
      <span className={`font-serif text-lg italic ${text}`}>{children}</span>
      <span aria-hidden className="h-px w-12 bg-gold" />
    </span>
  );
}

/* ── Section heading ──────────────────────────────────────────
   Eyebrow + display title + optional lede. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const titleColor = tone === "light" ? "text-white" : "text-ink";
  const ledeColor = tone === "light" ? "text-white/70" : "text-muted";
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-6 ${alignment} ${className}`}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`text-balance text-[2rem] leading-[1.05] sm:text-4xl lg:text-[2.9rem] ${titleColor}`}
      >
        {title}
      </h2>
      {lede ? <p className={`max-w-xl text-lg leading-relaxed ${ledeColor}`}>{lede}</p> : null}
    </div>
  );
}

/* ── Button / CTA ─────────────────────────────────────────────
   Press feedback via scale(0.97) and a short ease-out transition (after
   Emil Kowalski). Hover changes colour only; no layout-affecting motion. */
type ButtonVariant = "primary" | "gold" | "outline" | "outline-light" | "ghost";

const buttonBase =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-[background-color,color,border-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-navy text-white shadow-sm hover:bg-navy-deep",
  gold: "bg-gold text-navy-ink shadow-sm hover:bg-gold-soft",
  outline: "border border-ink/15 text-ink hover:border-navy hover:bg-navy hover:text-white",
  "outline-light": "border border-white/30 text-white hover:bg-white hover:text-navy",
  ghost: "text-ink hover:text-navy",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  withArrow?: boolean;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
  const content = (
    <>
      {children}
      {withArrow ? (
        <span
          aria-hidden
          className="transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1"
        >
          →
        </span>
      ) : null}
    </>
  );
  const cls = `${buttonBase} ${buttonVariants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
