
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      {/* Medical Heartbeat Wave Animation */}
      <motion.div
        className="mb-8"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="120"
          height="80"
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-teal-600"
        >
          {/* Heartbeat Wave Path */}
          <motion.path
            d="M10 40 L25 40 L30 20 L35 60 L40 10 L45 70 L50 40 L110 40"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.7, 1]
            }}
          />
          
          {/* Animated Pulse Dot */}
          <motion.circle
            cx="60"
            cy="40"
            r="4"
            fill="currentColor"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>

      {/* Loading Text with Heartbeat Sync */}
      <motion.div
        className="text-center"
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <h2 className="text-2xl font-bold text-teal-600 mb-2">WellCure Surgicals</h2>
        <p className="text-lg text-teal-500">Loading medical solutions...</p>
        
        {/* Pulse indicator */}
        <motion.div
          className="mt-4 flex justify-center space-x-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-teal-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
