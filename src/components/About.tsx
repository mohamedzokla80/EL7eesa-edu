"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiOutlineBookOpen, HiOutlineShieldCheck, HiOutlineLightningBolt, HiOutlineChartBar, HiOutlineCheckCircle } from "react-icons/hi";

const features = [
  {
    id: "01",
    icon: <HiOutlineChartBar className="w-6 h-6" />,
    title: "1. لوحة التحكم والإحصائيات (Dashboard & Statistics)",
    desc: (
      <ul className="list-disc list-inside space-y-2">
        <li><strong>إحصائيات شاملة لحظية:</strong> عرض إجمالي الطلاب، الطلاب المقبولين، الطلبات المعلقة، المرفوضين، والمحظورين.</li>
        <li><strong>تحليل نوعية الطلاب:</strong> رسم بياني ونسب تفصيلية لطلاب السنتر (الحضور) مقابل طلاب الأونلاين.</li>
        <li><strong>إحصائيات مالية وسجل الحضور:</strong> تتبع الأرباح وإجمالي المبيعات، ومعدل حضور الطلاب اليومي.</li>
        <li><strong>المراجعة السريعة للطلبات:</strong> قسم مخصص للطلبات الجديدة المسجلة مؤخراً لتسريع اتخاذ القرار.</li>
      </ul>
    ),
  },
  {
    id: "02",
    icon: <HiOutlineShieldCheck className="w-6 h-6" />,
    title: "2. إدارة طلبات التسجيل الجديدة (Pending Students Approval)",
    desc: (
      <ul className="list-disc list-inside space-y-2">
        <li><strong>مراجعة إثباتات الدفع:</strong> فحص بيانات تحويل الاشتراك للطلاب الجدد (عبر المحافظ الإلكترونية أو InstaPay) ومراجعة صورة إيصال الدفع المرفوع بدقة مع خيار تكبير الصورة أو فتحها في نافذة جديدة.</li>
        <li><strong>قرارات فورية:</strong> إمكانية القبول (Approve)، الرفض (Reject)، الحظر (Block) أو الحذف النهائي للطلب مع إرسال إشعارات فورية للطالب بحالة حسابه.</li>
      </ul>
    ),
  },
  {
    id: "03",
    icon: <HiOutlineLightningBolt className="w-6 h-6" />,
    title: "3. إدارة شؤون الطلاب (Students Directory)",
    desc: (
      <ul className="list-disc list-inside space-y-2">
        <li><strong>البحث والتصفية المتقدمة:</strong> البحث بالاسم، الكود الدراسي (ID)، أو رقم الهاتف. وتصفية الطلاب حسب الحالة (نشط، معلق، محظور، مرفوض) أو نوع الطالب (سنتر، أونلاين).</li>
        <li><strong>الملف الشخصي التفصيلي:</strong> عرض البيانات الشخصية والدراسية لكل طالب (بما في ذلك وظيفة ولي الأمر، رقم هاتف ولي الأمر، المنطقة الجغرافية، والمجموعة الحالية).</li>
        <li><strong>بطاقات الـ QR وسجلات الحضور والمالية:</strong> توليد بطاقة QR فريدة لكل طالب سنتر، مع إمكانية تصدير بطاقات QR لجميع الطلاب دفعة واحدة في ملف ZIP مضغوط.</li>
        <li><strong>الترقية الجماعية (Bulk Promotion):</strong> ترقية مجموعة من الطلاب دفعة واحدة إلى صف دراسي جديد أو عام دراسي جديد أو نقلهم لمجموعة أخرى بضغطة زر.</li>
      </ul>
    ),
  },
  {
    id: "04",
    icon: <HiOutlineCheckCircle className="w-6 h-6" />,
    title: "4. إدارة السنتر والمجموعات (Center & Group Management)",
    desc: (
      <ul className="list-disc list-inside space-y-2">
        <li><strong>السنوات الدراسية (Academic Years):</strong> إنشاء وتعديل السنوات الدراسية وتحديد الرسوم الخاصة بكل سنة (دفع شهري ثابت أو دفع لكل حصة).</li>
        <li><strong>المجموعات الدراسية (Groups):</strong> إنشاء المجموعات وتحديد أيام الحصص الأسبوعية والمواعيد والسعة القصوى. إضافة الطلاب للمجموعات، أو نقلهم وتغيير مجموعتهم مع الحفاظ التام على سجلات حضورهم ومدفوعاتهم القديمة ونقلها تلقائياً.</li>
        <li><strong>تسجيل الحضور (Attendance Tracking):</strong> إمكانية تسجيل الحضور يدوياً عبر إدخال كود الطالب أو رقم هاتفه. إمكانية تسجيل الحضور الذكي والسريع عبر عمل مسح (Scan) لبطاقة الـ QR الخاصة بالطالب باستخدام الكاميرا. عرض ومراجعة سجل الحضور والغياب التاريخي للمجموعة وتصفيتها بالتواريخ.</li>
      </ul>
    ),
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 bg-[#EAEFEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side (Cards Grid) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="bg-white border border-[#BFC9D1]/50 rounded-3xl p-6 flex flex-col justify-between hover:shadow-[0_0_40px_rgba(255,155,81,0.2)] hover:border-[#FF9B51]/40 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Hover Bottom Line */}
                  <div className="absolute bottom-0 left-0 h-1.5 bg-[#FF9B51] w-0 group-hover:w-full transition-all duration-500 ease-out" />
                  <div className="flex flex-col items-end mb-8">
                    <div className="w-12 h-12 bg-[#EAEFEF] border border-[#BFC9D1] rounded-2xl flex items-center justify-center text-[#FF9B51] mb-3 shadow-sm group-hover:bg-[#FF9B51] group-hover:text-[#25343F] transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold text-[#BFC9D1] tracking-[0.2em] uppercase">
                      FEATURE_{item.id}
                    </span>
                  </div>
                  <div className="text-right">
                    <h3 className="text-xl font-bold text-[#25343F] mb-2">
                      {item.title}
                    </h3>
                    <div className="text-[#25343F]/80 text-sm leading-relaxed">
                      {item.desc}
                    </div>
                    
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#25343F]/10 to-[#FF9B51]/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-1 flex flex-col items-start"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#25343F] text-[#FF9B51] px-4 py-1.5 rounded-full mb-8 shadow-md"
            >
              <span className="text-xs font-bold tracking-wider">من نحن؟</span>
              <HiOutlineCheckCircle className="w-4 h-4 text-[#FF9B51]" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-[1.3] text-[#25343F]"
            >
              نحن في <span className="text-[#FF9B51]">الحصة</span> ندرك...
              <br />
              حجم مجهودك ونسعى <span className="text-[#FF9B51] underline decoration-4 underline-offset-8">لراحتك</span>.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={isInView ? { opacity: 1, width: "100%" } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-l from-[#25343F] to-transparent w-24 mb-8 rounded-full"
            />

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[#25343F]/80 text-lg leading-relaxed mb-6"
            >
              نحن ندرك حجم المجهود الذي يبذله المعلم في إدارة السنتر، تنظيم
              المواعيد، ومتابعة مئات الطلاب. لذلك، ابتكرنا حلاً عملياً يضع
              السنتر بأكمله بين يديك، ليساعدك على التركيز على ما تجيده حقاً:
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative p-6 bg-white border border-[#BFC9D1]/50 rounded-2xl shadow-sm w-full"
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-3/4 bg-gradient-to-b from-[#25343F] to-[#FF9B51] rounded-l-full" />
              <div className="pr-4">
                <p className="text-2xl font-bold text-[#25343F] mb-2">
                  أولاً: لوحة تحكم المعلم (El7essa-Teacher)
                </p>
                <p className="text-[#25343F]/80">
                  لوحة التحكم المخصصة للمدرس ومساعديه لإدارة العملية التعليمية بشكل كامل وحضوري وإلكتروني.
                </p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
