import { ArrowDownCircle } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[60vh] md:h-[65vh] lg:h-[70vh] mt-16 md:mt-20 w-full overflow-hidden">
      {/* Full Width Hero Image with Minimal Gradient Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003b5c]/30 to-[#1f5f5b]/25 z-10" />
        <img
          src="/surgical-operation-theatre.png"
          alt="Professional surgical operation theatre with medical team performing surgery"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6 max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-xl leading-tight px-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Revolutionizing Healthcare Excellence
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-3xl mx-auto drop-shadow-lg font-medium leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Empowering Medical Professionals with Premium Surgical Equipment & Innovative Healthcare Solutions
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-6 md:mt-8 lg:mt-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-[#003b5c] px-6 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm md:text-base lg:text-lg min-w-[160px]"
              onClick={scrollToProducts}
            >
              Explore Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border-2 border-white text-white px-6 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 rounded-full font-semibold hover:bg-white hover:text-[#003b5c] transition-colors shadow-lg text-sm md:text-base lg:text-lg min-w-[160px]"
              onClick={scrollToContact}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-4 md:bottom-6 lg:bottom-8 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={scrollToContent}
        >
          <ArrowDownCircle size={28} className="md:w-8 md:h-8 lg:w-10 lg:h-10 text-white drop-shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;