
import React from "react";

interface CategoryBannerProps {
  title: string;
  description: string;
}
const CategoryBanner: React.FC<CategoryBannerProps> = ({ title, description }) => (
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
    <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
      {description}
    </p>
  </div>
);

export default CategoryBanner;
