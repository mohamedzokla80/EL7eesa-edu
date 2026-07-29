"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiOutlineBell, HiOutlineVideoCamera, HiOutlineAcademicCap, HiOutlineEye, HiOutlineChartBar, HiOutlineUsers, HiOutlineDocumentText } from "react-icons/hi";

const features = [
  {
    id: 1,
    icon: <HiOutlineChartBar className="w-8 h-8" />,
    title: "1. لوحة تحكم الطالب (Student Dashboard)",
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li><strong>ملخص إحصائي فوري:</strong> نسبة الحضور، المبالغ المدفوعة، إجمالي الامتحانات، ونسبة النجاح.</li>
        <li><strong>الرسومات البيانية للأداء:</strong> مخططات لتطور الدرجات وسجل الحضور والغياب.</li>
        <li><strong>سجل آخر المدفوعات والدروس المتاحة.</strong></li>
      </ul>
    ),
    className: "md:col-span-2 bg-[#25343F] text-[#EAEFEF] border-transparent overflow-hidden relative",
    iconBg: "bg-[#FF9B51] text-[#25343F]",
    textColor: "text-[#BFC9D1]",
    pattern: true,
  },
  {
    id: 2,
    icon: <HiOutlineBell className="w-8 h-8" />,
    title: "2. لافتة التنبيهات الإجازات (Holiday Banner)",
    description: "تظهر بشكل بارز وأنيق في شاشة الطالب الرئيسية وفي صفحة الحضور وتوضح عدم وجود حصة اليوم وأنه لن يتم احتساب أي غياب.",
    className: "md:col-span-1 bg-white border border-[#BFC9D1]/50 text-[#25343F]",
    iconBg: "bg-[#EAEFEF] text-[#FF9B51]",
    textColor: "text-[#25343F]/80",
  },
  {
    id: 3,
    icon: <HiOutlineUsers className="w-8 h-8" />,
    title: "3. الملف الشخصي وتفاصيل المجموعة",
    description: "مراجعة بيانات الطالب الشخصية والتحقق من حالته. عرض تفاصيل المجموعة المعين بها (الموعد، أيام الأسبوع، المكان، المعلم).",
    className: "md:col-span-1 bg-[#FF9B51] text-[#25343F] border-transparent",
    iconBg: "bg-[#25343F] text-[#FF9B51]",
    textColor: "text-[#25343F]/90",
  },
  {
    id: 4,
    icon: <HiOutlineAcademicCap className="w-8 h-8" />,
    title: "4. سجل الحضور والغياب (Attendance Logs)",
    description: "تتبع سجل الحضور والغياب التاريخي لمعرفة الأيام التي حضرها أو غاب فيها الطالب وحساب النسبة المئوية.",
    className: "md:col-span-1 bg-white border border-[#BFC9D1]/50 text-[#25343F]",
    iconBg: "bg-[#EAEFEF] text-[#FF9B51]",
    textColor: "text-[#25343F]/80",
  },
  {
    id: 5,
    icon: <HiOutlineEye className="w-8 h-8" />,
    title: "5. نتائج الامتحانات ونموذج الإجابة",
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>عرض الدرجات المحققة وحالة النتيجة.</li>
        <li><strong>مراجعة نموذج الإجابة:</strong> الدخول لمراجعة الأسئلة ومقارنة الإجابة بالنموذجية وعرض درجات المقالي وتعليقات المعلم.</li>
      </ul>
    ),
    className: "md:col-span-1 bg-white border border-[#BFC9D1]/50 text-[#25343F]",
    iconBg: "bg-[#EAEFEF] text-[#FF9B51]",
    textColor: "text-[#25343F]/80",
  },
  {
    id: 6,
    icon: <HiOutlineChartBar className="w-8 h-8" />,
    title: "6. سجل المدفوعات والاشتراكات",
    description: "عرض سجل بجميع المبالغ والاشتراكات التي سددها الطالب للسنتر وتواريخها وتفاصيلها.",
    className: "md:col-span-1 bg-white border border-[#BFC9D1]/50 text-[#25343F]",
    iconBg: "bg-[#EAEFEF] text-[#FF9B51]",
    textColor: "text-[#25343F]/80",
  },
  {
    id: 7,
    icon: <HiOutlineVideoCamera className="w-8 h-8" />,
    title: "7. بوابة الكورسات ومشاهدة الفيديوهات",
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li><strong>مشاهدة الدروس</strong> المتاحة لصفه الدراسي.</li>
        <li><strong>قيود الحماية:</strong> مشاهدة بالتوالي، عدّاد مشاهدات محدد، منع تسريع الفيديو، وتأمين ببصمة الجهاز (Device Fingerprint).</li>
      </ul>
    ),
    className: "md:col-span-2 bg-[#EAEFEF] border border-[#BFC9D1] text-[#25343F]",
    iconBg: "bg-white text-[#FF9B51] shadow-sm",
    textColor: "text-[#25343F]/80",
  },
  {
    id: 8,
    icon: <HiOutlineAcademicCap className="w-8 h-8" />,
    title: "8. نظام الكويزات أونلاين (Quizzes Attempt)",
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>واجهة تفاعلية بعدّاد تنازلي وتقديم الإجابات تلقائياً.</li>
        <li>منع تحديث الصفحة والالتزام بقواعد التنقل (مثل منع الرجوع للخلف).</li>
        <li>استعراض النتيجة والتقييم الفوري بالتفصيل.</li>
      </ul>
    ),
    className: "md:col-span-1 bg-white border border-[#BFC9D1]/50 text-[#25343F]",
    iconBg: "bg-[#EAEFEF] text-[#FF9B51]",
    textColor: "text-[#25343F]/80",
  },
  {
    id: 9,
    icon: <HiOutlineDocumentText className="w-8 h-8" />,
    title: "9. الواجبات المنزلية (Homeworks Tracking)",
    description: "متابعة الواجبات المطلوبة ومواعيد تسليمها. التحقق من حالة التسليم ومراجعة ملاحظات وتصحيحات المدرس.",
    className: "md:col-span-1 bg-white border border-[#BFC9D1]/50 text-[#25343F]",
    iconBg: "bg-[#EAEFEF] text-[#FF9B51]",
    textColor: "text-[#25343F]/80",
  },
  {
    id: 10,
    icon: <HiOutlineBell className="w-8 h-8" />,
    title: "10. مركز الإشعارات (Notifications Center)",
    description: "صندوق إشعارات مدمج يستقبل تنبيهات المنصة والرسائل المباشرة الموجهة من المدرس مع إمكانية تحديدها كمقروءة وتصفيتها.",
    className: "md:col-span-1 bg-white border border-[#BFC9D1]/50 text-[#25343F]",
    iconBg: "bg-[#EAEFEF] text-[#FF9B51]",
    textColor: "text-[#25343F]/80",
  }
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
              بوابة الطالب (Student Portal)
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-[#25343F]">
            ثانياً: بوابة <span className="text-[#FF9B51]">الطالب الإلكترونية</span>
          </h2>
          <p className="text-[#25343F]/80 text-lg max-w-2xl mx-auto font-medium">
            بوابة إلكترونية مبسطة ومتجاوبة تتيح للطلاب التفاعل مع المنصة ومتابعة مستواهم.
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
                <div className={`text-sm md:text-base leading-relaxed ${feature.textColor} font-medium overflow-y-auto max-h-[120px] custom-scrollbar`}>
                  {feature.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
