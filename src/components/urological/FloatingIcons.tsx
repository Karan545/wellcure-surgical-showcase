
import React from "react";
import { motion } from "framer-motion";
import { Droplets, Beaker, FlaskConical, Microscope } from "lucide-react";

// Component for rendering floating medical icons with animation
const FloatingIcons: React.FC = () => {
  // Define each floating icon with its specific properties
  const floatingIcons = [
    { 
      icon: <Droplets className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />, 
      delay: 0, 
      duration: 15, 
      x: 100, 
      y: 100 
    },
    { 
      icon: <Beaker className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />, 
      delay: 2, 
      duration: 20, 
      x: 500, 
      y: 200 
    },
    { 
      icon: <FlaskConical className="w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14" />, 
      delay: 4, 
      duration: 18, 
      x: 200, 
      y: 400 
    },
    { 
      icon: <Microscope className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />, 
      delay: 6, 
      duration: 16, 
      x: 700, 
      y: 300 
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-gray-100 opacity-10"
          initial={{ x: item.x, y: item.y }}
          animate={{ 
            x: item.x + 50,
            y: item.y + 50,
            rotate: 360
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
