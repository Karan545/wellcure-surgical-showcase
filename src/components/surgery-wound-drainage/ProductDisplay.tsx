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
import ImageZoomDialog from "@/components/shared/ImageZoomDialog";

interface ProductDisplayProps {
  category: string;
}

const ProductDisplay = ({ category }: ProductDisplayProps) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomedAlt, setZoomedAlt] = useState<string | undefined>(undefined);

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
    // Products in the surgical-drainage category that have detailed information
    const drainageProducts = [
      "Wound Drainage System",
      "Thoracic Drainage Catheter (Angled)",
      "Thoracic Drainage Catheter (Straight)",
      "Thoracic Drainage System",
      "Surgical Drain"
    ];

    // Products in the surgical-suction category that have detailed information
    const suctionProducts = [
      "Surgical Suction Set",
      "Yankauer Suction Set"
    ];

    // Products in the surgical-retraction category that have detailed information
    const retractionProducts = [
      "Vessel Loops"
    ];

    return (category === "surgical-drainage" && drainageProducts.includes(productTitle)) ||
           (category === "surgical-suction" && suctionProducts.includes(productTitle)) ||
           (category === "surgical-retraction" && retractionProducts.includes(productTitle));
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{getCategoryTitle()}</h2>
          <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
            {getCategoryDescription()}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                <div
                  className="relative h-48 overflow-hidden cursor-zoom-in"
                  onClick={() => {
                    setZoomedImage(getProductImage(product.image));
                    setZoomedAlt(product.imageAlt || product.title);
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Zoom ${product.title} image`}
                >
                  <img
                    src={getProductImage(product.image)}
                    alt={product.imageAlt || product.title}
                    className="w-full h-full object-cover transition-transform duration-150 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                    style={{ cursor: "zoom-in" }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{product.description}</CardDescription>
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
          ))}
        </div>
      </div>

      <ImageZoomDialog
        open={!!zoomedImage}
        onOpenChange={() => setZoomedImage(null)}
        imageUrl={zoomedImage || ""}
        alt={zoomedAlt}
      />

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
