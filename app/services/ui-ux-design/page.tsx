"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function UIUXDesign() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredType, setHoveredType] = useState(null);

  const PRIMARY = "#dc2626";
  const ACCENT = "#7c3aed";
  const BG = "#ffffff";
  const LIGHT_GRAY = "#fef7ff";

  // Smooth container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        ease: "easeOut",
      },
    },
  };

  // Buttery smooth item variants
  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.5,
      },
    },
  };

  // Floating animation for hero elements
  const floatVariants = {
    initial: { y: 0 },
    float: {
      y: [-3, 3, -3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    { icon: "🎨", text: "Visual excellence" },
    { icon: "🧠", text: "Intuitive navigation" },
    { icon: "📱", text: "Responsive design" },
    { icon: "⚡", text: "Fast interactions" },
    { icon: "💡", text: "User-centered approach" },
    { icon: "📊", text: "Data-driven decisions" },
  ];

  const designTypes = [
    { name: "Wireframes", icon: "📐", desc: "Structural blueprint" },
    { name: "Prototypes", icon: "🎭", desc: "Interactive mockups" },
    { name: "UI Design", icon: "✨", desc: "Visual aesthetics" },
    { name: "UX Research", icon: "🔍", desc: "User behavior analysis" },
    { name: "Design Systems", icon: "🎯", desc: "Consistent components" },
    { name: "User Testing", icon: "🧪", desc: "Real user feedback" },
  ];

  const benefits = [
    "Increased user engagement",
    "Higher conversion rates",
    "Reduced bounce rates",
    "Enhanced brand trust",
    "Competitive advantage",
  ];

  return (
    <div
      className="min-h-screen mt-16 overflow-hidden"
      style={{ backgroundColor: LIGHT_GRAY }}
    >
      {/* Smooth Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
      linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6)),
      url('https://i.pinimg.com/1200x/76/4d/22/764d22db28f10521fc2b713e1b46d96e.jpg')
    `,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-20 relative z-10 text-center">
          {/* Heading: Left to Right */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            UI/UX Design by{" "}
            <span style={{ color: ACCENT }}>Bytesolve</span>
          </motion.h1>

          {/* Subtext: Right to Left */}
          <motion.p
            className="text-base max-w-2xl mx-auto text-white opacity-90"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Beautiful, intuitive designs that users love and businesses grow with
          </motion.p>
        </div>
      </section>

      {/* Smooth Features Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <motion.h2
          className="text-2xl font-bold text-center mb-6"
          style={{ color: PRIMARY }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          🔹 Principles of Great Design
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onHoverStart={() => setHoveredFeature(i)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="p-4 rounded-xl text-center cursor-pointer relative overflow-hidden"
              style={{
                backgroundColor: BG,
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0"
                style={{
                  background: `linear-gradient(135deg, ${PRIMARY}08, ${ACCENT}08)`,
                }}
                animate={{ opacity: hoveredFeature === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <motion.div
                  className="text-3xl mb-2"
                  animate={{
                    scale: hoveredFeature === i ? 1.1 : 1,
                    rotate: hoveredFeature === i ? [0, -5, 5, 0] : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {feature.icon}
                </motion.div>
                <p className="text-xs font-medium" style={{ color: PRIMARY }}>
                  {feature.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Smooth How We Design */}
      <section className="py-8" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-2xl font-bold text-center mb-6"
            style={{ color: PRIMARY }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            💡 Our <span style={{ color: ACCENT }}>Design</span> Process
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <motion.ul
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                "User research & persona development",
                "Information architecture planning",
                "Wireframing & interactive prototyping",
                "Visual design & brand integration",
                "Usability testing & iteration",
                "Design system implementation",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-2 text-sm p-2 rounded-lg"
                  style={{ color: PRIMARY }}
                >
                  <motion.span
                    style={{ color: ACCENT }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  >
                    ✦
                  </motion.span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="float"
                className="relative z-10"
              >
                <Image
                  src="https://cdn.dribbble.com/users/189524/screenshots/2287256/media/206eb9b3e17e8e7b4e7d8d59c2e5c8a5.gif"
                  alt="UI/UX Design Process"
                  className="rounded-xl shadow-lg w-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smooth Design Services */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <motion.h2
          className="text-2xl font-bold text-center mb-6"
          style={{ color: PRIMARY }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          🎨 Our Design Services
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {designTypes.map((type, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onHoverStart={() => setHoveredType(i)}
              onHoverEnd={() => setHoveredType(null)}
              className="p-4 rounded-xl text-center cursor-pointer relative overflow-hidden"
              style={{
                backgroundColor: BG,
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${PRIMARY}05, ${ACCENT}05)`,
                }}
                animate={{ opacity: hoveredType === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <motion.div
                  className="text-3xl mb-2"
                  animate={{
                    scale: hoveredType === i ? 1.1 : 1,
                    y: hoveredType === i ? [-2, 2, -2] : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {type.icon}
                </motion.div>
                <h3
                  className="font-bold text-sm mb-1"
                  style={{ color: ACCENT }}
                >
                  {type.name}
                </h3>
                <p className="text-xs" style={{ color: `${PRIMARY}aa` }}>
                  {type.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Smooth Why Design Matters */}
      <section
        className="py-8"
        style={{
          background: `linear-gradient(135deg, ${PRIMARY}08, ${ACCENT}08)`,
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-2xl font-bold text-center mb-6"
            style={{ color: PRIMARY }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            🚀 The Power of Exceptional Design
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-2 p-2 rounded-lg"
                >
                  <motion.span
                    className="text-lg"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    🎯
                  </motion.span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: PRIMARY }}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col justify-center"
            >
              <h3 className="font-bold text-lg mb-2" style={{ color: ACCENT }}>
                Design That Drives Results
              </h3>
              <p className="text-sm mb-4" style={{ color: `${PRIMARY}cc` }}>
                We create experiences that not only look beautiful but also 
                solve real business problems and drive measurable results.
              </p>

              <motion.button
                className="font-bold py-3 px-6 rounded-lg text-white shadow-lg w-full md:w-auto"
                style={{ backgroundColor: ACCENT }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    `0 4px 14px ${ACCENT}40`,
                    `0 6px 20px ${ACCENT}60`,
                    `0 4px 14px ${ACCENT}40`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Start Your Design Project →
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smooth Footer */}
      <footer
        className="py-6 text-center"
        style={{ backgroundColor: PRIMARY, color: BG }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-bold text-lg mb-1">
            Bytesolve —{" "}
            <span style={{ color: ACCENT }}>Designing Digital Experiences</span>
          </p>
          <p className="text-xs opacity-75">
            Where beautiful design meets exceptional user experience
          </p>
        </motion.div>
      </footer>
    </div>
  );
}