"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineArrowRight, HiOutlineChevronDown } from "react-icons/hi";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-gradient overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#25343F]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FF9B51]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#25343F]/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20 sm:pb-24 flex items-center justify-center min-h-[80vh]">
        <div className="flex flex-col items-center w-full">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center flex flex-col items-center w-full"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 glass-light px-5 py-2 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-[#FF9B51] rounded-full animate-pulse" />
              <span className="text-sm text-[#25343F]">
                منظومة متكاملة للمعلم والطالب
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[1.7rem] sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-[#25343F]"
            >
              منصة واحدة..
              <br />
              <span className="gradient-text">لوحة تحكم للمعلم وبوابة ذكية للطالب</span>
              <br />
              في نظام <span className="gradient-text">الحصة</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg text-[#25343F]/80 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto px-1 sm:px-0"
            >
              مرحباً بك في الدليل الشامل لجميع الميزات والخصائص المدمجة في منصة الحصة التعليمية (El7essa EduPlatform). تنقسم المنصة إلى شقين رئيسيين: لوحة تحكم المعلم (Teacher Portal) وبوابة الطالب (Student Portal).
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full px-4 sm:px-0"
            >
              <button
                onClick={() => handleScroll("#features")}
                className="w-full sm:w-auto bg-[#FF9B51] text-white px-5 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-bold shadow-xl shadow-[#FF9B51]/25 hover:bg-[#25343F] hover:shadow-[#25343F]/40 hover:text-[#FF9B51] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
              >
                <span className="whitespace-nowrap text-base sm:text-lg">استكشف مميزات النظام</span>
                <HiOutlineArrowRight className="w-5 h-5 rtl:rotate-180" />
              </button>

              <button
                onClick={() => handleScroll("#services")}
                className="w-full sm:w-auto glass-light text-[#25343F] px-8 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold hover:bg-[#BFC9D1]/10 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>اكتشف خدماتنا</span>
                <HiOutlineChevronDown className="w-5 h-5" />
              </button>
            </motion.div>

           
          </motion.div>
        </div>
      </div>


    </section>
  );
}
