
import React from "react";
import { motion } from "framer-motion";
import { Droplets, Beaker, FlaskConical, Microscope } from "lucide-react";

// Component for rendering floating medical icons with animation
const FloatingIcons: React.FC = () => {
  // Define each floating icon with its specific properties
  const floatingIcons = [
    { 
      icon: <Droplets size={48} />, 
      delay: 0, 
      duration: 15, 
      x: 100, 
      y: 100 
    },
    { 
      icon: <Beaker size={64} />, 
      delay: 2, 
      duration: 20, 
      x: 500, 
      y: 200 
    },
    { 
      icon: <FlaskConical size={56} />, 
      delay: 4, 
      duration: 18, 
      x: 200, 
      y: 400 
    },
    { 
      icon: <Microscope size={48} />, 
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
