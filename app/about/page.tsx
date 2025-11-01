"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PRIMARY = "#1e3a8a";
// const ACCENT = "#b30101";
const BG = "#ffffff";
const YELLOW = "#ffd261ff";
const LIGHT_GRAY = "#f8fafc";
const DARK_GRAY = "#334155";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  return (
    <div ref={containerRef} className="w-full min-h-screen relative overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      {/* Hero Section */}
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
              style={{ backgroundColor: YELLOW }}
            />
            <span className="text-sm text-white/90 font-medium">
              Our Story & Vision
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
            About <span style={{ color: YELLOW }}>ByteSolve</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl sm:text-2xl font-light mb-8 max-w-2xl mx-auto"
            style={{ color: BG }}
          >
            Empowering businesses through innovation, design, and cutting-edge technology.
          </motion.p>
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
              Scroll Down
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

      {/* Content Sections */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Company Overview */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12"
            style={{ backgroundColor: `color-mix(in srgb, ${PRIMARY} 10%, transparent)` }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: BG }}
            >
              Who We Are
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg leading-relaxed"
              style={{ color: LIGHT_GRAY }}
            >
              <strong style={{ color: YELLOW }}>ByteSolve</strong> is a next-generation software company 
              committed to building impactful digital products and solutions for businesses of all scales. 
              Our journey began with restaurant software, but today we proudly offer services in{" "}
              <span style={{ color: YELLOW, fontWeight: 600 }}>
                Web Development, App Development, Custom Software, UI/UX Design, Digital Marketing
              </span>{" "}
              and{" "}
              <span style={{ color: YELLOW, fontWeight: 600 }}>
                IT Consultation
              </span>
              . We aim to empower businesses with technology that drives growth and efficiency.
            </motion.p>
          </motion.section>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-10"
              style={{ backgroundColor: `color-mix(in srgb, ${PRIMARY} 8%, transparent)` }}
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: BG }}
              >
                Our Mission
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="leading-relaxed"
                style={{ color: LIGHT_GRAY }}
              >
                To simplify technology for every business and craft innovative, reliable, 
                and user-centric digital solutions that enhance productivity, creativity, 
                and customer satisfaction.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-10"
              style={{ backgroundColor: `color-mix(in srgb, ${PRIMARY} 8%, transparent)` }}
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: BG }}
              >
                Our Vision
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="leading-relaxed"
                style={{ color: LIGHT_GRAY }}
              >
                To become a trusted technology partner for global enterprises by 
                combining innovation, integrity, and excellence in every line of 
                code we write.
              </motion.p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12"
            style={{ backgroundColor: `color-mix(in srgb, ${DARK_GRAY} 15%, transparent)` }}
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold mb-8"
              style={{ color: BG }}
            >
              Our Core Values
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-4"
              style={{ color: LIGHT_GRAY }}
            >
              <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: `color-mix(in srgb, ${PRIMARY} 15%, transparent)` }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${YELLOW} 20%, transparent)` }}>
                  💡
                </div>
                <span>Innovation with purpose</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: `color-mix(in srgb, ${PRIMARY} 15%, transparent)` }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${YELLOW} 20%, transparent)` }}>
                  🤝
                </div>
                <span>Client-centric collaboration</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: `color-mix(in srgb, ${PRIMARY} 15%, transparent)` }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${PRIMARY} 30%, transparent)` }}>
                  ⚙️
                </div>
                <span>Reliable performance</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: `color-mix(in srgb, ${PRIMARY} 15%, transparent)` }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${YELLOW} 20%, transparent)` }}>
                  🌍
                </div>
                <span>Ethical growth and transparency</span>
              </div>
            </motion.div>
          </motion.section>

          {/* Services & Products */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12"
            style={{ backgroundColor: `color-mix(in srgb, ${PRIMARY} 10%, transparent)` }}
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold mb-8"
              style={{ color: BG }}
            >
              What We Offer
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                <h4 className="text-xl font-semibold mb-4" style={{ color: YELLOW }}>Services</h4>
                <ul className="space-y-3" style={{ color: LIGHT_GRAY }}>
                  {['Web Development', 'App Development', 'Custom Software Development', 'UI/UX Design', 'Digital Marketing', 'IT Consultation'].map((service, index) => (
                    <motion.li
                      key={service}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: YELLOW }} />
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <h4 className="text-xl font-semibold mb-4" style={{ color: YELLOW }}>Products</h4>
                <ul className="space-y-3" style={{ color: LIGHT_GRAY }}>
                  {['Restaurant Software', 'Salon Software', 'E-commerce Solutions'].map((product, index) => (
                    <motion.li
                      key={product}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: YELLOW }} />
                      {product}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.section>

          {/* Legal & Registration */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12"
            style={{ backgroundColor: `color-mix(in srgb, ${DARK_GRAY} 20%, transparent)` }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-medium mb-4"
              style={{ color: LIGHT_GRAY }}
            >
              Udyam Registration Number
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl font-bold"
              style={{ color: YELLOW }}
            >
              UDYAM-MH-04-0249005
            </motion.p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}