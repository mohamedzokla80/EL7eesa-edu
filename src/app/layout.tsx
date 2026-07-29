import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "الحصة - النظام الأسهل لإدارة السناتر التعليمية",
  description:
    "النظام الأسهل لإدارة السناتر التعليمية في مصر. وفر وقتك ومجهودك وركز على الشرح والتدريس.",
  keywords: [
    "الحصة",
    "نظام إدارة سناتر",
    "تعليم",
    "سنتر تعليمي",
    "منصة تعليمية",
    "مصر",
    "إدارة الحضور والانصراف",
    "دعم فني",
  ],
  authors: [{ name: "الحصة" }],
  creator: "الحصة",
  publisher: "الحصة",
  openGraph: {
    title: "الحصة - النظام الأسهل لإدارة السناتر التعليمية",
    description:
      "قم بإدارة سنترك التعليمي بكفاءة مع نظام الحصة المتكامل.",
    url: "https://el7essa.com",
    siteName: "الحصة",
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "الحصة - النظام الأسهل لإدارة السناتر التعليمية",
    description:
      "نظام متكامل صُمم خصيصاً للمعلمين لتسهيل إدارة الحصص، متابعة الغياب، تنظيم الحسابات، وتوفير تطبيق خاص لطلابك.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.ico",
  },
};

import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
