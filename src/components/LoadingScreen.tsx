
import { motion } from "framer-motion";
import { Syringe } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <motion.div
        className="relative"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Syringe size={64} className="text-medical-500" />
        <motion.div
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-medical-500 rounded-full"
          animate={{
            y: [-50, -100],
            opacity: [1, 0],
            scale: [1, 2],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </motion.div>
      <motion.p
        className="mt-4 text-xl font-semibold text-medical-500"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default LoadingScreen;
