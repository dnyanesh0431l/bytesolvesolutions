"use client";
import { motion } from "framer-motion";

const PRIMARY = "#1e3a8a";
const ACCENT = "#b30101";
const BG = "#ffffff";
const GRAY = "#64748b";
const LIGHT_GRAY = "#f8fafc";

export default function HomePage() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/Videos/glob.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${PRIMARY}aa 0%, ${BG}99 100%)`,
          mixBlendMode: "overlay",
        }}
      ></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
          style={{
            color: BG,
            textShadow: `0 0 20px ${ACCENT}, 0 0 40px ${PRIMARY}`,
          }}
        >
          Global Innovation Network
        </h1>
        <p
          className="text-lg md:text-2xl max-w-2xl mx-auto"
          style={{ color: LIGHT_GRAY }}
        >
          Connecting the world through technology, creativity, and collaboration.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 rounded-2xl font-semibold text-white shadow-lg"
          style={{
            background: `linear-gradient(90deg, ${ACCENT}, ${PRIMARY})`,
          }}
        >
          Explore More
        </motion.button>
      </motion.div>
    </section>
  );
}
