
import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import CategoryBanner from "./CategoryBanner";
import { createImagePath } from "@/utils/imageUtils";
import { Button } from "@/components/ui/button";
import ProductModal from "./ProductModal";
import { anaesthesiaProductDetails } from "@/data/anaesthesia-product-details";
import SEOProductStructure from "@/components/SEOProductStructure";

const CATEGORY_PATH = "Anaesthesia-Systems";

// Oxygen Delivery & Respiratory Care Products
const oxygenDeliveryProducts = [
  {
    title: "Oxygen Mask",
    image: `/Product-images/${CATEGORY_PATH}/Oxygen-Delivery-&-Respiratory-Care/Oxygen-Mask.jpeg`,
    imageAlt: "High-quality oxygen mask for reliable oxygen therapy in hospital settings",
    description: "Comfortable and efficient oxygen mask designed for reliable oxygen therapy administration in anaesthesia and emergency care environments."
  },
  {
    title: "Oxygen Catheter",
    image: `/Product-images/${CATEGORY_PATH}/Oxygen-Delivery-&-Respiratory-Care/Oxygen-Catheter.webp`,
    imageAlt: "Precision oxygen catheter for targeted oxygen delivery",
    description: "Precision-designed oxygen catheter for targeted oxygen delivery in various clinical settings, ensuring optimal patient comfort and safety."
  },
  {
    title: "Twin Bore Nasal Oxygen Cannula",
    image: `/Product-images/${CATEGORY_PATH}/Oxygen-Delivery-&-Respiratory-Care/Twin-Bore-Nasal-Oxygen-Cannula.jpg`,
    imageAlt: "Dual-channel nasal oxygen cannula for comfortable oxygen therapy",
    description: "Advanced dual-channel nasal oxygen cannula designed for comfortable and efficient oxygen delivery with enhanced patient mobility."
  },
  {
    title: "Lung Exerciser",
    image: `/lovable-uploads/c1e3e70e-7fa3-4295-b6e3-6c3b5dfbe25e.png`,
    imageAlt: "Post-operative breathing device for improving lung capacity",
    description: "Post-operative breathing device that helps improve lung capacity and prevent respiratory complications in surgical recovery environments."
  },
  {
    title: "Respiratory Circuits",
    image: `/Product-images/${CATEGORY_PATH}/Oxygen-Delivery-&-Respiratory-Care/Respiratory-Circuits.png`,
    imageAlt: "Ventilator-compatible breathing circuits for anaesthesia and critical care",
    description: "Ventilator-compatible breathing circuits used in anaesthesia and critical care environments for reliable respiratory support and patient safety."
  },
  {
    title: "Heat Moisture Exchanger with Bacterial Viral Filter (HME-BVF)",
    image: `/lovable-uploads/03537a53-4ff4-4ca6-b271-f6743b9b1c28.png`,
    imageAlt: "Heat moisture exchanger with bacterial viral filter for mechanical ventilation",
    description: "Maintains humidity and prevents cross-contamination during mechanical ventilation or anaesthesia procedures, ensuring optimal patient safety."
  }
];

// Suction & Airway Management Products
const suctionAirwayProducts = [
  {
    title: "Suction Catheters",
    image: `/Product-images/${CATEGORY_PATH}/Suction-&-Airway-Management/Suction-Catheters.png`,
    imageAlt: "High-performance suction catheters for airway management",
    description: "High-performance suction catheters essential for effective airway management and secretion removal during anaesthesia and post-operative care."
  },
  {
    title: "Yankauer Suction Set",
    image: `/Product-images/${CATEGORY_PATH}/Suction-&-Airway-Management/Yankauer-Suction-Set.png`,
    imageAlt: "Yankauer suction set for oropharyngeal suctioning during surgery",
    description: "Used for oropharyngeal suctioning during surgery or intensive care; ensures a clear airway for optimal patient respiratory function."
  }
];

