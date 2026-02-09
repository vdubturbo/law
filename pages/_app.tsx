import type { AppProps } from "next/app";
import { VariantProvider } from "@/context/VariantContext";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VariantProvider defaultVariant="A">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </VariantProvider>
  );
}
