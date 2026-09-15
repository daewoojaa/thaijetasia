import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-thai",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "THAI JET Asia",
  description: "ค้นหาเที่ยวบินกับ THAI JET Asia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${plexSansThai.variable} ${plexSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
