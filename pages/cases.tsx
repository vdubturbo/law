import Head from "next/head";
import Link from "next/link";
import { useVariant } from "@/context/VariantContext";
import CaseResultsGrid from "@/components/CaseResultsGrid";
import { useCases } from "@/hooks/useCases";

export default function Cases() {
  const { theme } = useVariant();
  const { cases, loading, error } = useCases();

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
          {loading ? (
            <p
              className="text-center py-12 text-sm animate-pulse"
              style={{ color: theme.colors.muted }}
            >
              Loading case results...
            </p>
          ) : error ? (
            <p
              className="text-center py-12 text-sm"
              style={{ color: theme.colors.muted }}
            >
              Case results are temporarily unavailable. Please check back shortly.
            </p>
          ) : cases.length === 0 ? (
            <p
              className="text-center py-12 text-sm"
              style={{ color: theme.colors.muted }}
            >
              No case results to display at this time.
            </p>
          ) : (
            <CaseResultsGrid cases={cases} variant="abc" theme={theme} />
          )}
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
