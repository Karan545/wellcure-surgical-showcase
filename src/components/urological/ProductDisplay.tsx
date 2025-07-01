
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { getProductImage } from "@/utils/imageUtils";
import { UrineCollectionBags, UrineDrainageCatheters } from "@/data/urological-data";
import { CentralVenousDevices, DialysisCatheters } from "@/data/urological-extended-data";
import ProductDetailsDialog from "./ProductDetailsDialog";

interface ProductDisplayProps {
  category: string;
}

const ProductDisplay = ({ category }: ProductDisplayProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ title: string } | null>(null);

  const getProducts = () => {
    switch (category) {
      case "urine-bags":
        return UrineCollectionBags;
      case "urine-drainage":
        return UrineDrainageCatheters;
      case "central-venous":
        return CentralVenousDevices;
      case "dialysis":
        return DialysisCatheters;
      default:
        return UrineCollectionBags;
    }
  };

  const getCategoryTitle = () => {
    switch (category) {
      case "urine-bags":
        return "Urine Collection Bags";
      case "urine-drainage":
        return "Urine Drainage Catheters";
      case "central-venous":
        return "Central Venous Access Devices";
      case "dialysis":
        return "Dialysis Catheters";
      default:
        return "Urine Collection Bags";
    }
  };

  const getCategoryDescription = () => {
    switch (category) {
      case "urine-bags":
        return "Comprehensive range of urine collection bags designed for various patient demographics and clinical requirements. Our collection includes pediatric-specific designs, measured volume chambers, and specialized outlet configurations to meet diverse healthcare facility needs.";
      case "urine-drainage":
        return "High-quality urinary catheters engineered for patient comfort and clinical efficiency. Our catheter range includes specialized designs for different patient populations and clinical scenarios, ensuring optimal drainage and minimal discomfort.";
      case "central-venous":
        return "Advanced central venous catheter systems for critical care and intensive care unit applications. These devices provide reliable vascular access for complex medical procedures, medication administration, and continuous monitoring in urological and critical care settings.";
      case "dialysis":
        return "Specialized hemodialysis catheters designed for renal replacement therapy and dialysis applications. Our dialysis catheter range includes both temporary and long-term access solutions for chronic kidney disease management and acute renal failure treatment.";
      default:
        return "";
    }
  };

  const hasProductDetails = (productTitle: string) => {
    const productsWithDetails = [
      "Pediatric Urine Collection Bag",
      "Urine Collection Bag with Measured Volume Meter",
      "Urine Collection Bag with Top Outlet",
      "Urine Collection Bag with T-type Bottom Outlet & Sampling Port",
      "Urine Collection Bag with Bottom Outlet",
      "Urine Collection Bag with Handle and Top Outlet",
      "Urine Collection Bag with NRV",
      "Female Catheter",
      "Rectal Catheter",
      "Nelaton Catheter",
      "Central Venous Catheter Kit",
      "Multi-Lumen Central Catheter",
      "CVC Kit (Single Lumen)",
      "CVC Kit (Double Lumen)",
      "CVC Kit (Triple Lumen)",
      "CVC Kit (Four Lumen)",
      "Arterial Catheter Kit",
      "Arterial Catheter Kit with Extension",
      "Hemodialysis Catheter (Single Lumen)",
      "Hemodialysis Catheter (Double Lumen)",
      "Hemodialysis Catheter (Triple Lumen)",
      "Long Term Hemodialysis Catheter"
    ];

    return productsWithDetails.includes(productTitle);
  };

  const handleGetDetails = (product: { title: string }) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProduct(null);
  };

  const products = getProducts();

  return (
    <section className="py-16 bg-white/80 backdrop-blur-sm relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{getCategoryTitle()}</h2>
          <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
            {getCategoryDescription()}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const productImages = (product as any).images || [product.image];
            
            const hasEdgeDetails = product.title.includes("Catheter") || 
                                  product.title.includes("Bag") || 
                                  product.title.includes("Kit") ||
                                  product.title.includes("CVC") ||
                                  product.title.includes("Dialysis");
            
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col" style={{ minHeight: '450px' }}>
                  <div className="product-image-container">
                    <img
                      src={getProductImage(productImages[0])}
                      alt={product.imageAlt || product.title}
                      className={hasEdgeDetails ? "product-image-contain" : "product-image"}
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                        e.currentTarget.className = "product-image-error";
                        e.currentTarget.textContent = "Image not available";
                      }}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-base line-clamp-3">{product.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    {hasProductDetails(product.title) ? (
                      <Button 
                        className="w-full"
                        onClick={() => handleGetDetails(product)}
                      >
                        Get Details
                      </Button>
                    ) : (
                      <Button className="w-full">Request Quote</Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {selectedProduct && (
        <ProductDetailsDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          product={selectedProduct}
        />
      )}
    </section>
  );
};

export default ProductDisplay;
