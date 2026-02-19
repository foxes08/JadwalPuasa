import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jadwal Puasa & Imsakiyah Ramadhan 2026",
  description:
    "Jadwal sholat, imsak, dan berbuka puasa Ramadhan 1447 H / 2026 lengkap untuk seluruh kota di Indonesia.",
  keywords: ["jadwal puasa", "imsakiyah", "ramadhan 2026", "jadwal sholat", "buka puasa"],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Jadwal Puasa",
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.variable} ${plusJakarta.className} antialiased`}>
        <div className="relative flex min-h-screen flex-col bg-white text-gray-900">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
