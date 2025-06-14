
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { getProductImage } from "@/utils/imageUtils";
import { extensionTubes, ivInfusionSets, ivCannulas } from "@/data/infusion-therapy-data";
import { pressureMonitoringProducts, flowControlProducts, pediatricProducts } from "@/data/infusion-therapy-extended-data";
import ProductDetailsDialog from "./ProductDetailsDialog";

interface ProductDisplayProps {
  category: string;
}

const ProductDisplay = ({ category }: ProductDisplayProps) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getProducts = () => {
    switch (category) {
      case "extension-tubes":
        return extensionTubes;
      case "iv-sets":
        return ivInfusionSets;
      case "iv-cannulas":
        return ivCannulas;
      case "pressure-monitoring":
        return pressureMonitoringProducts;
      case "flow-control":
        return flowControlProducts;
      case "pediatric-sets":
        return pediatricProducts;
      default:
        return extensionTubes;
    }
  };

  const getCategoryTitle = () => {
    switch (category) {
      case "extension-tubes":
        return "Extension Tubes";
      case "iv-sets":
        return "I.V. Infusion Sets";
      case "iv-cannulas":
        return "I.V. Cannula";
      case "pressure-monitoring":
        return "Pressure Monitoring Lines & Kits";
      case "flow-control":
        return "Infusion Flow Control Devices";
      case "pediatric-sets":
        return "Pediatric Infusion Sets";
      default:
        return "Extension Tubes";
    }
  };

  const getCategoryDescription = () => {
    switch (category) {
      case "extension-tubes":
        return "High-quality extension tubes designed for various pressure applications in infusion therapy. Our range includes both standard and PVC-free options to meet diverse clinical requirements and environmental considerations.";
      case "iv-sets":
        return "Comprehensive range of intravenous infusion sets featuring various configurations including air vent systems, flow regulators, and micro-drip chambers for precise fluid administration and optimal patient care.";
      case "iv-cannulas":
        return "Advanced intravenous cannula collection featuring specialized designs for different clinical scenarios. Our cannula range includes safety mechanisms, various tip configurations, and specialized coatings for enhanced patient comfort and clinical efficiency.";
      case "pressure-monitoring":
        return "Precision pressure monitoring systems designed for real-time hemodynamic assessment in critical care environments. Our comprehensive kits include single, double, and triple-line configurations with needle-free connectors and various stopcock options.";
      case "flow-control":
        return "Advanced flow regulation systems for precise control of intravenous fluid delivery. These devices ensure consistent infusion rates and provide healthcare professionals with reliable tools for accurate medication administration.";
      case "pediatric-sets":
        return "Specialized infusion sets designed specifically for pediatric and neonatal patients. Our pediatric range includes burette sets for volume-controlled delivery and specialized I.V. sets with appropriate flow rates for child-safe fluid administration.";
      default:
        return "";
    }
  };

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProduct(null);
  };

  const hasProductDetails = (productTitle: string) => {
    // Add extension tubes products, I.V. Infusion Sets, I.V. Cannula products, and pressure monitoring products to the list of products with details
    return productTitle === "I.V. Flow Regulator Extension Set" || 
           productTitle === "I.V. Infusion Set with Flow Regulator" ||
           productTitle === "High Pressure Extension Line" ||
           productTitle === "Low Pressure Extension Line" ||
           productTitle === "PVC Free High Pressure Extension Line" ||
           productTitle === "I.V. Infusion Set with Airvent" ||
           productTitle === "I.V. Infusion Set with Micro Drip" ||
           productTitle === "I.V. Infusion Set without Airvent" ||
           productTitle === "I.V. Cannula-AZcan" ||
           productTitle === "I.V. Cannula-AZcath" ||
           productTitle === "I.V. Cannula-AZflon" ||
           productTitle === "I.V. Cannula-AZneo" ||
           productTitle === "I.V. Cannula-AZpen" ||
           productTitle === "I.V. Cannula-AZwin" ||
           productTitle === "Safety I.V. Cannula – AZSafe" ||
           productTitle === "Pressure Monitoring Line" ||
           productTitle === "Pressure Monitoring Kit (Single)" ||
           productTitle === "Pressure Monitoring Kit (Double)" ||
           productTitle === "Pressure Monitoring Kit (Triple)" ||
           productTitle === "Extension Line with Needle-Free Connectors" ||
           productTitle === "One Way Stopcock" ||
           productTitle === "Two Way Stopcock" ||
           productTitle === "Three Way Stopcock";
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
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getProductImage(product.image)}
                    alt={product.imageAlt || product.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
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
