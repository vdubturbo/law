import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { CaseRow } from "@/lib/database.types";

export type CaseResult = CaseRow;

function practiceAreaToSlug(area: string): string {
  const mapping: Record<string, string> = {
    "Defamation": "defamation",
    "Defamation & Reputation Defense": "defamation",
    "Business Litigation": "business-litigation",
    "Complex Business Disputes": "business-litigation",
    "Trust & Estate Litigation": "trust-estate-litigation",
    "Personal Injury": "personal-injury",
    "Civil Rights Litigation": "civil-rights",
    "Civil Rights": "civil-rights",
    "Appellate Advocacy": "appellate",
  };
  return mapping[area] ?? "defamation";
}

interface CaseResultsGridProps {
  cases: CaseResult[];
  variant?: "direction-d" | "abc";
  theme?: {
    colors: { primary: string; accent: string; muted: string; background: string };
    fonts: { heading: string; body: string };
  };
}

export default function CaseResultsGrid({ cases, variant = "direction-d", theme }: CaseResultsGridProps) {
  const shouldReduceMotion = useReducedMotion();

  const isD = variant === "direction-d";

  return (
    <div className="columns-1 md:columns-2 gap-6 space-y-6">
      {cases.map((c, i) => {
        const delay = shouldReduceMotion ? 0 : 0.1 + i * 0.1;
        const slug = practiceAreaToSlug(c.practice_area);

        return (
          <motion.div
            key={c.id}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className="break-inside-avoid p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
            style={
              isD
                ? {
                    backgroundColor: "var(--d-surface)",
                    border: "1px solid var(--d-border)",
                  }
                : {
                    backgroundColor: "white",
                    boxShadow:
                      "0 4px 25px -5px rgba(0,0,0,0.1), 0 10px 30px -5px rgba(0,0,0,0.04)",
                  }
            }
          >
            {/* Practice area tag */}
            <span
              className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full mb-4"
              style={
                isD
                  ? {
                      border: "1px solid var(--d-accent)",
                      color: "var(--d-accent)",
                      fontFamily: "'Inter', sans-serif",
                    }
                  : {
                      border: `1px solid ${theme?.colors.accent}`,
                      color: theme?.colors.accent,
                      fontFamily: theme?.fonts.body,
                    }
              }
            >
              {c.practice_area}
            </span>

            {/* Outcome highlight */}
            <p
              className="text-[28px] md:text-[34px] font-bold tracking-tight mb-1"
              style={
                isD
                  ? {
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--d-accent)",
                    }
                  : {
                      fontFamily: theme?.fonts.heading,
                      color: theme?.colors.accent,
                    }
              }
            >
              {c.outcome}
            </p>

            {/* Outcome type */}
            <p
              className="text-xs font-medium tracking-wider uppercase mb-4"
              style={
                isD
                  ? { color: "var(--d-muted)", fontFamily: "'Inter', sans-serif" }
                  : { color: theme?.colors.muted, fontFamily: theme?.fonts.body }
              }
            >
              {c.outcome_type}
            </p>

            {/* Case title */}
            <h3
              className="text-lg font-semibold mb-1 tracking-tight"
              style={
                isD
                  ? {
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--d-ink)",
                    }
                  : {
                      fontFamily: theme?.fonts.heading,
                      color: theme?.colors.primary,
                    }
              }
            >
              {c.title}
            </h3>

            {/* Court + Date */}
            <p
              className="text-xs mb-3"
              style={
                isD
                  ? { color: "var(--d-muted)", fontFamily: "'Inter', sans-serif" }
                  : { color: theme?.colors.muted, fontFamily: theme?.fonts.body }
              }
            >
              {c.court}{c.date ? ` \u2022 ${c.date}` : ""}
            </p>

            {/* Description */}
            {c.description && (
              <p
                className="text-sm leading-relaxed mb-4"
                style={
                  isD
                    ? {
                        color: "var(--d-muted)",
                        fontFamily: "'Inter', sans-serif",
                      }
                    : {
                        color: theme?.colors.muted,
                        fontFamily: theme?.fonts.body,
                      }
                }
              >
                {c.description}
              </p>
            )}

            {/* Link */}
            <Link
              href={`/direction-d/practices/${slug}`}
              className="text-sm font-medium tracking-wide transition-colors duration-300 group-hover:underline"
              style={
                isD
                  ? {
                      color: "var(--d-accent)",
                      fontFamily: "'Inter', sans-serif",
                    }
                  : {
                      color: theme?.colors.accent,
                      fontFamily: theme?.fonts.body,
                    }
              }
            >
              Related Practice Area &rarr;
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
