"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PRIMARY = "#1e3a8a";
const ACCENT = "#b30101";
const BG = "#ffffff";
const GRAY = "#64748b";
const LIGHT_GRAY = "#f8fafc";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "unset";
  }, [drawerOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md" : ""
        }`}
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.85)"
            : "linear-gradient(90deg, rgba(255,255,255,0.98), rgba(255,255,255,0.95))",
          boxShadow: scrolled
            ? "0 6px 24px rgba(0,0,0,0.08)"
            : "0 0 0 transparent",
          borderBottom: scrolled ? "1px solid rgba(226,232,240,0.6)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                whileHover={{ scale: 1.08, rotate: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-11 h-11"
              >
                <Image
                  src="/Images/Logo.png"
                  alt="Bytesolve Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              <div className="flex items-center select-none">
                <span
                  style={{ color: ACCENT }}
                  className="font-extrabold text-2xl tracking-tight"
                >
                  Byte
                </span>
                <span
                  style={{ color: PRIMARY }}
                  className="font-semibold text-2xl tracking-tight"
                >
                  solve
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((l) => (
                <motion.div key={l.href} whileHover={{ scale: 1.05 }}>
                  <Link
                    href={l.href}
                    className="relative font-medium text-sm tracking-wide group"
                    style={{ color: PRIMARY }}
                  >
                    {l.label}
                    <span
                      className="absolute left-0 bottom-[-5px] h-[2px] w-0 group-hover:w-full transition-all duration-300"
                      style={{ backgroundColor: ACCENT }}
                    ></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <Link href="/get-quote">
                <motion.button
                  whileHover={{
                    scale: 1.07,
                    boxShadow: `0 0 20px ${ACCENT}55`,
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="px-7 py-3 rounded-full font-semibold text-[15px] shadow-md transition-all"
                  style={{
                    background: `linear-gradient(90deg, ${ACCENT}, ${PRIMARY})`,
                    color: BG,
                  }}
                >
                  Get Quote
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden p-2.5 rounded-xl"
              style={{
                color: PRIMARY,
                background: LIGHT_GRAY,
              }}
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={2.5} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[320px] max-w-[85vw] z-50 shadow-2xl"
              style={{
                background: BG,
              }}
            >
              {/* Drawer Header */}
              <div
                className="flex items-center justify-between px-6 py-5 border-b"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9">
                    <Image
                      src="/Images/Logo.png"
                      alt="Bytesolve Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center">
                    <span
                      style={{ color: ACCENT }}
                      className="font-extrabold text-xl"
                    >
                      Byte
                    </span>
                    <span
                      style={{ color: PRIMARY }}
                      className="font-semibold text-xl"
                    >
                      solve
                    </span>
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9, rotate: 90 }}
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-xl"
                  style={{
                    color: PRIMARY,
                    background: LIGHT_GRAY,
                  }}
                >
                  <X size={22} strokeWidth={2.5} />
                </motion.button>
              </div>

              {/* Drawer Nav */}
              <div className="px-5 py-6 overflow-y-auto h-[calc(100%-170px)]">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Link href={l.href} onClick={() => setDrawerOpen(false)}>
                      <motion.div
                        whileHover={{ x: 6, backgroundColor: LIGHT_GRAY }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-between px-5 py-4 rounded-xl font-medium"
                        style={{
                          color: PRIMARY,
                        }}
                      >
                        <span>{l.label}</span>
                        <ChevronRight size={20} style={{ color: GRAY }} />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div
                className="absolute bottom-0 left-0 right-0 p-5 border-t"
                style={{
                  background: BG,
                  borderColor: "#e2e8f0",
                }}
              >
                <Link href="/get-quote" onClick={() => setDrawerOpen(false)}>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-full py-4 rounded-xl font-semibold text-base shadow-lg flex items-center justify-center gap-2"
                    style={{
                      background: `linear-gradient(90deg, ${ACCENT}, ${PRIMARY})`,
                      color: BG,
                      boxShadow: "0 10px 25px rgba(179,1,1,0.25)",
                    }}
                  >
                    Get Quote
                    <ChevronRight size={20} />
                  </motion.button>
                </Link>
                <p className="text-center text-xs mt-4" style={{ color: GRAY }}>
                  © 2024 Bytesolve. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
