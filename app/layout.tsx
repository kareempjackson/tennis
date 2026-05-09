import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Cormorant, Outfit } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteTitle = "Grenada Community Tennis Ladder";
const siteDescription =
  "Challenge local players, climb the ranks, and prove you own the court. Presented by Mount Cinnamon Resort, Grand Anse Beach, Grenada.";
const ogImage = {
  url: "/images/xavier-cee-qx_C6x0wbbc-unsplash.jpg",
  width: 1200,
  height: 800,
  alt: "Grenada Community Tennis Ladder",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.grenadatennis.org"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    title: siteTitle,
    description: siteDescription,
    siteName: siteTitle,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0C2340",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${cormorant.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
