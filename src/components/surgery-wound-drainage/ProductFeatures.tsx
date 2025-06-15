
import React from "react";

interface ProductFeaturesProps {
  features: string[];
}

const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">🔹</span>
        <h3 className="text-lg font-semibold text-gray-800">Key Features:</h3>
      </div>
      
      <div className="ml-6 space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-sm text-gray-400 mt-1">•</span>
            <p className="text-base text-gray-700">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;
