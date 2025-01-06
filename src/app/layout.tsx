import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProviderWrapper from "./components/common/themeProviderWrapper";
import Head from "next/head";

const Montserrat = localFont({
  src: "./fonts/Montserrat-Regular.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Coffee Software Website",
  description: "Website for Coffee - The software development company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="VGG7Y5WfUTzlJAJIJIN-rOdlkasXNr6GcNRgLIJg26I"
        />
      </Head>
      <ThemeProviderWrapper>
        <body className={Montserrat.variable}>{children}</body>
      </ThemeProviderWrapper>
    </html>
  );
}
