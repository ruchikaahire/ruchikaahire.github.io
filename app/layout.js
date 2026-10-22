import { Spectral, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MotionInit from "@/components/MotionInit";
import SiteBackdrop from "@/components/SiteBackdrop";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://ruchikaahire.github.io"),
  title: {
    default: "Ruchika Ahire - Research, communication & social change",
    template: "%s - Ruchika Ahire",
  },
  description:
    "Ruchika Ahire is a researcher and communications professional working across climate, development and social equity.",
  icons: { icon: "/assets/favicon.svg" },
  openGraph: {
    type: "website",
    url: "https://ruchikaahire.github.io/",
    title: "Ruchika Ahire - Research, communication & social change",
    description:
      "Researcher and communications professional working across climate, development and social equity. SBCC messaging, policy research and documentary storytelling.",
    images: ["/assets/ruchika-ahire.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruchika Ahire - Research, communication & social change",
    description:
      "Researcher and communications professional working across climate, development and social equity.",
    images: ["/assets/ruchika-ahire.jpg"],
  },
};

export const viewport = {
  themeColor: "#0b0d12",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spectral.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteBackdrop />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MotionInit />
      </body>
    </html>
  );
}
