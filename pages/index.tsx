import type { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import DirectionDLayout from "@/components/direction-d/DirectionDLayout";
import DirectionDHero from "@/components/direction-d/DirectionDHero";
import DirectionDAbout from "@/components/direction-d/DirectionDAbout";
import DirectionDPracticeAreas from "@/components/direction-d/DirectionDPracticeAreas";
import type { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
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
        <title>Wade, Grunberg &amp; Wilson | Atlanta Law Firm</title>
      </Head>

      <DirectionDHero />

      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <hr style={{ borderColor: "var(--d-border)", borderTopWidth: "1px" }} />
      </div>

      <DirectionDAbout />

      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <hr style={{ borderColor: "var(--d-border)", borderTopWidth: "1px" }} />
      </div>

      <DirectionDPracticeAreas />

      <div className="max-w-[1120px] mx-auto px-6 md:px-10">
        <hr style={{ borderColor: "var(--d-border)", borderTopWidth: "1px" }} />
      </div>

      {/* Testimonial */}
      <section
        className="py-20 md:py-28 px-6 md:px-10"
        style={{ backgroundColor: "var(--d-bg)" }}
      >
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <motion.span
              {...fadeIn(0)}
              className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full mb-6"
              style={{
                border: "1px solid var(--d-accent)",
                color: "var(--d-accent)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Recognition
            </motion.span>
            <motion.p
              {...fadeIn(0.1)}
              className="text-[22px] md:text-[28px] font-semibold tracking-tight leading-[1.2]"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--d-ink)",
              }}
            >
              Recognized by Best Lawyers&reg; in America since 2021
            </motion.p>
          </div>
          <motion.blockquote
            {...fadeIn(0.2)}
            className="relative pl-6"
            style={{ borderLeft: "3px solid var(--d-accent)" }}
          >
            <p
              className="text-lg md:text-xl italic leading-relaxed mb-4"
              style={{
                color: "var(--d-muted)",
                fontFamily: "'EB Garamond', serif",
              }}
            >
              &ldquo;Look no further than Wade, Grunberg &amp; Wilson. They are
              among the most thoughtful, strategic, and hard-working attorneys in
              the country.&rdquo;
            </p>
            <cite
              className="text-sm font-medium not-italic tracking-wider uppercase"
              style={{
                color: "var(--d-ink)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              &mdash; Client
            </cite>
          </motion.blockquote>
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
            Ready to Move Forward?
          </motion.h2>
          <motion.p
            {...fadeIn(0.1)}
            className="text-base text-white/60 mb-10 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Every case begins with a conversation. Reach out to discuss how we
            can help.
          </motion.p>
          <motion.div {...fadeIn(0.2)}>
            <Link
              href="/direction-d/contact"
              className="inline-block px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]"
              style={{
                backgroundColor: "var(--d-accent)",
                color: "var(--d-navy)",
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

HomePage.getLayout = (page: ReactElement) => (
  <DirectionDLayout>{page}</DirectionDLayout>
);

export default HomePage;
