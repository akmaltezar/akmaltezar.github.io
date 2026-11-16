import { ScrollJourney } from "@/components/scroll-journey";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/content";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tegal",
    addressCountry: "ID",
  },
  knowsAbout: [
    "React Native",
    "React",
    "Next.js",
    "TypeScript",
    "Laravel",
    "IoT",
  ],
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  return (
    <>
      <a className="skip-link mono" href="#experience">
        Skip to content
      </a>
      <SiteHeader />
      <ScrollJourney />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
