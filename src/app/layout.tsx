import type { Metadata, Viewport } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PWAProvider from "@/components/PWAProvider";
import InstallBanner from "@/components/InstallBanner";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#6C3CE1",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "RobotixAcademy — AI & Robotics Education for Kids",
  description:
    "RobotixAcademy makes kids future-ready with hands-on AI learning and Robotics kits. Fun, engaging programs for ages 6–16.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "RobotixAcademy",
    startupImage: [
      { url: "/icons/icon-512x512.png" },
    ],
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nunito.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col bg-brand-bg">
        <PWAProvider />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <InstallBanner />
      </body>
    </html>
  );
}
