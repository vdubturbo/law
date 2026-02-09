import Head from "next/head";
import Link from "next/link";
import { useVariant } from "@/context/VariantContext";

export default function Home() {
  const { theme } = useVariant();

  return (
    <>
      <Head>
        <title>Wade, Grunberg &amp; Wilson | Atlanta Law Firm</title>
      </Head>

      {/* Hero Section */}
      <section
        className="relative py-26 md:py-34 px-6 md:px-12 lg:px-20 variant-transition"
        style={{ backgroundColor: theme.colors.primary }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className="text-h1 md:text-display font-bold text-white mb-6 animate-fade-in"
            style={{ fontFamily: theme.fonts.heading }}
          >
            Trusted Counsel for{" "}
            <span style={{ color: theme.colors.accent }}>What Matters Most</span>
          </h1>
          <p
            className="text-body-lg text-white/70 max-w-2xl mx-auto mb-10 animate-fade-in delay-200"
            style={{ fontFamily: theme.fonts.body }}
          >
            Experienced Atlanta attorneys providing strategic legal solutions
            in family law, personal injury, and civil litigation.
          </p>
          <div className="animate-fade-in delay-300">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 text-small font-semibold text-white tracking-wider transition-all duration-300 hover:opacity-90 shadow-soft hover:shadow-card"
              style={{
                backgroundColor: theme.colors.accent,
                fontFamily: theme.fonts.body,
              }}
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid - Scaffold */}
      <section className="py-20 md:py-26 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-h2 md:text-h1 font-bold mb-4 text-center"
            style={{
              fontFamily: theme.fonts.heading,
              color: theme.colors.primary,
            }}
          >
            Practice Areas
          </h2>
          <p
            className="text-body-lg text-center mb-16 max-w-2xl mx-auto"
            style={{ color: theme.colors.muted }}
          >
            Comprehensive legal services tailored to your needs.
          </p>

          {/* Placeholder grid - content to be added in Phase 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Family Law", "Personal Injury", "Civil Litigation", "Estate Planning", "Business Law", "Criminal Defense"].map(
              (area) => (
                <div
                  key={area}
                  className="p-8 shadow-card hover:shadow-elevated transition-all duration-300 variant-transition"
                  style={{ backgroundColor: "white" }}
                >
                  <h3
                    className="text-h3 font-bold mb-3"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.primary,
                    }}
                  >
                    {area}
                  </h3>
                  <p className="text-body" style={{ color: theme.colors.muted }}>
                    Dedicated representation with a focus on achieving the best
                    possible outcomes for our clients.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonials - Scaffold */}
      <section
        className="py-20 md:py-26 px-6 md:px-12 lg:px-20 variant-transition"
        style={{ backgroundColor: theme.colors.primary }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-h2 md:text-h1 font-bold text-white mb-16"
            style={{ fontFamily: theme.fonts.heading }}
          >
            What Our Clients Say
          </h2>
          <blockquote className="text-body-lg text-white/80 italic mb-8">
            &ldquo;Wade, Grunberg &amp; Wilson provided exceptional guidance
            through a difficult time. Their professionalism and dedication made
            all the difference.&rdquo;
          </blockquote>
          <p className="text-small text-white/50 font-medium tracking-wider uppercase">
            &mdash; Satisfied Client
          </p>
        </div>
      </section>
    </>
  );
}
