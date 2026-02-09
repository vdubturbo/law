export type VariantKey = "A" | "B" | "C";

export interface VariantTheme {
  key: VariantKey;
  name: string;
  description: string;
  colors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
    muted: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  /** Tailwind class mappings */
  tw: {
    primary: string;
    accent: string;
    bg: string;
    text: string;
    muted: string;
    headingFont: string;
    bodyFont: string;
  };
}

export const variants: Record<VariantKey, VariantTheme> = {
  A: {
    key: "A",
    name: "Premium Classical",
    description: "Timeless, confident, high-prestige",
    colors: {
      primary: "#1A3A52",
      accent: "#8B3A3A",
      background: "#F5F7FA",
      text: "#1A1A1A",
      muted: "#6B7280",
    },
    fonts: {
      heading: "'Playfair Display', serif",
      body: "'Inter', sans-serif",
    },
    tw: {
      primary: "va-primary",
      accent: "va-accent",
      bg: "va-bg",
      text: "va-text",
      muted: "va-muted",
      headingFont: "font-playfair",
      bodyFont: "font-inter",
    },
  },
  B: {
    key: "B",
    name: "Modern Professional",
    description: "Contemporary, balanced, approachable",
    colors: {
      primary: "#2C3E50",
      accent: "#4A6B5E",
      background: "#ECF0F1",
      text: "#1A1A1A",
      muted: "#6B7280",
    },
    fonts: {
      heading: "'EB Garamond', serif",
      body: "'Open Sans', sans-serif",
    },
    tw: {
      primary: "vb-primary",
      accent: "vb-accent",
      bg: "vb-bg",
      text: "vb-text",
      muted: "vb-muted",
      headingFont: "font-garamond",
      bodyFont: "font-open-sans",
    },
  },
  C: {
    key: "C",
    name: "Sophisticated Warm",
    description: "Modern-bold, warm, distinctive",
    colors: {
      primary: "#1F2937",
      accent: "#9B7653",
      background: "#F9F8F6",
      text: "#1A1A1A",
      muted: "#6B7280",
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Roboto', sans-serif",
    },
    tw: {
      primary: "vc-primary",
      accent: "vc-accent",
      bg: "vc-bg",
      text: "vc-text",
      muted: "vc-muted",
      headingFont: "font-syne",
      bodyFont: "font-roboto",
    },
  },
};

/** Get the full theme object for a variant */
export function getVariant(key: VariantKey): VariantTheme {
  return variants[key];
}

/** Get inline CSS variables for the active variant (applied to root) */
export function getVariantCSSVars(key: VariantKey): React.CSSProperties {
  const v = variants[key];
  return {
    "--color-primary": v.colors.primary,
    "--color-accent": v.colors.accent,
    "--color-background": v.colors.background,
    "--color-text": v.colors.text,
    "--color-muted": v.colors.muted,
    "--font-heading": v.fonts.heading,
    "--font-body": v.fonts.body,
  } as React.CSSProperties;
}

/** Reusable class patterns for common UI elements */
export function getButtonClasses(key: VariantKey, style: "primary" | "outline" = "primary"): string {
  const v = variants[key];
  const base = `${v.tw.bodyFont} font-medium px-8 py-3 transition-all duration-300 ease-in-out tracking-wide`;

  if (style === "primary") {
    return `${base} bg-${v.tw.accent} text-white hover:opacity-90 shadow-soft hover:shadow-card`;
  }
  return `${base} bg-transparent text-${v.tw.primary} shadow-soft hover:shadow-card`;
}

export function getCardClasses(key: VariantKey): string {
  const v = variants[key];
  return `bg-white ${v.tw.bodyFont} shadow-card hover:shadow-elevated transition-all duration-300 ease-in-out p-8`;
}

export function getSectionClasses(key: VariantKey): string {
  const v = variants[key];
  return `${v.tw.bodyFont} py-20 md:py-26 px-6 md:px-12 lg:px-20`;
}

export function getHeadingClasses(key: VariantKey, level: "h1" | "h2" | "h3" | "h4" = "h2"): string {
  const v = variants[key];
  const sizes: Record<string, string> = {
    h1: "text-h1 md:text-display",
    h2: "text-h2 md:text-h1",
    h3: "text-h3 md:text-h2",
    h4: "text-h4 md:text-h3",
  };
  return `${v.tw.headingFont} ${sizes[level]} font-bold tracking-tight`;
}
