import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function DirectionDAbout() {
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
    <section
      className="py-20 md:py-28 px-6 md:px-10"
      style={{ backgroundColor: "var(--d-bg)" }}
    >
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
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
              Our Firm
            </motion.span>
            <motion.h2
              {...fadeIn(0.1)}
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

          {/* Right Column */}
          <div>
            <motion.p
              {...fadeIn(0.2)}
              className="text-[17px] leading-relaxed mb-8"
              style={{
                color: "var(--d-muted)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Wade, Grunberg &amp; Wilson is a boutique litigation firm in
              Atlanta that combines the strategic depth of a large firm with the
              personal attention of a small one. We are selective about the cases
              we take because the clients we represent deserve our full
              commitment. Our attorneys have represented individuals and
              companies in high-profile disputes across the country, earning
              recognition from Best Lawyers&reg; for their work in complex
              litigation, defamation defense, and business disputes.
            </motion.p>
            <motion.div {...fadeIn(0.3)}>
              <Link
                href="/about"
                className="inline-block px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]"
                style={{
                  backgroundColor: "var(--d-accent)",
                  color: "var(--d-navy)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                How We Work
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
