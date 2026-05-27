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
            <div className="flex flex-col lg:flex-row min-h-[500px]">
              
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
              <div className="lg:w-[65%] py-8 px-5 sm:px-8 lg:px-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-[#25343F] font-bold text-lg mb-6 border-r-4 border-[#FF9B51] pr-3 text-right">
                    المميزات المضمنة في النظام:
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {coreFeatures.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                        className="flex items-center gap-3 p-3 bg-[#EAEFEF]/30 border border-[#BFC9D1]/30 rounded-2xl hover:bg-white hover:border-[#FF9B51]/40 hover:shadow-[0_4px_20px_rgba(37,52,63,0.06)] transition-all duration-300 group cursor-default"
                      >
                        <div className="w-8.5 h-8.5 bg-white border border-[#BFC9D1]/50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 group-hover:bg-[#FF9B51] group-hover:border-[#FF9B51] group-hover:scale-105">
                          {feature.icon}
                        </div>
                        <span className="text-[#25343F] text-xs sm:text-sm font-bold transition-colors duration-300 group-hover:text-[#FF9B51] text-right">
                          {feature.title}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Special Support & Maintenance Highlight Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="mt-8 p-4 bg-[#FF9B51]/10 border border-[#FF9B51]/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden group/support"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9B51]/5 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center gap-3.5 text-right w-full sm:w-auto">
                    <div className="w-12 h-12 bg-[#FF9B51] rounded-xl flex items-center justify-center text-white shadow-md shadow-[#FF9B51]/20 flex-shrink-0 animate-pulse-slow">
                      <HiOutlineSupport className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[#25343F] font-bold text-sm sm:text-base leading-snug">
                        صيانة ودعم فني <span className="text-[#FF9B51] font-black underline decoration-2 underline-offset-4">مجاني بالكامل</span> طوال السنة الأولى!
                      </h4>
                      <p className="text-[#25343F]/75 text-xs sm:text-sm mt-0.5">
                        نضمن لك استقرار وسرعة نظامك دون أي أعباء إضافية.
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#25343F] text-white px-5 py-2.5 rounded-xl border border-white/10 shadow-lg flex-shrink-0 text-center w-full sm:w-auto relative group-hover/support:scale-105 transition-transform duration-300">
                    <span className="block text-[9px] text-[#FF9B51] font-extrabold tracking-wider uppercase mb-0.5">
                      بعد السنة الأولى
                    </span>
                    <span className="text-xs sm:text-sm font-black block whitespace-nowrap">
                      صيانة سنوية بـ <span className="text-base sm:text-lg text-[#FF9B51] font-black">1,500 جنيه</span> فقط!
                    </span>
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
