import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
// import "boxicons/css/boxicons.min.css";

const dm_sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const dm_mono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}
