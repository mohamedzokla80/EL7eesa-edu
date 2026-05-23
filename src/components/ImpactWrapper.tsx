"use client";

import dynamic from "next/dynamic";

const Impact = dynamic(() => import("@/components/Impact"), {
  ssr: false,
  loading: () => (
    <div className="py-24 flex justify-center">
      <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function ImpactWrapper() {
  return <Impact />;
}