// Cardiopulmonary Bypass & Surgical Perfusion Products
const cardiopulmonaryProducts = [
  {
    title: "Heart Lung Pack",
    image: `/Product-images/${CATEGORY_PATH}/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Heart-Lung-Pack.png`,
    imageAlt: "Complete heart-lung pack for cardiac surgery procedures",
    description: "Comprehensive heart-lung pack designed for extracorporeal circulation during cardiac surgery procedures, ensuring optimal perfusion support."
  },
  {
    title: "Heart Lung Pack With Coated Tubing",
    image: `/Product-images/${CATEGORY_PATH}/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Heart-Lung-Pack-With-Coated-Tubing.webp`,
    imageAlt: "Advanced heart-lung pack with biocompatible coated tubing",
    description: "Advanced heart-lung pack featuring biocompatible coated tubing for enhanced hemocompatibility and reduced inflammatory response."
  },
  {
    title: "Cardioplegia Delivery Set",
    image: `/Product-images/${CATEGORY_PATH}/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Cardioplegia-Delivery-Set.png`,
    imageAlt: "Precision cardioplegia delivery set for cardiac protection",
    description: "Precision cardioplegia delivery set for safe and effective myocardial protection during cardiac surgical procedures."
  },
  {
    title: "Perfusion Accessories",
    image: `/Product-images/${CATEGORY_PATH}/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Perfusion-Accessories.png`,
    imageAlt: "Complete range of perfusion accessories for cardiac surgery",
    description: "Comprehensive range of perfusion accessories designed to support various cardiac surgery procedures and extracorporeal circulation requirements."
  },
  {
    title: "Arterial Cannula (Adult & Pediatric)",
    image: `/Product-images/${CATEGORY_PATH}/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Arterial-Cannula-(Adult & Pediatric).png`,
    imageAlt: "Arterial cannula for adult and pediatric cardiac procedures",
    description: "High-quality arterial cannulas available in adult and pediatric sizes for optimal arterial access during cardiopulmonary bypass procedures."
  },
  {
    title: "Venous Cannula (Plastic & Metal Tip)",
    image: `/Product-images/${CATEGORY_PATH}/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Venous-Cannula-(Plastic & Metal Tip).png`,
    imageAlt: "Venous cannula with plastic and metal tip options",
    description: "Versatile venous cannulas with plastic and metal tip options, designed for efficient venous drainage during cardiac surgery procedures."
  },
  {
    title: "Arterial Filter",
    image: `/Product-images/${CATEGORY_PATH}/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Arterial-Filter.png`,
    imageAlt: "High-efficiency arterial filter for cardiopulmonary bypass",
    description: "High-efficiency arterial filter designed to remove air bubbles and particles from the arterial line during cardiopulmonary bypass procedures."
  },
  {
    title: "Rigid Suction Tubes",
    image: `/Product-images/${CATEGORY_PATH}/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Rigid-Suction-Tubes.png`,
    imageAlt: "Durable rigid suction tubes for surgical procedures",
    description: "Durable rigid suction tubes designed for effective fluid and debris removal during various surgical and cardiac procedures."
  },
  {
    title: "Coronary Artery Ostial Cannula",
    image: `/Product-images/${CATEGORY_PATH}/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Coronary-Artery-Ostial-Cannula.png`,
    imageAlt: "Specialized coronary artery ostial cannula for cardiac surgery",
    description: "Specialized coronary artery ostial cannula designed for precise cardioplegia delivery and coronary perfusion during cardiac surgery."
  },
  {
    title: "Mister/Blower",
    image: `/Product-images/${CATEGORY_PATH}/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Mister-blower.png`,
    imageAlt: "Surgical mister and blower for operative field management",
    description: "Professional surgical mister and blower system for maintaining clear operative fields and effective irrigation during cardiac procedures."
  }
];

const ProductDisplay = ({ category }: { category: string }) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getProducts = () => {
    switch (category) {
      case "oxygen-delivery":
        return oxygenDeliveryProducts;
      case "suction-airway":
        return suctionAirwayProducts;
      case "cardiopulmonary":
        return cardiopulmonaryProducts;
      default:
        return oxygenDeliveryProducts;
    }
  };

  const getCategoryTitle = () => {
    switch (category) {
      case "oxygen-delivery":
        return "Oxygen Delivery & Respiratory Care";
      case "suction-airway":
        return "Suction & Airway Management";
      case "cardiopulmonary":
        return "Cardiopulmonary Bypass & Surgical Perfusion";
      default:
        return "Oxygen Delivery & Respiratory Care";
    }
  };

  const getCategoryDescription = () => {
    switch (category) {
      case "oxygen-delivery":
        return "Advanced devices designed for efficient and safe oxygen delivery in anaesthesia and emergency care settings. Our respiratory care products are engineered to meet the demanding requirements of hospital and surgical environments, ensuring optimal patient comfort and clinical outcomes.";
      case "suction-airway":
        return "Essential airway clearance products designed for maintaining respiratory pathways during anaesthesia and post-operative care. Our suction devices ensure effective secretion removal and airway patency in critical care situations.";
      case "cardiopulmonary":
        return "Premium components specifically designed for cardiac surgery procedures, providing reliable extracorporeal circulation, perfusion support, and surgical assistance. Our cardiopulmonary bypass products meet the highest standards for cardiac surgical interventions.";
      default:
        return "";
    }
  };

  const handleGetDetails = (productTitle: string) => {
    console.log('[ProductDisplay] Get Details click:', productTitle);
    setSelectedProduct(productTitle);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProduct(null);
  };

  const getButtonText = (productTitle: string) => {
    return "Get Details";
  };

  const handleButtonClick = (productTitle: string) => {
    handleGetDetails(productTitle);
  };

  const products = getProducts();

  const selectedProductDetail =
    selectedProduct && anaesthesiaProductDetails[selectedProduct]
      ? {
          ...anaesthesiaProductDetails[selectedProduct],
          image:
            products.find((p: any) => p.title === selectedProduct)?.image ||
            anaesthesiaProductDetails[selectedProduct].image,
          imageAlt:
            products.find((p: any) => p.title === selectedProduct)?.imageAlt ||
            undefined,
        }
      : null;

  // Prepare products with detailed information for SEO
  const seoProducts = products.map((product: any) => {
    const details = anaesthesiaProductDetails[product.title];
    return {
      ...product,
      features: details?.features,
      specifications: details?.specifications,
      availableSizes: details?.availableSizes,
      sterilization: details?.sterilization,
      usage: details?.usage
    };
  });

  return (
    <section className="py-16 bg-white/80 backdrop-blur-sm relative">
      <SEOProductStructure
        products={seoProducts}
        category={getCategoryTitle()}
        categoryDescription={getCategoryDescription()}
      />
      
      <div className="container mx-auto px-4">
        <CategoryBanner
          title={getCategoryTitle()}
          description={getCategoryDescription()}
        />

        <ProductGrid
          products={products}
          getButtonText={getButtonText}
          handleButtonClick={handleButtonClick}
        />
      </div>

      <ProductModal
        isOpen={isDialogOpen && !!selectedProductDetail}
        onClose={handleCloseDialog}
        product={selectedProductDetail}
      />
    </section>
  );
};

export default ProductDisplay;
