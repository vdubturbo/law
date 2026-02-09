import Link from "next/link";
import { useVariant } from "@/context/VariantContext";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practices", label: "Practices" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const { theme } = useVariant();

  return (
    <footer
      className="variant-transition"
      style={{
        backgroundColor: theme.colors.primary,
        color: "rgba(255,255,255,0.8)",
        fontFamily: theme.fonts.body,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Firm info */}
          <div>
            <h3
              className="text-h3 font-bold mb-6 text-white"
              style={{ fontFamily: theme.fonts.heading }}
            >
              Wade, Grunberg{" "}
              <span style={{ color: theme.colors.accent }}>&amp;</span> Wilson
            </h3>
            <div className="space-y-3 text-small">
              <p>729 Piedmont Avenue NE</p>
              <p>Atlanta, GA 30308</p>
              <p className="pt-2">
                <a
                  href="tel:4046001153"
                  className="transition-colors duration-300 hover:text-white"
                >
                  404.600.1153
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@wgwlawfirm.com"
                  className="transition-colors duration-300 hover:text-white"
                >
                  info@wgwlawfirm.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-h4 font-semibold mb-6 text-white"
              style={{ fontFamily: theme.fonts.heading }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3 text-small">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recognition */}
          <div>
            <h4
              className="text-h4 font-semibold mb-6 text-white"
              style={{ fontFamily: theme.fonts.heading }}
            >
              Recognition
            </h4>
            <div className="space-y-4 text-small">
              <p>
                Recognized by <span className="text-white font-semibold">Best Lawyers</span> in
                America for excellence in legal representation.
              </p>
              <p className="opacity-60 text-xs">
                Individual results may vary. Past results do not guarantee future outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <p>&copy; {new Date().getFullYear()} Wade, Grunberg &amp; Wilson. All rights reserved.</p>
          <p>Atlanta, Georgia</p>
        </div>
      </div>
    </footer>
  );
}
