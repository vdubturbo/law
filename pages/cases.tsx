import Head from "next/head";
import Link from "next/link";
import { useVariant } from "@/context/VariantContext";
import CaseResultsGrid from "@/components/CaseResultsGrid";
import type { CaseResult } from "@/components/CaseResultsGrid";

const caseResults: CaseResult[] = [
  {
    title: "National Media Defamation Defense",
    result: "$8.5M Verdict",
    area: "Defamation",
    summary:
      "Represented a public figure in a high-profile defamation case involving false statements published across national media outlets. Secured an $8.5 million jury verdict after a two-week trial, including compensatory and punitive damages.",
    slug: "defamation",
  },
  {
    title: "Multi-Party Business Fraud Litigation",
    result: "$4.2M Settlement",
    area: "Business Litigation",
    summary:
      "Represented a technology company in a complex fraud and breach of fiduciary duty action against former partners. Negotiated a $4.2 million settlement after aggressive discovery uncovered concealed financial transactions.",
    slug: "business-litigation",
  },
  {
    title: "Contested Trust & Estate Dispute",
    result: "Full Recovery",
    area: "Trust & Estate",
    summary:
      "Successfully represented beneficiaries in a contested trust dispute involving allegations of undue influence and fiduciary breach. Achieved full recovery of misappropriated trust assets through mediation after filing suit.",
    slug: "trust-estate-litigation",
  },
  {
    title: "Catastrophic Personal Injury Claim",
    result: "$2.8M Recovery",
    area: "Personal Injury",
    summary:
      "Secured a $2.8 million recovery for a client who suffered catastrophic injuries in a trucking collision caused by a commercial carrier's negligent maintenance practices. Case resolved prior to trial.",
    slug: "personal-injury",
  },
];

export default function Cases() {
  const { theme } = useVariant();

  return (
    <>
      <Head>
        <title>Case Results | Wade, Grunberg &amp; Wilson</title>
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
            Case <span style={{ color: theme.colors.accent }}>Results</span>
          </h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto animate-fade-in delay-200">
            A selection of outcomes achieved for our clients across practice areas.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 md:px-12 lg:px-20 pt-12">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs leading-relaxed" style={{ color: theme.colors.muted }}>
            Prior results do not guarantee a similar outcome. Every case is
            different and must be evaluated on its own facts and circumstances.
          </p>
        </div>
      </section>

      {/* Case Results Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <CaseResultsGrid cases={caseResults} variant="abc" theme={theme} />
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
            Discuss Your Case
          </h2>
          <p className="text-body-lg text-white/70 mb-8">
            Every matter is unique. Reach out to discuss how we can help with yours.
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
