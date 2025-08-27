"use client";
import React from "react";
import { motion } from "framer-motion";

const texts = [
  "WEDDINGS",
  "CONFERENCES",
  "BIRTHDAYS",
  "PROPOSALS",
  "BRIDAL SHOWER",
];

const TextCarousal = () => {
  return (
    <div className="relative w-full h-[77px] overflow-hidden bg-[#F9F4F1] flex items-center">
      <motion.div
        className="flex gap-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {[...texts, ...texts].map((text, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <span className="text-lg font-semibold text-[#424142] whitespace-nowrap">
              {text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TextCarousal;
