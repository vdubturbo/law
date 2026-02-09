import Head from "next/head";
import Link from "next/link";
import { useVariant } from "@/context/VariantContext";

const attorneys = [
  {
    name: "Nicole Jennings Wade",
    title: "Partner",
    areas: ["Defamation", "Business Litigation"],
    bio: "Nicole Jennings Wade focuses her practice on complex commercial litigation, defamation, and reputation defense. She has represented individuals and companies in high-profile disputes across the country and is recognized by Best Lawyers in America.",
  },
  {
    name: "Jonathan Grunberg",
    title: "Partner",
    areas: ["Trust & Estate", "Business Litigation"],
    bio: "Jonathan Grunberg brings extensive experience in trust and estate litigation, fiduciary disputes, and business litigation. His strategic approach and attention to detail have earned the trust of clients facing their most consequential legal matters.",
  },
  {
    name: "G. Taylor Wilson",
    title: "Partner",
    areas: ["Personal Injury", "Civil Rights"],
    bio: "G. Taylor Wilson concentrates on personal injury, civil rights litigation, and appellate advocacy. Known for thorough preparation and persuasive courtroom presence, he has secured significant results for individuals and families.",
  },
  {
    name: "Christina Mattox",
    title: "Associate",
    areas: ["Appellate Advocacy", "Civil Rights"],
    bio: "Christina Mattox focuses on appellate advocacy and civil rights litigation. Her meticulous research and persuasive writing have contributed to successful outcomes in both state and federal courts.",
  },
];

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

      {/* Team Grid */}
      <section className="py-20 md:py-26 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attorneys.map((attorney) => (
              <div
                key={attorney.name}
                className="p-8 shadow-card hover:shadow-elevated transition-all duration-300"
                style={{ backgroundColor: "white" }}
              >
                {/* Photo placeholder */}
                <div
                  className="w-24 h-24 mb-6 rounded-full"
                  style={{ backgroundColor: theme.colors.primary + "20" }}
                />
                <h3
                  className="text-h3 font-bold mb-1"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                  }}
                >
                  {attorney.name}
                </h3>
                <p className="text-small font-medium mb-3" style={{ color: theme.colors.accent }}>
                  {attorney.title}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {attorney.areas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-0.5 text-xs font-medium tracking-wide rounded-full"
                      style={{
                        border: `1px solid ${theme.colors.primary}20`,
                        color: theme.colors.muted,
                        fontFamily: theme.fonts.body,
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-body" style={{ color: theme.colors.muted, lineHeight: 1.7 }}>
                  {attorney.bio}
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
            Work With Us
          </h2>
          <p className="text-body-lg text-white/70 mb-8">
            Every case begins with a conversation.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
            style={{
              backgroundColor: theme.colors.accent,
              fontFamily: theme.fonts.body,
            }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
