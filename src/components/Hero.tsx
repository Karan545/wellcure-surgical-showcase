
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1280&q=80",
      alt: "Medical professional wearing surgical gloves"
    },
    {
      url: "https://images.unsplash.com/photo-1609188944224-a81b9bbce4db?auto=format&fit=crop&w=1280&q=80",
      alt: "Surgical gloves manufacturing facility"
    },
    {
      url: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1280&q=80",
      alt: "Doctor examining patient with medical gauges"
    },
    {
      url: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a31?auto=format&fit=crop&w=1280&q=80",
      alt: "Surgical procedure with gloved hands"
    }
  ];

  useEffect(() => {
    // Preload images to prevent lag during transitions
    images.forEach(image => {
      const img = new Image();
      img.src = image.url;
    });

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Increased transition time for better UX

    return () => clearInterval(timer);
  }, []);

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
    <section className="relative h-[60vh] md:h-[70vh] mt-12 md:mt-16 w-full bg-gradient-to-r from-medical-50 to-medical-100 overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ x: "100%" }}
            animate={{ 
              x: index === currentImage ? "0%" : 
                 index === ((currentImage - 1 + images.length) % images.length) ? "-100%" : "100%"
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ willChange: 'transform' }}
          >
            {/* Gradient overlay adjusted for better text visibility on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-medical-50/40 to-medical-100/40 md:from-medical-50/20 md:to-medical-100/20" />
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        ))}
      </div>

      <div className="container relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Wellcure Surgicals
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Leading Medical & Surgical Equipment Exporters
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-medical-500 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:bg-medical-600 transition-colors shadow-lg"
              onClick={scrollToProducts}
            >
              Explore Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border-2 border-white text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:bg-white/10 transition-colors shadow-lg"
              onClick={scrollToContact}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-4 md:bottom-8 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={scrollToContent}
        >
          <ArrowDownCircle size={32} className="text-white drop-shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
