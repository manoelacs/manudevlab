import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Manudev Lab — Code from the coast",
    template: "%s · Manudev Lab",
  },
  description:
    "Manudev Lab is a tiny software lab run by a traveling developer, building AI-powered products for hosts, small businesses and small-country markets.",
  openGraph: {
    title: "Manudev Lab — Code from the coast",
    description:
      "AI-powered products for hosts, small businesses and small-country markets — built a few steps from the sea.",
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
