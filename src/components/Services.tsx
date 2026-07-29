"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  HiOutlineOfficeBuilding, 
  HiOutlineClipboardList, 
  HiOutlineCurrencyDollar, 
  HiOutlineDocumentText, 
  HiOutlineDeviceMobile,
  HiOutlineChartPie
} from "react-icons/hi";

const services = [
  {
    id: "05",
    icon: <HiOutlineDocumentText className="w-7 h-7" />,
    title: "5. نظام الإجازات الرسمية",
    description: (
      <ul className="list-disc list-inside space-y-2 text-right">
        <li><strong>تقويم إجازات المجموعة:</strong> أداة متكاملة تتيح للمدرس الضغط على أي يوم لتحديده كإجازة رسمية.</li>
        <li><strong>التعطيل التلقائي للحضور:</strong> إيقاف تسجيل الحضور والغياب لهذا اليوم تلقائياً.</li>
        <li><strong>إشعارات وتنبيهات:</strong> لافتة مميزة (Holiday Banner) لمنع حضور الطلاب للسنتر دون داعٍ.</li>
      </ul>
    ),
  },
  {
    id: "06",
    icon: <HiOutlineDeviceMobile className="w-7 h-7" />,
    title: "6. الامتحانات الحضورية",
    description: (
      <ul className="list-disc list-inside space-y-2 text-right">
        <li><strong>إضافة امتحانات السنتر:</strong> إنشاء سجل للامتحان وتحديد تاريخه والدرجة النهائية الكبرى.</li>
        <li><strong>رصد درجات الطلاب يدوياً:</strong> رصد سريع أو تحديد الطالب كغائب.</li>
        <li><strong>تحليل أداء الامتحانات:</strong> حساب متوسط الدرجات ونسبة النجاح والرسوب.</li>
      </ul>
    ),
  },
  {
    id: "07",
    icon: <HiOutlineCurrencyDollar className="w-7 h-7" />,
    title: "7. المالية والمديونيات",
    description: (
      <ul className="list-disc list-inside space-y-2 text-right">
        <li><strong>تسجيل المدفوعات:</strong> تسجيل اشتراك الطالب وتحديد المبلغ ونوع الدفع.</li>
        <li><strong>إدارة المديونيات والدين:</strong> تتبع المديونيات تلقائياً وتسويتها، والتنازل أو الخصم.</li>
        <li><strong>تتبع تحصيل المجموعات:</strong> عرض إجمالي المبالغ، الديون القائمة، ومعدل التحصيل.</li>
      </ul>
    ),
  },
  {
    id: "08",
    icon: <HiOutlineOfficeBuilding className="w-7 h-7" />,
    title: "8. نظام الفيديوهات والكورسات",
    description: (
      <ul className="list-disc list-inside space-y-2 text-right">
        <li><strong>إنشاء الكورسات:</strong> رفع وتنظيم الدروس التعليمية.</li>
        <li><strong>خيارات متقدمة:</strong> المشاهدة التتابعية، تحديد حد أقصى للمشاهدة، ومنع تسريع الفيديو.</li>
        <li><strong>إحصائيات المشاهدة:</strong> تتبع دقيق لكل فيديو ونسبة تقدم كل طالب.</li>
      </ul>
    ),
  },
  {
    id: "09",
    icon: <HiOutlineClipboardList className="w-7 h-7" />,
    title: "9. نظام الكويزات أونلاين",
    description: (
      <ul className="list-disc list-inside space-y-2 text-right">
        <li><strong>منشئ الكويزات:</strong> تحديد المدة، منع العودة للخلف، خلط عشوائي، وجدولة الوقت.</li>
        <li><strong>تنوع الأسئلة والمراقبة:</strong> MCQ ومقالي، ومراقبة الكويز لحظياً.</li>
        <li><strong>تصحيح المقالي:</strong> لوحة خاصة لتصحيح ورصد درجات الأسئلة المقالية يدوياً.</li>
      </ul>
    ),
  },
  {
    id: "10",
    icon: <HiOutlineChartPie className="w-7 h-7" />,
    title: "10. مرسل الإشعارات والرسائل",
    description: (
      <ul className="list-disc list-inside space-y-2 text-right">
        <li><strong>استهداف دقيق:</strong> إرسال إشعارات مخصصة لطلاب الأونلاين أو طلاب السنتر حسب المجموعة.</li>
        <li><strong>إشعارات تلقائية:</strong> تحديثات فورية عند نشر امتحان، قبول العضوية، ورصد الدرجات.</li>
      </ul>
    ),
  },
  {
    id: "11",
    icon: <HiOutlineDocumentText className="w-7 h-7" />,
    title: "11. جدول المهام والتخطيط",
    description: (
      <ul className="list-disc list-inside space-y-2 text-right">
        <li>مفكرة شخصية وجدول مهام يومي للمدرس لإدارة مواعيده والتخطيط للدروس القادمة بكفاءة.</li>
      </ul>
    ),
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="relative py-24 bg-[#EAEFEF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#25343F] text-[#FF9B51] px-5 py-2 rounded-full mb-6 shadow-md">
            <span className="text-sm font-bold tracking-wider">
              خدماتنا
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-[#25343F]">
            كل ما تحتاجه{" "}
            <span className="text-[#FF9B51]">لإدارة سنترك الحضوري</span>
          </h2>
          <p className="text-[#25343F]/80 text-lg max-w-2xl mx-auto leading-relaxed">
            نظام مخصص للتحكم الكامل في السنتر من شؤون الطلاب والماليات والحضور بسهولة واحترافية.
          </p>
        </motion.div>

        {/* Accordion Services Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-3 w-full h-auto lg:h-[550px]"
        >
          {services.map((service, i) => {
            const isActive = activeService === i;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(i)}
                onClick={() => setActiveService(i)}
                className={`relative overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] cursor-pointer transition-all duration-700 ease-in-out border flex flex-col items-center justify-center lg:justify-between ${
                  isActive 
                    ? "lg:flex-[3] flex-none h-auto lg:h-full bg-[#25343F] border-transparent shadow-xl p-6 lg:p-8 hover:shadow-[0_0_40px_rgba(255,155,81,0.25)] hover:border-[#FF9B51]/40 hover:-translate-y-1" 
                    : "lg:flex-[1] flex-none min-h-[80px] h-auto lg:h-full bg-white border-[#BFC9D1]/50 hover:bg-[#EAEFEF]/50 px-6 py-4 lg:py-8 hover:shadow-[0_0_40px_rgba(255,155,81,0.2)] hover:border-[#FF9B51]/40 hover:-translate-y-1"
                }`}
              >
                {/* Background Number */}
                <div className={`absolute transition-all duration-500 font-black z-0 ${
                  isActive 
                    ? 'top-4 right-6 text-5xl text-[#EAEFEF]/10' 
                    : 'hidden lg:block lg:top-4 lg:right-6 text-5xl text-[#BFC9D1]/40'
                }`}>
                  {service.id}
                </div>

                {isActive ? (
                  /* Expanded Content */
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex flex-col items-center justify-center h-full w-full"
                  >
                    <div className="w-16 h-16 bg-[#FF9B51] rounded-2xl flex items-center justify-center text-[#25343F] mb-6 shadow-lg shadow-[#FF9B51]/30">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#EAEFEF] mb-4 text-center">
                      {service.title}
                    </h3>
                    <div className="text-[#BFC9D1] leading-relaxed w-full max-w-lg mx-auto text-sm sm:text-base">
                      {service.description}
                    </div>
                  </motion.div>
                ) : (
                  /* Collapsed Content */
                  <>
                    {/* Desktop Collapsed View */}
                    <div className="hidden lg:flex flex-col items-center justify-end h-full w-full pb-4">
                      <div className="flex-1 flex items-center justify-center">
                        <span className="text-[#25343F] font-bold whitespace-nowrap -rotate-90 block tracking-wide">
                          {service.title}
                        </span>
                      </div>
                      <div className="w-12 h-12 bg-[#EAEFEF] border border-[#BFC9D1] rounded-2xl flex items-center justify-center text-[#FF9B51] shadow-sm mt-8 transition-colors group-hover:bg-[#FF9B51] group-hover:text-[#25343F]">
                        {service.icon}
                      </div>
                    </div>

                    {/* Mobile Collapsed View */}
                    <div className="flex lg:hidden flex-row items-center w-full px-2 gap-4">
                      {/* Number on far right */}
                      <span className="text-3xl font-black text-[#BFC9D1]/60 pr-1">
                        {service.id}
                      </span>
                      {/* Icon */}
                      <div className="w-10 h-10 bg-[#EAEFEF] border border-[#BFC9D1] rounded-xl flex items-center justify-center text-[#FF9B51] shadow-sm transition-colors group-hover:bg-[#FF9B51] group-hover:text-[#25343F] shrink-0">
                        {service.icon}
                      </div>
                      {/* Title on the left */}
                      <span className="text-[#25343F] font-bold block tracking-wide flex-1 text-right text-sm leading-relaxed">
                        {service.title}
                      </span>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
