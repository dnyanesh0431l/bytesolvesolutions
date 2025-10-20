"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      name: "Salon Software",
      description:
        "Simplify bookings, manage clients, track sales, and grow your beauty business with our powerful salon management solution.",
      image:
        "https://images.unsplash.com/photo-1605540436563-6c3b8b79c1f3?auto=format&fit=crop&w=800&q=80",
      link: "/products/salon-software",
      color: "from-pink-500 to-rose-400",
    },
    {
      name: "Restaurant Software",
      description:
        "All-in-one restaurant system — manage menu, inventory, staff, and orders effortlessly with real-time analytics.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      link: "/products/restaurant-software",
      color: "from-amber-500 to-orange-400",
    },
    {
      name: "E-Commerce Solution",
      description:
        "Launch your online store in days, not months. Fast, scalable, and optimized for sales with integrated marketing tools.",
      image:
        "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=80",
      link: "/products/ecommerce-solution",
      color: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#030712] text-white py-20 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Our Products
        </h1>
        <p className="text-white/70 text-lg md:text-xl">
          Explore our innovative digital solutions designed to empower your business and enhance performance.
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
            className="group relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden h-56">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-[250px]">
              <div>
                <h2 className="text-2xl font-bold mb-3">{product.name}</h2>
                <p className="text-white/70 text-sm md:text-base">{product.description}</p>
              </div>

              <Link href={product.link}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`mt-6 w-full py-3 rounded-xl font-semibold text-white text-base bg-gradient-to-r ${product.color} shadow-lg shadow-black/30 transition-all`}
                >
                  Learn More →
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
