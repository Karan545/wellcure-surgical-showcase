
import React from "react";

interface CategoryBannerProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CategoryBanner = ({ title, description, imageUrl }: CategoryBannerProps) => {
  return (
    <section className="px-4 py-8">
      <div className="container mx-auto">
        <div className="relative h-[250px] rounded-xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={imageUrl}
              alt={`${title} Banner`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full z-10 flex flex-col justify-center items-center text-center text-white px-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
            <p className="max-w-2xl mx-auto text-base md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;
