import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { getProductImage } from "@/utils/imageUtils";
import { 
  surgicalDrainageProducts, 
  surgicalSuctionProducts, 
  surgicalRetractionProducts 
} from "@/data/surgery-wound-drainage-data";
import ProductDetailsDialog from "./ProductDetailsDialog";
import SEOProductStructure from "@/components/SEOProductStructure";

interface ProductDisplayProps {
  category: string;
}

const ProductDisplay = ({ category }: ProductDisplayProps) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getProducts = () => {
    switch (category) {
      case "surgical-drainage":
        return surgicalDrainageProducts;
      case "surgical-suction":
        return surgicalSuctionProducts;
      case "surgical-retraction":
        return surgicalRetractionProducts;
      default:
        return surgicalDrainageProducts;
    }
  };

  const getCategoryTitle = () => {
    switch (category) {
      case "surgical-drainage":
        return "Surgical Drainage & Collection Systems";
      case "surgical-suction":
        return "Surgical Suction Instruments";
      case "surgical-retraction":
        return "Surgical Retraction & Isolation Tools";
      default:
        return "Surgical Drainage & Collection Systems";
    }
  };

  const getCategoryDescription = () => {
    switch (category) {
      case "surgical-drainage":
        return "Comprehensive drainage systems designed for post-operative fluid management and infection prevention. Our collection includes wound drainage systems, thoracic catheters, and specialized drainage devices for various surgical applications.";
      case "surgical-suction":
        return "High-performance suction instruments essential for maintaining clear surgical fields and effective airway management. Our suction sets provide reliable vacuum pressure for various operating room procedures and critical care scenarios.";
      case "surgical-retraction":
        return "Precision surgical tools designed for vessel isolation and tissue retraction during complex surgical procedures. These instruments provide surgeons with the control and visibility needed for safe and effective vascular and cardiac surgery.";
      default:
        return "";
    }
  };

  const hasProductDetails = (productTitle: string) => {
    // Products that have detailed information available
    const productsWithDetails = [
      "Wound Drainage System",
      "Thoracic Drainage Catheter (Angled)",
      "Thoracic Drainage Catheter (Straight)",
      "Thoracic Drainage System",
      "Surgical Drain",
      "Surgical Suction Set",
      "Yankauer Suction Set",
      "Vessel Loops"
    ];

    return productsWithDetails.includes(productTitle);
  };

  const handleProductClick = (product: any) => {
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
      <SEOProductStructure
        products={products}
        category={getCategoryTitle()}
        categoryDescription={getCategoryDescription()}
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{getCategoryTitle()}</h2>
          <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
            {getCategoryDescription()}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            // Determine if image should use object-contain for edge details
            const hasEdgeDetails = product.title.includes("Catheter") || 
                                  product.title.includes("Tube") || 
                                  product.title.includes("Loop") ||
                                  product.title.includes("Set") ||
                                  product.title.includes("System");

            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                  <div className="product-image-container">
                    <img
                      src={getProductImage(product.image)}
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
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base line-clamp-3">{product.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    {hasProductDetails(product.title) ? (
                      <Button 
                        className="w-full" 
                        onClick={() => handleProductClick(product)}
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