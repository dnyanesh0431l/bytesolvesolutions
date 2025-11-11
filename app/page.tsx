"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BytesolvePage() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Videos/glob.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Hero Content */}
      <motion.section
        style={{ opacity }}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-20 md:py-0"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
            {/* LEFT SIDE - Text Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md mb-6"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm text-white/90 font-medium">
                  Innovation Driven Solutions
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight mb-4"
                style={{ textShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
              >
                Bytesolve
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl text-blue-200/90 font-light mb-5"
              >
                Digital Excellence, Redefined.
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-10"
              >
                Transforming ideas into impactful digital solutions — delivering
                innovation, performance, and growth for the modern world.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              >
                {/* Primary Button */}
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 rounded-2xl font-semibold text-white text-lg overflow-hidden transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                      boxShadow: "0 6px 20px rgba(59,130,246,0.4)",
                    }}
                  >
                    Explore Services →
                  </motion.button>
                </Link>

                {/* Secondary Button */}
                <Link href="/products">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-4 rounded-2xl font-semibold text-white/90 text-lg border border-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/10"
                  >
                    Our Products →
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* RIGHT SIDE - Stats / Visual */}
            <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-10">
              {/* Optional graphic (you can replace with an image or animation later) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="hidden md:block w-60 h-60 rounded-full bg-gradient-to-tr from-blue-500/40 to-indigo-400/20 blur-3xl mx-auto lg:mx-0"
              />

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12"
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                    7+
                  </div>
                  <div className="text-sm md:text-base text-white/60">
                    years of Experience
                  </div>
                </div>
                <div className="w-px h-12 bg-white/20 hidden sm:block" />
                <div className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                    98%
                  </div>
                  <div className="text-sm md:text-base text-white/60">
                    Client Satisfaction
                  </div>
                </div>
                <div className="w-px h-12 bg-white/20 hidden sm:block" />
                <div className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                    24/7
                  </div>
                  <div className="text-sm md:text-base text-white/60">
                    Support Available
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
          >
            <span className="text-xs lg:text-sm tracking-widest uppercase">
              Scroll Down
            </span>
            <svg
              className="w-6 h-6 lg:w-7 lg:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
