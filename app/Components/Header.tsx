"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Poppins, Inter } from 'next/font/google';

// Configure Google Fonts
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const PRIMARY = "#1e3a8a";
const ACCENT = "#b30101";
const BG = "#ffffff";
const YELLOW = "#fbbf24";
const LIGHT_GRAY = "#f8fafc";
const DARK_GRAY = "#334155";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      
      // Close dropdowns when scrolling
      if (isScrolled) {
        setActiveDropdown(null);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [drawerOpen]);

  const servicesItems = [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/app-development", label: "App Development" },
    { href: "/services/custom-software", label: "Custom Software Development" },
    { href: "/services/ui-ux-design", label: "UI/UX Design" },
    { href: "/services/digital-marketing", label: "Digital Marketing" },
    { href: "/services/it-consultation", label: "IT Consultation" },
  ];

  const productsItems = [
    { href: "/products/salon-software", label: "Salon Software" },
    { href: "/products/restaurant-software", label: "Restaurant Software" },
    { href: "/products/ecommerce", label: "E-commerce Solutions" },
  ];

  const navLinks = [
    { href: "/", label: "Home", dropdown: undefined },
    { href: "/about", label: "About", dropdown: undefined },
    { href: "/services", label: "Services", dropdown: servicesItems },
    { href: "/products", label: "Products", dropdown: productsItems },
    { href: "/contact", label: "Contact", dropdown: undefined },
    { href: "/blogs", label: "Blogs", dropdown: undefined },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl shadow-2xl" : "backdrop-blur-sm"
        } ${poppins.variable} ${inter.variable} font-sans`}
        style={{
          backgroundColor: scrolled
            ? "rgba(5, 30, 98, 0.95)" // Much darker and more opaque when scrolled
            : "rgba(255, 255, 255, 0.98)",
          borderBottom: scrolled
            ? `1px solid rgba(30, 58, 138, 0.2)`
            : "1px solid rgba(226, 232, 240, 0.6)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group relative z-10"
              onClick={() => setDrawerOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="relative w-10 h-10 lg:w-12 lg:h-12"
              >
                <Image
                  src="/Images/Logo.png"
                  alt="ByteSolve Logo"
                  width={150}
                  height={150}
                  className="object-contain"
                  style={{
                    filter: scrolled 
                      ? "brightness(0) invert(1) drop-shadow(0 1px 2px rgba(0,0,0,0.1))"
                      : "drop-shadow(0 1px 2px rgba(0,0,0,0.05))",
                  }}
                />
              </motion.div>
              <div className="flex flex-col leading-none">
                <span
                  className={`font-bold text-xl lg:text-2xl tracking-tight transition-colors duration-300 font-poppins ${
                    scrolled ? "text-white" : "text-blue-900"
                  }`}
                >
                  ByteSolve
                </span>
                <span
                  className={`text-[10px] lg:text-xs font-medium tracking-wider uppercase transition-colors duration-300 font-inter ${
                    scrolled ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                   Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 font-inter">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    link.dropdown && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ y: -1 }}
                      className="relative px-4 py-2.5 font-medium text-sm tracking-wide group cursor-pointer flex items-center gap-1.5 transition-colors duration-200 font-inter"
                      style={{ 
                        color: scrolled ? BG : DARK_GRAY 
                      }}
                    >
                      {link.label}
                      {link.dropdown && (
                        <ChevronDown
                          size={14}
                          className="transition-transform duration-200"
                          style={{
                            transform:
                              activeDropdown === link.label
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            color: scrolled ? BG : DARK_GRAY,
                          }}
                        />
                      )}
                      <span
                        className="absolute left-4 right-4 bottom-0 h-0.5 w-0 group-hover:w-[calc(100%-32px)] transition-all duration-300"
                        style={{ 
                          backgroundColor: scrolled ? YELLOW : ACCENT 
                        }}
                      ></span>
                    </motion.div>
                  </Link>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-1 w-64 rounded-xl shadow-2xl border border-slate-200 overflow-hidden font-inter"
                          style={{
                            background: BG,
                          }}
                        >
                          <div className="py-2">
                            {link.dropdown.map((item, idx) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                              >
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.03 }}
                                  whileHover={{
                                    backgroundColor: LIGHT_GRAY,
                                    x: 4,
                                  }}
                                  className="px-5 py-3 text-sm font-medium transition-colors duration-200 hover:text-blue-700 font-inter"
                                  style={{ color: DARK_GRAY }}
                                >
                                  {item.label}
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3 font-inter">
              <Link href="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.04,
                    boxShadow: scrolled 
                      ? "0 8px 24px rgba(251, 191, 36, 0.3)"
                      : "0 8px 24px rgba(30, 58, 138, 0.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-6 py-2.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 border-2 font-inter"
                  style={{
                    background: scrolled ? "transparent" : BG,
                    color: scrolled ? YELLOW : PRIMARY,
                    borderColor: scrolled ? YELLOW : PRIMARY,
                  }}
                >
                  Let&apos;s Talk
                </motion.button>
              </Link>
              <Link href="/get-quote">
                <motion.button
                  whileHover={{
                    scale: 1.04,
                    boxShadow: `0 8px 24px rgba(179, 1, 1, 0.3)`,
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-6 py-2.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 font-inter"
                  style={{
                    background: scrolled 
                      ? `linear-gradient(135deg, ${YELLOW} 0%, #f59e0b 100%)`
                      : `linear-gradient(135deg, ${ACCENT} 0%, ${PRIMARY} 100%)`,
                    color: scrolled ? PRIMARY : BG,
                  }}
                >
                  Get Quote
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden p-2.5 rounded-lg transition-colors duration-200 font-inter"
              style={{
                color: scrolled ? BG : PRIMARY,
                background: scrolled ? "rgba(255,255,255,0.1)" : LIGHT_GRAY,
              }}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={2.5} />
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 35, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-[70] shadow-2xl bg-white flex flex-col font-sans"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/Images/Logo.png"
                      alt="ByteSolve Logo"
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-bold text-xl text-blue-900 font-poppins">
                      ByteSolve
                    </span>
                    <span className="text-[10px] font-medium tracking-wider uppercase text-slate-500 font-inter">
                      Software Solutions
                    </span>
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9, rotate: 90 }}
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-lg bg-slate-100 text-slate-700 font-inter"
                >
                  <X size={20} strokeWidth={2.5} />
                </motion.button>
              </div>

              {/* Drawer Nav */}
              <div className="flex-1 overflow-y-auto px-4 py-4 font-inter">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                    className="mb-1"
                  >
                    {!link.dropdown ? (
                      <Link
                        href={link.href}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <motion.div
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-between px-4 py-3.5 rounded-lg font-medium text-base text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-colors duration-200 font-inter"
                        >
                          <span>{link.label}</span>
                        </motion.div>
                      </Link>
                    ) : (
                      <div>
                        <motion.div
                          whileTap={{ scale: 0.98 }}
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === link.label ? null : link.label
                            )
                          }
                          className="flex items-center justify-between px-4 py-3.5 rounded-lg font-medium text-base text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-colors duration-200 cursor-pointer font-inter"
                        >
                          <span>{link.label}</span>
                          <motion.div
                            animate={{
                              rotate: mobileDropdown === link.label ? 90 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight size={18} className="text-slate-500" />
                          </motion.div>
                        </motion.div>
                        <AnimatePresence>
                          {mobileDropdown === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden ml-4 border-l-2 border-slate-200"
                            >
                              {link.dropdown.map((item, idx) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setDrawerOpen(false)}
                                >
                                  <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-colors duration-200 font-inter"
                                  >
                                    {item.label}
                                  </motion.div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="border-t border-slate-200 p-5 bg-white font-inter">
                <div className="flex flex-col gap-3">
                  <Link href="/contact" onClick={() => setDrawerOpen(false)}>
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-3 rounded-lg font-semibold text-sm tracking-wide border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-200 font-inter"
                    >
                      Let&apos;s Talk
                    </motion.button>
                  </Link>
                  <Link href="/get-quote" onClick={() => setDrawerOpen(false)}>
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-3 rounded-lg font-semibold text-sm tracking-wide text-white bg-gradient-to-r from-red-600 to-blue-700 hover:shadow-lg transition-all duration-200 font-inter"
                    >
                      Get Quote
                    </motion.button>
                  </Link>
                </div>
                <p className="text-center text-xs text-slate-500 mt-4 font-medium font-inter">
                  © 2024 ByteSolve. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}