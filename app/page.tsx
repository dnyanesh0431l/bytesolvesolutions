"use client";
import { motion } from "framer-motion";
import { Code2, Sparkles, Zap, Shield, Cloud, Database, Cpu, Globe, CheckCircle, ArrowRight, Users, Target, Lightbulb } from "lucide-react";

const PRIMARY = "#1e3a8a";
const ACCENT = "#b30101";
const BG = "#ffffff";
const GRAY = "#64748b";
const LIGHT_GRAY = "#f8fafc";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function BytesolvePage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/Videos/glob.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${PRIMARY}aa 0%, ${BG}99 100%)`, mixBlendMode: "overlay" }}></div>
        
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4" style={{ color: BG, textShadow: `0 0 20px ${ACCENT}, 0 0 40px ${PRIMARY}` }}>
            Bytesolve Solutions
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-2" style={{ color: LIGHT_GRAY }}>
            Transforming Ideas into Digital Reality
          </p>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: LIGHT_GRAY }}>
            Cutting-edge software solutions that drive innovation and growth
          </p>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="mt-8 px-8 py-3 rounded-2xl font-semibold text-white shadow-lg" style={{ background: `linear-gradient(90deg, ${ACCENT}, ${PRIMARY})` }}>
            Start Your Journey
          </motion.button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6" style={{ background: LIGHT_GRAY }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: PRIMARY }}>
              Our Services
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: GRAY }}>
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code2, title: "Custom Software Development", desc: "Bespoke applications built with precision and scalability in mind" },
              { icon: Cloud, title: "Cloud Solutions", desc: "Seamless migration and optimization for cloud-native architectures" },
              { icon: Globe, title: "Web Development", desc: "Responsive, high-performance websites that captivate and convert" },
              { icon: Cpu, title: "AI & Machine Learning", desc: "Intelligent systems that learn and adapt to your business" },
              { icon: Shield, title: "Cybersecurity", desc: "Robust protection for your digital assets and infrastructure" },
              { icon: Database, title: "Data Analytics", desc: "Transform raw data into actionable business intelligence" }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -8, scale: 1.02 }} className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-opacity-100 transition-all duration-300" style={{ borderColor: ACCENT }}>
                <service.icon size={48} style={{ color: ACCENT }} className="mb-4" />
                <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY }}>{service.title}</h3>
                <p style={{ color: GRAY }}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-6" style={{ background: BG }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: PRIMARY }}>
              Featured Products
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: GRAY }}>
              Innovative solutions designed to accelerate your digital transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { name: "ByteFlow CRM", tagline: "Customer relationships, simplified", features: ["360° customer view", "Automated workflows", "Advanced analytics", "Mobile-first design"] },
              { name: "CloudSync Pro", tagline: "Data synchronization at scale", features: ["Real-time sync", "Multi-cloud support", "Zero downtime", "Enterprise security"] },
              { name: "AI Insights Platform", tagline: "Predictive intelligence for growth", features: ["ML-powered forecasting", "Custom dashboards", "API integration", "Automated reporting"] },
              { name: "SecureVault", tagline: "Next-gen data protection", features: ["End-to-end encryption", "Compliance ready", "Audit trails", "Role-based access"] }
            ].map((product, i) => (
              <motion.div key={i} variants={fadeInUp} className="relative overflow-hidden rounded-2xl p-8 shadow-xl" style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, ${ACCENT} 100%)` }}>
                <Sparkles className="absolute top-4 right-4 opacity-20" size={64} style={{ color: BG }} />
                <h3 className="text-3xl font-bold mb-2" style={{ color: BG }}>{product.name}</h3>
                <p className="text-lg mb-6 opacity-90" style={{ color: LIGHT_GRAY }}>{product.tagline}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2" style={{ color: BG }}>
                      <CheckCircle size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button whileHover={{ scale: 1.05 }} className="mt-6 px-6 py-2 bg-white rounded-xl font-semibold flex items-center gap-2" style={{ color: PRIMARY }}>
                  Learn More <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6" style={{ background: LIGHT_GRAY }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: PRIMARY }}>
              Our Process
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: GRAY }}>
              A proven methodology that delivers results every time
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 hidden lg:block" style={{ background: `linear-gradient(180deg, ${ACCENT}, ${PRIMARY})` }}></div>
            
            {[
              { icon: Lightbulb, title: "Discovery & Planning", desc: "We dive deep into your vision, goals, and challenges to craft a strategic roadmap" },
              { icon: Users, title: "Design & Prototype", desc: "Collaborative design sessions bring your ideas to life with interactive prototypes" },
              { icon: Code2, title: "Development & Testing", desc: "Agile development sprints with continuous integration and rigorous quality assurance" },
              { icon: Zap, title: "Deployment & Launch", desc: "Smooth rollout with comprehensive training and support for your team" },
              { icon: Target, title: "Optimize & Scale", desc: "Ongoing monitoring, optimization, and enhancement to maximize ROI" }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeInUp} className={`relative flex items-center gap-8 mb-12 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className={`w-full lg:w-5/12 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-3" style={{ color: PRIMARY }}>
                      {i % 2 === 0 ? <step.icon size={32} style={{ color: ACCENT }} /> : null}
                      <span>{step.title}</span>
                      {i % 2 !== 0 ? <step.icon size={32} style={{ color: ACCENT }} /> : null}
                    </h3>
                    <p style={{ color: GRAY }}>{step.desc}</p>
                  </div>
                </div>
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg" style={{ background: `linear-gradient(135deg, ${ACCENT}, ${PRIMARY})` }}>
                    {i + 1}
                  </div>
                </div>
                <div className="w-full lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technology Section */}
      <section className="py-24 px-6" style={{ background: PRIMARY }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: BG }}>
              Technology Stack
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: LIGHT_GRAY }}>
              Powered by the latest and most robust technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "TensorFlow", "PostgreSQL", "MongoDB", "GraphQL", "TypeScript", "Next.js"].map((tech, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.1, rotate: 2 }} className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl flex items-center justify-center text-center border border-white border-opacity-20">
                <span className="text-xl font-semibold" style={{ color: BG }}>{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6" style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, ${PRIMARY} 100%)` }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: BG }}>
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8" style={{ color: LIGHT_GRAY }}>
            Let&apos;s build something extraordinary together
          </p>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="px-10 py-4 bg-white rounded-2xl font-bold text-xl shadow-2xl" style={{ color: PRIMARY }}>
            Get Started Today
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}