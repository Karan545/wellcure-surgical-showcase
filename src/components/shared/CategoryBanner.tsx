
import React from "react";
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
    <section className="px-4 py-8 mt-6">
      <div className="container mx-auto">
        <div className="relative h-[375px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={imageUrl}
              alt={altText || `${title} Banner`}
              className="w-full h-full object-cover"
              loading="eager" // For better performance as this is above the fold
              onError={(e) => {
                console.error(`Failed to load banner image: ${imageUrl}`);
                e.currentTarget.src = "/placeholder.svg"; // Fallback to placeholder if image fails to load
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full z-10 flex flex-col justify-center items-center text-center text-white px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;
