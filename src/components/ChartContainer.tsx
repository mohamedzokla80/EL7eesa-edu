"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

interface ChartContainerProps {
  children: (width: number, height: number) => ReactNode;
  className?: string;
  dir?: string;
}

export default function ChartContainer({
  children,
  className,
  dir,
}: ChartContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (width > 0 && height > 0) {
        setSize({ width: Math.floor(width), height: Math.floor(height) });
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className} dir={dir}>
      {size.width > 0 && size.height > 0 && children(size.width, size.height)}
    </div>
  );
}
