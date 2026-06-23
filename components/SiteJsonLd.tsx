import { JsonLd } from "@/components/JsonLd";
import { firm, nav, siteUrl } from "@/content/firm";
import { practices } from "@/content/practices";

/**
 * Site-wide structured data: the firm as a LegalService organisation, the
 * WebSite, and the primary navigation as SiteNavigationElements (which help
 * search engines surface richer sitelinks and help AI crawlers understand the
 * site map). Rendered once in the root layout.
 */
export function SiteJsonLd() {
  const orgId = `${siteUrl}/#organization`;

  const organization = {
    "@type": ["LegalService", "Organization"],
    "@id": orgId,
    name: firm.name,
    alternateName: firm.shortName,
    url: siteUrl,
    logo: `${siteUrl}/logo-navy.png`,
    image: `${siteUrl}/og.png`,
    description: firm.description,
    slogan: firm.tagline,
    email: firm.contact.email,
    telephone: firm.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: firm.contact.address[0],
      addressLocality: firm.city,
      addressRegion: "Nairobi",
      addressCountry: "KE",
    },
    areaServed: [
      { "@type": "Country", name: "Kenya" },
      { "@type": "Place", name: "East Africa" },
    ],
    knowsAbout: practices.map((p) => p.title),
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10 },
    sameAs: firm.social.filter((s) => s.href !== "#").map((s) => s.href),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: firm.name,
    inLanguage: "en",
    publisher: { "@id": orgId },
  };

  const navigation = {
    "@type": "ItemList",
    "@id": `${siteUrl}/#navigation`,
    name: "Primary navigation",
    itemListElement: nav.map((item, i) => ({
      "@type": "SiteNavigationElement",
      position: i + 1,
      name: item.label,
      description: item.description,
      url: `${siteUrl}${item.href}`,
    })),
  };

  return (
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [organization, website, navigation] }} />
  );
}
