import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useVariant } from "@/context/VariantContext";

const practiceData: Record<
  string,
  { name: string; description: string; details: string; bullets: string[] }
> = {
  defamation: {
    name: "Defamation & Reputation Defense",
    description:
      "Wade, Grunberg & Wilson focuses on safeguarding your reputation from false and defamatory attacks. Our lawyers have exceptional experience in the field of defamation, having represented companies and individuals caught up in media crises.",
    details:
      "Your reputation has no geographical bounds\u2014neither does our practice. We represent clients in defamation, libel, and slander matters across the country, working swiftly to protect and restore our clients' good names. Our team understands the intersection of media law, First Amendment considerations, and the reputational stakes involved.",
    bullets: [
      "Libel and slander claims",
      "Online defamation and cyber harassment",
      "Media crisis management and response",
      "Injunctive relief and content removal",
      "Reputation restoration strategies",
    ],
  },
  "business-litigation": {
    name: "Complex Business Disputes",
    description:
      "We are experienced litigating many types of business and commercial disputes. From contract disputes to theft of trade secrets, breach of fiduciary duty, and fraud claims, our lawyers can handle anything from small disputes to bet-the-company litigation.",
    details:
      "Our attorneys bring a strategic and measured approach to every commercial matter, whether it involves partnership disputes, non-compete enforcement, unfair business practices, or complex multi-party litigation. We work to understand the business realities our clients face and align our legal strategy accordingly.",
    bullets: [
      "Contract disputes and breach of agreement",
      "Fraud and misrepresentation claims",
      "Theft of trade secrets",
      "Non-compete and non-solicitation enforcement",
      "Partnership and shareholder disputes",
    ],
  },
  "trust-estate-litigation": {
    name: "Trust & Estate Litigation",
    description:
      "Wade, Grunberg & Wilson is one of the few firms in the Southeast with a focus on trust and estate litigation. Our lawyers have a lengthy track record of representing clients in a wide range of fiduciary litigation and contentious trust disputes.",
    details:
      "We handle will contests, trust modification and termination disputes, breach of fiduciary duty claims, contested guardianships, and estate administration disputes. These matters require both legal precision and sensitivity to family dynamics\u2014qualities our team brings to every engagement.",
    bullets: [
      "Will contests and undue influence claims",
      "Trust modification and termination disputes",
      "Breach of fiduciary duty",
      "Contested guardianships and conservatorships",
      "Estate administration disputes",
    ],
  },
  "personal-injury": {
    name: "Personal Injury",
    description:
      "We strive to help people injured by the wrongdoing of others. From physical injuries to civil rights violations, we have the experience to get you the recovery you deserve.",
    details:
      "We handle motor vehicle accidents, trucking collisions, premises liability, and other personal injury claims. Our attorneys prepare every case for trial, which positions our clients for the best possible outcomes whether through settlement or verdict.",
    bullets: [
      "Motor vehicle and trucking accidents",
      "Premises liability",
      "Professional malpractice",
      "Wrongful death claims",
      "Catastrophic injury cases",
    ],
  },
  "civil-rights": {
    name: "Civil Rights Litigation",
    description:
      "We pursue justice for violations of individual rights and constitutional protections at the state and federal level.",
    details:
      "Our civil rights practice encompasses police misconduct, employment discrimination, First Amendment violations, and other claims arising under federal and state civil rights statutes. We represent individuals who have been wronged by those in positions of power and authority.",
    bullets: [
      "Police misconduct and excessive force",
      "Employment discrimination",
      "First Amendment violations",
      "Section 1983 claims",
      "Voting rights and access",
    ],
  },
  appellate: {
    name: "Appellate Advocacy",
    description:
      "We craft persuasive appellate arguments to protect and advance client interests in higher courts.",
    details:
      "Appellate work requires a distinct skill set\u2014the ability to identify and frame issues of law, write with precision and clarity, and present oral argument persuasively. Our appellate team handles appeals in state and federal courts, working both on cases we have tried and matters referred by other attorneys.",
    bullets: [
      "State and federal appeals",
      "Appellate brief writing",
      "Oral argument preparation",
      "Interlocutory appeals",
      "Amicus curiae briefs",
    ],
  },
};

export default function PracticeDetail() {
  const router = useRouter();
  const { practice } = router.query;
  const { theme } = useVariant();

  const slug = typeof practice === "string" ? practice : "";
  const data = practiceData[slug];

  if (!data) {
    return (
      <div className="py-26 px-6 text-center">
        <h1
          className="text-h1 font-bold mb-4"
          style={{
            fontFamily: theme.fonts.heading,
            color: theme.colors.primary,
          }}
        >
          Practice Area Not Found
        </h1>
        <Link
          href="/practices"
          className="text-body font-medium"
          style={{ color: theme.colors.accent }}
        >
          View All Practice Areas
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{data.name} | Wade, Grunberg &amp; Wilson</title>
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
            {data.name}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-26 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <p className="text-body-lg mb-6" style={{ color: theme.colors.muted, lineHeight: 1.8 }}>
                {data.description}
              </p>
              <p className="text-body mb-8" style={{ color: theme.colors.muted, lineHeight: 1.7 }}>
                {data.details}
              </p>

              <h2
                className="text-h3 font-bold mb-4"
                style={{
                  fontFamily: theme.fonts.heading,
                  color: theme.colors.primary,
                }}
              >
                What We Do
              </h2>
              <ul className="space-y-3 mb-8">
                {data.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-body"
                    style={{ color: theme.colors.muted }}
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: theme.colors.accent }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div>
              <div
                className="p-8 shadow-card"
                style={{ backgroundColor: "white" }}
              >
                <h3
                  className="text-h4 font-bold mb-4"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                  }}
                >
                  Discuss Your Case
                </h3>
                <p className="text-body mb-6" style={{ color: theme.colors.muted }}>
                  Every matter is unique. Reach out to discuss how our experience
                  can help with your situation.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 text-small font-semibold text-white text-center tracking-wider transition-all duration-300 hover:opacity-90 shadow-soft"
                    style={{ backgroundColor: theme.colors.accent }}
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="/practices"
                    className="inline-block px-6 py-3 text-small font-medium text-center tracking-wider transition-all duration-300 shadow-subtle"
                    style={{
                      color: theme.colors.primary,
                      backgroundColor: "white",
                    }}
                  >
                    All Practice Areas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
