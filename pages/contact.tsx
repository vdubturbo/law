import Head from "next/head";
import { useVariant } from "@/context/VariantContext";

export default function Contact() {
  const { theme } = useVariant();

  return (
    <>
      <Head>
        <title>Contact | Wade, Grunberg &amp; Wilson</title>
      </Head>

      {/* Page Header */}
      <section
        className="py-20 md:py-26 px-6 md:px-12 lg:px-20 variant-transition"
        style={{ backgroundColor: theme.colors.primary }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-h1 md:text-display font-bold text-white mb-6 animate-fade-in"
            style={{ fontFamily: theme.fonts.heading }}
          >
            Get In <span style={{ color: theme.colors.accent }}>Touch</span>
          </h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto animate-fade-in delay-200">
            Ready to discuss your legal needs? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Content - Scaffold */}
      <section className="py-20 md:py-26 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2
              className="text-h2 font-bold mb-8"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
              Contact Information
            </h2>
            <div className="space-y-6 text-body" style={{ color: theme.colors.muted }}>
              <div>
                <h4
                  className="text-h4 font-semibold mb-2"
                  style={{ color: theme.colors.primary }}
                >
                  Address
                </h4>
                <p>729 Piedmont Avenue NE</p>
                <p>Atlanta, GA 30308</p>
              </div>
              <div>
                <h4
                  className="text-h4 font-semibold mb-2"
                  style={{ color: theme.colors.primary }}
                >
                  Phone
                </h4>
                <p>
                  <a
                    href="tel:4046001153"
                    className="transition-colors duration-300"
                    style={{ color: theme.colors.accent }}
                  >
                    404.600.1153
                  </a>
                </p>
              </div>
              <div>
                <h4
                  className="text-h4 font-semibold mb-2"
                  style={{ color: theme.colors.primary }}
                >
                  Email
                </h4>
                <p>
                  <a
                    href="mailto:info@wgwlawfirm.com"
                    className="transition-colors duration-300"
                    style={{ color: theme.colors.accent }}
                  >
                    info@wgwlawfirm.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div
            className="p-8 shadow-card"
            style={{ backgroundColor: "white" }}
          >
            <h3
              className="text-h3 font-bold mb-6"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
              Send Us a Message
            </h3>
            <p className="text-body mb-6" style={{ color: theme.colors.muted }}>
              Contact form to be implemented in Phase 2 with react-hook-form and zod validation.
            </p>
            <div className="space-y-4">
              <div
                className="h-12 rounded shadow-subtle"
                style={{ backgroundColor: theme.colors.background }}
              />
              <div
                className="h-12 rounded shadow-subtle"
                style={{ backgroundColor: theme.colors.background }}
              />
              <div
                className="h-12 rounded shadow-subtle"
                style={{ backgroundColor: theme.colors.background }}
              />
              <div
                className="h-32 rounded shadow-subtle"
                style={{ backgroundColor: theme.colors.background }}
              />
              <button
                className="w-full py-3 text-small font-semibold text-white tracking-wider transition-all duration-300 hover:opacity-90 shadow-soft"
                style={{ backgroundColor: theme.colors.accent }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
