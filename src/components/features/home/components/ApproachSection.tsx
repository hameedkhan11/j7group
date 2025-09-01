"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Card 1",
    backgroundImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
  },
  {
    id: 2,
    title: "Card 2",
    backgroundImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop",
  },
  {
    id: 3,
    title: "Card 3",
    backgroundImage:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=800&fit=crop",
  },
  {
    id: 4,
    title: "Card 4",
    backgroundImage:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=800&fit=crop",
  },
];

export default function StickyCardsDemo() {
  const ref = useRef<HTMLDivElement>(null);

  // total scroll = (number of cards + some buffer) * 100vh
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero */}
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">Sticky Cards Demo</h1>
      </div>

      {/* Sticky stack container */}
      <div ref={ref} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          {cards.map((card, i) => {
            // each card fades out as you scroll further
            const start = i / cards.length;
            const end = (i + 1) / cards.length;

            const y = useTransform(
              scrollYProgress,
              [start, end],
              ["0%", "-120%"]
            );

            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [1, 0]
            );

            return (
              <motion.div
                key={card.id}
                style={{ y, opacity, zIndex: cards.length - i }}
                className="absolute w-[80%] h-[80%] rounded-2xl shadow-2xl overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <h2 className="text-6xl font-bold drop-shadow-xl">
                    {card.title}
                  </h2>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">End of Demo</h2>
      </div>
    </div>
  );
}
