import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProviderWrapper from "./components/common/themeProviderWrapper";


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
      <ThemeProviderWrapper>
          <body
            className={Montserrat.variable}
          >
            {children}
          </body>
        </ThemeProviderWrapper>
    </html>
  );
}
