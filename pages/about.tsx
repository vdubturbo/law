import Head from "next/head";
import { useVariant } from "@/context/VariantContext";

export default function About() {
  const { theme } = useVariant();

  return (
    <>
      <Head>
        <title>About | Wade, Grunberg &amp; Wilson</title>
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
            About <span style={{ color: theme.colors.accent }}>Our Firm</span>
          </h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto animate-fade-in delay-200">
            Decades of combined experience serving the Atlanta community with
            integrity and dedication.
          </p>
        </div>
      </section>

      {/* Content - Scaffold */}
      <section className="py-20 md:py-26 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <h2
              className="text-h2 font-bold"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
              Our Story
            </h2>
            <p className="text-body-lg" style={{ color: theme.colors.muted }}>
              Content to be added in Phase 2. Wade, Grunberg &amp; Wilson is an
              Atlanta-based law firm committed to providing exceptional legal
              services. Our team of experienced attorneys brings a wealth of
              knowledge and a client-focused approach to every case.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
