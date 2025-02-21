
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-[100vh] w-full bg-gradient-to-r from-medical-50 to-medical-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 hover:opacity-15 transition-opacity duration-500" />
      <div className="container relative h-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Wellcure Surgicals
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Leading Medical & Surgical Equipment Exporters
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-medical-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-medical-600 transition-colors"
            >
              Explore Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-medical-500 text-medical-500 px-8 py-3 rounded-full font-semibold hover:bg-medical-50 transition-colors"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={scrollToContent}
        >
          <ArrowDownCircle size={40} className="text-medical-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
