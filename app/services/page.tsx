"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Briefcase,
  Code,
  Palette,
  Settings,
  Smartphone,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

// const PRIMARY = "#1e3a8a";
const ACCENT = "#b30101";
const BG = "#ffffff";
const YELLOW = "#fbbf24";
// const LIGHT_GRAY = "#f8fafc";

const services = [
  { name: "Web Development", icon: <Code className="w-6 h-6" /> },
  { name: "App Development", icon: <Smartphone className="w-6 h-6" /> },
  { name: "UI UX Design", icon: <Palette className="w-6 h-6" /> },
  { name: "Digital Marketing", icon: <TrendingUp className="w-6 h-6" /> },
  { name: "Custom Software", icon: <Settings className="w-6 h-6" /> },
  { name: "IT Consultation", icon: <Briefcase className="w-6 h-6" /> },
];

export default function BytesolvePage() {
  const router = useRouter();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  return (
    <div ref={containerRef} className="w-full min-h-screen relative overflow-hidden">
      {/* Video Background - Only for Hero */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      {/* Hero Section - Dark Theme */}
      <motion.section
        style={{ opacity }}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          style={{ scale }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md mb-8"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <span 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: ACCENT }}
            />
            <span className="text-sm text-white/90 font-medium">
              Premium Digital Services
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-tight mb-6"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
          >
            Innovate with <span style={{ color: YELLOW }}>ByteSolve</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl sm:text-2xl font-light mb-8 max-w-2xl mx-auto"
            style={{ color: BG }}
          >
            Transforming ideas into powerful digital solutions that drive business growth and create exceptional user experiences.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex justify-center gap-4"
          >
            {/* <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-2xl font-semibold text-white text-lg overflow-hidden transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT} 0%, #8f0000 100%)`,
                  boxShadow: `0 6px 20px ${ACCENT}40`,
                }}
              >
                Get Started Today →
              </motion.button>
            </Link> */}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
          >
            <span className="text-xs tracking-widest uppercase">
              Explore Services
            </span>
            <svg
              className="w-6 h-6"
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

      {/* Original Services Section - Exactly as before */}
      <section className="relative bg-white py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE - Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <Image
              src="/Images/ITPROFF.png"
              alt="Bytesolve Full Background"
              className="border-none bg-transparent object-contain"
              loading="lazy"
              quality={90}
              priority={false}
              width={800}
              height={800}
            />
          </motion.div>

          {/* RIGHT SIDE - Text & Services */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#b30101] leading-tight">
              Topnotch Services By{" "}
              <span className="text-[#1e3a8a]">Bytesolve</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              At Bytesolve, we are dedicated to delivering top-notch digital
              solutions that empower your business to thrive in the digital age.
              Our comprehensive range of services is designed to address the
              evolving needs of modern enterprises. Explore our core offerings
              below.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/about")}
              className="bg-[#b30101] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#8f0000] transition-all"
            >
              More About Us
            </motion.button>

            <div className="grid gap-3 mt-8">
              {services.map((service, i) => (
                <Link
                  key={i}
                  href={`/services/${service.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="block"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 150 }}
                    className="flex items-center justify-between gap-3 border border-gray-300 rounded-full px-5 py-3 shadow-sm hover:shadow-md bg-white cursor-pointer active:bg-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#b30101]">{service.icon}</span>
                      <span className="font-semibold text-gray-800">
                        {service.name.toUpperCase()}
                      </span>
                    </div>
                    <ChevronRight className="text-gray-400 group-hover:text-[#b30101] transition-colors" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}