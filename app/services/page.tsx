"use client";
import { motion } from "framer-motion";
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

const PRIMARY = "#1e3a8a";
const ACCENT = "#b30101";
const BG = "#ffffff";
// const GRAY = "#64748b";
const LIGHT_GRAY = "#f8fafc";


const services = [
  { name: "Web Development", icon: <Code className="w-6 h-6" /> },
  { name: "App Development", icon: <Smartphone className="w-6 h-6" /> },
  { name: "UI UX Design", icon: <Palette className="w-6 h-6" /> },
  { name: "Digital Marketing", icon: <TrendingUp className="w-6 h-6" /> },
  { name: "Custom Software", icon: <Settings className="w-6 h-6" /> }, // 🧠 New service
  { name: "IT Consultation", icon: <Briefcase className="w-6 h-6" /> }, // 💼 New service
];

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
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/Videos/services.mp4" type="video/mp4" />
          Your browser does not support the video tag.
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
            Innovate with Bytesolve
          </h1>
          <p
            className="text-lg md:text-2xl max-w-2xl mx-auto mb-2"
            style={{
              color: LIGHT_GRAY,
              textShadow: `0 0 20px ${ACCENT}, 0 0 40px ${PRIMARY}`,
            }}
          >
            Transforming ideas into powerful digital solutions that drive
            business growth and create exceptional user experiences.
          </p>
        </motion.div>
      </section>

      <section className="relative bg-white py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE - Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: -80 }} // 👈 left se start karega
            whileInView={{ opacity: 1, x: 0 }} // 👈 smoothly aayega
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
