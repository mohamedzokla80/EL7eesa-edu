"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { IoSend } from "react-icons/io5";
import { CgSpinner } from "react-icons/cg";
import { HiOutlineCheck, HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdajdoev", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-white overflow-hidden">
      {/* Soft Background Orbs */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-white rounded-full blur-[120px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[150px] opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full mb-6 shadow-sm border border-[#BFC9D1]/30">
            <span className="text-[#FF9B51] text-sm font-bold tracking-wider">
              نحن هنا لمساعدتك
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-[#25343F] tracking-tight">
            هل أنت مستعد لنقل سنترك{" "}
            <span className="text-[#FF9B51]">للمستوى التالي؟</span>
          </h2>
          <p className="text-[#25343F]/80 text-lg max-w-2xl mx-auto font-medium">
            اترك بياناتك وسيقوم فريق المبيعات بالتواصل معك فوراً لتحديد موعد وتجربة النظام بنفسك.
          </p>
        </motion.div>

        {/* The Mega Contact Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-[2.5rem] shadow-2xl shadow-[#25343F]/5 overflow-hidden flex flex-col lg:flex-row border border-white"
        >
          {/* Dark Info Panel (Right side in RTL) */}
          <div className="lg:w-[40%] bg-[#25343F] relative overflow-hidden p-10 sm:p-14 text-white flex flex-col justify-between">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9B51] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF9B51] rounded-full blur-[120px] opacity-20 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4 leading-tight">
                معلومات <br />
                <span className="text-[#FF9B51]">التواصل</span>
              </h3>
              <p className="text-white/70 font-medium mb-12 max-w-xs leading-relaxed">
                لا تتردد في الوصول إلينا عبر أي من قنواتنا المباشرة، وسنكون سعداء بالرد عليك.
              </p>

              <div className="space-y-8">
                {/* Phone */}
                <a href="tel:01090039262" className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#FF9B51] transition-all duration-300 border border-white/10 group-hover:border-[#FF9B51]">
                    <HiOutlinePhone className="w-5 h-5 text-white/80 group-hover:text-[#25343F] transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-medium mb-1">رقم خدمة العملاء:</p>
                    <p className="text-white font-bold text-lg tracking-wider" dir="ltr">01090039262</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/201090039262" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#FF9B51] transition-all duration-300 border border-white/10 group-hover:border-[#FF9B51]">
                    <FaWhatsapp className="w-5 h-5 text-white/80 group-hover:text-[#25343F] transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-medium mb-1">رابط الواتساب المباشر:</p>
                    <p className="text-white font-bold text-lg">مراسلة فورية</p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:systemny.devmark26@gmail.com" className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#FF9B51] transition-all duration-300 border border-white/10 group-hover:border-[#FF9B51]">
                    <HiOutlineMail className="w-5 h-5 text-white/80 group-hover:text-[#25343F] transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-medium mb-1">البريد الإلكتروني:</p>
                    <p className="text-white font-bold text-sm sm:text-base tracking-wide" dir="ltr">
                      systemny.devmark26@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Bottom decoration / Trust line */}
            <div className="mt-16 pt-8 border-t border-white/10 relative z-10 flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FF9B51]/20 rounded-full flex items-center justify-center">
                <HiOutlineLocationMarker className="w-5 h-5 text-[#FF9B51]" />
              </div>
              <p className="text-white/80 font-medium text-sm">متواجدون لدعم المعلمين في جميع أنحاء الجمهورية</p>
            </div>
          </div>

          {/* Light Form Panel (Left side in RTL) */}
          <div className="lg:w-[60%] p-10 sm:p-14 relative bg-white">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-24 h-24 bg-[#FF9B51]/10 rounded-full flex items-center justify-center mb-6">
                  <MdCelebration className="w-12 h-12 text-[#FF9B51]" />
                </div>
                <h3 className="text-3xl font-bold text-[#25343F] mb-4">
                  وصلتنا رسالتك!
                </h3>
                <p className="text-[#25343F]/80 font-medium text-lg mb-8 max-w-sm">
                  سنقوم بمراجعة بياناتك والتواصل معك في أقرب فرصة.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-[#EAEFEF] hover:bg-[#BFC9D1]/50 text-[#25343F] rounded-full font-bold transition-colors duration-300"
                >
                  العودة للنموذج
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-[#25343F] mb-8">
                  أرسل بياناتك الآن
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="relative group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder=" "
                        className="peer w-full bg-transparent border-b-2 border-[#BFC9D1]/50 px-0 py-3 text-[#25343F] font-semibold focus:outline-none focus:border-[#FF9B51] transition-colors duration-300 placeholder-transparent"
                      />
                      <label
                        htmlFor="name"
                        className="absolute right-0 -top-3 text-sm font-medium text-[#BFC9D1] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#FF9B51]"
                      >
                        اسم المعلم / السنتر
                      </label>
                    </div>

                    {/* Phone */}
                    <div className="relative group">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder=" "
                        dir="ltr"
                        className="peer w-full bg-transparent border-b-2 border-[#BFC9D1]/50 px-0 py-3 text-[#25343F] font-semibold text-right focus:outline-none focus:border-[#FF9B51] transition-colors duration-300 placeholder-transparent"
                      />
                      <label
                        htmlFor="phone"
                        className="absolute right-0 -top-3 text-sm font-medium text-[#BFC9D1] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#FF9B51]"
                      >
                        رقم الهاتف (يفضل واتساب)
                      </label>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 pt-4">
                    {/* Subject */}
                    <div className="relative group">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        placeholder=" "
                        className="peer w-full bg-transparent border-b-2 border-[#BFC9D1]/50 px-0 py-3 text-[#25343F] font-semibold focus:outline-none focus:border-[#FF9B51] transition-colors duration-300 placeholder-transparent"
                      />
                      <label
                        htmlFor="subject"
                        className="absolute right-0 -top-3 text-sm font-medium text-[#BFC9D1] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#FF9B51]"
                      >
                        المادة التي تدرسها
                      </label>
                    </div>

                    {/* Governorate */}
                    <div className="relative group">
                      <input
                        type="text"
                        id="governorate"
                        name="governorate"
                        required
                        placeholder=" "
                        className="peer w-full bg-transparent border-b-2 border-[#BFC9D1]/50 px-0 py-3 text-[#25343F] font-semibold focus:outline-none focus:border-[#FF9B51] transition-colors duration-300 placeholder-transparent"
                      />
                      <label
                        htmlFor="governorate"
                        className="absolute right-0 -top-3 text-sm font-medium text-[#BFC9D1] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#FF9B51]"
                      >
                        محافظتك
                      </label>
                    </div>
                  </div>

                  <div className="pt-4">
                    {/* City */}
                    <div className="relative group">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        placeholder=" "
                        className="peer w-full bg-transparent border-b-2 border-[#BFC9D1]/50 px-0 py-3 text-[#25343F] font-semibold focus:outline-none focus:border-[#FF9B51] transition-colors duration-300 placeholder-transparent"
                      />
                      <label
                        htmlFor="city"
                        className="absolute right-0 -top-3 text-sm font-medium text-[#BFC9D1] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#FF9B51]"
                      >
                        المدينه
                      </label>
                    </div>
                  </div>

                  <div className="pt-4">
                    {/* Message */}
                    <div className="relative group">
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder=" "
                        className="peer w-full bg-transparent border-b-2 border-[#BFC9D1]/50 px-0 py-3 text-[#25343F] font-semibold focus:outline-none focus:border-[#FF9B51] transition-colors duration-300 resize-none placeholder-transparent"
                      />
                      <label
                        htmlFor="message"
                        className="absolute right-0 -top-3 text-sm font-medium text-[#BFC9D1] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#FF9B51]"
                      >
                        استفسارك (اختياري)
                      </label>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 sm:px-12 bg-[#25343F] hover:bg-[#FF9B51] hover:text-[#25343F] text-white py-4 rounded-full font-bold text-base sm:text-lg shadow-xl shadow-[#25343F]/20 hover:shadow-[#FF9B51]/30 transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 hover:-translate-y-1 whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <CgSpinner className="animate-spin w-6 h-6" />
                          <span>يتم الإرسال...</span>
                        </>
                      ) : (
                        <>
                          <span>أرسل بياناتك الآن</span>
                          <IoSend className="w-5 h-5 rtl:rotate-200" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
