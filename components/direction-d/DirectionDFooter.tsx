import Link from "next/link";

const quickLinks = [
  { href: "/direction-d/about", label: "About" },
  { href: "/direction-d/team", label: "Team" },
  { href: "/direction-d/practices", label: "Practice Areas" },
  { href: "/direction-d/contact", label: "Contact" },
];

export default function DirectionDFooter() {
  return (
    <footer
      style={{
        backgroundColor: "var(--d-navy)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Firm */}
          <div>
            <h3
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Wade, Grunberg{" "}
              <span style={{ color: "var(--d-accent)" }}>&amp;</span> Wilson
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Boutique litigation counsel in Atlanta, Georgia.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>729 Piedmont Avenue NE</p>
              <p>Atlanta, GA 30308</p>
              <p className="pt-2">
                <a
                  href="tel:4046001153"
                  className="hover:text-white transition-colors duration-300"
                >
                  404.600.1153
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@wgwlawfirm.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  info@wgwlawfirm.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p>
            &copy; {new Date().getFullYear()} Wade, Grunberg &amp; Wilson, LLC.
            All rights reserved.
          </p>
          <p>Atlanta, Georgia</p>
        </div>
      </div>
    </footer>
  );
}
