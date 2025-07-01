import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { getProductImage } from "@/utils/imageUtils";
import React from "react";

export interface Product {
  title: string;
  image: string;
  description: string;
  imageAlt?: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
  onButtonClick?: (product: Product) => void;
  buttonText?: string;
}

const ProductCard = ({ product, index, onButtonClick, buttonText = "Learn More" }: ProductCardProps) => {
  // Determine if image should use object-contain for edge details
  const hasEdgeDetails = product.title.includes("Catheter") || 
                        product.title.includes("Cannula") || 
                        product.title.includes("Extension") ||
                        product.title.includes("Line") ||
                        product.title.includes("Set") ||
                        product.title.includes("Tube");

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick(product);
    }
  };

  return (
    <motion.div
      key={product.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="product-image-container">
        <img
          src={product.image}
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
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2">{product.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow">{product.description}</p>
        <Button 
          className="w-full mt-auto"
          onClick={handleButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;