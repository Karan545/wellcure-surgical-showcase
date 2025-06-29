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
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      key={product.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.imageAlt || product.title}
          className="product-image"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
            e.currentTarget.className = "product-image image-error";
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <Button className="w-full">Learn More</Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;