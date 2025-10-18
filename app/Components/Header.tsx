"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PRIMARY = "#1e3a8a";
const ACCENT = "#b30101";
const BG = "#ffffff";
const GRAY = "#64748b";
const LIGHT_GRAY = "#f8fafc";
const DARK_GRAY = "#334155";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "unset";
  }, [drawerOpen]);

  const servicesItems = [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/app-development", label: "App Development" },
    { href: "/services/custom-software", label: "Custom Software Development" },
    { href: "/services/web-design", label: "Web Design" },
    { href: "/services/app-design", label: "App Design" },
    { href: "/services/consultation", label: "Consultation" },
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
          scrolled ? "backdrop-blur-xl" : ""
        }`}
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.92)"
            : "rgba(255,255,255,0.98)",
          boxShadow: scrolled
            ? "0 4px 32px rgba(30,58,138,0.08), 0 1px 3px rgba(0,0,0,0.04)"
            : "0 1px 3px rgba(0,0,0,0.02)",
          borderBottom: scrolled
            ? `1px solid rgba(30,58,138,0.08)`
            : "1px solid rgba(226,232,240,0.4)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="relative w-10 h-10"
              >
                <Image
                  src="/Images/Logo.png"
                  alt="ByteSolve Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              <div className="flex flex-col leading-none">
                <span
                  style={{ color: PRIMARY }}
                  className="font-bold text-[22px] tracking-tight"
                >
                  ByteSolve
                </span>
                <span
                  style={{ color: GRAY }}
                  className="text-[9px] font-medium tracking-wider uppercase mt-0.5"
                >
                  Software Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
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
                      className="relative px-4 py-2.5 font-medium text-[14px] tracking-wide group cursor-pointer flex items-center gap-1.5"
                      style={{ color: DARK_GRAY }}
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
                          }}
                        />
                      )}
                      <span
                        className="absolute left-4 right-4 bottom-0 h-[2px] w-0 group-hover:w-[calc(100%-32px)] transition-all duration-300"
                        style={{ backgroundColor: ACCENT }}
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
                          className="absolute top-full left-0 mt-2 w-64 rounded-xl shadow-2xl overflow-hidden"
                          style={{
                            background: BG,
                            border: `1px solid ${LIGHT_GRAY}`,
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
                                  className="px-5 py-3 text-[13px] font-medium transition-colors"
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

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.04,
                    boxShadow: `0 8px 24px rgba(30,58,138,0.2)`,
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-6 py-2.5 rounded-lg font-semibold text-[13px] tracking-wide transition-all"
                  style={{
                    background: BG,
                    color: PRIMARY,
                    border: `1.5px solid ${PRIMARY}`,
                  }}
                >
                  Let&apos;s Talk
                </motion.button>
              </Link>
              <Link href="/get-quote">
                <motion.button
                  whileHover={{
                    scale: 1.04,
                    boxShadow: `0 8px 24px ${ACCENT}40`,
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-6 py-2.5 rounded-lg font-semibold text-[13px] tracking-wide shadow-lg transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${ACCENT} 0%, ${PRIMARY} 100%)`,
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
              whileTap={{ scale: 0.95 }}
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden p-2.5 rounded-lg"
              style={{
                color: PRIMARY,
                background: LIGHT_GRAY,
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
              className="fixed top-0 right-0 bottom-0 w-[340px] max-w-[88vw] z-[70] shadow-2xl"
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
                      alt="ByteSolve Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span
                      style={{ color: PRIMARY }}
                      className="font-bold text-lg"
                    >
                      ByteSolve
                    </span>
                    <span
                      style={{ color: GRAY }}
                      className="text-[8px] font-medium tracking-wider uppercase"
                    >
                      Software Solutions
                    </span>
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9, rotate: 90 }}
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-lg"
                  style={{
                    color: PRIMARY,
                    background: LIGHT_GRAY,
                  }}
                >
                  <X size={20} strokeWidth={2.5} />
                </motion.button>
              </div>

              {/* Drawer Nav */}
              <div className="px-4 py-4 overflow-y-auto h-[calc(100%-200px)]">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                    className="mb-1"
                  >
                    {!link.dropdown ? (
                      <Link href={link.href} onClick={() => setDrawerOpen(false)}>
                        <motion.div
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-between px-4 py-3.5 rounded-lg font-medium text-[14px]"
                          style={{
                            color: DARK_GRAY,
                          }}
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
                          className="flex items-center justify-between px-4 py-3.5 rounded-lg font-medium text-[14px] cursor-pointer"
                          style={{
                            color: DARK_GRAY,
                          }}
                        >
                          <span>{link.label}</span>
                          <motion.div
                            animate={{
                              rotate:
                                mobileDropdown === link.label ? 90 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight size={18} style={{ color: GRAY }} />
                          </motion.div>
                        </motion.div>
                        <AnimatePresence>
                          {mobileDropdown === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden ml-4"
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
                                    className="px-4 py-2.5 rounded-lg text-[13px] font-medium"
                                    style={{ color: GRAY }}
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
              <div
                className="absolute bottom-0 left-0 right-0 p-5 border-t"
                style={{
                  background: BG,
                  borderColor: "#e2e8f0",
                }}
              >
                <div className="flex flex-col gap-3">
                  <Link href="/contact" onClick={() => setDrawerOpen(false)}>
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-3 rounded-lg font-semibold text-[13px] tracking-wide"
                      style={{
                        background: BG,
                        color: PRIMARY,
                        border: `1.5px solid ${PRIMARY}`,
                      }}
                    >
                      Let&apos;s Talk
                    </motion.button>
                  </Link>
                  <Link href="/get-quote" onClick={() => setDrawerOpen(false)}>
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-3 rounded-lg font-semibold text-[13px] tracking-wide shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${ACCENT} 0%, ${PRIMARY} 100%)`,
                        color: BG,
                      }}
                    >
                      Get Quote
                    </motion.button>
                  </Link>
                </div>
                <p className="text-center text-[10px] mt-4 font-medium" style={{ color: GRAY }}>
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