import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import ClientLayout from "./Components/ClientLayout";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//
// 🧠 ADD THIS — Metadata including favicon and manifest
//
export const metadata = {
  title: "Bytesolve Solutions",
  description:
    "Innovative digital solutions to grow your business. Powered by Bytesolve.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

//
// 🧱 Root Layout
//
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
