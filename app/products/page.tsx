"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PRIMARY = "#1e3a8a";
const ACCENT = "#b30101";
const BG = "#ffffff";
const YELLOW = "#fbbf24";
const LIGHT_GRAY = "#f8fafc";
const DARK_GRAY = "#334155";

export default function ProductsPage() {
  const products = [
    {
      name: "Salon Software",
      description:
        "Simplify bookings, manage clients, and grow your beauty business effortlessly with a modern, powerful salon management system.",
      image:
        "https://images.unsplash.com/photo-1605540436563-6c3b8b79c1f3?auto=format&fit=crop&w=800&q=80",
      link: "/products/salon-software",
    },
    {
      name: "Restaurant Software",
      description:
        "Streamline orders, inventory, and staff operations — designed for speed, accuracy, and unmatched dining experience management.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      link: "/products/restaurant-software",
    },
    {
      name: "E-Commerce Solution",
      description:
        "Build your online store faster with a scalable, customizable, and performance-driven e-commerce platform.",
      image:
        "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=80",
      link: "/products/ecommerce-solution",
    },
  ];

  return (
    <div
      className="min-h-screen w-full py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: BG }}
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
          style={{
            color: PRIMARY,
          }}
        >
          Our Premium Solutions
        </h1>
        <p
          className="text-lg md:text-xl"
          style={{ color: DARK_GRAY }}
        >
          Explore innovative software crafted to elevate your business operations and customer experience.
        </p>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border transition-all duration-500 bg-white"
            style={{
              borderColor: LIGHT_GRAY,
            }}
          >
            {/* Product Image */}
            <div className="overflow-hidden h-56">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Product Content */}
            <div className="p-8 flex flex-col justify-between min-h-[250px]">
              <div>
                <h2
                  className="text-2xl font-bold mb-3 tracking-tight"
                  style={{ color: PRIMARY }}
                >
                  {product.name}
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: DARK_GRAY }}
                >
                  {product.description}
                </p>
              </div>

              <Link href={product.link}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 w-full py-3 rounded-xl font-semibold text-base transition-all duration-300"
                  style={{
                    background: ACCENT,
                    color: BG,
                    boxShadow: `0 6px 20px rgba(179,1,1,0.3)`,
                  }}
                >
                  Learn More →
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Accent Strip */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
        className="h-1 mt-20 rounded-full"
        style={{
          background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT}, ${YELLOW})`,
        }}
      />
    </div>
  );
}
