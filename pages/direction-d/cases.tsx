import type { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import DirectionDLayout from "@/components/direction-d/DirectionDLayout";
import CaseResultsGrid from "@/components/CaseResultsGrid";
import CaseCardSkeleton from "@/components/CaseCardSkeleton";
import { useCases } from "@/hooks/useCases";
import type { NextPageWithLayout } from "../_app";

const CasesPage: NextPageWithLayout = () => {
  const shouldReduceMotion = useReducedMotion();
  const { cases, loading, error } = useCases();

  const fadeIn = (delay: number = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" },
        };

  return (
    <>
      <Head>
        <title>Case Results | Wade, Grunberg &amp; Wilson</title>
      </Head>

      {/* Page Header + Disclaimer + Grid (navy bleeds behind top of cards) */}
      <div style={{ backgroundColor: "var(--d-bg)" }}>
        <div
          style={{
            background:
              "linear-gradient(to bottom, var(--d-navy) 0%, var(--d-navy) 480px, var(--d-bg) 480px)",
          }}
        >
          <section className="pt-20 md:pt-28 pb-10 px-6 md:px-10">
            <div className="max-w-[1120px] mx-auto">
              <motion.span
                {...fadeIn(0)}
                className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full mb-6"
                style={{
                  border: "1px solid var(--d-accent)",
                  color: "var(--d-accent)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Case Results
              </motion.span>
              <motion.h1
                {...fadeIn(0.1)}
                className="text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-white leading-[1.1]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "-0.02em",
                }}
              >
                Results That Speak
              </motion.h1>
              <motion.p
                {...fadeIn(0.2)}
                className="mt-6 text-base md:text-lg text-white/65 max-w-lg leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                A selection of outcomes achieved for our clients across practice
                areas.
              </motion.p>

              {/* Disclaimer */}
              <motion.p
                {...fadeIn(0.25)}
                className="mt-10 text-xs leading-relaxed text-white/40"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Prior results do not guarantee a similar outcome. Every case is
                different and must be evaluated on its own facts and
                circumstances.
              </motion.p>
            </div>
          </section>

          {/* Case Results Grid */}
          <section className="pt-8 pb-16 md:pb-24 px-6 md:px-10">
            <div className="max-w-[1120px] mx-auto">
              {loading ? (
                <CaseCardSkeleton count={4} />
              ) : error ? (
                <p
                  className="text-center py-12 text-sm"
                  style={{ color: "var(--d-muted)", fontFamily: "'Inter', sans-serif" }}
                >
                  Case results are temporarily unavailable. Please check back shortly.
                </p>
              ) : cases.length === 0 ? (
                <p
                  className="text-center py-12 text-sm"
                  style={{ color: "var(--d-muted)", fontFamily: "'Inter', sans-serif" }}
                >
                  No case results to display at this time.
                </p>
              ) : (
                <CaseResultsGrid cases={cases} />
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <hr style={{ borderColor: "var(--d-border)", borderTopWidth: "1px" }} />
      </div>

      {/* CTA */}
      <section
        className="py-20 md:py-28 px-6 md:px-10"
        style={{ backgroundColor: "var(--d-bg)" }}
      >
        <div className="max-w-[1120px] mx-auto text-center">
          <motion.h2
            {...fadeIn(0)}
            className="text-[28px] md:text-[36px] font-semibold tracking-tight mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--d-ink)",
            }}
          >
            Discuss Your Case
          </motion.h2>
          <motion.p
            {...fadeIn(0.1)}
            className="text-base mb-10 max-w-md mx-auto leading-relaxed"
            style={{
              color: "var(--d-muted)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Every matter is unique. Reach out to discuss how we can help with
            yours.
          </motion.p>
          <motion.div {...fadeIn(0.2)} className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/direction-d/contact"
              className="inline-block px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:brightness-110"
              style={{
                backgroundColor: "var(--d-accent)",
                color: "var(--d-navy)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Begin a Conversation
            </Link>
            <Link
              href="/direction-d/practices"
              className="inline-block px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300"
              style={{
                color: "var(--d-ink)",
                border: "1px solid var(--d-border)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              View Practice Areas
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

CasesPage.getLayout = (page: ReactElement) => (
  <DirectionDLayout>{page}</DirectionDLayout>
);

export default CasesPage;
