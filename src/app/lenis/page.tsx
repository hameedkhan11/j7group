"use client";

import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Step({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  // track scroll progress for each step
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // shrink current step height from 100% → 10%
  const height = useTransform(scrollYProgress, [0, 1], ["100%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.5]);

  return (
    <section ref={ref} className="relative h-[200vh]">
      <motion.div
        style={{ height, opacity }}
        className="sticky top-0 h-[90vh] flex items-center justify-center bg-white shadow-xl rounded-xl border text-3xl font-bold"
      >
        {children}
      </motion.div>
    </section>
  );
}

export default function Page() {
  return (
    <ReactLenis root options={{ smoothWheel: true, lerp: 0.1 }}>
      <main className="space-y-[50vh] bg-gray-100">
        <Step index={1}>Step 1</Step>
        <Step index={2}>Step 2</Step>
        <Step index={3}>Step 3</Step>
        <Step index={4}>Step 4</Step>
      </main>
    </ReactLenis>
  );
}
