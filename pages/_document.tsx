import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Load all 6 fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=EB+Garamond:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />

        <meta name="description" content="Wade, Grunberg & Wilson — Boutique litigation counsel in Atlanta. Complex litigation, clear strategy." />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wade, Grunberg & Wilson | Atlanta Law Firm" />
        <meta property="og:description" content="Boutique litigation counsel in Atlanta. Complex litigation, clear strategy." />
        <meta property="og:image" content="/og-card.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wade, Grunberg & Wilson | Atlanta Law Firm" />
        <meta name="twitter:description" content="Boutique litigation counsel in Atlanta. Complex litigation, clear strategy." />
        <meta name="twitter:image" content="/og-card.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
