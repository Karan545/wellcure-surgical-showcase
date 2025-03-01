
import { motion } from "framer-motion";
import React from "react";

interface FloatingIconProps {
  children: React.ReactNode;
  delay: number;
  duration: number;
  x: number;
  y: number;
}

const FloatingIcon = ({ children, delay, duration, x, y }: FloatingIconProps) => (
  <motion.div
    className="absolute text-gray-100 opacity-20"
    initial={{ x: x, y: y }}
    animate={{
      x: x + 50,
      y: y + 50,
      rotate: 360
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

export default FloatingIcon;
