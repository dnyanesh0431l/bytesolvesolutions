"use client";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Share2,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const COLORS = {
  PRIMARY: "#1e3a8a",
  ACCENT: "#b30101",
  BG: "#ffffff",
  YELLOW: "#fbbf24",
  LIGHT_GRAY: "#f8fafc",
  DARK_GRAY: "#334155",
};

export default function SalonBytePage() {
  const [activeTab, setActiveTab] = useState("customer");
  const [currentSlide, setCurrentSlide] = useState(0);

  const customerImages = Array.from(
    { length: 18 },
    (_, i) => `/Images/Salon/App/${i + 1}.jpg`
  );
  const adminImages = Array.from(
    { length: 13 },
    (_, i) => `/Images/Salon/AdminPanel/${i + 1}.png`
  );

  const getCurrentImages = () => {
    return activeTab === "admin" ? adminImages : customerImages;
  };

  const images = getCurrentImages();

  useEffect(() => {
    setCurrentSlide(0);
  }, [activeTab]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.BG }}>
      {/* Hero Section */}
      <section
        className="relative py-24 px-4 text-center overflow-hidden"
        style={{ backgroundColor: COLORS.PRIMARY }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div
            className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ backgroundColor: COLORS.ACCENT, color: COLORS.BG }}
          >
            Powered by ByteSolve Solutions
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ color: COLORS.BG }}
          >
            SalonByte
          </h1>
          <p
            className="text-2xl md:text-3xl mb-8 font-semibold"
            style={{ color: COLORS.YELLOW }}
          >
            One Software. Complete Salon Control.
          </p>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ color: COLORS.BG, opacity: 0.9 }}
          >
            Transform your salon with intelligent automation. Manage
            appointments, staff, billing, inventory, and grow your business with
            integrated digital marketing – all in one powerful platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: COLORS.ACCENT, color: COLORS.BG }}
            >
              Start Free Trial
            </button>
            <button
              className="px-8 py-4 rounded-lg font-bold text-lg border-2 transition-transform hover:scale-105"
              style={{ borderColor: COLORS.BG, color: COLORS.BG }}
            >
              Book Demo
            </button>
          </div>
        </div>
      </section>

      {/* Apps Showcase Section */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: COLORS.LIGHT_GRAY }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: COLORS.PRIMARY }}
            >
              Complete Salon Management Suite
            </h2>
            <p className="text-xl" style={{ color: COLORS.DARK_GRAY }}>
              Three powerful platforms working together seamlessly
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12 gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab("customer")}
              className={`px-8 py-4 font-bold rounded-lg transition-all ${
                activeTab === "customer"
                  ? "shadow-lg transform scale-105"
                  : "hover:scale-105"
              }`}
              style={{
                backgroundColor:
                  activeTab === "customer" ? COLORS.ACCENT : COLORS.BG,
                color: activeTab === "customer" ? COLORS.BG : COLORS.DARK_GRAY,
              }}
            >
              <Smartphone className="inline mr-2" size={20} />
              Customer App
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`px-8 py-4 font-bold rounded-lg transition-all ${
                activeTab === "admin"
                  ? "shadow-lg transform scale-105"
                  : "hover:scale-105"
              }`}
              style={{
                backgroundColor:
                  activeTab === "admin" ? COLORS.ACCENT : COLORS.BG,
                color: activeTab === "admin" ? COLORS.BG : COLORS.DARK_GRAY,
              }}
            >
              <Monitor className="inline mr-2" size={20} />
              Admin Panel
            </button>
            <button
              onClick={() => setActiveTab("staff")}
              className={`px-8 py-4 font-bold rounded-lg transition-all ${
                activeTab === "staff"
                  ? "shadow-lg transform scale-105"
                  : "hover:scale-105"
              }`}
              style={{
                backgroundColor:
                  activeTab === "staff" ? COLORS.ACCENT : COLORS.BG,
                color: activeTab === "staff" ? COLORS.BG : COLORS.DARK_GRAY,
              }}
            >
              <Smartphone className="inline mr-2" size={20} />
              Staff App
            </button>
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Features List */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {activeTab === "customer" && (
                <div>
                  <h3
                    className="text-3xl font-bold mb-8"
                    style={{ color: COLORS.PRIMARY }}
                  >
                    📱 Customer Mobile App
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Branded mobile app with your salon's identity",
                      "Browse services & choose preferred staff members",
                      "Real-time appointment booking with instant confirmation",
                      "View complete booking history & upcoming appointments",
                      "Personalized customer profiles & preferences",
                      "Push notifications for bookings & offers",
                      "Completely customizable to your brand",
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start p-3 rounded-lg transition-colors hover:bg-gray-50"
                      >
                        <Check
                          size={24}
                          className="mr-3 flex-shrink-0 mt-1"
                          style={{ color: COLORS.ACCENT }}
                        />
                        <span
                          className="text-lg"
                          style={{ color: COLORS.DARK_GRAY }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "admin" && (
                <div>
                  <h3
                    className="text-3xl font-bold mb-8"
                    style={{ color: COLORS.PRIMARY }}
                  >
                    💻 Admin Web Panel
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Comprehensive dashboard with sales & analytics",
                      "Complete billing & invoice management system",
                      "Staff management with attendance & role-based access",
                      "Inventory tracking with low stock alerts",
                      "Full website content management",
                      "Appointment slots & booking management",
                      "Services & pricing management",
                      "Automated salary & payroll processing",
                      "Real-time updates across all platforms",
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start p-3 rounded-lg transition-colors hover:bg-gray-50"
                      >
                        <Check
                          size={24}
                          className="mr-3 flex-shrink-0 mt-1"
                          style={{ color: COLORS.ACCENT }}
                        />
                        <span
                          className="text-lg"
                          style={{ color: COLORS.DARK_GRAY }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "staff" && (
                <div>
                  <h3
                    className="text-3xl font-bold mb-8"
                    style={{ color: COLORS.PRIMARY }}
                  >
                    📱 Staff Mobile App
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Personal dashboard with bookings & revenue insights",
                      "View & manage attendance records by month",
                      "Real-time notifications for bookings & updates",
                      "Secure login with password recovery",
                      "Inventory management (permission-based)",
                      "View assigned appointments & schedules",
                      "Services management (permission-based)",
                      "Access salary & payroll information",
                      "Role-based access control for security",
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start p-3 rounded-lg transition-colors hover:bg-gray-50"
                      >
                        <Check
                          size={24}
                          className="mr-3 flex-shrink-0 mt-1"
                          style={{ color: COLORS.ACCENT }}
                        />
                        <span
                          className="text-lg"
                          style={{ color: COLORS.DARK_GRAY }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Image Slider */}
            <div className="relative">
              <div
                className={`relative mx-auto ${
                  activeTab === "admin" ? "max-w-4xl" : "max-w-sm"
                }`}
              >
                {/* Device Frame */}
                <div
                  className={`relative  ${
                    activeTab === "admin" ? "aspect-video" : "aspect-[9/19] h-120"
                  } rounded-2xl overflow-hidden shadow-2xl ${
                    activeTab === "admin" ? "bg-gray-900 p-3" : "bg-black p-2"
                  }`}
                >
                  {/* Notch for mobile */}
                  {activeTab !== "admin" && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-10"></div>
                  )}

                  {/* Screen */}
                  <div
                    className={`relative w-full h-full ${
                      activeTab === "admin" ? "rounded-lg" : "rounded-xl"
                    } overflow-hidden bg-white`}
                  >
                    <Image
                      src={images[currentSlide]}
                      alt={`${activeTab} screenshot`}
                      fill
                      className="object-cover"
                      priority={currentSlide === 0}
                    />
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                  style={{ backgroundColor: COLORS.ACCENT }}
                >
                  <ChevronLeft size={24} style={{ color: COLORS.BG }} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                  style={{ backgroundColor: COLORS.ACCENT }}
                >
                  <ChevronRight size={24} style={{ color: COLORS.BG }} />
                </button>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === idx ? "w-8" : "w-2"
                      }`}
                      style={{
                        backgroundColor:
                          currentSlide === idx
                            ? COLORS.ACCENT
                            : COLORS.DARK_GRAY,
                        opacity: currentSlide === idx ? 1 : 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: COLORS.PRIMARY }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ backgroundColor: COLORS.ACCENT, color: COLORS.BG }}
            >
              NEW FEATURE
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: COLORS.BG }}
            >
              Digital Marketing for Growth
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: COLORS.BG, opacity: 0.9 }}
            >
              Grow your salon business with integrated digital marketing tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Social Media Management */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transition-transform hover:scale-105">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: COLORS.ACCENT }}
              >
                <Share2 size={32} style={{ color: COLORS.BG }} />
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: COLORS.PRIMARY }}
              >
                Social Media Management
              </h3>
              <p className="text-lg mb-6" style={{ color: COLORS.DARK_GRAY }}>
                Engage with customers and grow your online presence effortlessly
              </p>
              <div className="space-y-3">
                {[
                  "Schedule posts across all platforms",
                  "Automated customer engagement",
                  "Share before/after transformations",
                  "Promote special offers & packages",
                  "Track engagement & reach analytics",
                  "Respond to reviews & messages",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check
                      size={20}
                      className="mr-2 flex-shrink-0 mt-1"
                      style={{ color: COLORS.ACCENT }}
                    />
                    <span style={{ color: COLORS.DARK_GRAY }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Marketing */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transition-transform hover:scale-105">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: COLORS.ACCENT }}
              >
                <TrendingUp size={32} style={{ color: COLORS.BG }} />
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: COLORS.PRIMARY }}
              >
                Growth Marketing Tools
              </h3>
              <p className="text-lg mb-6" style={{ color: COLORS.DARK_GRAY }}>
                Data-driven strategies to attract and retain more customers
              </p>
              <div className="space-y-3">
                {[
                  "Automated email marketing campaigns",
                  "SMS notifications for appointments & offers",
                  "Customer loyalty & rewards programs",
                  "Referral program management",
                  "Birthday & anniversary specials",
                  "Performance analytics & insights",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check
                      size={20}
                      className="mr-2 flex-shrink-0 mt-1"
                      style={{ color: COLORS.ACCENT }}
                    />
                    <span style={{ color: COLORS.DARK_GRAY }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              className="px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: COLORS.YELLOW, color: COLORS.PRIMARY }}
            >
              Learn More About Marketing Features
            </button>
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ color: COLORS.PRIMARY }}
          >
            Why Salons Choose SalonByte
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Boost Sales by 40%",
                description:
                  "Personalized customer profiles, automated marketing, and loyalty programs drive repeat business and higher revenue.",
              },
              {
                title: "Save 15+ Hours/Week",
                description:
                  "Automated booking, billing, payroll, and notifications eliminate manual tasks, letting you focus on customers.",
              },
              {
                title: "Happy, Efficient Team",
                description:
                  "Staff manage their schedules, attendance, and earnings through mobile app with role-based permissions.",
              },
              {
                title: "Real-Time Updates",
                description:
                  "Stay connected instantly. Bookings, cancellations, inventory alerts – everyone knows what's happening, when.",
              },
              {
                title: "Scales with You",
                description:
                  "From single salon to multi-location chain, the system grows with your business needs.",
              },
              {
                title: "Bank-Level Security",
                description:
                  "Firebase authentication, encrypted data, and secure cloud storage protect your business and customer information.",
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl transition-all hover:shadow-2xl hover:transform hover:scale-105"
                style={{
                  backgroundColor:
                    index % 2 === 0 ? COLORS.LIGHT_GRAY : COLORS.BG,
                  border: `2px solid ${COLORS.LIGHT_GRAY}`,
                }}
              >
                <h3
                  className="font-bold text-2xl mb-4"
                  style={{ color: COLORS.ACCENT }}
                >
                  {advantage.title}
                </h3>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: COLORS.DARK_GRAY }}
                >
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Process Section */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: COLORS.LIGHT_GRAY }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ color: COLORS.PRIMARY }}
          >
            Get Started in 3 Simple Steps
          </h2>
          <div className="relative">
            {/* Connection Line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-1 hidden md:block"
              style={{ backgroundColor: COLORS.ACCENT }}
            ></div>

            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Signup & Agreement",
                  time: "Day 1",
                  points: [
                    "Sign the Onboarding & SLA Document",
                    "We gather your functional & technical requirements",
                    "Initial setup: Database, hosting, authentication, notifications",
                    "Customization requirements documented and signed",
                  ],
                },
                {
                  step: "2",
                  title: "First Delivery",
                  time: "24-48 Hours",
                  points: [
                    "Basic working version of the complete software",
                    "Test Admin Panel, Customer App, and Staff App",
                    "Review initial features and provide feedback",
                    "Training session for your team",
                  ],
                },
                {
                  step: "3",
                  title: "Final Delivery & Launch",
                  time: "Within 1 Week",
                  points: [
                    "Fully tested and customized software delivered",
                    "All features: Appointments, Staff, Billing, Inventory, Payroll, Marketing",
                    "Complete documentation and training materials",
                    "Ongoing support and maintenance included",
                  ],
                },
              ].map((process, index) => (
                <div key={index} className="relative md:ml-16">
                  {/* Step Number Circle */}
                  <div
                    className="absolute -left-16 top-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl hidden md:flex"
                    style={{ backgroundColor: COLORS.ACCENT, color: COLORS.BG }}
                  >
                    {process.step}
                  </div>

                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <h3
                        className="text-2xl font-bold"
                        style={{ color: COLORS.PRIMARY }}
                      >
                        <span
                          className="md:hidden mr-2"
                          style={{ color: COLORS.ACCENT }}
                        >
                          Step {process.step}:
                        </span>
                        {process.title}
                      </h3>
                      <span
                        className="px-4 py-2 rounded-full text-sm font-semibold"
                        style={{
                          backgroundColor: COLORS.YELLOW,
                          color: COLORS.PRIMARY,
                        }}
                      >
                        {process.time}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {process.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start">
                          <Check
                            size={20}
                            className="mr-3 flex-shrink-0 mt-1"
                            style={{ color: COLORS.ACCENT }}
                          />
                          <span
                            className="text-lg"
                            style={{ color: COLORS.DARK_GRAY }}
                          >
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-4 text-center"
        style={{ backgroundColor: COLORS.PRIMARY }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: COLORS.BG }}
          >
            Ready to Transform Your Salon?
          </h2>
          <p
            className="text-xl mb-12"
            style={{ color: COLORS.BG, opacity: 0.9 }}
          >
            Join hundreds of salons already growing with SalonByte
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              className="px-10 py-5 rounded-lg font-bold text-xl transition-transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: COLORS.ACCENT, color: COLORS.BG }}
            >
              Start Free Trial Today
            </button>
            <button
              className="px-10 py-5 rounded-lg font-bold text-xl border-2 transition-transform hover:scale-105"
              style={{ borderColor: COLORS.BG, color: COLORS.BG }}
            >
              Schedule a Demo
            </button>
          </div>
          <p className="text-sm" style={{ color: COLORS.BG, opacity: 0.8 }}>
            No credit card required • Setup in 48 hours • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
