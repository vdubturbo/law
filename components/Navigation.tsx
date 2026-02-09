import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useVariant } from "@/context/VariantContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/practices", label: "Practice Areas" },
  { href: "/cases", label: "Case Results" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const { theme } = useVariant();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="variant-transition relative z-50"
      style={{
        backgroundColor: theme.colors.primary,
        fontFamily: theme.fonts.body,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Firm Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <span
              className="text-h4 md:text-h3 font-bold tracking-tight transition-opacity duration-300 group-hover:opacity-80"
              style={{
                color: "#FFFFFF",
                fontFamily: theme.fonts.heading,
              }}
            >
              Wade, Grunberg <span style={{ color: theme.colors.accent }}>&amp;</span> Wilson
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-small font-medium tracking-wide transition-all duration-300"
                  style={{
                    color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.7)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ backgroundColor: theme.colors.accent }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white transition-colors duration-300"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white transition-colors duration-300"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white transition-colors duration-300"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: theme.colors.primary }}
          >
            <div className="px-6 pb-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = router.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-body font-medium tracking-wide transition-colors duration-300"
                    style={{
                      color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.7)",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
