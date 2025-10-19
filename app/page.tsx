"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const PRIMARY = "#1e3a8a";
const ACCENT = "#b30101";
const BG = "#ffffff";
const LIGHT_GRAY = "#f8fafc";


export default function BytesolvePage() {
  const router = useRouter();

  return (
    <div className="w-full overflow-x-hidden mt-16">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/Videos/services-poster.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/Videos/glob.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${PRIMARY}aa 0%, ${BG}99 100%)`,
            mixBlendMode: "overlay",
          }}
        ></div>

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
            Bytesolve Solutions
          </h1>
          <p
            className="text-lg md:text-2xl max-w-2xl mx-auto mb-2"
            style={{ color: LIGHT_GRAY }}
          >
            Transforming Ideas into Digital Reality
          </p>
          <p
            className="text-base md:text-lg max-w-xl mx-auto"
            style={{ color: LIGHT_GRAY }}
          >
            Cutting-edge software solutions that drive innovation and growth
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/services")}
              className="group relative px-8 py-4 rounded-xl font-semibold text-white shadow-2xl overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${ACCENT}, ${PRIMARY})`,
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ background: "white" }}
              ></div>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/products")}
              className="group relative px-8 py-4 rounded-xl font-semibold shadow-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 cursor-pointer"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                border: `1px solid ${BG}`,
                color: BG,
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Products
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT}33, ${PRIMARY}33)`,
                }}
              ></div>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/about")}
              className="group relative px-8 py-4 rounded-xl font-semibold shadow-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 cursor-pointer"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                border: `1px solid ${BG}`,
                color: BG,
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                About Us
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT}33, ${PRIMARY}33)`,
                }}
              ></div>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
