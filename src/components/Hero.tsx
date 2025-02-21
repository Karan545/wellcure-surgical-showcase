
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full bg-gradient-to-r from-medical-50 to-medical-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      <div className="container relative h-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Wellcure Surgicals
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
            Leading Medical & Surgical Equipment Exporters
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
