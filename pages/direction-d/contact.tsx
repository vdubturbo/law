import type { ReactElement } from "react";
import Head from "next/head";
import { motion, useReducedMotion } from "framer-motion";
import DirectionDLayout from "@/components/direction-d/DirectionDLayout";
import type { NextPageWithLayout } from "../_app";

const ContactPage: NextPageWithLayout = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = (delay: number = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" },
        };

  return (
    <>
      <Head>
        <title>Contact | Wade, Grunberg &amp; Wilson</title>
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
            Get in Touch
          </motion.span>
          <motion.h1
            {...fadeIn(0.1)}
            className="text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-white leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-0.02em",
            }}
          >
            Begin a Conversation
          </motion.h1>
          <motion.p
            {...fadeIn(0.2)}
            className="mt-6 text-base md:text-lg text-white/65 max-w-lg leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ready to discuss your legal needs? We&apos;re here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section
        className="py-20 md:py-28 px-6 md:px-10"
        style={{ backgroundColor: "var(--d-bg)" }}
      >
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <motion.span
                {...fadeIn(0)}
                className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full mb-6"
                style={{
                  border: "1px solid var(--d-accent)",
                  color: "var(--d-accent)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Contact Information
              </motion.span>

              <motion.div {...fadeIn(0.1)} className="space-y-8">
                <div>
                  <h3
                    className="text-sm font-semibold tracking-wider uppercase mb-3"
                    style={{
                      color: "var(--d-ink)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Address
                  </h3>
                  <p
                    className="text-[17px] leading-relaxed"
                    style={{
                      color: "var(--d-muted)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    729 Piedmont Avenue NE
                    <br />
                    Atlanta, GA 30308
                  </p>
                </div>

                <div>
                  <h3
                    className="text-sm font-semibold tracking-wider uppercase mb-3"
                    style={{
                      color: "var(--d-ink)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Phone
                  </h3>
                  <a
                    href="tel:4046001153"
                    className="text-[17px] transition-colors duration-300 hover:opacity-80"
                    style={{
                      color: "var(--d-accent)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    404.600.1153
                  </a>
                </div>

                <div>
                  <h3
                    className="text-sm font-semibold tracking-wider uppercase mb-3"
                    style={{
                      color: "var(--d-ink)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:info@wgwlawfirm.com"
                    className="text-[17px] transition-colors duration-300 hover:opacity-80"
                    style={{
                      color: "var(--d-accent)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    info@wgwlawfirm.com
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              {...fadeIn(0.15)}
              className="p-8"
              style={{
                backgroundColor: "var(--d-surface)",
                border: "1px solid var(--d-border)",
              }}
            >
              <h3
                className="text-xl font-semibold mb-6 tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--d-ink)",
                }}
              >
                Send Us a Message
              </h3>
              <div className="space-y-4">
                <div>
                  <label
                    className="block text-xs font-medium tracking-wider uppercase mb-2"
                    style={{
                      color: "var(--d-muted)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[#B08D57]"
                    style={{
                      backgroundColor: "var(--d-bg)",
                      border: "1px solid var(--d-border)",
                      color: "var(--d-ink)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-medium tracking-wider uppercase mb-2"
                    style={{
                      color: "var(--d-muted)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[#B08D57]"
                    style={{
                      backgroundColor: "var(--d-bg)",
                      border: "1px solid var(--d-border)",
                      color: "var(--d-ink)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-medium tracking-wider uppercase mb-2"
                    style={{
                      color: "var(--d-muted)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[#B08D57]"
                    style={{
                      backgroundColor: "var(--d-bg)",
                      border: "1px solid var(--d-border)",
                      color: "var(--d-ink)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    placeholder="(555) 555-5555"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-medium tracking-wider uppercase mb-2"
                    style={{
                      color: "var(--d-muted)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-300 resize-none focus:ring-2 focus:ring-[#B08D57]"
                    style={{
                      backgroundColor: "var(--d-bg)",
                      border: "1px solid var(--d-border)",
                      color: "var(--d-ink)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    placeholder="Tell us about your matter..."
                  />
                </div>
                <button
                  type="button"
                  className="w-full py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:brightness-110"
                  style={{
                    backgroundColor: "var(--d-accent)",
                    color: "var(--d-navy)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Send Message
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

ContactPage.getLayout = (page: ReactElement) => (
  <DirectionDLayout>{page}</DirectionDLayout>
);

export default ContactPage;
