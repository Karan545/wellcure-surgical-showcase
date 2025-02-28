
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: "https://unsplash.com/photos/a-person-in-a-hospital-bed-with-an-iv-zQEmEAb-WpY?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash?auto=format&fit=crop&q=80",
      alt: "Medical surgical tools and equipment"
    },
    {
      url: "https://images.unsplash.com/photo-1581093196277-9f608bb2c016?auto=format&fit=crop&q=80",
      alt: "Modern surgical operating room"
    },
    {
      url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80",
      alt: "Medical professional with surgical mask"
    },
    {
      url: "https://images.unsplash.com/photo-1582560475093-ba66accbc7f0?auto=format&fit=crop&q=80",
      alt: "Advanced medical diagnostic equipment"
    }
  ];

  useEffect(() => {
    // Preload images
    images.forEach(image => {
      const preloadImage = new Image();
      preloadImage.src = image.url;
      console.log(`Preloading image: ${image.url}`);
    });

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds for each image

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
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ willChange: 'transform' }}
          >
            {/* Darker gradient overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              onLoad={() => console.log(`Image ${index} loaded: ${image.url}`)}
              onError={(e) => console.error(`Image ${index} failed to load: ${image.url}`, e)}
            />
          </motion.div>
        ))}
      </div>

      <div className="container relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Revolutionizing Healthcare Excellence
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Empowering Medical Professionals with Premium Surgical Equipment & Innovative Healthcare Solutions
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 md:mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-medical-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:bg-medical-600 transition-colors shadow-lg text-lg"
              onClick={scrollToProducts}
            >
              Explore Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border-2 border-white text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:bg-white/10 transition-colors shadow-lg text-lg"
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
