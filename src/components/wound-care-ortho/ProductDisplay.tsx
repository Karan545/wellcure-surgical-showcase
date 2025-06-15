import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { getProductImage, createImagePath } from "@/utils/imageUtils";
import ProductDetailsDialog from "./ProductDetailsDialog";
import ImageZoomDialog from "@/components/shared/ImageZoomDialog";

interface ProductDisplayProps {
  category: string;
}

// Define products with local image path structure
const WOUND_CARE_PATH = "wound-care";
const ORTHO_PATH = "ortho";

const woundCareProducts = [
  {
    title: "Advanced Wound Dressing",
    image: createImagePath(WOUND_CARE_PATH, "advanced-wound-dressing.jpg"),
    imageAlt: "Innovative wound dressing with moisture control technology",
    description: "Innovative wound dressing with moisture control technology for optimal healing environment."
  },
  {
    title: "Antimicrobial Wound Gel",
    image: createImagePath(WOUND_CARE_PATH, "antimicrobial-wound-gel.jpg"),
    imageAlt: "Specialized antimicrobial gel formula for wound healing",
    description: "Specialized gel formula with antimicrobial properties to prevent infection while promoting healing."
  },
  {
    title: "Hydrocolloid Dressings",
    image: createImagePath(WOUND_CARE_PATH, "hydrocolloid-dressings.jpg"),
    imageAlt: "Self-adhesive waterproof dressings for wound care",
    description: "Self-adhesive, waterproof dressings that form a gel when in contact with wound exudate."
  },
  {
    title: "Wound Cleansing Solution",
    image: createImagePath(WOUND_CARE_PATH, "wound-cleansing-solution.jpg"),
    imageAlt: "Gentle yet effective solution for cleansing wounds",
    description: "Gentle yet effective solution for cleansing wounds and preparing the area for dressing application."
  }
];

const orthoProducts = [
  {
    title: "Knee Support Brace",
    image: createImagePath(ORTHO_PATH, "knee-support-brace.jpg"),
    imageAlt: "Anatomically designed knee brace for support and stability",
    description: "Anatomically designed knee brace providing optimal support and stability during rehabilitation."
  },
  {
    title: "Ankle Stabilizer",
    image: createImagePath(ORTHO_PATH, "ankle-stabilizer.jpg"),
    imageAlt: "Compression ankle support with adjustable straps",
    description: "Compression ankle support with adjustable straps for custom fit and enhanced stability."
  },
  {
    title: "Wrist Splint",
    image: createImagePath(ORTHO_PATH, "wrist-splint.jpg"),
    imageAlt: "Ergonomic wrist support with removable stay",
    description: "Ergonomic wrist support with removable stay for immobilization and pain relief."
  },
  {
    title: "Cervical Collar",
    image: createImagePath(ORTHO_PATH, "cervical-collar.jpg"),
    imageAlt: "Foam cervical collar for neck support and alignment",
    description: "Foam cervical collar providing gentle support and alignment for neck injuries."
  },
  {
    title: "Back Support Belt",
    image: createImagePath(ORTHO_PATH, "back-support-belt.jpg"),
    imageAlt: "Lumbar support belt with adjustable compression",
    description: "Lumbar support belt with adjustable compression for lower back pain and injury prevention."
  }
];

const ProductDisplay = ({ category }: ProductDisplayProps) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomedAlt, setZoomedAlt] = useState<string | undefined>(undefined);

  const getProducts = () => {
    switch (category) {
      case "wound-care":
        return woundCareProducts;
      case "ortho-range":
        return orthoProducts;
      default:
        return woundCareProducts;
    }
  };

  const getCategoryTitle = () => {
    switch (category) {
      case "wound-care":
        return "Wound Care Products";
      case "ortho-range":
        return "Orthopedic Support Products";
      default:
        return "Wound Care Products";
    }
  };

  const getCategoryDescription = () => {
    switch (category) {
      case "wound-care":
        return "Advanced solutions for effective wound management and healing. Our comprehensive range includes innovative dressings, antimicrobial gels, and cleansing solutions designed to promote optimal healing environments.";
      case "ortho-range":
        return "Specialized orthopedic supports and braces for joint and musculoskeletal conditions. Our products provide enhanced stability, pain relief, and rehabilitation support for various body parts.";
      default:
        return "";
    }
  };

  const handleGetDetails = (productTitle: string) => {
    setSelectedProduct(productTitle);
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
                  <Button 
                    className="w-full" 
                    onClick={() => handleGetDetails(product.title)}
                  >
                    Get Details
                  </Button>
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
          productTitle={selectedProduct}
          category={category}
        />
      )}
    </section>
  );
};

export default ProductDisplay;
