
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { getProductImage } from "@/utils/imageUtils";
import React, { useState } from "react";
import ImageZoomDialog from "@/components/shared/ImageZoomDialog";

export interface Product {
  title: string;
  image: string;
  description: string;
  imageAlt?: string; // Added alt text for improved SEO
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <>
      <motion.div
        key={product.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      >
        <div
          className="aspect-w-16 aspect-h-12 cursor-zoom-in"
          onClick={() => setIsZoomOpen(true)}
          tabIndex={0}
          role="button"
          aria-label={`Zoom ${product.title} image`}
        >
          <img
            src={product.image}
            alt={product.imageAlt || product.title}
            className="w-full h-48 object-cover transition-transform duration-150 hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
            style={{ cursor: "zoom-in" }}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <Button className="w-full">Learn More</Button>
        </div>
      </motion.div>
      <ImageZoomDialog
        open={isZoomOpen}
        onOpenChange={setIsZoomOpen}
        imageUrl={product.image}
        alt={product.imageAlt || product.title}
      />
    </>
  );
};

export default ProductCard;
