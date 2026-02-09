import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useVariant } from "@/context/VariantContext";
import type { VariantKey } from "@/utils/variants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/direction-d/about", label: "About" },
  { href: "/direction-d/team", label: "Team" },
  { href: "/direction-d/practices", label: "Practice Areas" },
  { href: "/direction-d/cases", label: "Case Results" },
  { href: "/direction-d/contact", label: "Contact" },
];

/**
 * Direction A = this layout (the default).
 * Directions B/C/D map to internal variant keys A/B/C respectively.
 */
const directionOptions = [
  { key: "A", label: "Direction A", variantKey: null },
  { key: "B", label: "Direction B", variantKey: "A" as VariantKey },
  { key: "C", label: "Direction C", variantKey: "B" as VariantKey },
  { key: "D", label: "Direction D", variantKey: "C" as VariantKey },
];

export default function DirectionDHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const { setVariant } = useVariant();

  const handleDirectionClick = (option: typeof directionOptions[number]) => {
    if (option.variantKey === null) return; // Already on Direction A
    setVariant(option.variantKey);
    router.push("/variants");
  };

  return (
    <>
      {/* Direction Switcher Bar */}
      <div
        className="sticky top-0 z-[60] flex items-center justify-center gap-2 px-4 py-3"
        style={{
          backgroundColor: "var(--d-navy)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <span className="text-xs font-medium text-white/50 mr-3 hidden sm:inline">
          Design Direction:
        </span>
        <div
          className="flex gap-2"
          role="tablist"
          aria-label="Design direction switcher"
        >
          {directionOptions.map((option) => {
            const isActive = option.variantKey === null;
            return (
              <button
                key={option.key}
                onClick={() => handleDirectionClick(option)}
                className="relative px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-300"
                style={{
                  color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                }}
                role="tab"
                aria-selected={isActive}
              >
                {isActive && (
                  <motion.div
                    layoutId="variant-pill-d"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: "var(--d-accent)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
                <span className="relative z-10">{option.label}</span>
              </button>
            );
          })}
        </div>
        <span className="text-xs text-white/40 ml-3 hidden sm:inline">
          Modern Personal Boutique
        </span>
      </div>

      {/* Navigation */}
      <nav
        className="relative z-50"
        style={{
          backgroundColor: "var(--d-navy)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Wordmark */}
            <Link
              href="/"
              className="flex items-center group"
            >
              <span
                className="text-xl md:text-2xl font-bold tracking-tight text-white transition-opacity duration-300 group-hover:opacity-80"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Wade, Grunberg{" "}
                <span style={{ color: "var(--d-accent)" }}>&amp;</span> Wilson
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? router.pathname === "/"
                    : router.pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B2A3D]"
                    style={{
                      color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.65)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        e.currentTarget.style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline-d"
                        className="absolute -bottom-1 left-0 right-0 h-0.5"
                        style={{ backgroundColor: "var(--d-accent)" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/direction-d/contact"
                className="ml-2 px-5 py-2 text-xs font-semibold tracking-wider transition-all duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]"
                style={{
                  backgroundColor: "var(--d-accent)",
                  color: "var(--d-navy)",
                }}
              >
                Begin a Conversation
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              <motion.span
                animate={
                  mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                }
                className="block w-6 h-0.5 bg-white"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-white"
              />
              <motion.span
                animate={
                  mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                className="block w-6 h-0.5 bg-white"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
              style={{ backgroundColor: "var(--d-navy)" }}
            >
              <div className="px-6 pb-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-medium tracking-wide transition-colors duration-300"
                    style={{
                      color:
                        router.pathname === link.href
                          ? "#FFFFFF"
                          : "rgba(255,255,255,0.65)",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/direction-d/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block mt-2 px-5 py-2.5 text-xs font-semibold tracking-wider text-center"
                  style={{
                    backgroundColor: "var(--d-accent)",
                    color: "var(--d-navy)",
                  }}
                >
                  Begin a Conversation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
