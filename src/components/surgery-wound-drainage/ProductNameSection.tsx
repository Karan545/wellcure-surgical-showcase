
import React from "react";

interface ProductNameSectionProps {
  name: string;
}

const ProductNameSection = ({ name }: ProductNameSectionProps) => {
  return (
    <div className="border-b border-gray-200 pb-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">🔗</span>
        <h3 className="text-lg font-semibold text-gray-800">Product Name:</h3>
      </div>
      <p className="text-base text-gray-700 ml-6">{name}</p>
    </div>
  );
};

export default ProductNameSection;
