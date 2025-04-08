
import React from "react";
import { motion } from "framer-motion";
import { Syringe, Bandage, Stethoscope, Thermometer } from "lucide-react";

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

const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <FloatingIcon delay={0} duration={15} x={100} y={100}>
        <Syringe size={48} />
      </FloatingIcon>
      <FloatingIcon delay={2} duration={20} x={500} y={200}>
        <Bandage size={64} />
      </FloatingIcon>
      <FloatingIcon delay={4} duration={18} x={200} y={400}>
        <Stethoscope size={56} />
      </FloatingIcon>
      <FloatingIcon delay={6} duration={16} x={700} y={300}>
        <Thermometer size={48} />
      </FloatingIcon>
      <FloatingIcon delay={8} duration={22} x={900} y={500}>
        <Bandage size={72} />
      </FloatingIcon>
      <FloatingIcon delay={10} duration={19} x={300} y={600}>
        <Syringe size={52} />
      </FloatingIcon>
    </div>
  );
};

export default FloatingIcons;
