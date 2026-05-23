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
    <section id="pricing" className="relative py-24 bg-[#EAEFEF] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF9B51]/10 px-5 py-2 rounded-full mb-6 border border-[#FF9B51]/20 shadow-sm">
            <span className="text-[#FF9B51] text-sm font-bold tracking-wider">
              الأسعار
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-[#25343F]">
            نظام متكامل..{" "}
            <span className="text-[#FF9B51]">بدون اشتراكات شهرية</span>{" "}
            متعبة!
          </h2>
          <p className="text-[#BFC9D1] text-lg max-w-2xl mx-auto font-medium">
            ادفع مرة واحدة فقط واستمتع بامتلاك النظام مدى الحياة
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Card Container */}
          <div className="bg-white rounded-[2.5rem] border border-[#BFC9D1] shadow-2xl overflow-hidden relative transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,155,81,0.25)] hover:border-[#FF9B51]/50 hover:-translate-y-1">
            
            {/* Badge Header */}
            <div className="bg-[#25343F] py-4 text-center">
              <span className="text-white font-bold text-sm flex items-center justify-center gap-2">
                <MdCelebration className="w-5 h-5 text-[#FF9B51]" /> عرض حصري - الباقة الشاملة
              </span>
            </div>

            <div className="pt-16 pb-12 px-8 sm:px-12 md:px-16">
              {/* Price */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center mb-12"
              >
                <div className="flex items-baseline justify-center gap-3 mb-4">
                  <span className="text-7xl sm:text-8xl font-black text-[#25343F] tracking-tight">
                    12,000
                  </span>
                  <span className="text-3xl text-[#FF9B51] font-bold">
                    جنيه
                  </span>
                </div>
                <div className="inline-flex items-center justify-center gap-2 bg-[#FF9B51]/10 px-6 py-2 rounded-full border border-[#FF9B51]/20">
                  <span className="text-[#FF9B51] text-sm font-bold">
                    تُدفع لمرة واحدة فقط / مدى الحياة
                  </span>
                </div>
              </motion.div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-6 mb-12">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="w-8 h-8 bg-[#FF9B51]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#FF9B51]/20 transition-all duration-300 group-hover:bg-[#FF9B51] group-hover:scale-110 group-hover:shadow-md group-hover:shadow-[#FF9B51]/30">
                      <HiOutlineCheck className="w-5 h-5 text-[#FF9B51] stroke-2 transition-transform duration-300 group-hover:text-[#25343F] group-hover:-rotate-12 group-hover:scale-110" />
                    </div>
                    <span className="text-[#25343F] text-sm font-semibold transition-colors duration-300 group-hover:text-[#FF9B51]">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* No hidden fees notice */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-center mb-10 p-5 bg-[#EAEFEF]/50 rounded-2xl border border-[#BFC9D1]/40"
              >
                <p className="text-[#25343F] font-bold text-sm flex items-center justify-center gap-2">
                  <HiOutlineShieldCheck className="w-6 h-6 text-[#FF9B51]" />
                  بدون أي رسوم مخفية أخرى أو اشتراكات شهرية
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-center"
              >
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-[#FF9B51] text-white px-6 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold shadow-xl shadow-[#FF9B51]/20 transition-all duration-300 w-full sm:w-auto hover:bg-[#25343F] hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center gap-3 whitespace-nowrap">
                    ابدأ رحلتك معنا الآن <FaRocket className="text-white" />
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
