import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useVariant } from "@/context/VariantContext";

const practiceData: Record<string, { name: string; description: string }> = {
  "family-law": {
    name: "Family Law",
    description: "Compassionate and experienced representation in family law matters including divorce, child custody, child support, alimony, adoption, and prenuptial agreements.",
  },
  "personal-injury": {
    name: "Personal Injury",
    description: "Dedicated advocacy for individuals injured due to negligence, including car accidents, slip and falls, medical malpractice, and wrongful death claims.",
  },
  "civil-litigation": {
    name: "Civil Litigation",
    description: "Strategic representation in complex civil disputes including contract disputes, business litigation, property disputes, and employment matters.",
  },
  "estate-planning": {
    name: "Estate Planning",
    description: "Comprehensive estate planning services including wills, trusts, powers of attorney, healthcare directives, and probate administration.",
  },
  "business-law": {
    name: "Business Law",
    description: "Full-service business legal counsel including entity formation, contract drafting and review, mergers and acquisitions, and commercial disputes.",
  },
  "criminal-defense": {
    name: "Criminal Defense",
    description: "Vigorous defense of your constitutional rights in felony and misdemeanor cases, DUI charges, drug offenses, and white collar crimes.",
  },
};

export default function PracticeDetail() {
  const router = useRouter();
  const { practice } = router.query;
  const { theme } = useVariant();

  const slug = typeof practice === "string" ? practice : "";
  const data = practiceData[slug];

  if (!data) {
    return (
      <div className="py-26 px-6 text-center">
        <h1
          className="text-h1 font-bold mb-4"
          style={{
            fontFamily: theme.fonts.heading,
            color: theme.colors.primary,
          }}
        >
          Practice Area Not Found
        </h1>
        <Link
          href="/practices"
          className="text-body font-medium"
          style={{ color: theme.colors.accent }}
        >
          View All Practice Areas
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{data.name} | Wade, Grunberg &amp; Wilson</title>
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
            {data.name}
          </h1>
        </div>
      </section>

      {/* Content - Scaffold */}
      <section className="py-20 md:py-26 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-body-lg mb-8" style={{ color: theme.colors.muted }}>
            {data.description}
          </p>
          <p className="text-body mb-12" style={{ color: theme.colors.muted }}>
            Detailed content to be added in Phase 2. Our team brings extensive
            experience and a proven track record to every case.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 text-small font-semibold text-white tracking-wider transition-all duration-300 hover:opacity-90 shadow-soft hover:shadow-card"
              style={{ backgroundColor: theme.colors.accent }}
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/practices"
              className="inline-block px-8 py-3 text-small font-medium tracking-wider transition-all duration-300 shadow-soft hover:shadow-card"
              style={{
                color: theme.colors.primary,
                backgroundColor: "white",
              }}
            >
              All Practice Areas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
