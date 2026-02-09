import Head from "next/head";
import { useVariant } from "@/context/VariantContext";

export default function Team() {
  const { theme } = useVariant();

  return (
    <>
      <Head>
        <title>Our Team | Wade, Grunberg &amp; Wilson</title>
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
            Our <span style={{ color: theme.colors.accent }}>Team</span>
          </h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto animate-fade-in delay-200">
            Meet the attorneys dedicated to protecting your interests.
          </p>
        </div>
      </section>

      {/* Team Grid - Scaffold */}
      <section className="py-20 md:py-26 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Brandon Wade", "David Grunberg", "Robert Wilson"].map((name) => (
              <div
                key={name}
                className="p-8 shadow-card hover:shadow-elevated transition-all duration-300 text-center"
                style={{ backgroundColor: "white" }}
              >
                {/* Photo placeholder */}
                <div
                  className="w-32 h-32 mx-auto mb-6 rounded-full"
                  style={{ backgroundColor: theme.colors.primary + "20" }}
                />
                <h3
                  className="text-h3 font-bold mb-2"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                  }}
                >
                  {name}
                </h3>
                <p className="text-small" style={{ color: theme.colors.accent }}>
                  Attorney at Law
                </p>
                <p className="text-body mt-4" style={{ color: theme.colors.muted }}>
                  Bio content to be added in Phase 2.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
