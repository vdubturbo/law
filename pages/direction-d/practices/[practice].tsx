import type { ReactElement } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import DirectionDLayout from "@/components/direction-d/DirectionDLayout";
import type { NextPageWithLayout } from "../../_app";

const practiceData: Record<
  string,
  { name: string; description: string; details: string }
> = {
  defamation: {
    name: "Defamation & Reputation Defense",
    description:
      "Wade, Grunberg & Wilson focuses on safeguarding your reputation from false and defamatory attacks. Our lawyers have exceptional experience in the field of defamation, having represented companies and individuals caught up in media crises.",
    details:
      "Your reputation has no geographical bounds\u2014neither does our practice. We represent clients in defamation, libel, and slander matters across the country, working swiftly to protect and restore our clients\u2019 good names. Our team understands the intersection of media law, First Amendment considerations, and the reputational stakes involved.",
  },
  "business-litigation": {
    name: "Complex Business Disputes",
    description:
      "We are experienced litigating many types of business and commercial disputes. From contract disputes to theft of trade secrets, breach of fiduciary duty, and fraud claims, our lawyers can handle anything from small disputes to bet-the-company litigation.",
    details:
      "Our attorneys bring a strategic and measured approach to every commercial matter, whether it involves partnership disputes, non-compete enforcement, unfair business practices, or complex multi-party litigation. We work to understand the business realities our clients face and align our legal strategy accordingly.",
  },
  "trust-estate-litigation": {
    name: "Trust & Estate Litigation",
    description:
      "Wade, Grunberg & Wilson is one of the few firms in the Southeast with a focus on trust and estate litigation. Our lawyers have a lengthy track record of representing clients in a wide range of fiduciary litigation and contentious trust disputes.",
    details:
      "We handle will contests, trust modification and termination disputes, breach of fiduciary duty claims, contested guardianships, and estate administration disputes. These matters require both legal precision and sensitivity to family dynamics\u2014qualities our team brings to every engagement.",
  },
  "personal-injury": {
    name: "Personal Injury",
    description:
      "We strive to help people injured by the wrongdoing of others. From physical injuries to civil rights violations, we have the experience to get you the recovery you deserve.",
    details:
      "We handle motor vehicle accidents, trucking collisions, premises liability, and other personal injury claims. Our attorneys prepare every case for trial, which positions our clients for the best possible outcomes whether through settlement or verdict.",
  },
  "civil-rights": {
    name: "Civil Rights Litigation",
    description:
      "We pursue justice for violations of individual rights and constitutional protections at the state and federal level.",
    details:
      "Our civil rights practice encompasses police misconduct, employment discrimination, First Amendment violations, and other claims arising under federal and state civil rights statutes. We represent individuals who have been wronged by those in positions of power and authority.",
  },
  appellate: {
    name: "Appellate Advocacy",
    description:
      "We craft persuasive appellate arguments to protect and advance client interests in higher courts.",
    details:
      "Appellate work requires a distinct skill set\u2014the ability to identify and frame issues of law, write with precision and clarity, and present oral argument persuasively. Our appellate team handles appeals in state and federal courts, working both on cases we have tried and matters referred by other attorneys.",
  },
};

const PracticeDetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { practice } = router.query;
  const shouldReduceMotion = useReducedMotion();

  const slug = typeof practice === "string" ? practice : "";
  const data = practiceData[slug];

  const fadeIn = (delay: number = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" },
        };

  if (!data) {
    return (
      <div
        className="py-28 px-6 text-center"
        style={{ backgroundColor: "var(--d-bg)" }}
      >
        <h1
          className="text-[36px] font-semibold mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "var(--d-ink)",
          }}
        >
          Practice Area Not Found
        </h1>
        <Link
          href="/direction-d/practices"
          className="text-base font-medium"
          style={{
            color: "var(--d-accent)",
            fontFamily: "'Inter', sans-serif",
          }}
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
        className="py-20 md:py-28 px-6 md:px-10"
        style={{ backgroundColor: "var(--d-navy)" }}
      >
        <div className="max-w-[1120px] mx-auto">
          <motion.span
            {...fadeIn(0)}
            className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full mb-6"
            style={{
              border: "1px solid var(--d-accent)",
              color: "var(--d-accent)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Focus Area
          </motion.span>
          <motion.h1
            {...fadeIn(0.1)}
            className="text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-white leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-0.02em",
            }}
          >
            {data.name}
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section
        className="py-20 md:py-28 px-6 md:px-10"
        style={{ backgroundColor: "var(--d-bg)" }}
      >
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <motion.p
                {...fadeIn(0)}
                className="text-[17px] leading-relaxed mb-6"
                style={{
                  color: "var(--d-ink)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {data.description}
              </motion.p>
              <motion.p
                {...fadeIn(0.1)}
                className="text-[17px] leading-relaxed"
                style={{
                  color: "var(--d-muted)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {data.details}
              </motion.p>
            </div>
            <motion.div
              {...fadeIn(0.2)}
              className="p-8"
              style={{
                backgroundColor: "var(--d-surface)",
                border: "1px solid var(--d-border)",
              }}
            >
              <h3
                className="text-lg font-semibold mb-4 tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--d-ink)",
                }}
              >
                Discuss Your Case
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{
                  color: "var(--d-muted)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Every matter is unique. Reach out to discuss how our experience
                in {data.name.toLowerCase()} can help with your situation.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/direction-d/contact"
                  className="inline-block px-7 py-3 text-sm font-semibold tracking-wide text-center transition-all duration-300 hover:brightness-110"
                  style={{
                    backgroundColor: "var(--d-accent)",
                    color: "var(--d-navy)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Begin a Conversation
                </Link>
                <Link
                  href="/direction-d/practices"
                  className="inline-block px-7 py-3 text-sm font-medium tracking-wide text-center transition-all duration-300 hover:bg-[var(--d-surface)]"
                  style={{
                    color: "var(--d-ink)",
                    border: "1px solid var(--d-border)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  All Practice Areas
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

PracticeDetailPage.getLayout = (page: ReactElement) => (
  <DirectionDLayout>{page}</DirectionDLayout>
);

export default PracticeDetailPage;
