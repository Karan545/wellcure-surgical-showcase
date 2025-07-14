
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      {/* Animated Logo with Heartbeat */}
      <motion.div
        className="relative flex items-center justify-center mb-8"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Logo Background Circle */}
        <motion.div
          className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center"
          animate={{
            boxShadow: [
              "0 0 20px rgba(20, 184, 166, 0.3)",
              "0 0 40px rgba(20, 184, 166, 0.6)",
              "0 0 20px rgba(20, 184, 166, 0.3)"
            ],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Animated Heartbeat Wave */}
          <svg
            width="80"
            height="40"
            viewBox="0 0 80 40"
            className="text-white"
            fill="currentColor"
          >
            <motion.path
              d="M5 20 L15 20 L20 10 L25 30 L30 5 L35 35 L40 20 L75 20"
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
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.2, 0.8, 1]
              }}
            />
          </svg>
        </motion.div>

        {/* Pulsing Rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-teal-300"
          animate={{
            scale: [1, 1.8],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-teal-400"
          animate={{
            scale: [1, 1.5],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.3,
          }}
        />
      </motion.div>

      {/* Animated Loading Text */}
      <motion.div className="text-center">
        <motion.h2
          className="text-2xl font-bold text-teal-600 mb-2"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Wellcure Surgicals
        </motion.h2>
        <motion.p
          className="text-lg text-teal-500"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          Loading Healthcare Solutions...
        </motion.p>
        
        {/* Loading Dots */}
        <div className="flex justify-center items-center mt-4 space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-teal-500 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
