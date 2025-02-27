
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      url: "https://cdn.pixabay.com/vimeo/545841291/business-83880.mp4?width=1280&hash=31dbe18c825ea25a0bebe4c32311f23e2ff7a74a",
      alt: "Business handshake deal"
    },
    {
      url: "https://cdn.pixabay.com/vimeo/909519301/manufacturing-176963.mp4?width=1280&hash=8c6b77677e4ce84dd4f92c00dea276e8dbf6a3e5",
      alt: "Factory workers manufacturing"
    },
    {
      url: "https://cdn.pixabay.com/vimeo/535429543/surgery-79712.mp4?width=1280&hash=a1c11591265aa0a1e20dbae10e3d8bb8b31e81c9",
      alt: "Surgery in progress"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000); // 5 seconds for each video

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
      {/* Video Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ x: "100%" }}
            animate={{ 
              x: index === currentVideo ? "0%" : 
                 index === ((currentVideo - 1 + videos.length) % videos.length) ? "-100%" : "100%"
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ willChange: 'transform' }}
          >
            {/* Darker gradient overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
            <video
              src={video.url}
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Video failed to load:', video.url);
              }}
            >
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
