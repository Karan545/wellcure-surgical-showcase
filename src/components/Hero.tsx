
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: "https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_1280.jpg",
      alt: "Surgical procedure in progress"
    },
    {
      url: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144",
      alt: "Medical professional wearing surgical gloves"
    },
    {
      url: "https://images.unsplash.com/photo-1609188944224-a81b9bbce4db",
      alt: "Surgical gloves manufacturing facility"
    },
    {
      url: "https://images.unsplash.com/photo-1603398938378-e54eab446dde",
      alt: "Doctor examining patient with medical gauges"
    },
    {
      url: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
      alt: "Surgical instruments on sterile tray"
    },
    {
      url: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a31",
      alt: "Surgical procedure with gloved hands"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

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
    <section className="relative h-[70vh] mt-16 w-full bg-gradient-to-r from-medical-50 to-medical-100 overflow-hidden">
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
          >
            {/* Reduced opacity of the gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-medical-50/20 to-medical-100/20" />
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      <div className="container relative h-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Wellcure Surgicals
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow-lg"
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
              className="bg-medical-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-medical-600 transition-colors shadow-lg"
              onClick={scrollToProducts}
            >
              Explore Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors shadow-lg"
              onClick={scrollToContact}
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
          <ArrowDownCircle size={40} className="text-white drop-shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
