"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SalonSoftVideo() {
  const slides = [
    ["Streamline salon operations", "Enhance customer experience"],
    ["Increase staff productivity", "Grow through data-driven insights"],
    ["Effective marketing automation", "Automation that competitors lack"],
    ["Easy user-friendly design", "Scalable for the future"],
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen mt-12 overflow-hidden text-white font-sans">
      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/Videos/salonsoft.mp4" type="video/mp4" />
      </video>

      {/* 🌫 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#b30101]/10 to-black/80 -z-10" />

      {/* 🧭 Hero Content */}
      <div className="flex flex-col justify-center items-center h-full text-center px-6">
        {/* 🔹 Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-6xl font-extrabold mb-12 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          <span className="text-white  [-webkit-text-stroke:1px_#b30101]">
            Salon Management Software
          </span>{" "}
          <span className="text-[#b30101]  [-webkit-text-stroke:1px_white] italic">
            – Salonbyte
          </span>
        </motion.h1>

        {/* 🔹 Animated Slides */}
        <div className="relative h-32 md:h-40 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-4xl font-semibold text-[#ffffff] ">
                {slides[index][0]}
              </h2>
              <h3 className="text-xl md:text-2xl text-[#f8fafc] font-medium italic opacity-90">
                {slides[index][1]}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 🔹 Slide Indicators */}
        <div className="flex gap-3 mt-8">
          {slides.map((_, i) => (
            <motion.div
              key={i}
              className={`h-2 w-2 rounded-full transition-all duration-500 ${
                i === index ? "bg-[#fbbf24] scale-125" : "bg-white/30"
              }`}
              animate={{
                scale: i === index ? 1.3 : 1,
                opacity: i === index ? 1 : 0.5,
              }}
            />
          ))}
        </div>
      </div>

      {/* ✨ Bottom Glow Accent */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#b30101]/30 via-transparent to-transparent blur-xl pointer-events-none" />
    </div>
  );
}
