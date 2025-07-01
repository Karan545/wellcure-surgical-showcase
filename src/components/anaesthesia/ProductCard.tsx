
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getProductImage } from "@/utils/imageUtils";

interface ProductCardProps {
  product: {
    title: string;
    image: string;
    imageAlt: string;
    description: string;
  };
  index: number;
  buttonText: string;
  onButtonClick: (title: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  buttonText,
  onButtonClick
}) => {
  const hasEdgeDetails = product.title.includes("Catheter") || 
                        product.title.includes("Cannula") || 
                        product.title.includes("Tube") ||
                        product.title.includes("Scale") ||
                        product.title.includes("Measuring");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg md:rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
      style={{ minHeight: '380px' }}
    >
      <div className="product-image-container">
        <img
          src={getProductImage(product.image)}
          alt={product.imageAlt || product.title}
          className={hasEdgeDetails ? "product-image-contain" : "product-image"}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
            e.currentTarget.className = "product-image-error";
            e.currentTarget.textContent = "Image not available";
          }}
        />
      </div>
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 line-clamp-2">{product.title}</h3>
        <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed flex-1">{product.description}</p>
        <div className="mt-auto">
          <Button 
            className="w-full ocean-to-forest-gradient text-white hover:shadow-lg transition-all text-sm sm:text-base py-2 sm:py-2.5"
            onClick={() => onButtonClick(product.title)}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
