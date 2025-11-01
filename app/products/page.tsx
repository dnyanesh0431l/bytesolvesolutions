"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Scissors,
  ShoppingCart,
  UtensilsCrossed,
} from "lucide-react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const PRIMARY = "#1e3a8a";
const ACCENT = "#b30101";
const BG = "#ffffff";
const YELLOW = "#fbbf24";
const LIGHT_GRAY = "#f8fafc";
const DARK_GRAY = "#334155";

const BG_IMAGE =
  "https://i.pinimg.com/1200x/28/28/fd/2828fdb7ff978e37ce2570889dc208d5.jpg";

const products = [
  {
    id: 1,
    title: "Salon Software",
    description:
      "Streamline appointments, manage staff schedules, and enhance client experiences with our all-in-one salon management system.",
    icon: Scissors,
    features: ["Booking System", "Client Management", "Inventory Tracking"],
    stats: "98% client satisfaction",
    image: "/Images/salon.png",
    path: "/products/salon-software"
  },
  {
    id: 2,
    title: "Restaurant Software",
    description:
      "Optimize orders, table management, and kitchen operations with intelligent POS and inventory solutions.",
    icon: UtensilsCrossed,
    features: ["POS System", "Menu Management", "Kitchen Display"],
    stats: "40% faster service",
    image: "/Images/restaurant-soft.png",
    path: "/products/restaurant-software"
  },
  {
    id: 3,
    title: "E-commerce Solution",
    description:
      "Build powerful online stores with seamless payment integration, inventory sync, and customer analytics.",
    icon: ShoppingCart,
    features: ["Store Builder", "Payment Gateway", "Analytics Dashboard"],
    stats: "3x conversion growth",
    image: "/Images/ecommerce.png",
    path: "/products/ecommerce"
  },
];

export default function ProductsPage() {
  const productsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToProduct = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: BG }}>
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
        <div className="absolute inset-0" style={{ backgroundColor: `${PRIMARY}99` }}></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center w-full px-4 sm:px-6 py-20">
          <div className="max-w-4xl">
            {/* Trust Badge */}
           

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
              style={{ color: BG }}
            >
              Empower Your Business with
              <br />
              <span style={{ color: YELLOW }}>Bytesolve</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-2xl text-lg mb-8 leading-relaxed mx-auto"
              style={{ color: LIGHT_GRAY }}
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
                className="group px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl active:scale-95"
                style={{ 
                  backgroundColor: ACCENT,
                  boxShadow: `0 10px 30px ${ACCENT}40`
                }}
              >
                View Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center" style={{ color: LIGHT_GRAY }}>
            <span className="text-sm mb-1">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section 
        ref={productsRef}
        className="relative w-full py-16 border-t"
        style={{ 
          backgroundColor: LIGHT_GRAY,
          borderColor: `${DARK_GRAY}20`
        }}
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
                  className="w-full max-w-md object-cover rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/400x300/${PRIMARY.substring(1)}/ffffff?text=${encodeURIComponent(product.title)}`;
                  }}
                />
                {/* Decorative glow */}
                <div 
                  className="absolute inset-0 blur-3xl -z-10 opacity-30"
                  style={{ 
                    background: `linear-gradient(135deg, ${PRIMARY}20, ${ACCENT}20)`
                  }}
                />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl sm:text-4xl font-bold mb-4"
                  style={{ color: DARK_GRAY }}
                >
                  {product.title}
                </motion.h3>
                <p 
                  className="mb-6 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
                  style={{ color: DARK_GRAY }}
                >
                  {product.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-center lg:justify-start gap-3"
                      style={{ color: DARK_GRAY }}
                    >
                      <svg
                        className="w-5 h-5"
                        style={{ color: ACCENT }}
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

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigateToProduct(product.path)}
                    className="px-8 py-3 rounded-xl font-semibold text-white text-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                    style={{
                      backgroundColor: ACCENT,
                      boxShadow: `0 6px 20px ${ACCENT}40`
                    }}
                  >
                    Explore {product.title} →
                  </motion.button>
                  
                  <div 
                    className="px-4 py-2 rounded-lg text-sm font-medium"
                    style={{ 
                      backgroundColor: `${YELLOW}20`,
                      color: DARK_GRAY
                    }}
                  >
                    {product.stats}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}