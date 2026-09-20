import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SkipLink } from "@/components/layout/SkipLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/lib/content";
import {
  getFaqJsonLd,
  getOrganizationJsonLd,
  getSiteMetadata,
} from "@/lib/seo";

import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  weight: ["400", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = getSiteMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08080c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationJsonLd = getOrganizationJsonLd();
  const faqJsonLd = getFaqJsonLd(faqs);

  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${dmSans.variable} h-full`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.prod.website-files.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://cdn.prod.website-files.com" />
        <link rel="preconnect" href="https://play.gumlet.io" />
        <link rel="dns-prefetch" href="https://play.gumlet.io" />
      </head>
      <body className="min-h-full bg-background text-white">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={faqJsonLd} />
        <SkipLink />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
