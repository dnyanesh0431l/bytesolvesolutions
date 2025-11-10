"use client";

import {
  ArrowRight,
  CheckCircle,
  Globe,
  LucideIcon,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

const PRIMARY = "#1e3a8a";
const ACCENT = "#b30101";
const YELLOW = "#ffd261ff";
const LIGHT_GRAY = "#f8fafc";
const DARK_GRAY = "#334155";

interface ContactInfo {
  icon: LucideIcon; // Use LucideIcon type instead of any
  text: string;
  href?: string;
  label: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      text: "+91 878-867-6265",
      href: "tel:+918788676265",
      label: "Phone",
    },
    {
      icon: Mail,
      text: "contact@bytesolvesolutions.in",
      href: "mailto:contact@bytesolvesolutions.in",
      label: "Email",
    },
    {
      icon: MapPin,
      text: "Chhatrapati Sambhaji Nagar, Maharashtra, India",
      label: "Location",
    },
  ];

  const features = [
    { icon: Zap, text: "24hr Response Time" },
    { icon: Globe, text: "Global Solutions" },
    { icon: CheckCircle, text: "Expert Consultation" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsLoading(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="mt-16"
      style={{ backgroundColor: LIGHT_GRAY, minHeight: "100vh" }}
    >
      {/* Compact Hero with Overlay Pattern */}
      <div
        style={{
          background: `linear-gradient(135deg, ${PRIMARY} 0%, ${DARK_GRAY} 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background Pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.1,
            backgroundImage: `radial-gradient(circle at 20% 50%, ${YELLOW} 0%, transparent 50%), 
                           radial-gradient(circle at 80% 80%, ${ACCENT} 0%, transparent 50%)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <div
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
                style={{ backgroundColor: YELLOW, color: PRIMARY }}
              >
                ✦ Get In Touch
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
                Let Build Something{" "}
                <span style={{ color: YELLOW }}>Amazing</span>
              </h1>
              <p className="text-base opacity-90 mb-6 leading-relaxed">
                Transform your ideas into reality with ByteSolve Solutions. We
                are here to help you succeed.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 mb-6">
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <Icon size={16} />
                      {feature.text}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Compact Contact Cards in Hero */}
            <div className="grid gap-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    onClick={() => info.href && window.open(info.href, "_self")}
                    className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.95)",
                      backdropFilter: "blur(20px)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${YELLOW} 0%, ${YELLOW}dd 100%)`,
                      }}
                    >
                      <Icon size={20} color={PRIMARY} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-xs font-semibold mb-0.5 uppercase tracking-wide"
                        style={{ color: PRIMARY, opacity: 0.7 }}
                      >
                        {info.label}
                      </div>
                      <div
                        className="text-sm font-medium truncate"
                        style={{ color: DARK_GRAY }}
                      >
                        {info.text}
                      </div>
                    </div>
                    {info.href && (
                      <ArrowRight size={16} style={{ color: ACCENT }} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Compact Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Form - 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b" style={{ borderColor: LIGHT_GRAY }}>
                <h2
                  className="text-2xl font-bold flex items-center gap-2"
                  style={{ color: PRIMARY }}
                >
                  <MessageSquare size={24} />
                  Send Message
                </h2>
                <p
                  className="text-sm mt-1"
                  style={{ color: DARK_GRAY, opacity: 0.7 }}
                >
                  Fill the form and we will respond within 24 hours
                </p>
              </div>

              {submitted && (
                <div
                  className="mx-6 mt-6 p-3 rounded-lg flex items-center gap-3"
                  style={{
                    backgroundColor: "#10b98120",
                    border: `1px solid #10b981`,
                  }}
                >
                  <CheckCircle size={20} style={{ color: "#10b981" }} />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#10b981" }}
                  >
                    Message sent successfully! We will get back to you soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full p-3 pr-10 border-2 rounded-xl text-sm outline-none transition-all"
                      style={{
                        borderColor:
                          focusedField === "name" ? PRIMARY : LIGHT_GRAY,
                        backgroundColor:
                          focusedField === "name" ? `${PRIMARY}05` : "white",
                      }}
                    />
                    <div
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold"
                      style={{ color: ACCENT }}
                    >
                      *
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full p-3 pr-10 border-2 rounded-xl text-sm outline-none transition-all"
                      style={{
                        borderColor:
                          focusedField === "email" ? PRIMARY : LIGHT_GRAY,
                        backgroundColor:
                          focusedField === "email" ? `${PRIMARY}05` : "white",
                      }}
                    />
                    <div
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold"
                      style={{ color: ACCENT }}
                    >
                      *
                    </div>
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full p-3 border-2 rounded-xl text-sm outline-none transition-all"
                      style={{
                        borderColor:
                          focusedField === "phone" ? PRIMARY : LIGHT_GRAY,
                        backgroundColor:
                          focusedField === "phone" ? `${PRIMARY}05` : "white",
                      }}
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full p-3 pr-10 border-2 rounded-xl text-sm outline-none transition-all"
                      style={{
                        borderColor:
                          focusedField === "subject" ? PRIMARY : LIGHT_GRAY,
                        backgroundColor:
                          focusedField === "subject" ? `${PRIMARY}05` : "white",
                      }}
                    />
                    <div
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold"
                      style={{ color: ACCENT }}
                    >
                      *
                    </div>
                  </div>
                </div>

                <div className="relative mb-4">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={4}
                    className="w-full p-3 pr-10 border-2 rounded-xl text-sm outline-none transition-all resize-y"
                    style={{
                      borderColor:
                        focusedField === "message" ? PRIMARY : LIGHT_GRAY,
                      backgroundColor:
                        focusedField === "message" ? `${PRIMARY}05` : "white",
                    }}
                  />
                  <div
                    className="absolute right-3 top-3 text-xs font-bold"
                    style={{ color: ACCENT }}
                  >
                    *
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full p-3.5 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  style={{ backgroundColor: ACCENT }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      transform: "translateX(-100%)",
                      animation: isLoading ? "none" : "",
                    }}
                  />
                  <Send size={18} />
                  {isLoading ? "sending..." : "send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Quick Response - Compact */}
            <div
              className="rounded-2xl shadow-lg p-5 text-white relative overflow-hidden"
              style={{ backgroundColor: PRIMARY }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full"
                style={{
                  backgroundColor: YELLOW,
                  opacity: 0.1,
                  transform: "translate(30%, -30%)",
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Zap size={20} strokeWidth={2.5} />
                  <h3 className="text-lg font-bold">Quick Response</h3>
                </div>
                <p className="text-sm leading-relaxed opacity-90 mb-4">
                  We respond within 24 hours on business days. For urgent
                  matters, call us directly.
                </p>
                <div
                  className="p-3 rounded-lg text-sm"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                    borderLeft: `3px solid ${YELLOW}`,
                  }}
                >
                  <div className="font-bold mb-1">Need immediate help?</div>
                  <div className="opacity-90">📞 +91 878-867-6265</div>
                  <div className="opacity-90">📞 +91 915-886-9707</div>
                </div>
              </div>
            </div>

            {/* Why Choose Us - New Compact Section */}
            <div
              className="rounded-2xl shadow-lg p-5"
              style={{
                background: `linear-gradient(135deg, ${YELLOW}20 0%, ${YELLOW}10 100%)`,
                border: `2px solid ${YELLOW}`,
              }}
            >
              <h3
                className="text-lg font-bold mb-3 flex items-center gap-2"
                style={{ color: PRIMARY }}
              >
                <CheckCircle size={20} />
                Why Choose Us?
              </h3>
              <div className="space-y-2 text-sm" style={{ color: DARK_GRAY }}>
                <div className="flex items-start gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span className="leading-relaxed">
                    Expert team with 10+ years experience
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span className="leading-relaxed">
                    100+ successful projects delivered
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span className="leading-relaxed">
                    24/7 dedicated support available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
