import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useReducedMotion } from "framer-motion";

export default function DirectionDHero() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const isA2 = router.query.v === "a2";

  const fadeIn = (delay: number = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: "easeOut" },
        };

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "clamp(450px, 60vw, 600px)" }}
    >
      <Image
        src={isA2 ? "/building.svg" : "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop"}
        alt="Atlanta skyline"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(27,42,61,0.85) 0%, rgba(27,42,61,0.4) 60%, rgba(27,42,61,0.2) 100%)",
        }}
      />
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-[1120px] mx-auto px-6 md:px-10">
        <motion.h1
          {...fadeIn(0.1)}
          className="text-[34px] md:text-[48px] lg:text-[56px] font-semibold text-white leading-[1.1]"
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "-0.02em",
          }}
        >
          Complex Litigation.
          <br />
          Clear Strategy.
        </motion.h1>
        <motion.p
          {...fadeIn(0.3)}
          className="mt-6 text-base md:text-lg text-white/75 max-w-lg leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Precision counsel for high-stakes disputes&mdash;from first strategy
          to final resolution.
        </motion.p>
        <motion.div {...fadeIn(0.5)} className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]"
            style={{
              backgroundColor: "var(--d-accent)",
              color: "var(--d-navy)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Begin a Conversation
          </Link>
          <Link
            href="/about"
            className="px-7 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            style={{
              border: "1px solid rgba(255,255,255,0.3)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Our Approach
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
