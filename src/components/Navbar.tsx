"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX, HiOutlineArrowLeft } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#features", label: "مميزات النظام" },
  { href: "#impact", label: "الفرق الذي نصنعه" },
  { href: "#pricing", label: "الأسعار" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Use a small timeout to allow the mobile menu to start closing before scrolling
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "pt-4 px-4 sm:px-6 lg:px-8" : "pt-0 px-0"
      }`}
    >
      <div
        className={`w-full mx-auto transition-all duration-500 relative z-50 ${
          isScrolled
            ? "max-w-7xl bg-white/90 backdrop-blur-md shadow-lg shadow-[#25343F]/5 py-3 px-4 sm:px-6 rounded-3xl border border-[#BFC9D1]/50"
            : "max-w-full bg-transparent py-4 px-4 sm:px-8 lg:px-12 rounded-none border-transparent shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick("#home")}
          >
            <Image
              src="/logo.png"
              alt="سيستمني"
              width={45}
              height={45}
              className="rounded-xl border border-[#BFC9D1]/50 group-hover:opacity-80 transition-opacity"
              priority
            />
            <span className="text-xl font-black text-[#25343F] tracking-tight">
              سيستمني
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-[#EAEFEF]/60 p-1.5 rounded-[2rem] border border-[#BFC9D1]/40 shadow-inner">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 xl:px-4 py-2 text-sm font-bold whitespace-nowrap rounded-full transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-[#25343F] text-[#FF9B51] shadow-md transform scale-105"
                    : "text-[#25343F] hover:bg-[#BFC9D1]/40 hover:text-[#FF9B51]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden lg:flex items-center gap-2 bg-[#FF9B51] hover:bg-[#25343F] text-white px-4 xl:px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#FF9B51]/30 transition-all duration-300 group whitespace-nowrap shrink-0"
          >
            <span>تواصل معنا</span>
            <HiOutlineArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#25343F] hover:bg-[#EAEFEF] rounded-full transition-colors"
            aria-label="فتح القائمة"
          >
              {isMobileMenuOpen ? (
                <HiOutlineX className="w-6 h-6" />
              ) : (
                <HiOutlineMenu className="w-6 h-6" />
              )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 50% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 50% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 50% 0)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-[#EAEFEF]/95 backdrop-blur-3xl flex flex-col items-center justify-center h-[100dvh] w-full"
          >
            <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 w-full px-6">
              {navLinks.map((link, idx) => (
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05, duration: 0.5, ease: "easeOut" }}
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative text-3xl sm:text-4xl font-black transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[#FF9B51] scale-110"
                      : "text-[#25343F] hover:text-[#FF9B51]"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="active-mobile"
                      className="absolute -left-6 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#FF9B51] shadow-[0_0_12px_rgba(255,155,81,0.8)]"
                    />
                  )}
                </motion.button>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.05, duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-xs pt-8 sm:pt-12"
              >
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full bg-[#FF9B51] hover:bg-[#25343F] text-white px-8 py-4 sm:py-5 rounded-full text-xl font-bold shadow-2xl shadow-[#FF9B51]/30 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span>تواصل معنا</span>
                  <HiOutlineArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
