"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiOutlineCheck, HiOutlineShieldCheck } from "react-icons/hi";
import { FaRocket } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "نظام إدارة السنتر بالكامل للمعلم",
    "تطبيق خاص لطلابك",
    "إدارة الامتحانات والواجبات",
    "رفع الفيديوهات التعليمية",
    "متابعة الحضور والغياب",
    "تنظيم الحسابات والمدفوعات",
    "تنبيهات وإشعارات فورية",
    "تقارير وإحصائيات شاملة",
    "مراقبة حية للامتحانات",
    "صلاحيات للمساعدين",
    "السنة الأولى: صيانة ودعم فني مجاناً",
    "بعد السنة الأولى: صيانة سنوية بـ 1,500 فقط",
  ];

  return (
    <section id="pricing" className="relative py-16 bg-[#EAEFEF] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="w-[90%] max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF9B51]/10 px-5 py-2 rounded-full mb-4 border border-[#FF9B51]/20 shadow-sm">
            <span className="text-[#FF9B51] text-sm font-bold tracking-wider">
              الأسعار
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4 text-[#25343F]">
            نظام متكامل..{" "}
            <span className="text-[#FF9B51]">بدون اشتراكات شهرية</span>{" "}
            متعبة!
          </h2>
          <p className="text-[#25343F]/80 text-base max-w-2xl mx-auto font-medium">
            ادفع مرة واحدة فقط واستمتع بامتلاك النظام مدى الحياة
          </p>
        </motion.div>

        {/* Pricing Card - Horizontal Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative w-full"
        >
          {/* Card Container */}
          <div className="bg-white rounded-3xl border border-[#BFC9D1] shadow-2xl overflow-hidden relative transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,155,81,0.25)] hover:border-[#FF9B51]/50">
            
            {/* Badge Header */}
            <div className="bg-[#25343F] py-3 text-center">
              <span className="text-white font-bold text-sm flex items-center justify-center gap-2">
                <MdCelebration className="w-5 h-5 text-[#FF9B51]" /> عرض حصري - الباقة الشاملة
              </span>
            </div>

            {/* Horizontal Content: Price Left + Features Right */}
            <div className="flex flex-col lg:flex-row">
              
              {/* Right Side (RTL) - Price & CTA */}
              <div className="lg:w-[38%] bg-gradient-to-bl from-[#25343F] to-[#1a2730] flex flex-col items-center justify-center py-10 px-6 sm:px-10 text-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="flex items-baseline justify-center gap-2 mb-3">
                    <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                      12,000
                    </span>
                    <span className="text-2xl text-[#FF9B51] font-bold">
                      جنيه
                    </span>
                  </div>
                  <div className="inline-flex items-center justify-center gap-2 bg-white/10 px-5 py-1.5 rounded-full border border-white/20 mb-6">
                    <span className="text-white/90 text-xs font-bold">
                      تُدفع لمرة واحدة فقط / مدى الحياة
                    </span>
                  </div>

                  {/* No hidden fees */}
                  <div className="mb-6 p-3 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-white/80 font-semibold text-xs flex items-center justify-center gap-2">
                      <HiOutlineShieldCheck className="w-5 h-5 text-[#FF9B51] flex-shrink-0" />
                      بدون رسوم مخفية أو اشتراكات شهرية
                    </p>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="bg-[#FF9B51] text-white px-8 py-3.5 rounded-2xl text-base font-bold shadow-lg shadow-[#FF9B51]/30 transition-all duration-300 w-full hover:bg-[#e88a3f] hover:-translate-y-0.5"
                  >
                    <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                      ابدأ رحلتك معنا الآن <FaRocket className="text-white" />
                    </span>
                  </button>
                </motion.div>
              </div>

              {/* Left Side (RTL) - Features */}
              <div className="lg:w-[62%] py-8 px-6 sm:px-10">
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-5">
                  {features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.04, duration: 0.4 }}
                      className="flex items-center gap-3 group cursor-default"
                    >
                      <div className="w-7 h-7 bg-[#FF9B51]/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#FF9B51]/20 transition-all duration-300 group-hover:bg-[#FF9B51] group-hover:scale-110 group-hover:shadow-md group-hover:shadow-[#FF9B51]/30">
                        <HiOutlineCheck className="w-4 h-4 text-[#FF9B51] stroke-2 transition-transform duration-300 group-hover:text-white group-hover:-rotate-12 group-hover:scale-110" />
                      </div>
                      <span className="text-[#25343F] text-sm font-semibold transition-colors duration-300 group-hover:text-[#FF9B51]">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
