import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useVariant } from "@/context/VariantContext";

const values = [
  {
    title: "Selective Representation",
    description:
      "We are intentional about the cases we take. This selectivity allows us to dedicate the time, attention, and resources each client deserves.",
  },
  {
    title: "National Reach",
    description:
      "While rooted in Atlanta, our practice extends across the country. Reputation and business disputes do not respect state lines\u2014and neither do we.",
  },
  {
    title: "Trial-Ready Counsel",
    description:
      "Every case is prepared as if it will go to trial. This approach drives better outcomes whether the matter resolves through negotiation, mediation, or verdict.",
  },
];

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
            Decades of combined experience serving clients nationwide with
            integrity and dedication.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-26 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2
                className="text-h2 font-bold mb-6"
                style={{
                  fontFamily: theme.fonts.heading,
                  color: theme.colors.primary,
                }}
              >
                Boutique by Design
              </h2>
              <p className="text-body-lg mb-6" style={{ color: theme.colors.muted, lineHeight: 1.8 }}>
                Wade, Grunberg &amp; Wilson is a boutique litigation firm in
                Atlanta that combines the strategic depth of a large firm with
                the personal attention of a small one. We are selective about the
                cases we take because the clients we represent deserve our full
                commitment.
              </p>
              <p className="text-body mb-6" style={{ color: theme.colors.muted, lineHeight: 1.7 }}>
                Our attorneys have represented individuals and companies in
                high-profile disputes across the country, earning recognition
                from Best Lawyers&reg; in America for their work in complex
                litigation, defamation defense, and business disputes.
              </p>
              <p className="text-body" style={{ color: theme.colors.muted, lineHeight: 1.7 }}>
                Founded in Atlanta, the firm serves clients nationwide with a
                practice centered on defamation and reputation defense, complex
                commercial litigation, trust and estate disputes, and personal
                injury.
              </p>
            </div>
            <div className="flex flex-col items-center gap-8">
              <a
                href="https://bestlawyers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity duration-300 hover:opacity-80"
              >
                <Image
                  src="/bestlawyers.png"
                  alt="Best Lawyers"
                  width={180}
                  height={55}
                  style={{ height: "auto" }}
                />
              </a>
              <p
                className="text-body text-center"
                style={{ color: theme.colors.muted }}
              >
                Recognized by{" "}
                <span style={{ color: theme.colors.primary }} className="font-semibold">
                  Best Lawyers
                </span>
                &reg; in America since 2021
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20 md:py-26 px-6 md:px-12 lg:px-20 variant-transition"
        style={{ backgroundColor: `${theme.colors.accent}12` }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-h2 font-bold mb-12 text-center"
            style={{
              fontFamily: theme.fonts.heading,
              color: theme.colors.primary,
            }}
          >
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 bg-white shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <h3
                  className="text-h3 font-bold mb-3"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                  }}
                >
                  {value.title}
                </h3>
                <p className="text-body" style={{ color: theme.colors.muted, lineHeight: 1.7 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-20 px-6 md:px-12 lg:px-20 variant-transition"
        style={{ backgroundColor: theme.colors.primary }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-h2 font-bold text-white mb-4"
            style={{ fontFamily: theme.fonts.heading }}
          >
            Ready to Learn More?
          </h2>
          <p className="text-body-lg text-white/70 mb-8">
            Meet the attorneys behind the firm.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/team"
              className="btn-primary"
              style={{
                backgroundColor: theme.colors.accent,
                fontFamily: theme.fonts.body,
              }}
            >
              Our Team
            </Link>
            <Link
              href="/contact"
              className="btn-secondary"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                fontFamily: theme.fonts.body,
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
