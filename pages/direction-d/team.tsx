import type { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import DirectionDLayout from "@/components/direction-d/DirectionDLayout";
import type { NextPageWithLayout } from "../_app";

const attorneys = [
  {
    name: "Nicole Jennings Wade",
    title: "Partner",
    areas: ["Defamation", "Business Litigation"],
    bio: "Nicole Jennings Wade focuses her practice on complex commercial litigation, defamation, and reputation defense. She has represented individuals and companies in high-profile disputes across the country and is recognized by Best Lawyers in America.",
  },
  {
    name: "Jonathan Grunberg",
    title: "Partner",
    areas: ["Trust & Estate", "Business Litigation"],
    bio: "Jonathan Grunberg brings extensive experience in trust and estate litigation, fiduciary disputes, and business litigation. His strategic approach and attention to detail have earned the trust of clients facing their most consequential legal matters.",
  },
  {
    name: "G. Taylor Wilson",
    title: "Partner",
    areas: ["Personal Injury", "Civil Rights"],
    bio: "G. Taylor Wilson concentrates on personal injury, civil rights litigation, and appellate advocacy. Known for thorough preparation and persuasive courtroom presence, he has secured significant results for individuals and families.",
  },
  {
    name: "Christina Mattox",
    title: "Associate",
    areas: ["Appellate Advocacy", "Civil Rights"],
    bio: "Christina Mattox focuses on appellate advocacy and civil rights litigation. Her meticulous research and persuasive writing have contributed to successful outcomes in both state and federal courts.",
  },
];

const TeamPage: NextPageWithLayout = () => {
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
        <title>Our Team | Wade, Grunberg &amp; Wilson</title>
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
            Our Team
          </motion.span>
          <motion.h1
            {...fadeIn(0.1)}
            className="text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-white leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-0.02em",
            }}
          >
            The Attorneys
          </motion.h1>
          <motion.p
            {...fadeIn(0.2)}
            className="mt-6 text-base md:text-lg text-white/65 max-w-lg leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Experienced litigators committed to every client they represent.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section
        className="py-20 md:py-28 px-6 md:px-10"
        style={{ backgroundColor: "var(--d-bg)" }}
      >
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attorneys.map((attorney, i) => (
              <motion.div
                key={attorney.name}
                {...fadeIn(0.1 + i * 0.1)}
                className="p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: "var(--d-surface)",
                  border: "1px solid var(--d-border)",
                }}
              >
                {/* Avatar placeholder */}
                <div
                  className="w-24 h-24 rounded-full mb-6"
                  style={{ backgroundColor: "var(--d-border)" }}
                />
                <h2
                  className="text-xl font-semibold mb-1 tracking-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--d-ink)",
                  }}
                >
                  {attorney.name}
                </h2>
                <p
                  className="text-sm font-medium mb-3"
                  style={{
                    color: "var(--d-accent)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {attorney.title}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {attorney.areas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-0.5 text-xs font-medium tracking-wide rounded-full"
                      style={{
                        border: "1px solid var(--d-border)",
                        color: "var(--d-muted)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "var(--d-muted)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {attorney.bio}
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
            Work With Us
          </motion.h2>
          <motion.p
            {...fadeIn(0.1)}
            className="text-base text-white/60 mb-10 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Every case begins with a conversation.
          </motion.p>
          <motion.div {...fadeIn(0.2)}>
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
          </motion.div>
        </div>
      </section>
    </>
  );
};

TeamPage.getLayout = (page: ReactElement) => (
  <DirectionDLayout>{page}</DirectionDLayout>
);

export default TeamPage;
