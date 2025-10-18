"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Poppins, Inter } from "next/font/google";

const PRIMARY = "#1e3a8a";
const ACCENT = "#b30101";
const BG = "#ffffff";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
        style={{ backgroundColor: BG }}
      >
        {/* 🌟 Animated Splash Screen */}
        <AnimatePresence>
          {loading && (
            <motion.div
              key="splash"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 flex flex-col items-center justify-center z-50"
              style={{
                backgroundColor: BG,
                color: PRIMARY,
              }}
            >
              {/* Logo animation */}
              <motion.img
                src="/Images/logo.png"
                alt="ByteSolve Logo"
                className="w-24 h-24 mb-4"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* Company Name */}
              <motion.p
                className="text-xl font-semibold tracking-wide mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                ByteSolve Solutions
              </motion.p>

              {/* Slogan */}
              <motion.p
                className="text-[1em] font-bold tracking-[0.3em] uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                style={{ color: ACCENT }}
              >
                INNOVATE | BUILD | SOLVE
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🌐 Main Website */}
        {!loading && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Header />
            {children}
            <Footer />
          </motion.div>
        )}
      </body>
    </html>
  );
}
