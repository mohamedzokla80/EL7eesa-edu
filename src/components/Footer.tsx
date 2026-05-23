"use client";

import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok, FaYoutube } from "react-icons/fa";
import { HiOutlineChevronLeft, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

const footerLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#features", label: "مميزات النظام" },
  { href: "#pricing", label: "الأسعار" },
  { href: "#contact", label: "تواصل معنا" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: <FaFacebook className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: <FaInstagram className="w-5 h-5" />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/201090039262",
    icon: <FaWhatsapp className="w-5 h-5" />,
  },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#EAEFEF] pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          
          {/* Right Box (Brand Info) - Conceptually on the right in RTL */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-[3] bg-[#25343F] rounded-[2.5rem] p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden shadow-sm"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9B51]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF9B51]/5 rounded-full blur-3xl" />
            
            <div className="flex flex-col justify-center items-center md:items-start relative z-10 h-full">
              <div className="text-center md:text-right">
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                  سيستمني
                </h2>
                <p className="text-white/80 text-base md:text-lg max-w-lg leading-relaxed">
                  النظام الأسهل لإدارة السناتر التعليمية. وفر وقتك ومجهودك وركز
                  على ما تجيده حقاً: التدريس والشرح.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Left Box (Links & Contact) - Conceptually on the left in RTL */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex-[2] bg-white border border-[#BFC9D1]/50 rounded-[2.5rem] p-6 lg:p-8 flex flex-col justify-center shadow-sm"
          >
            <div className="mb-4 w-full">
              <h3 className="text-[#25343F] font-bold mb-4 text-sm text-right">روابط التنقل السريع</h3>
              <div className="flex flex-wrap gap-3">
                {footerLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="bg-[#EAEFEF] hover:bg-[#FF9B51] border border-transparent hover:border-[#FF9B51] rounded-full py-2 px-4 text-[#25343F] hover:text-[#25343F] text-sm font-bold transition-all duration-300 text-center whitespace-nowrap flex-grow sm:flex-grow-0"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-2 pt-4 border-t border-[#BFC9D1]/50">
              <h3 className="text-[#25343F] font-bold mb-3 text-xs">تواصل معنا</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:01090039262"
                  className="flex items-center gap-2 group transition-colors duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FF9B51]/10 flex items-center justify-center group-hover:bg-[#FF9B51] transition-all duration-300">
                    <HiOutlinePhone className="w-3 h-3 text-[#FF9B51] group-hover:text-[#25343F] transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-bold text-[#25343F] group-hover:text-[#FF9B51] transition-colors duration-300" dir="ltr">01090039262</span>
                </a>
                <a
                  href="https://wa.me/201090039262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group transition-colors duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-[#128C7E]/10 flex items-center justify-center group-hover:bg-[#128C7E] transition-all duration-300">
                    <FaWhatsapp className="w-3 h-3 text-[#128C7E] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-bold text-[#25343F] group-hover:text-[#128C7E] transition-colors duration-300">واتساب مباشر</span>
                </a>
                <a
                  href="mailto:systemny.devmark26@gmail.com"
                  className="flex items-center gap-2 group transition-colors duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FF9B51]/10 flex items-center justify-center group-hover:bg-[#FF9B51] transition-all duration-300">
                    <HiOutlineMail className="w-3 h-3 text-[#FF9B51] group-hover:text-[#25343F] transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-bold text-[#25343F] group-hover:text-[#FF9B51] transition-colors duration-300 truncate" dir="ltr">
                    systemny.devmark26@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="bg-white border border-[#BFC9D1]/50 rounded-[2rem] p-4 px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-6 shadow-sm"
        >
          
          {/* Logo / Brand */}
          <button 
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src="/logo.png"
              alt="سيستمني"
              width={36}
              height={36}
              className="rounded-xl border border-[#BFC9D1]/50"
            />
            <span className="font-bold text-[#25343F] tracking-wide text-lg">سيستمني</span>
          </button>

          {/* EST Date (Center) */}
          <div className="text-[#BFC9D1] font-bold tracking-[0.2em] text-xs uppercase">
            DevSpark. 2026
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-2 flex-row-reverse">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-full bg-[#EAEFEF] hover:bg-[#25343F] hover:text-[#FF9B51] text-[#25343F] flex items-center justify-center transition-all duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
        </motion.div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm font-medium text-[#25343F]/80 flex items-center justify-center gap-1"
        >
          <span>جميع الحقوق محفوظة لـ سيستمني</span>
          <span dir="ltr">© 2026</span>
        </motion.div>

      </div>
    </footer>
  );
}
