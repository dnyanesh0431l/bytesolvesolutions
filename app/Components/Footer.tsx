// "use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Instagram,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PRIMARY = "#1e3a8a";
const ACCENT = "#b30101";
const BG = "#ffffff";
const SNOW_WHITE = "#fafbfc";
const GRAY = "#64748b";
const LIGHT_GRAY = "#f1f5f9";
const DARK_GRAY = "#334155";
const BORDER_COLOR = "#e2e8f0";

export default function Footer() {
  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "App Development", href: "/services/app-development" },
      { label: "Custom Software ", href: "/services/custom-software" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "IT Consultation", href: "/services/it-consultation" },

    ],
    products: [
      { label: "Salon Software", href: "/products/salon-software" },
      { label: "Restaurant Software", href: "/products/restaurant-software" },
      { label: "E-commerce Solutions", href: "/products/ecommerce" },
    ],
    resources: [
      { label: "Blog", href: "/blogs" },
      // { label: "Case Studies", href: "/case-studies" },
      // { label: "Documentation", href: "/docs" },
      // { label: "Support", href: "/support" },
    ],
  };

  const socialLinks = [
    // { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/byte.solve", label: "Instagram" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 878-867-6265", href: "tel:+918788676265" },
    { icon: Phone, text: "+91 915-886-9707", href: "tel:+919158869707" },

    { icon: Mail, text: "contact@bytesolvesolutions.in", href: "mailto:contact@bytesolvesolutions.in" },
    { icon: MapPin, text: "Chhatrapati Sambhaji Nagar, Maharashtra, India" },
  ];

  return (
    <footer 
      className="relative overflow-hidden"
      style={{ background: SNOW_WHITE }}
    >
      {/* Subtle Top Border */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${BORDER_COLOR} 50%, transparent 100%)`
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 w-fit group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-10 h-10"
              >
                <Image
                  src="/Images/Logo.png"
                  alt="ByteSolve Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <div className="flex flex-col leading-none">
                <span 
                  className="font-bold text-xl tracking-tight transition-colors"
                  style={{ color: PRIMARY }}
                >
                  ByteSolve
                </span>
                <span 
                  className="text-[9px] font-medium tracking-wider uppercase mt-0.5"
                  style={{ color: GRAY }}
                >
                  Software Solutions
                </span>
              </div>
            </Link>
            <p 
              className="text-sm mb-6 leading-relaxed font-medium" 
              style={{ color: DARK_GRAY }}
            >
              Crafting innovative digital solutions that transform businesses and drive growth in the modern world.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: LIGHT_GRAY }}
                  >
                    <item.icon size={14} style={{ color: ACCENT }} />
                  </div>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-sm font-medium hover:underline transition-colors pt-1.5"
                      style={{ color: DARK_GRAY }}
                      onMouseEnter={(e) => e.currentTarget.style.color = PRIMARY}
                      onMouseLeave={(e) => e.currentTarget.style.color = DARK_GRAY}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm font-medium pt-1.5" style={{ color: DARK_GRAY }}>
                      {item.text}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all shadow-sm"
                  style={{
                    background: BG,
                    color: PRIMARY,
                    border: `1px solid ${BORDER_COLOR}`,
                  }}
                  aria-label={social.label}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${ACCENT} 0%, ${PRIMARY} 100%)`;
                    e.currentTarget.style.color = BG;
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = BG;
                    e.currentTarget.style.color = PRIMARY;
                    e.currentTarget.style.borderColor = BORDER_COLOR;
                  }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 
              className="font-bold text-sm mb-4 tracking-wide" 
              style={{ color: PRIMARY }}
            >
              COMPANY
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link, idx) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link 
                    href={link.href}
                    className="text-sm font-medium hover:translate-x-1 inline-block transition-all"
                    style={{ color: DARK_GRAY }}
                    onMouseEnter={(e) => e.currentTarget.style.color = ACCENT}
                    onMouseLeave={(e) => e.currentTarget.style.color = DARK_GRAY}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 
              className="font-bold text-sm mb-4 tracking-wide" 
              style={{ color: PRIMARY }}
            >
              SERVICES
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link, idx) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link 
                    href={link.href}
                    className="text-sm font-medium hover:translate-x-1 inline-block transition-all"
                    style={{ color: DARK_GRAY }}
                    onMouseEnter={(e) => e.currentTarget.style.color = ACCENT}
                    onMouseLeave={(e) => e.currentTarget.style.color = DARK_GRAY}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 
              className="font-bold text-sm mb-4 tracking-wide" 
              style={{ color: PRIMARY }}
            >
              PRODUCTS
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link, idx) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link 
                    href={link.href}
                    className="text-sm font-medium hover:translate-x-1 inline-block transition-all"
                    style={{ color: DARK_GRAY }}
                    onMouseEnter={(e) => e.currentTarget.style.color = ACCENT}
                    onMouseLeave={(e) => e.currentTarget.style.color = DARK_GRAY}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 
              className="font-bold text-sm mb-4 tracking-wide" 
              style={{ color: PRIMARY }}
            >
              RESOURCES
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link, idx) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link 
                    href={link.href}
                    className="text-sm font-medium hover:translate-x-1 inline-block transition-all"
                    style={{ color: DARK_GRAY }}
                    onMouseEnter={(e) => e.currentTarget.style.color = ACCENT}
                    onMouseLeave={(e) => e.currentTarget.style.color = DARK_GRAY}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="py-6 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: BORDER_COLOR }}
        >
          <p 
            className="text-sm text-center md:text-left font-medium" 
            style={{ color: DARK_GRAY }}
          >
            © 2024 ByteSolve. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/privacy" 
              className="text-sm font-medium transition-colors"
              style={{ color: DARK_GRAY }}
              onMouseEnter={(e) => e.currentTarget.style.color = ACCENT}
              onMouseLeave={(e) => e.currentTarget.style.color = DARK_GRAY}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm font-medium transition-colors"
              style={{ color: DARK_GRAY }}
              onMouseEnter={(e) => e.currentTarget.style.color = ACCENT}
              onMouseLeave={(e) => e.currentTarget.style.color = DARK_GRAY}
            >
              Terms of Service
            </Link>
            <Link 
              href="/cookies" 
              className="text-sm font-medium transition-colors"
              style={{ color: DARK_GRAY }}
              onMouseEnter={(e) => e.currentTarget.style.color = ACCENT}
              onMouseLeave={(e) => e.currentTarget.style.color = DARK_GRAY}
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}