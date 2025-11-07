"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const MotionImage = motion(Image); // 👈 yeh line important hai!

const PRIMARY = "#1e3a8a";
const ACCENT = "#b30101";
const BG = "#ffffff";

export default function ClientLayout({
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
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="splash"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 flex flex-col items-center justify-center z-50"
            style={{ backgroundColor: BG, color: PRIMARY }}
          >
            <MotionImage
              src="/Images/Logo.png"
              alt="ByteSolve Logo" //kjjkj
              width={96}
              height={96}
              className="w-24 h-24 mb-4"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.p
              className="text-xl font-semibold tracking-wide mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              ByteSolve Solutions
            </motion.p>
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
    </>
  );
}
