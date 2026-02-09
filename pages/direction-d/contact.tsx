import type { ReactElement } from "react";
import { useState } from "react";
import Head from "next/head";
import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DirectionDLayout from "@/components/direction-d/DirectionDLayout";
import type { NextPageWithLayout } from "../_app";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  practiceArea: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const practiceOptions = [
  "Defamation & Reputation Defense",
  "Complex Business Disputes",
  "Trust & Estate Litigation",
  "Personal Injury",
  "Civil Rights Litigation",
  "Appellate Advocacy",
  "Other / Not Sure",
];

const inputStyle = {
  backgroundColor: "var(--d-bg)",
  border: "1px solid var(--d-border)",
  color: "var(--d-ink)",
  fontFamily: "'Inter', sans-serif",
};

const labelStyle = {
  color: "var(--d-muted)",
  fontFamily: "'Inter', sans-serif",
};

const ContactPage: NextPageWithLayout = () => {
  const shouldReduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
  };

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

                <div
                  className="mt-8 p-5 text-xs leading-relaxed"
                  style={{
                    backgroundColor: "var(--d-surface)",
                    border: "1px solid var(--d-border)",
                    color: "var(--d-muted)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Contacting our firm does not create an attorney-client
                  relationship. Please do not send confidential information until
                  a formal engagement is established.
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

              {submitted ? (
                <div className="py-12 text-center">
                  <p
                    className="text-lg font-semibold mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--d-ink)",
                    }}
                  >
                    Thank you for reaching out.
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      color: "var(--d-muted)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    We will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label
                      className="block text-xs font-medium tracking-wider uppercase mb-2"
                      style={labelStyle}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[#B08D57]"
                      style={inputStyle}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-xs font-medium tracking-wider uppercase mb-2"
                      style={labelStyle}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[#B08D57]"
                      style={inputStyle}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-xs font-medium tracking-wider uppercase mb-2"
                      style={labelStyle}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[#B08D57]"
                      style={inputStyle}
                      placeholder="(555) 555-5555"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-medium tracking-wider uppercase mb-2"
                      style={labelStyle}
                    >
                      Practice Area
                    </label>
                    <select
                      {...register("practiceArea")}
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[#B08D57] appearance-none"
                      style={inputStyle}
                    >
                      <option value="">Select a practice area</option>
                      {practiceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-medium tracking-wider uppercase mb-2"
                      style={labelStyle}
                    >
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      {...register("message")}
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-300 resize-none focus:ring-2 focus:ring-[#B08D57]"
                      style={inputStyle}
                      placeholder="Tell us about your matter..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:brightness-110 disabled:opacity-60"
                    style={{
                      backgroundColor: "var(--d-accent)",
                      color: "var(--d-navy)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
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
