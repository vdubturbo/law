import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useVariant } from "@/context/VariantContext";
import { VariantKey, variants } from "@/utils/variants";

/**
 * Direction A = the default layout (lives at /).
 * Directions B/C/D map to internal variant keys A/B/C respectively.
 */
const variantOptions: { directionLabel: string; variantKey: VariantKey }[] = [
  { directionLabel: "Direction B", variantKey: "A" },
  { directionLabel: "Direction C", variantKey: "B" },
  { directionLabel: "Direction D", variantKey: "C" },
];

export default function VariantSwitcher() {
  const { activeVariant, setVariant, theme } = useVariant();
  const router = useRouter();

  return (
    <div
      className="variant-transition sticky top-0 z-[60] flex items-center justify-center gap-2 px-4 py-3"
      style={{
        backgroundColor: theme.colors.primary,
        fontFamily: theme.fonts.body,
      }}
    >
      <span className="text-xs font-medium text-white/50 mr-3 hidden sm:inline">
        Design Direction:
      </span>
      <div className="flex gap-2" role="tablist" aria-label="Design direction switcher">
        {/* Direction A — navigates to default layout */}
        <button
          onClick={() => router.push("/")}
          className="relative px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-300"
          style={{ color: "rgba(255,255,255,0.5)" }}
          role="tab"
          aria-selected={false}
        >
          <span className="relative z-10">Direction A</span>
        </button>

        {/* Directions B/C/D — switch between variant keys A/B/C */}
        {variantOptions.map(({ directionLabel, variantKey }) => {
          const isActive = activeVariant === variantKey;
          const v = variants[variantKey];
          return (
            <button
              key={variantKey}
              onClick={() => setVariant(variantKey)}
              className="relative px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-300"
              style={{
                color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.5)",
              }}
              role="tab"
              aria-selected={isActive}
            >
              {isActive && (
                <motion.div
                  layoutId="variant-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: v.colors.accent }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
              <span className="relative z-10">{directionLabel}</span>
            </button>
          );
        })}
      </div>
      <span className="text-xs text-white/40 ml-3 hidden sm:inline">
        {theme.name}
      </span>
    </div>
  );
}
