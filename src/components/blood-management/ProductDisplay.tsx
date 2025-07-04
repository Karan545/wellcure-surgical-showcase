
import React, { useState } from "react";
import { createImagePath } from "@/utils/imageUtils";
import { Button } from "@/components/ui/button";
import ProductModal from "../anaesthesia/ProductModal";
import { bloodManagementProductDetails } from "@/data/blood-management-product-details";
import { motion } from "framer-motion";

const CATEGORY_PATH = "Blood-Management-Solutions";

const products = [
  {
    title: "Blood Administration Set without Air Vent",
    image: `/Product-images/${CATEGORY_PATH}/Blood-Administration-Set-without-Air-Vent.jpg`,
    imageAlt: "High-quality blood administration set for safe transfusions",
    description: "A sterile, single-use blood transfusion set for safe and efficient delivery of blood and blood components."
  },
  {
    title: "Blood Administration Set with Air Vent",
    image: `/Product-images/${CATEGORY_PATH}/Blood-Administration-Set-with-Air-Vent.avif`,
    imageAlt: "Premium blood administration set with integrated air vent",
    description: "A sterile blood transfusion set with an air vent for safe and efficient delivery from rigid bottles."
  }
];

const ProductDisplay = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleGetDetails = (productTitle: string) => {
    setSelectedProduct(productTitle);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProduct(null);
  };

  const selectedProductDetail =
    selectedProduct && bloodManagementProductDetails[selectedProduct]
      ? {
          ...bloodManagementProductDetails[selectedProduct],
          image:
            products.find((p: any) => p.title === selectedProduct)?.image ||
            bloodManagementProductDetails[selectedProduct].image,
          imageAlt:
            products.find((p: any) => p.title === selectedProduct)?.imageAlt ||
            undefined,
        }
      : null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => {
          const hasEdgeDetails = product.title.includes("Set") || 
                                product.title.includes("Administration") ||
                                product.title.includes("Tube") ||
                                product.title.includes("Line");

          return (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              style={{ minHeight: '450px' }}
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
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2">{product.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">{product.description}</p>
                <div className="mt-auto">
                  <Button
                    className="w-full bg-[#6c63ff] text-white hover:bg-[#5147b2] transition-all font-semibold"
                    onClick={() => handleGetDetails(product.title)}
                    aria-label={`Get details about ${product.title}`}
                  >
                    Get Details
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <ProductModal
        isOpen={isDialogOpen && !!selectedProductDetail}
        onClose={handleCloseDialog}
        product={selectedProductDetail}
      />
    </>
  );
};

export default ProductDisplay;
