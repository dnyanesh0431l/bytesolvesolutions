"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Scissors,
  ShoppingCart,
  UtensilsCrossed,
} from "lucide-react";
import { useRef } from "react";

const PRIMARY = "#1e3a8a";

const BG_IMAGE =
  "https://i.pinimg.com/1200x/22/b5/60/22b5604eca105ae195aa809dc734d071.jpg";

const products = [
  {
    id: 1,
    title: "Salon Software",
    description:
      "Streamline appointments, manage staff schedules, and enhance client experiences with our all-in-one salon management system.",
    icon: Scissors,
    features: ["Booking System", "Client Management", "Inventory Tracking"],
    stats: "98% client satisfaction",
    image: "/Images/salon.png"
  },
  {
    id: 2,
    title: "Restaurant Software",
    description:
      "Optimize orders, table management, and kitchen operations with intelligent POS and inventory solutions.",
    icon: UtensilsCrossed,
    features: ["POS System", "Menu Management", "Kitchen Display"],
    stats: "40% faster service",
    image: "/Images/restaurant-soft.png"
  },
  {
    id: 3,
    title: "E-commerce Solution",
    description:
      "Build powerful online stores with seamless payment integration, inventory sync, and customer analytics.",
    icon: ShoppingCart,
    features: ["Store Builder", "Payment Gateway", "Analytics Dashboard"],
    stats: "3x conversion growth",
    image: "/Images/ecommerce.png"
  },
];

export default function ProductsPage() {
  const productsRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center">
        {/* Static Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${BG_IMAGE})`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/90"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center w-full px-4 sm:px-6 py-20">
          <div className="max-w-4xl">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-sm font-semibold"
              style={{ backgroundColor: `${PRIMARY}15`, color: PRIMARY }}
            >
              <CheckCircle className="w-4 h-4" />
              TRUSTED BY 5000+ BUSINESSES
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Empower Your Business with
              <br />
              <span className="text-blue-300">Bytesolve</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-2xl text-lg text-gray-300 mb-8 leading-relaxed mx-auto"
            >
              Enterprise-grade software crafted to streamline operations,
              amplify performance, and deliver exceptional customer experiences.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center mb-8"
            >
              <button
                onClick={scrollToProducts}
                className="group px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl active:scale-95 hover:bg-blue-700"
                style={{ backgroundColor: PRIMARY }}
              >
                View Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-1">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section 
        ref={productsRef}
        className="relative w-full py-16 bg-black/80 backdrop-blur-xl border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="relative w-full lg:w-1/2 flex justify-center">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full max-w-md object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/400x300/1e3a8a/ffffff?text=${encodeURIComponent(product.title)}`;
                  }}
                />
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/10 blur-3xl -z-10" />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl sm:text-4xl font-bold text-white mb-4"
                >
                  {product.title}
                </motion.h3>
                <p className="text-white/70 mb-6 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {product.description}
                </p>
                <ul className="space-y-3 mb-8 text-white/80">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-center lg:justify-start gap-3"
                    >
                      <svg
                        className="w-5 h-5 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3 rounded-xl font-semibold text-white text-lg transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                    boxShadow: "0 6px 20px rgba(59,130,246,0.4)",
                  }}
                >
                  Explore {product.title} →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}