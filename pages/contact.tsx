import { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useVariant } from "@/context/VariantContext";

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

export default function Contact() {
  const { theme } = useVariant();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact | Wade, Grunberg &amp; Wilson</title>
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
            Get In <span style={{ color: theme.colors.accent }}>Touch</span>
          </h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto animate-fade-in delay-200">
            Ready to discuss your legal needs? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-26 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2
              className="text-h2 font-bold mb-8"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
              Contact Information
            </h2>
            <div className="space-y-6 text-body" style={{ color: theme.colors.muted }}>
              <div>
                <h4
                  className="text-h4 font-semibold mb-2"
                  style={{ color: theme.colors.primary }}
                >
                  Address
                </h4>
                <p>729 Piedmont Avenue NE</p>
                <p>Atlanta, GA 30308</p>
              </div>
              <div>
                <h4
                  className="text-h4 font-semibold mb-2"
                  style={{ color: theme.colors.primary }}
                >
                  Phone
                </h4>
                <p>
                  <a
                    href="tel:4046001153"
                    className="transition-colors duration-300"
                    style={{ color: theme.colors.accent }}
                  >
                    404.600.1153
                  </a>
                </p>
              </div>
              <div>
                <h4
                  className="text-h4 font-semibold mb-2"
                  style={{ color: theme.colors.primary }}
                >
                  Email
                </h4>
                <p>
                  <a
                    href="mailto:info@wgwlawfirm.com"
                    className="transition-colors duration-300"
                    style={{ color: theme.colors.accent }}
                  >
                    info@wgwlawfirm.com
                  </a>
                </p>
              </div>
            </div>
            <div
              className="mt-8 p-4 text-xs leading-relaxed"
              style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.muted,
                fontFamily: theme.fonts.body,
              }}
            >
              Contacting our firm does not create an attorney-client
              relationship. Please do not send confidential information until a
              formal engagement is established.
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="p-8 shadow-card"
            style={{ backgroundColor: "white" }}
          >
            <h3
              className="text-h3 font-bold mb-6"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="py-12 text-center">
                <p
                  className="text-lg font-semibold mb-2"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                  }}
                >
                  Thank you for reaching out.
                </p>
                <p className="text-body" style={{ color: theme.colors.muted }}>
                  We will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label
                    className="block text-small font-medium mb-2"
                    style={{ color: theme.colors.primary }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-4 py-3 text-body outline-none transition-all duration-300 focus:ring-2 shadow-subtle"
                    style={{
                      backgroundColor: theme.colors.background,
                      color: theme.colors.text,
                      fontFamily: theme.fonts.body,
                      focusRingColor: theme.colors.accent,
                    } as React.CSSProperties}
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
                    className="block text-small font-medium mb-2"
                    style={{ color: theme.colors.primary }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-3 text-body outline-none transition-all duration-300 focus:ring-2 shadow-subtle"
                    style={{
                      backgroundColor: theme.colors.background,
                      color: theme.colors.text,
                      fontFamily: theme.fonts.body,
                    }}
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
                    className="block text-small font-medium mb-2"
                    style={{ color: theme.colors.primary }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    className="w-full px-4 py-3 text-body outline-none transition-all duration-300 focus:ring-2 shadow-subtle"
                    style={{
                      backgroundColor: theme.colors.background,
                      color: theme.colors.text,
                      fontFamily: theme.fonts.body,
                    }}
                    placeholder="(555) 555-5555"
                  />
                </div>

                <div>
                  <label
                    className="block text-small font-medium mb-2"
                    style={{ color: theme.colors.primary }}
                  >
                    Practice Area
                  </label>
                  <select
                    {...register("practiceArea")}
                    className="w-full px-4 py-3 text-body outline-none transition-all duration-300 focus:ring-2 shadow-subtle appearance-none"
                    style={{
                      backgroundColor: theme.colors.background,
                      color: theme.colors.text,
                      fontFamily: theme.fonts.body,
                    }}
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
                    className="block text-small font-medium mb-2"
                    style={{ color: theme.colors.primary }}
                  >
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    {...register("message")}
                    className="w-full px-4 py-3 text-body outline-none transition-all duration-300 resize-none focus:ring-2 shadow-subtle"
                    style={{
                      backgroundColor: theme.colors.background,
                      color: theme.colors.text,
                      fontFamily: theme.fonts.body,
                    }}
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
                  className="w-full py-3 text-small font-semibold text-white tracking-wider transition-all duration-300 hover:opacity-90 shadow-soft disabled:opacity-60"
                  style={{ backgroundColor: theme.colors.accent }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
