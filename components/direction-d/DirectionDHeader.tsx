import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
 * Direction A  = default layout, stock photo hero.
 * Direction A2 = default layout, building.svg hero.
 * Direction B  maps to internal variant key A.
 */
type DirectionOption =
  | { key: string; label: string; kind: "default"; query?: string }
  | { key: string; label: string; kind: "variant"; variantKey: VariantKey };

const directionOptions: DirectionOption[] = [
  { key: "A",  label: "Option A",  kind: "default" },
  { key: "A2", label: "Option B",  kind: "default", query: "a2" },
  { key: "B",  label: "Option C",  kind: "variant", variantKey: "A" as VariantKey },
];

export default function DirectionDHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const { setVariant } = useVariant();

  const currentQuery = (router.query.v as string) || undefined;

  const handleDirectionClick = (option: DirectionOption) => {
    if (option.kind === "default") {
      const target = option.query ? `/?v=${option.query}` : "/";
      if (router.pathname === "/" && currentQuery === option.query) return;
      router.push(target);
    } else {
      setVariant(option.variantKey);
      router.push("/variants");
    }
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
        <div
          className="flex gap-2"
          role="tablist"
          aria-label="Design direction switcher"
        >
          {directionOptions.map((option) => {
            const isActive =
              option.kind === "default" &&
              router.pathname === "/" &&
              currentQuery === option.query;
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
          <div className={`flex items-center h-20 gap-[7.5rem]`}>
            {/* Wordmark / Logo */}
            <Link
              href={currentQuery === "a2" ? "/?v=a2" : "/"}
              className="flex items-center group"
            >
              <Image
                src="/logo.svg"
                alt="Wade, Grunberg & Wilson"
                width={270}
                height={84}
                style={{ height: "auto", maxHeight: "4.5rem" }}
                className="transition-opacity duration-300 group-hover:opacity-80 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className={`hidden lg:flex items-center gap-10`}>
              {navLinks.map((link, i) => {
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
