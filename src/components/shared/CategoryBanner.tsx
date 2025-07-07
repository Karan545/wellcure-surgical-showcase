import React from "react";
import { motion } from "framer-motion";
import { getProductImage } from "@/utils/imageUtils";

interface CategoryBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  altText?: string;
}

const CategoryBanner = ({ 
  title, 
  description, 
  imageUrl, 
  altText 
}: CategoryBannerProps) => {
  console.log(`CategoryBanner rendering with image: ${imageUrl}`);
  
  return (
    <section className="px-0 py-0 mt-14 md:mt-16 lg:mt-20 relative">
      <div className="w-full">
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden">
          {/* Hero Image */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              src={imageUrl}
              alt={altText || `${title} Banner`}
              className="w-full h-full object-cover" 
              loading="eager"
              initial={{ scale: 1.1, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              onError={(e) => {
                console.error(`Failed to load banner image: ${imageUrl}`);
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content Overlay */}
          <div className="relative h-full z-10 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-8">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.2,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1,
                delay: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {description}
            </motion.p>
          </div>

          {/* Professional Curved Bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-20">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className="w-full h-[60px] md:h-[80px] lg:h-[100px]"
            >
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,1)" />
                </linearGradient>
              </defs>
              <path 
                d="M0,120 L0,60 Q150,0 300,20 T600,40 Q750,50 900,30 T1200,60 L1200,120 Z" 
                fill="url(#curveGradient)"
                className="drop-shadow-lg"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;