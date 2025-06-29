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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="aspect-w-16 aspect-h-12">
        <img
          src={getProductImage(product.image)}
          alt={product.imageAlt || product.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{product.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
        <Button 
          className="w-full ocean-to-forest-gradient text-white hover:shadow-lg transition-all"
          onClick={() => onButtonClick(product.title)}
        >
          {buttonText}
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;