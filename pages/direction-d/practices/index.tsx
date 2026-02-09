import type { ReactElement } from "react";
import Head from "next/head";
import { motion, useReducedMotion } from "framer-motion";
import DirectionDLayout from "@/components/direction-d/DirectionDLayout";
import DirectionDPracticeAreas from "@/components/direction-d/DirectionDPracticeAreas";
import type { NextPageWithLayout } from "../../_app";

const PracticesPage: NextPageWithLayout = () => {
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
        <title>Practice Areas | Wade, Grunberg &amp; Wilson</title>
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
            Focus Areas
          </motion.span>
          <motion.h1
            {...fadeIn(0.1)}
            className="text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-white leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-0.02em",
            }}
          >
            Where We Focus
          </motion.h1>
          <motion.p
            {...fadeIn(0.2)}
            className="mt-6 text-base md:text-lg text-white/65 max-w-lg leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Deep expertise in the areas of law where we can make the greatest
            difference for our clients.
          </motion.p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <DirectionDPracticeAreas />
    </>
  );
};

PracticesPage.getLayout = (page: ReactElement) => (
  <DirectionDLayout>{page}</DirectionDLayout>
);

export default PracticesPage;
