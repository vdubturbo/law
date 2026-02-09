import type { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import DirectionDLayout from "@/components/direction-d/DirectionDLayout";
import type { NextPageWithLayout } from "../_app";

const values = [
  {
    title: "Selective Representation",
    description:
      "We are intentional about the cases we take. This selectivity allows us to dedicate the time, attention, and resources each client deserves.",
  },
  {
    title: "National Reach",
    description:
      "While rooted in Atlanta, our practice extends across the country. Reputation and business disputes do not respect state lines\u2014and neither do we.",
  },
  {
    title: "Trial-Ready Counsel",
    description:
      "Every case is prepared as if it will go to trial. This approach drives better outcomes whether the matter resolves through negotiation, mediation, or verdict.",
  },
];

const AboutPage: NextPageWithLayout = () => {
  const shouldReduceMotion = useReducedMotion();

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
        <title>About | Wade, Grunberg &amp; Wilson</title>
      </Head>

      {/* Page Header */}
      <section
        className="py-20 md:py-28 px-6 md:px-10"
        style={{ backgroundColor: "var(--d-navy)" }}
      >
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
            Our Firm
          </motion.span>
          <motion.h1
            {...fadeIn(0.1)}
            className="text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-white leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-0.02em",
            }}
          >
            About Wade, Grunberg &amp; Wilson
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="py-20 md:py-28 px-6 md:px-10"
        style={{ backgroundColor: "var(--d-bg)" }}
      >
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <motion.h2
                {...fadeIn(0)}
                className="text-[28px] md:text-[36px] font-semibold tracking-tight leading-[1.15]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--d-ink)",
                }}
              >
                Boutique by Design.
                <br />
                Built for Complex Cases.
              </motion.h2>
            </div>
            <div>
              <motion.p
                {...fadeIn(0.1)}
                className="text-[17px] leading-relaxed mb-6"
                style={{
                  color: "var(--d-muted)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Wade, Grunberg &amp; Wilson is a boutique litigation firm in
                Atlanta that combines the strategic depth of a large firm with
                the personal attention of a small one. We are selective about the
                cases we take because the clients we represent deserve our full
                commitment.
              </motion.p>
              <motion.p
                {...fadeIn(0.15)}
                className="text-[17px] leading-relaxed mb-6"
                style={{
                  color: "var(--d-muted)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Our attorneys have represented individuals and companies in
                high-profile disputes across the country, earning recognition
                from Best Lawyers&reg; in America for their work in complex
                litigation, defamation defense, and business disputes.
              </motion.p>
              <motion.p
                {...fadeIn(0.2)}
                className="text-[17px] leading-relaxed"
                style={{
                  color: "var(--d-muted)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Founded in Atlanta, the firm serves clients nationwide with a
                practice centered on defamation and reputation defense, complex
                commercial litigation, trust and estate disputes, and personal
                injury.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <hr style={{ borderColor: "var(--d-border)", borderTopWidth: "1px" }} />
      </div>

      {/* Values */}
      <section
        className="py-20 md:py-28 px-6 md:px-10"
        style={{ backgroundColor: "var(--d-bg)" }}
      >
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
            Our Approach
          </motion.span>
          <motion.h2
            {...fadeIn(0.1)}
            className="text-[28px] md:text-[36px] font-semibold tracking-tight mb-12 md:mb-16"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--d-ink)",
            }}
          >
            How We Work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                {...fadeIn(0.15 + i * 0.08)}
                className="p-7"
                style={{
                  backgroundColor: "var(--d-surface)",
                  border: "1px solid var(--d-border)",
                }}
              >
                <h3
                  className="text-lg font-semibold mb-3 tracking-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--d-ink)",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "var(--d-muted)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 md:py-28 px-6 md:px-10"
        style={{ backgroundColor: "var(--d-navy)" }}
      >
        <div className="max-w-[1120px] mx-auto text-center">
          <motion.h2
            {...fadeIn(0)}
            className="text-[28px] md:text-[36px] font-semibold text-white tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Learn More?
          </motion.h2>
          <motion.p
            {...fadeIn(0.1)}
            className="text-base text-white/60 mb-10 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Meet the attorneys behind the firm.
          </motion.p>
          <motion.div {...fadeIn(0.2)} className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/direction-d/team"
              className="inline-block px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:brightness-110"
              style={{
                backgroundColor: "var(--d-accent)",
                color: "var(--d-navy)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Our Team
            </Link>
            <Link
              href="/direction-d/contact"
              className="inline-block px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-white/10"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Begin a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

AboutPage.getLayout = (page: ReactElement) => (
  <DirectionDLayout>{page}</DirectionDLayout>
);

export default AboutPage;
