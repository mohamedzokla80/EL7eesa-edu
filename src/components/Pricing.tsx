"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineDeviceMobile,
  HiOutlineClipboardList,
  HiOutlinePlay,
  HiOutlineUserGroup,
  HiOutlineCash,
  HiOutlineBell,
  HiOutlineChartBar,
  HiOutlineEye,
  HiOutlineUserAdd,
  HiOutlineSupport
} from "react-icons/hi";
import { FaRocket } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const coreFeatures = [
    { 
      title: "نظام إدارة السنتر بالكامل للمعلم", 
      icon: <HiOutlineSparkles className="w-5 h-5 text-[#FF9B51] transition-colors duration-300 group-hover:text-white" /> 
    },
    { 
      title: "تطبيق خاص ومتكامل لطلابك", 
      icon: <HiOutlineDeviceMobile className="w-5 h-5 text-[#FF9B51] transition-colors duration-300 group-hover:text-white" /> 
    },
    { 
      title: "إدارة كاملة للامتحانات والواجبات", 
      icon: <HiOutlineClipboardList className="w-5 h-5 text-[#FF9B51] transition-colors duration-300 group-hover:text-white" /> 
    },
    { 
      title: "رفع ومشاهدة الفيديوهات التعليمية", 
      icon: <HiOutlinePlay className="w-5 h-5 text-[#FF9B51] transition-colors duration-300 group-hover:text-white" /> 
    },
    { 
      title: "متابعة دقيقة للحضور والغياب", 
      icon: <HiOutlineUserGroup className="w-5 h-5 text-[#FF9B51] transition-colors duration-300 group-hover:text-white" /> 
    },
    { 
      title: "تنظيم ذكي للحسابات والمدفوعات", 
      icon: <HiOutlineCash className="w-5 h-5 text-[#FF9B51] transition-colors duration-300 group-hover:text-white" /> 
    },
    { 
      title: "تنبيهات وإشعارات فورية للطلاب", 
      icon: <HiOutlineBell className="w-5 h-5 text-[#FF9B51] transition-colors duration-300 group-hover:text-white" /> 
    },
    { 
      title: "تقارير وإحصائيات أداء شاملة", 
      icon: <HiOutlineChartBar className="w-5 h-5 text-[#FF9B51] transition-colors duration-300 group-hover:text-white" /> 
    },
    { 
      title: "مراقبة حية ومباشرة للامتحانات", 
      icon: <HiOutlineEye className="w-5 h-5 text-[#FF9B51] transition-colors duration-300 group-hover:text-white" /> 
    },
    { 
      title: "صلاحيات مخصصة للمساعدين", 
      icon: <HiOutlineUserAdd className="w-5 h-5 text-[#FF9B51] transition-colors duration-300 group-hover:text-white" /> 
    },
  ];

  return (
    <section id="pricing" className="relative py-16 bg-[#EAEFEF] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="w-[95%] max-w-7xl mx-auto relative z-10" ref={ref}>
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
              <div className="lg:w-[35%] bg-[#25343F] flex flex-col items-center justify-center py-12 px-6 sm:px-8 text-center border-b lg:border-b-0 lg:border-l border-[#BFC9D1]/20">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="w-full max-w-xs"
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
                  <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-white/85 font-semibold text-xs flex items-center justify-center gap-2 leading-relaxed">
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
              <div className="lg:w-[65%] py-12 px-6 sm:px-10 lg:px-12 flex flex-col justify-center relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-br from-[#FF9B51]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-tl from-[#25343F]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="relative z-10 text-center flex flex-col items-center"
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#FF9B51] to-[#e88a3f] rounded-[2rem] shadow-2xl shadow-[#FF9B51]/30 mb-8 transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500">
                    <HiOutlineSupport className="w-12 h-12 text-white" />
                  </div>
                  
                  {/* Headline */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#25343F] mb-5 leading-[1.4]">
                    استلم سيستم السنتر الخاص بك <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9B51] to-[#d67b36]">
                      جاهز ومستقر 100%
                    </span>
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#25343F]/75 text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-10">
                    نحن نهتم بالجانب التقني بالكامل. استمتع بسنة أولى من الاستضافة والدعم الفني المجاني بدون أي رسوم خفية، لتركز فقط على إدارة طلابك.
                  </p>

                  {/* Pricing Comparison */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-xl mx-auto">
                    
                    {/* First Year */}
                    <div className="bg-[#EAEFEF]/60 border border-[#BFC9D1]/50 px-6 py-5 rounded-3xl w-full sm:w-1/2 relative overflow-hidden group">
                      <span className="block text-[11px] font-bold text-[#BFC9D1] uppercase tracking-[0.15em] mb-2">السنة الأولى</span>
                      <span className="text-2xl font-black text-[#25343F]">مجاناً بالكامل</span>
                    </div>

                    {/* Arrow (Hidden on mobile) */}
                    <div className="hidden sm:flex items-center justify-center text-[#BFC9D1]">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    {/* Renewal */}
                    <div className="bg-[#25343F] border border-[#25343F] px-6 py-5 rounded-3xl shadow-xl shadow-[#25343F]/20 w-full sm:w-1/2 relative group overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                      <span className="block text-[11px] font-bold text-[#FF9B51] uppercase tracking-[0.15em] mb-2">التجديد السنوي (اختياري)</span>
                      <span className="text-2xl font-black text-white">1,500 <span className="text-sm font-medium text-white/70">جنيه فقط</span></span>
                    </div>

                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
