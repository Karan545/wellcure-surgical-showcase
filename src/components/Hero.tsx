
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos = [
    {
      url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      alt: "Medical professionals in discussion"
    },
    {
      url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      alt: "Surgical equipment manufacturing"
    },
    {
      url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      alt: "Modern healthcare facility"
    }
  ];

  useEffect(() => {
    // Preload videos
    videos.forEach(video => {
      const preloadVideo = document.createElement('video');
      preloadVideo.src = video.url;
      preloadVideo.muted = true;
      preloadVideo.preload = 'auto';
      preloadVideo.load();
      console.log(`Preloading video: ${video.url}`);
    });

    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000); // 5 seconds for each video

    return () => clearInterval(timer);
  }, []);

  // Update videoRefs when currentVideo changes
  useEffect(() => {
    // Attempt to play the current video
    if (videoRefs.current[currentVideo]) {
      const videoElement = videoRefs.current[currentVideo];
      if (videoElement) {
        const playPromise = videoElement.play();
        // Handle the play promise to avoid uncaught promise errors
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log(`Successfully playing video ${currentVideo}`);
            })
            .catch(error => {
              console.error(`Error playing video ${currentVideo}:`, error);
            });
        }
      }
    }
  }, [currentVideo]);

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
              ref={el => videoRefs.current[index] = el}
              muted
              playsInline
              loop
              className="w-full h-full object-cover"
              onLoadedData={() => console.log(`Video ${index} loaded: ${video.url}`)}
              onError={(e) => console.error(`Video ${index} failed to load: ${video.url}`, e)}
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
