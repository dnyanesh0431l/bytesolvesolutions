"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function WebsiteDevelopment() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [hoveredType, setHoveredType] = useState<number | null>(null);

  const PRIMARY = "#1e3a8a";
  const ACCENT = "#b30101";
  const BG = "#ffffff";
  const LIGHT_GRAY = "#f8fafc";
  const YELLOW = "#fbbf24";

  // Variants with proper TypeScript types
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeInOut" as const,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
        mass: 0.5,
      },
    },
  };

  const floatVariants = {
    initial: { y: 0 },
    float: {
      y: [-3, 3, -3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  // SEO-optimized features with keywords
  const features = [
    { icon: "⚡", text: "Fast Website Development & Performance Optimization" },
    { icon: "📱", text: "Mobile-First Responsive Web Design" },
    { icon: "🎨", text: "Custom Website Development & UI/UX Design" },
    { icon: "🔒", text: "Secure Web Development & Data Protection" },
    { icon: "🧠", text: "Scalable Web Architecture & Solutions" },
    { icon: "🔄", text: "Ongoing Website Maintenance & Support" },
  ];

  // SEO-optimized web types
  const webTypes = [
    {
      name: "Business Website Development",
      icon: "💼",
      desc: "Professional corporate website development services for businesses",
    },
    {
      name: "E-Commerce Website Development",
      icon: "🛍️",
      desc: "Custom e-commerce development with secure payment integration",
    },
    {
      name: "Portfolio Website Development",
      icon: "🖼️",
      desc: "Professional portfolio website development for creatives",
    },
    {
      name: "Educational Website Development",
      icon: "📚",
      desc: "Custom educational website development and LMS solutions",
    },
    {
      name: "Booking & Service Portal Development",
      icon: "🧾",
      desc: "Professional booking system and service portal development",
    },
    {
      name: "Custom Web Application Development",
      icon: "⚙️",
      desc: "Tailored custom web development for unique business needs",
    },
  ];

  const benefits = [
    "Increase online visibility & search engine rankings",
    "Improve user engagement & conversion rates",
    "Streamline business operations with custom web solutions",
    "Access real-time data & business analytics",
    "Future-proof & scalable web development solutions",
  ];

  // Delivery items for web projects
  const deliveryItems = [
    "Blazing-fast Next.js or React website development",
    "Modern, responsive & mobile-friendly web design",
    "SEO-optimized website development & technical SEO",
    "Integrated analytics & conversion tracking",
    "Ongoing website maintenance & technical support",
  ];

  // FAQ data
  const faqItems = [
    {
      q: "What is your website development process?",
      a: "Our custom website development process includes comprehensive consultation, UI/UX design, development, rigorous testing, and successful launch phases to ensure quality.",
    },
    {
      q: "How long does website development typically take?",
      a: "Typical website development projects take 4-8 weeks depending on complexity, features required, and the scope of custom web development needed.",
    },
    {
      q: "Do you provide website maintenance after development?",
      a: "Yes, we offer comprehensive website maintenance, security updates, and technical support packages for all our web development projects.",
    },
    {
      q: "Are your websites mobile-responsive?",
      a: "Absolutely! We specialize in mobile-first responsive web design that ensures optimal performance across all devices and screen sizes.",
    },
  ];

  return (
    <div
      className="min-h-screen mt-16 overflow-hidden"
      style={{ backgroundColor: LIGHT_GRAY }}
    >
      {/* SEO Meta Tags and Structured Data */}
      <Head>
        <title>
          Website Development Company | Custom Web Solutions | Bytesolve
        </title>
        <meta
          name="description"
          content="Professional website development services by Bytesolve. Fast, responsive, SEO-optimized websites that convert visitors into customers. Get your custom web solution today!"
        />
        <meta
          name="keywords"
          content="website development, web development company, custom websites, responsive web design, e-commerce development, web application development"
        />
        <meta
          property="og:title"
          content="Professional Website Development Services | Bytesolve"
        />
        <meta
          property="og:description"
          content="Custom web development solutions that drive results. Fast, secure, and scalable websites for your business."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Website Development",
            provider: {
              "@type": "Organization",
              name: "Bytesolve",
              description: "Professional website development company",
            },
            description:
              "Professional website development services including custom web design, e-commerce development, and responsive web applications",
            serviceType: "Web Development",
            areaServed: "Worldwide",
          })}
        </script>
      </Head>

      {/* SEO Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center bg-white">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ color: PRIMARY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Website Development Services
        </motion.h1>
        <motion.p
          className="text-lg mb-8 leading-relaxed"
          style={{ color: `${PRIMARY}dd` }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          As a leading <strong>website development company</strong>, Bytesolve
          specializes in creating
          <strong> custom web development solutions</strong> that drive business
          growth. Our
          <strong> responsive web design</strong> and{" "}
          <strong>SEO-optimized development</strong>
          ensure your website ranks higher and converts better. We provide
          comprehensive
          <strong> web application development</strong> services tailored to
          your specific business needs.
        </motion.p>
      </section>

      {/* Smooth Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://i.pinimg.com/1200x/76/4d/22/764d22db28f10521fc2b713e1b46d96e.jpg')`,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-20 relative z-10 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Web Development by <span style={{ color: YELLOW }}>Bytesolve</span>
          </motion.h2>

          <motion.p
            className="text-base max-w-2xl mx-auto text-white opacity-90"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Performance-driven Website Development that converts visitors into
            loyal customers
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
          🔹 What Makes a Great Converting Website
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

      {/* Smooth How We Deliver */}
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
            💡 How <span style={{ color: ACCENT }}>Bytesolve</span> Delivers Web
            Development
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <motion.ul
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {deliveryItems.map((item, i) => (
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
                    ✓
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
                  src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
                  alt="Website Development Process"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-lg w-full"
                  unoptimized
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smooth Website Types */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <motion.h2
          className="text-2xl font-bold text-center mb-6"
          style={{ color: PRIMARY }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          🌐 Professional Website Development Services
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {webTypes.map((type, i) => (
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

      {/* Smooth Why Build Section */}
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
            🚀 Why Your Business Needs Professional Website Development
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
                    💎
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
                Your Web Development Partner
              </h3>
              <p className="text-sm mb-4" style={{ color: `${PRIMARY}cc` }}>
                From strategic planning to analytics integration, we build
                growth engines through professional website development that
                truly works for your business.
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
                Start Your Website Development Project →
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section for Rich Snippets */}
      <section className="max-w-4xl mx-auto px-4 py-12 bg-white">
        <motion.h2
          className="text-2xl font-bold text-center mb-8"
          style={{ color: PRIMARY }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          ❓ Website Development FAQs
        </motion.h2>
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold mb-2 text-lg" style={{ color: ACCENT }}>
                {faq.q}
              </h3>
              <p className="text-gray-700" style={{ color: PRIMARY }}>
                {faq.a}
              </p>
            </motion.div>
          ))}
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
            <span style={{ color: YELLOW }}>
              Professional Website Development
            </span>
          </p>
          <p className="text-xs opacity-75">
            Empowering businesses with custom website development that performs,
            engages, and grows
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
