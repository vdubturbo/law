import Head from "next/head";
import Link from "next/link";
import { useVariant } from "@/context/VariantContext";

const practiceAreas = [
  { slug: "family-law", name: "Family Law", description: "Divorce, custody, support, and adoption matters handled with sensitivity." },
  { slug: "personal-injury", name: "Personal Injury", description: "Advocating for fair compensation after accidents and injuries." },
  { slug: "civil-litigation", name: "Civil Litigation", description: "Strategic representation in complex civil disputes." },
  { slug: "estate-planning", name: "Estate Planning", description: "Wills, trusts, and probate to protect your family's future." },
  { slug: "business-law", name: "Business Law", description: "Formation, contracts, and dispute resolution for businesses." },
  { slug: "criminal-defense", name: "Criminal Defense", description: "Vigorous defense of your rights and freedom." },
];

export default function Practices() {
  const { theme } = useVariant();

  return (
    <>
      <Head>
        <title>Practice Areas | Wade, Grunberg &amp; Wilson</title>
      </Head>

      {/* Page Header */}
      <section
        className="py-20 md:py-26 px-6 md:px-12 lg:px-20 variant-transition"
        style={{ backgroundColor: theme.colors.primary }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-h1 md:text-display font-bold text-white mb-6 animate-fade-in"
            style={{ fontFamily: theme.fonts.heading }}
          >
            Practice <span style={{ color: theme.colors.accent }}>Areas</span>
          </h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto animate-fade-in delay-200">
            Comprehensive legal services across multiple disciplines.
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 md:py-26 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/${area.slug}`}
                className="block p-8 shadow-card hover:shadow-elevated transition-all duration-300 group"
                style={{ backgroundColor: "white" }}
              >
                <h3
                  className="text-h3 font-bold mb-3 transition-colors duration-300"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                  }}
                >
                  {area.name}
                </h3>
                <p className="text-body mb-4" style={{ color: theme.colors.muted }}>
                  {area.description}
                </p>
                <span
                  className="text-small font-medium tracking-wide transition-all duration-300 group-hover:tracking-wider"
                  style={{ color: theme.colors.accent }}
                >
                  Learn More
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
