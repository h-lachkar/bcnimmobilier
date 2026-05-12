"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CircleHighlight({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <span ref={ref} className="relative inline-block whitespace-nowrap px-[0.15em]">
      <span className="relative z-10">{children}</span>
      <motion.svg
        aria-hidden="true"
        className="absolute pointer-events-none overflow-visible"
        style={{
          top: "-10%",
          left: "-2%",
          width: "104%",
          height: "120%",
        }}
        viewBox="0 0 300 100"
        preserveAspectRatio="none"
      >
        <motion.ellipse
          cx="150"
          cy="52"
          rx="143"
          ry="42"
          fill="none"
          stroke="#D4602E"
          strokeWidth="3.5"
          strokeLinecap="round"
          transform="rotate(-1.5 150 50)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{
            pathLength: { duration: 1.1, ease: "easeOut", delay: 0.25 },
            opacity: { duration: 0.1 },
          }}
        />
      </motion.svg>
    </span>
  );
}
