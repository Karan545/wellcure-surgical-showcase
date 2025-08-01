
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      {/* Logo-inspired Animation */}
      <motion.div
        className="mb-6 relative"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Gradient Circle Background */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 flex items-center justify-center relative overflow-hidden">
          {/* Animated Heartbeat Wave */}
          <motion.svg
            width="60"
            height="40"
            viewBox="0 0 60 40"
            className="absolute"
          >
            <defs>
              <linearGradient id="fadeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="10%" stopColor="white" stopOpacity="0.3" />
                <stop offset="30%" stopColor="white" stopOpacity="1" />
                <stop offset="70%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            <motion.path
              d="M0,20 L8,20 L12,10 L16,30 L20,15 L24,25 L28,5 L32,35 L36,20 L44,20 L48,20 L52,15 L56,25 L60,20"
              fill="none"
              stroke="url(#fadeGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0],
                x: [-60, 0, 0, 60]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.7, 1]
              }}
            />
          </motion.svg>
        </div>
      </motion.div>

      {/* Loading Text */}
      <motion.p
        className="text-xl font-bold text-teal-600"
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
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
