import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useVariant } from "@/context/VariantContext";

const practiceAreas = [
  {
    title: "Defamation",
    slug: "defamation",
    description:
      "Wade, Grunberg & Wilson focuses on safeguarding your reputation from false and defamatory attacks. Our lawyers have exceptional experience in the field of defamation, having represented companies and individuals caught up in media crises. Your reputation has no geographical bounds\u2014neither does our practice.",
  },
  {
    title: "Business Litigation",
    slug: "business-litigation",
    description:
      "We are experienced litigating many types of business and commercial disputes. From contract disputes to theft of trade secrets, breach of fiduciary duty, and fraud claims, our lawyers can handle anything from small disputes to bet-the-company litigation.",
  },
  {
    title: "Trust & Estate Litigation",
    slug: "trust-estate-litigation",
    description:
      "Wade, Grunberg & Wilson is one of the few firms in the Southeast with a focus on trust and estate litigation. Our lawyers have a lengthy track record of representing clients in a wide range of fiduciary litigation and contentious trust disputes.",
  },
  {
    title: "Personal Injury",
    slug: "personal-injury",
    description:
      "We strive to help people injured by the wrongdoing of others. From physical injuries to civil rights violations, we have the experience to get you the recovery you deserve. We handle motor vehicle, trucking, premises liability, and other personal injury claims.",
  },
];

export default function Home() {
  const { theme } = useVariant();

  return (
    <>
      <Head>
        <title>Wade, Grunberg &amp; Wilson | Atlanta Law Firm</title>
      </Head>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{ height: "clamp(300px, 50vw, 500px)" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop"
          alt="Modern glass skyscraper"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1
            className="text-4xl md:text-[3.5rem] lg:text-display font-bold text-white mb-6 animate-fade-in"
            style={{
              fontFamily: theme.fonts.heading,
              letterSpacing: "-0.02em",
            }}
          >
            Making Complex Simple
          </h1>
          <p
            className="text-base md:text-xl text-white/85 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in delay-200"
            style={{
              fontFamily: theme.fonts.body,
              lineHeight: 1.7,
            }}
          >
            Wade, Grunberg &amp; Wilson, LLC is a boutique firm dedicated to
            achieving the results you deserve in complex litigation.
          </p>
          <div className="opacity-0 animate-fade-in delay-300">
            <Link
              href="/about"
              className="btn-primary"
              style={{
                backgroundColor: theme.colors.accent,
                fontFamily: theme.fonts.body,
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Callout Section */}
      <section
        className="variant-transition"
        style={{ backgroundColor: theme.colors.background }}
      >
        <div className="max-w-[800px] mx-auto px-6 py-12 md:py-16 text-center">
          <h2
            className="text-h2 md:text-h1 font-bold mb-6 opacity-0 animate-slide-up"
            style={{
              fontFamily: theme.fonts.heading,
              color: theme.colors.primary,
            }}
          >
            About WGW
          </h2>
          <p
            className="text-body-lg mb-8 opacity-0 animate-slide-up delay-100"
            style={{
              color: theme.colors.muted,
              fontFamily: theme.fonts.body,
              lineHeight: 1.8,
            }}
          >
            At Wade, Grunberg &amp; Wilson, we believe every client deserves the
            highest level of legal representation. Our boutique approach means
            you get the personal attention of a small firm with the capabilities
            and results of a large one. We combine decades of courtroom
            experience with a modern, strategic mindset to deliver outcomes that
            matter.
          </p>
          <div className="opacity-0 animate-slide-up delay-200">
            <Link
              href="/about"
              className="btn-primary"
              style={{
                backgroundColor: theme.colors.accent,
                fontFamily: theme.fonts.body,
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-h2 md:text-h1 font-bold mb-4 text-center opacity-0 animate-slide-up"
            style={{
              fontFamily: theme.fonts.heading,
              color: theme.colors.primary,
            }}
          >
            Practice Areas
          </h2>
          <p
            className="text-body-lg text-center mb-12 md:mb-16 max-w-2xl mx-auto opacity-0 animate-slide-up delay-100"
            style={{ color: theme.colors.muted }}
          >
            Focused expertise in the areas of law that matter most to our
            clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceAreas.map((area, i) => (
              <div
                key={area.slug}
                className="p-8 bg-white shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 variant-transition opacity-0 animate-slide-up"
                style={{ animationDelay: `${(i + 1) * 100 + 100}ms` }}
              >
                <h3
                  className="text-h3 md:text-[1.75rem] font-bold mb-4"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                  }}
                >
                  {area.title}
                </h3>
                <p
                  className="text-body mb-6"
                  style={{ color: theme.colors.muted, lineHeight: 1.7 }}
                >
                  {area.description}
                </p>
                <Link
                  href={`/practices/${area.slug}`}
                  className="text-small font-semibold tracking-wide transition-all duration-300 hover:underline"
                  style={{ color: theme.colors.accent }}
                >
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Lawyers Badge Section */}
      <section
        className="py-12 md:py-20 px-6 variant-transition"
        style={{ backgroundColor: `${theme.colors.accent}1A` }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center justify-center w-28 h-28 md:w-[120px] md:h-[120px] rounded-full mb-8 shadow-card opacity-0 animate-fade-in"
            style={{ backgroundColor: theme.colors.accent }}
          >
            <span
              className="text-white text-3xl md:text-4xl font-bold"
              style={{ fontFamily: theme.fonts.heading }}
            >
              BL
            </span>
          </div>
          <p
            className="text-lg md:text-xl font-medium opacity-0 animate-fade-in delay-200"
            style={{
              color: theme.colors.primary,
              fontFamily: theme.fonts.body,
            }}
          >
            Recognized by{" "}
            <span className="font-bold">Best Lawyers</span>&reg; since 2021
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-[600px] mx-auto">
          <blockquote
            className="relative pl-8 opacity-0 animate-fade-in-left"
            style={{ borderLeft: `4px solid ${theme.colors.accent}` }}
          >
            <p
              className="text-xl md:text-2xl italic mb-6"
              style={{
                color: theme.colors.accent,
                fontFamily: theme.fonts.body,
                lineHeight: 1.6,
              }}
            >
              &ldquo;Look no further than Wade, Grunberg &amp; Wilson. They are
              among the most thoughtful, strategic, and hard-working attorneys in
              the country.&rdquo;
            </p>
            <cite
              className="text-small font-medium not-italic tracking-wider uppercase"
              style={{ color: theme.colors.primary }}
            >
              &mdash; Client
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        className="py-12 md:py-20 px-6 variant-transition"
        style={{ backgroundColor: theme.colors.primary }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-h2 md:text-h1 font-bold text-white mb-4 opacity-0 animate-slide-up"
            style={{ fontFamily: theme.fonts.heading }}
          >
            Ready to Move Forward?
          </h2>
          <p
            className="text-body-lg text-white/70 mb-10 opacity-0 animate-slide-up delay-100"
            style={{ fontFamily: theme.fonts.body }}
          >
            Contact us today for a consultation
          </p>
          <div className="opacity-0 animate-slide-up delay-200">
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
        </div>
      </section>
    </>
  );
}
