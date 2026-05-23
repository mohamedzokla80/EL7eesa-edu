import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "سيستمني - النظام الأسهل لإدارة السناتر التعليمية",
  description:
    "نظام متكامل صُمم خصيصاً للمعلمين لتسهيل إدارة الحصص، متابعة الغياب، تنظيم الحسابات، وتوفير تطبيق خاص لطلابك. كل هذا من مكان واحد لتوفر وقتك ومجهودك.",
  keywords: [
    "سيستمني",
    "إدارة سنتر",
    "نظام إدارة تعليمي",
    "حضور وغياب",
    "تطبيق طلاب",
    "إدارة حسابات سنتر",
    "امتحانات إلكترونية",
    "سنتر تعليمي",
    "نظام إدارة المعلمين",
  ],
  authors: [{ name: "سيستمني" }],
  creator: "سيستمني",
  publisher: "سيستمني",
  openGraph: {
    title: "سيستمني - النظام الأسهل لإدارة السناتر التعليمية",
    description:
      "نظام متكامل صُمم خصيصاً للمعلمين لتسهيل إدارة الحصص، متابعة الغياب، تنظيم الحسابات، وتوفير تطبيق خاص لطلابك.",
    type: "website",
    locale: "ar_EG",
    siteName: "سيستمني",
  },
  twitter: {
    card: "summary_large_image",
    title: "سيستمني - النظام الأسهل لإدارة السناتر التعليمية",
    description:
      "نظام متكامل صُمم خصيصاً للمعلمين لتسهيل إدارة الحصص، متابعة الغياب، تنظيم الحسابات، وتوفير تطبيق خاص لطلابك.",
  },
  robots: {
    index: true,
    follow: true,
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
