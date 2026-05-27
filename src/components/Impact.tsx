"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  RadialBarChart,
  RadialBar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import ChartContainer from "@/components/ChartContainer";

const effortData = [
  { name: "الطريقة التقليدية", value: 95, fill: "#BFC9D1" },
  { name: "مع سيستمني", value: 10, fill: "#FF9B51" },
];

const pieData = [
  { name: "دقة مالية", value: 100, color: "#25343F" },
  { name: "متبقي", value: 0, color: "#EAEFEF" },
];

const radialData = [
  {
    name: "انخفاض المجهود",
    value: 90,
    fill: "#FF9B51",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl px-4 py-3 text-sm text-[#25343F] border border-[#BFC9D1]/50 shadow-xl">
        <p className="font-bold mb-1">{payload[0].payload.name || payload[0].payload.category}</p>
        <p className="text-[#FF9B51] font-bold text-lg">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EAEFEF] rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF9B51]/10 px-5 py-2 rounded-full mb-6 border border-[#FF9B51]/20 shadow-sm">
            <span className="text-[#FF9B51] text-sm font-bold tracking-wider">
              الفرق الذي نصنعه
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-[#25343F]">
            كيف سيغير <span className="text-[#FF9B51]">سيستمني</span> عملك؟
          </h2>
          <p className="text-[#25343F]/80 text-lg max-w-2xl mx-auto font-medium">
            أرقام حقيقية توضح الفارق الشاسع في الأداء والمجهود مقارنة بالطرق التقليدية المعتادة
          </p>
        </motion.div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Chart 1: Administrative Effort */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-[2rem] p-6 sm:p-8 border border-[#BFC9D1]/50 shadow-sm hover:shadow-[0_0_40px_rgba(255,155,81,0.2)] hover:border-[#FF9B51]/40 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-[#25343F] mb-2">
                المجهود الإداري
              </h3>
              <p className="text-[#FF9B51] font-bold text-sm bg-[#FF9B51]/10 inline-block px-3 py-1 rounded-full">
                انخفاض بنسبة 90%
              </p>
            </div>

            <ChartContainer className="h-56 mb-8" dir="ltr">
              {(width, height) => (
                <BarChart width={width} height={height} data={effortData} barSize={40}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#EAEFEF"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#25343F", fontSize: 12, fontWeight: 500 }}
                    axisLine={{ stroke: "#EAEFEF" }}
                    tickLine={false}
                  />
                  <YAxis
                    hide
                    domain={[0, 100]}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                  <Bar
                    dataKey="value"
                    radius={[8, 8, 0, 0]}
                  >
                    {effortData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              )}
            </ChartContainer>

            <div className="p-5 bg-[#EAEFEF] rounded-2xl border border-[#BFC9D1]/30">
              <p className="text-sm text-[#25343F]/80 leading-relaxed">
                <span className="text-[#25343F] font-bold">التقليدية:</span>{" "}
                إرهاق كبير في مراجعة الكشوفات الورقية وتصحيح الامتحانات يدوياً.
              </p>
              <div className="w-full h-px bg-[#BFC9D1]/50 my-3" />
              <p className="text-sm text-[#25343F] leading-relaxed font-medium">
                <span className="text-[#FF9B51] font-bold">
                  مع سيستمني:
                </span>{" "}
                كل شيء يتم آلياً بضغطة زر وبدون أي تدخل منك.
              </p>
            </div>
          </motion.div>

          {/* Chart 2: Financial Accuracy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
             className="bg-[#25343F] rounded-[2rem] p-6 sm:p-8 shadow-xl hover:shadow-[0_0_40px_rgba(255,155,81,0.25)] hover:border-[#FF9B51]/40 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#FF9B51]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center mb-8 relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">
                دقة الحسابات
              </h3>
              <p className="text-white/80 font-medium text-sm">
                ضمان كامل للمدفوعات
              </p>
            </div>

            <ChartContainer className="h-56 mb-8 flex items-center justify-center relative z-10" dir="ltr">
              {(width, height) => (
                <PieChart width={width} height={height}>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={85}
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? "#FF9B51" : "#ffffff10"} />
                    ))}
                  </Pie>
                  <text
                    x="50%"
                    y="45%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#ffffff"
                    fontSize="42"
                    fontWeight="900"
                  >
                    100%
                  </text>
                  <text
                    x="50%"
                    y="65%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#ffffff"
                    opacity={0.7}
                    fontSize="13"
                    fontWeight="500"
                  >
                    دقة مالية
                  </text>
                </PieChart>
              )}
            </ChartContainer>

            <div className="p-5 bg-white/10 rounded-2xl border border-white/10 relative z-10 backdrop-blur-sm">
              <p className="text-sm text-white/70 leading-relaxed">
                <span className="text-white font-bold">التقليدية:</span>{" "}
                ضياع الكثير من الوقت ووجود أخطاء مستمرة في تتبع أقساط الطلاب.
              </p>
              <div className="w-full h-px bg-white/10 my-3" />
              <p className="text-sm text-white leading-relaxed font-medium">
                <span className="text-[#FF9B51] font-bold">
                  مع سيستمني:
                </span>{" "}
                تقارير واضحة ودقيقة لكل قرش يدخل السنتر.
              </p>
            </div>
          </motion.div>

          {/* Chart 3: Student Engagement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
             className="bg-white rounded-[2rem] p-6 sm:p-8 border border-[#BFC9D1]/50 shadow-sm hover:shadow-[0_0_40px_rgba(255,155,81,0.2)] hover:border-[#FF9B51]/40 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-[#25343F] mb-2">
                تفاعل الطلاب
              </h3>
              <p className="text-[#FF9B51] font-bold text-sm bg-[#FF9B51]/10 inline-block px-3 py-1 rounded-full border border-[#FF9B51]/20">
                زيادة بنسبة 200%
              </p>
            </div>

            <ChartContainer className="h-56 mb-8 relative" dir="ltr">
              {(width, height) => (
                <RadialBarChart
                  width={width}
                  height={height}
                  cx="50%"
                  cy="50%"
                  innerRadius="70%"
                  outerRadius="100%"
                  data={radialData}
                  startAngle={180}
                  endAngle={0}
                >
                  <RadialBar
                    dataKey="value"
                    cornerRadius={20}
                    fill="#FF9B51"
                    background={{ fill: "#EAEFEF" }}
                  />
                  <text
                    x="50%"
                    y="55%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#25343F"
                    fontSize="36"
                    fontWeight="900"
                  >
                    +200%
                  </text>
                  <text
                    x="50%"
                    y="75%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#25343F"
                    fontSize="13"
                    fontWeight="500"
                  >
                    ارتباط وتفاعل
                  </text>
                </RadialBarChart>
              )}
            </ChartContainer>

            <div className="p-5 bg-[#EAEFEF] rounded-2xl border border-[#BFC9D1]/30">
              <p className="text-sm text-[#25343F]/80 leading-relaxed">
                <span className="text-[#25343F] font-bold">التقليدية:</span>{" "}
                صعوبة التواصل المستمر مع الطلاب وأولياء الأمور خارج السنتر.
              </p>
              <div className="w-full h-px bg-[#BFC9D1]/50 my-3" />
              <p className="text-sm text-[#25343F] leading-relaxed font-medium">
                <span className="text-[#FF9B51] font-bold">
                  مع سيستمني:
                </span>{" "}
                انبهار الطلاب بالتطبيق والإشعارات المباشرة للموبايل.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Comparison bar chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
           className="mt-8 bg-white border border-[#BFC9D1]/50 rounded-[2rem] p-4 sm:p-8 lg:p-10 shadow-sm"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h3 className="text-2xl font-black text-[#25343F]">
              مقارنة شاملة للأداء
            </h3>
            
            {/* Legend */}
            <div className="flex gap-6 bg-[#EAEFEF] px-5 py-2.5 rounded-full border border-[#BFC9D1]/30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#BFC9D1] rounded-full" />
                <span className="text-[#25343F]/80 text-sm font-semibold">الطريقة التقليدية</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#FF9B51] rounded-full shadow-sm" />
                <span className="text-[#25343F] text-sm font-bold">مع سيستمني</span>
              </div>
            </div>
          </div>

          <ChartContainer className="h-80" dir="ltr">
            {(width, height) => {
              const isMobile = width < 560;
              const dynamicBarSize = isMobile ? 12 : 24;
              const dynamicBarGap = isMobile ? 4 : 8;
              const fontSize = isMobile ? 10 : 13;
              const yAxisFontSize = isMobile ? 9 : 12;
              const margin = isMobile
                ? { top: 20, right: 0, left: -32, bottom: 0 }
                : { top: 20, right: 0, left: -20, bottom: 0 };

              return (
                <BarChart
                  width={width}
                  height={height}
                  data={[
                    {
                      category: isMobile ? "الإداري" : "المجهود الإداري",
                      traditional: 95,
                      systemny: 10,
                    },
                    {
                      category: isMobile ? "الحسابات" : "دقة الحسابات",
                      traditional: 60,
                      systemny: 100,
                    },
                    {
                      category: isMobile ? "التفاعل" : "تفاعل الطلاب",
                      traditional: 30,
                      systemny: 90,
                    },
                    {
                      category: isMobile ? "التصحيح" : "سرعة التصحيح",
                      traditional: 20,
                      systemny: 98,
                    },
                    {
                      category: isMobile ? "المواعيد" : "تنظيم المواعيد",
                      traditional: 40,
                      systemny: 95,
                    },
                  ]}
                  barSize={dynamicBarSize}
                  barGap={dynamicBarGap}
                  margin={margin}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#EAEFEF"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="category"
                    tick={{ fill: "#25343F", fontSize: fontSize, fontWeight: 600 }}
                    axisLine={{ stroke: "#BFC9D1" }}
                    tickLine={false}
                    dy={10}
                  />
                  <YAxis
                    tick={{ fill: "#BFC9D1", fontSize: yAxisFontSize }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 100]}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(234, 239, 239, 0.5)' }} />
                  <Bar
                    dataKey="traditional"
                    name="الطريقة التقليدية"
                    fill="#BFC9D1"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="systemny"
                    name="مع سيستمني"
                    fill="#FF9B51"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              );
            }}
          </ChartContainer>
        </motion.div>
      </div>
    </section>
  );
}
