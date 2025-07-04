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
    <section className="px-3 py-6 mt-14 md:mt-16 lg:mt-20 md:px-4 md:py-8">
      <div className="container mx-auto">
        <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              src={imageUrl}
              alt={altText || `${title} Banner`}
              className="w-full h-full object-cover" 
              loading="eager" // For better performance as this is above the fold
              initial={{ scale: 1.1, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 8,
                ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth professional feel
              }}
              onError={(e) => {
                console.error(`Failed to load banner image: ${imageUrl}`);
                e.currentTarget.src = "/placeholder.svg"; // Fallback to placeholder if image fails to load
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;