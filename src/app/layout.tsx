import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { site } from "@/lib/content";
import "./globals.css";

const description =
  "Portfolio of Akmal Tezar, a mobile and frontend engineer in Indonesia building React Native, React and Laravel products — from mobile banking onboarding to IoT hotel apps.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Akmal Tezar — Mobile & Frontend Engineer",
  description,
  applicationName: "Akmal Tezar",
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Akmal Tezar",
    "Mobile Engineer",
    "Frontend Engineer",
    "React Native",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Indonesia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: "Akmal Tezar — Mobile & Frontend Engineer",
    description,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Akmal Tezar — Mobile & Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akmal Tezar — Mobile & Frontend Engineer",
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0b0a" },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="dark"?"dark":"light";}catch(e){document.documentElement.dataset.theme="light";}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
