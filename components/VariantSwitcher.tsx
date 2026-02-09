import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useVariant } from "@/context/VariantContext";
import { VariantKey, variants } from "@/utils/variants";

const variantOptions: { key: VariantKey; label: string }[] = [
  { key: "A", label: "Direction A" },
  { key: "B", label: "Direction B" },
  { key: "C", label: "Direction C" },
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
        {variantOptions.map(({ key, label }) => {
          const isActive = activeVariant === key;
          const v = variants[key];
          return (
            <button
              key={key}
              onClick={() => setVariant(key)}
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
              <span className="relative z-10">{label}</span>
            </button>
          );
        })}
        <button
          onClick={() => router.push("/direction-d")}
          className="relative px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-300"
          style={{ color: "rgba(255,255,255,0.5)" }}
          role="tab"
          aria-selected={false}
        >
          <span className="relative z-10">Direction D</span>
        </button>
      </div>
      <span className="text-xs text-white/40 ml-3 hidden sm:inline">
        {theme.name}
      </span>
    </div>
  );
}
