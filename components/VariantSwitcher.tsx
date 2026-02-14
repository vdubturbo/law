import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useVariant } from "@/context/VariantContext";
import { VariantKey, variants } from "@/utils/variants";

/**
 * Direction A = the default layout (lives at /).
 * Direction B maps to internal variant key A.
 */
const variantOptions: { directionLabel: string; variantKey: VariantKey }[] = [
  { directionLabel: "Option C", variantKey: "A" },
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
      <div className="flex gap-2" role="tablist" aria-label="Design direction switcher">
        {/* Direction A — navigates to default layout */}
        <button
          onClick={() => router.push("/")}
          className="relative px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-300"
          style={{ color: "rgba(255,255,255,0.5)" }}
          role="tab"
          aria-selected={false}
        >
          <span className="relative z-10">Option A</span>
        </button>

        {/* Direction A2 — navigates to default layout with building.svg hero */}
        <button
          onClick={() => router.push("/?v=a2")}
          className="relative px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-300"
          style={{ color: "rgba(255,255,255,0.5)" }}
          role="tab"
          aria-selected={false}
        >
          <span className="relative z-10">Option B</span>
        </button>

        {/* Direction B — variant key A */}
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
    </div>
  );
}
