"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiOutlineBell, HiOutlineVideoCamera, HiOutlineAcademicCap, HiOutlineEye, HiOutlineChartBar, HiOutlineUsers } from "react-icons/hi";

const features = [
  {
    id: 1,
    icon: <HiOutlineVideoCamera className="w-8 h-8" />,
    title: "دعم الفيديوهات التعليمية",
    description: "منصة متكاملة لرفع حصصك المسجلة وتقسيمها إلى كورسات ومحاضرات منظمة، مع حماية كاملة للمحتوى لضمان عدم تسريبه. ليراجعها الطالب في أي وقت بسهولة وبدون تعقيد.",
    className: "md:col-span-2 bg-[#25343F] text-[#EAEFEF] border-transparent overflow-hidden relative",
    iconBg: "bg-[#FF9B51] text-[#25343F]",
    textColor: "text-[#BFC9D1]",
    pattern: true,
  },
  {
    id: 2,
    icon: <HiOutlineBell className="w-8 h-8" />,
    title: "تنبيهات فورية",
    description: "تواصل دائم مع طلابك لإبلاغهم بأي تغيير في المواعيد أو مواعيد الامتحانات والنتائج لضمان سير العملية بانتظام.",
    className: "md:col-span-1 bg-white border border-[#BFC9D1]/50 text-[#25343F]",
    iconBg: "bg-[#EAEFEF] text-[#FF9B51]",
    textColor: "text-[#25343F]/80",
  },
  {
    id: 3,
    icon: <HiOutlineChartBar className="w-8 h-8" />,
    title: "تقارير شاملة",
    description: "لوحة تحكم تمنحك نظرة عامة على أعداد الطلاب، الإيرادات، وأداء كل مجموعة لاتخاذ قرارات أسرع وأدق.",
    className: "md:col-span-1 bg-[#FF9B51] text-[#25343F] border-transparent",
    iconBg: "bg-[#25343F] text-[#FF9B51]",
    textColor: "text-[#25343F]/90",
  },
  {
    id: 4,
    icon: <HiOutlineAcademicCap className="w-8 h-8" />,
    title: "بنك أسئلة متكامل",
    description: "إمكانية إضافة أسئلة متنوعة لعمل امتحانات سريعة (Quizzes) وتصحيحها تلقائياً لتوفير وقتك ومجهودك.",
    className: "md:col-span-1 bg-white border border-[#BFC9D1]/50 text-[#25343F]",
    iconBg: "bg-[#EAEFEF] text-[#FF9B51]",
    textColor: "text-[#25343F]/80",
  },
  {
    id: 5,
    icon: <HiOutlineEye className="w-8 h-8" />,
    title: "مراقبة للامتحانات",
    description: "تابع طلابك أثناء حل الامتحان خطوة بخطوة واعرف الوقت الذي استغرقه كل طالب في كل سؤال بدقة.",
    className: "md:col-span-1 bg-white border border-[#BFC9D1]/50 text-[#25343F]",
    iconBg: "bg-[#EAEFEF] text-[#FF9B51]",
    textColor: "text-[#25343F]/80",
  },
  {
    id: 6,
    icon: <HiOutlineUsers className="w-8 h-8" />,
    title: "صلاحيات متقدمة للمساعدين (السكرتارية)",
    description: "نظام صلاحيات دقيق يتيح لك إعطاء مهام محددة للمساعدين مثل تسجيل الحضور واستلام النقدية، دون السماح لهم بالتدخل في التفاصيل المالية أو الإدارية الحساسة.",
    className: "md:col-span-2 lg:col-span-3 bg-[#EAEFEF] border border-[#BFC9D1] text-[#25343F]",
    iconBg: "bg-white text-[#FF9B51] shadow-sm",
    textColor: "text-[#25343F]/80",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF9B51]/10 px-5 py-2 rounded-full mb-6 border border-[#FF9B51]/20 shadow-sm">
            <span className="text-[#FF9B51] text-sm font-bold tracking-wider">
              مميزات النظام
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-[#25343F]">
            إمكانيات تجعلك{" "}
            <span className="text-[#FF9B51]">في المقدمة دائماً</span>
          </h2>
          <p className="text-[#BFC9D1] text-lg max-w-2xl mx-auto font-medium">
            مجموعة متكاملة من الأدوات المتقدمة المصممة خصيصاً لتقديم أفضل تجربة تعليمية وإدارية
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * feature.id, duration: 0.6 }}
              className={`group rounded-[2rem] p-8 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,155,81,0.25)] hover:border-[#FF9B51]/40 hover:-translate-y-1 ${feature.className}`}
            >
              {/* Optional Decoration for the large dark card */}
              {feature.pattern && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9B51]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              )}
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <div>
                  <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {feature.title}
                  </h3>
                </div>
                <p className={`text-base leading-relaxed ${feature.textColor} font-medium`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
