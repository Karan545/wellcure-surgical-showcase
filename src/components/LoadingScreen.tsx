
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      {/* Simple Heartbeat Animation */}
      <motion.div
        className="mb-6"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="120"
          height="60"
          viewBox="0 0 120 60"
          className="text-teal-600"
          fill="none"
        >
          {/* Heartbeat Line with Fade Effect */}
          <defs>
            <linearGradient id="heartbeatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
              <stop offset="20%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="80%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M10 30 L25 30 L35 15 L45 45 L55 10 L65 50 L75 30 L110 30"
            stroke="url(#heartbeatGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0] 
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.7, 1]
            }}
          />
        </svg>
      </motion.div>

      {/* Simple Loading Text */}
      <motion.p
        className="text-2xl font-bold text-teal-600"
        animate={{
          opacity: [0.6, 1, 0.6],
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
