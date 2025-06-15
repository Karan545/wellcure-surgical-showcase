
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getProductImage } from "@/utils/imageUtils";
import ImageZoomDialog from "@/components/shared/ImageZoomDialog";

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
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <>
      <motion.div
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
            src={getProductImage(product.image)}
            alt={product.imageAlt || product.title}
            className="w-full h-48 object-cover transition-transform duration-150 hover:scale-105"
            loading="lazy"
            style={{ cursor: "zoom-in" }}
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
      <ImageZoomDialog
        open={isZoomOpen}
        onOpenChange={setIsZoomOpen}
        imageUrl={getProductImage(product.image)}
        alt={product.imageAlt || product.title}
      />
    </>
  );
};

export default ProductCard;
