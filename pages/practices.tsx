import Head from "next/head";
import Link from "next/link";
import { useVariant } from "@/context/VariantContext";

const practiceAreas = [
  {
    title: "Defamation & Reputation Defense",
    slug: "defamation",
    description:
      "Protecting reputations against false and damaging allegations across media, digital, and traditional channels.",
  },
  {
    title: "Complex Business Disputes",
    slug: "business-litigation",
    description:
      "Resolving high-stakes commercial conflicts including breach of contract, fraud, trade secrets, and fiduciary claims.",
  },
  {
    title: "Trust & Estate Litigation",
    slug: "trust-estate-litigation",
    description:
      "Navigating contested trusts, estates, and fiduciary matters with precision and discretion.",
  },
  {
    title: "Personal Injury",
    slug: "personal-injury",
    description:
      "Advocating for individuals harmed by negligence in motor vehicle, premises liability, and professional malpractice cases.",
  },
  {
    title: "Civil Rights Litigation",
    slug: "civil-rights",
    description:
      "Pursuing justice for violations of individual rights and constitutional protections at the state and federal level.",
  },
  {
    title: "Appellate Advocacy",
    slug: "appellate",
    description:
      "Crafting persuasive appellate arguments to protect and advance client interests in higher courts.",
  },
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
            Focused expertise in the areas of law where we can make the greatest
            difference for our clients.
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 md:py-26 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, i) => (
              <Link
                key={area.slug}
                href={`/${area.slug}`}
                className="block p-8 bg-white shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group opacity-0 animate-slide-up"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <h3
                  className="text-h3 font-bold mb-3 transition-colors duration-300"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                  }}
                >
                  {area.title}
                </h3>
                <p className="text-body mb-4" style={{ color: theme.colors.muted, lineHeight: 1.7 }}>
                  {area.description}
                </p>
                <span
                  className="text-small font-medium tracking-wide transition-all duration-300 group-hover:tracking-wider"
                  style={{ color: theme.colors.accent }}
                >
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-20 px-6 md:px-12 lg:px-20 variant-transition"
        style={{ backgroundColor: theme.colors.primary }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-h2 font-bold text-white mb-4"
            style={{ fontFamily: theme.fonts.heading }}
          >
            Need Legal Guidance?
          </h2>
          <p className="text-body-lg text-white/70 mb-8">
            Contact us to discuss your situation with an experienced attorney.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
            style={{
              backgroundColor: theme.colors.accent,
              fontFamily: theme.fonts.body,
            }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
