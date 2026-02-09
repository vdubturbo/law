import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const practiceAreas = [
  {
    title: "Defamation & Reputation Defense",
    description:
      "Protecting reputations against false and damaging allegations across media, digital, and traditional channels.",
    slug: "defamation",
  },
  {
    title: "Complex Business Disputes",
    description:
      "Resolving high-stakes commercial conflicts including breach of contract, fraud, trade secrets, and fiduciary claims.",
    slug: "business-litigation",
  },
  {
    title: "Trust & Estate Litigation",
    description:
      "Navigating contested trusts, estates, and fiduciary matters with precision and discretion.",
    slug: "trust-estate-litigation",
  },
  {
    title: "Personal Injury",
    description:
      "Advocating for individuals harmed by negligence in motor vehicle, premises liability, and professional malpractice cases.",
    slug: "personal-injury",
  },
  {
    title: "Civil Rights Litigation",
    description:
      "Pursuing justice for violations of individual rights and constitutional protections at the state and federal level.",
    slug: "civil-rights",
  },
  {
    title: "Appellate Advocacy",
    description:
      "Crafting persuasive appellate arguments to protect and advance client interests in higher courts.",
    slug: "appellate",
  },
];

export default function DirectionDPracticeAreas() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="py-20 md:py-28 px-6 md:px-10"
      style={{ backgroundColor: "var(--d-bg)" }}
    >
      <div className="max-w-[1120px] mx-auto">
        <motion.span
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full mb-6"
          style={{
            border: "1px solid var(--d-accent)",
            color: "var(--d-accent)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Focus Areas
        </motion.span>
        <motion.h2
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[28px] md:text-[36px] font-semibold tracking-tight mb-12 md:mb-16"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "var(--d-ink)",
          }}
        >
          Where We Focus
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {practiceAreas.map((area, i) => (
            <motion.div
              key={area.slug}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
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
                {area.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{
                  color: "var(--d-muted)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {area.description}
              </p>
              <Link
                href={`/practices/${area.slug}`}
                className="text-sm font-medium tracking-wide transition-colors duration-300 group-hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]"
                style={{
                  color: "var(--d-accent)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Learn More &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
