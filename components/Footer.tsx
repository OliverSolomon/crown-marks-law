import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/Container";
import { firm, nav } from "@/content/firm";
import { practices } from "@/content/practices";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-ink text-white/70">
      <Container className="py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Logo tone="dark" className="w-[13rem]" />
            <p className="max-w-xs text-[0.95rem] leading-relaxed text-white/60">
              {firm.description}
            </p>
            <p className="font-serif text-2xl text-gold-soft">{firm.tagline}</p>
          </div>

          {/* Practices */}
          <FooterCol title="Practices">
            {practices.slice(0, 6).map((p) => (
              <FooterLink key={p.slug} href={`/practices/${p.slug}`}>
                {p.title}
              </FooterLink>
            ))}
            <FooterLink href="/practices">All practices →</FooterLink>
          </FooterCol>

          {/* Firm */}
          <FooterCol title="Firm">
            {nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Contact */}
          <FooterCol title="Get in touch">
            <a href={firm.contact.phoneHref} className="link-underline w-fit hover:text-white">
              {firm.contact.phone}
            </a>
            <a
              href={`mailto:${firm.contact.email}`}
              className="link-underline w-fit hover:text-white"
            >
              {firm.contact.email}
            </a>
            <address className="not-italic leading-relaxed text-white/55">
              {firm.contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <span className="text-white/45">{firm.contact.hours}</span>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {firm.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {firm.social.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-white">
                {s.label}
              </a>
            ))}
            <span className="hidden sm:inline">{firm.city}, {firm.country}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-serif text-base text-gold-soft">{title}</h3>
      <div className="flex flex-col gap-3 text-[0.95rem]">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="w-fit text-white/60 transition-colors hover:text-white">
      {children}
    </Link>
  );
}
