import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Tectonic UI — Build stunning interfaces at warp speed",
  description:
    "300+ production-ready components, blocks and templates. Copy, paste, customize. Built with React, Tailwind CSS, and Framer Motion.",
  keywords: [
    "UI components",
    "React components",
    "Tailwind CSS",
    "Framer Motion",
    "Next.js",
    "dark mode",
    "landing page",
    "design system",
  ],
  authors: [{ name: "Tectonic UI" }],
  openGraph: {
    title: "Tectonic UI — Build stunning interfaces at warp speed",
    description:
      "300+ production-ready components, blocks and templates for modern web apps.",
    url: "https://tectonicui.dev",
    siteName: "Tectonic UI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tectonic UI",
    description:
      "300+ production-ready components, blocks and templates for modern web apps.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
