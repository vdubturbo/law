import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useVariant } from "@/context/VariantContext";
import { getVariantCSSVars } from "@/utils/variants";
import Navigation from "./Navigation";
import Footer from "./Footer";
import VariantSwitcher from "./VariantSwitcher";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { activeVariant, theme } = useVariant();

  return (
    <div
      className="min-h-screen flex flex-col variant-transition"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.fonts.body,
        ...getVariantCSSVars(activeVariant),
      }}
    >
      <VariantSwitcher />
      <Navigation />
      <motion.main
        key={undefined}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
