"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionStringProps {
  className?: string;
  array: {
    id: number;
    text: string;
  }[];
}
export const MotionString = ({ className, array = [] }: MotionStringProps) => {
  const listVariants = {
    visible: { transition: { staggerChildren: 0.5 } },
  };
  return (
    <motion.ul
      className={cn("text-fontSize-18-24 flex flex-col gap-10", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={listVariants}
    >
      {array.map((feature) => (
        <motion.li
          key={feature.id}
          className="xs:pl-5 flex items-center gap-3 pl-0 lg:pl-0"
          variants={{
            hidden: { opacity: 0, x: 250 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="bg-brand-components flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-full text-white sm:h-[45px] sm:w-[45px]">
            {feature.id}
          </span>
          {feature.text}
        </motion.li>
      ))}
    </motion.ul>
  );
};
