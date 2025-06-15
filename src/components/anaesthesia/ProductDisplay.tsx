import React, { useState } from "react";
import ProductDetailsDialog from "./ProductDetailsDialog";
import ProductGrid from "./ProductGrid";
import CategoryBanner from "./CategoryBanner";
import { createImagePath } from "@/utils/imageUtils";
import { Button } from "@/components/ui/button";

interface ProductDisplayProps {
  category: string;
}

const CATEGORY_PATH = "anaesthesia";

// Oxygen Delivery & Respiratory Care Products
const oxygenDeliveryProducts = [
  {
    title: "Oxygen Mask",
    image: createImagePath(CATEGORY_PATH, "oxygen-mask.jpg"),
    imageAlt: "High-quality oxygen mask for reliable oxygen therapy in hospital settings",
    description: "Comfortable and efficient oxygen mask designed for reliable oxygen therapy administration in anaesthesia and emergency care environments."
  },
  {
    title: "Nebulizer Mask",
    image: createImagePath(CATEGORY_PATH, "nebulizer-mask.jpg"),
    imageAlt: "Professional nebulizer mask for effective medication delivery",
    description: "High-quality nebulizer mask engineered for effective medication delivery through aerosol inhalation therapy in clinical settings."
  },
  {
    title: "Oxygen Catheter",
    image: createImagePath(CATEGORY_PATH, "oxygen-catheter.jpg"),
    imageAlt: "Precision oxygen catheter for targeted oxygen delivery",
    description: "Precision-designed oxygen catheter for targeted oxygen delivery in various clinical settings, ensuring optimal patient comfort and safety."
  },
  {
    title: "Twin Bore Nasal Oxygen Cannula",
    image: createImagePath(CATEGORY_PATH, "twin-bore-nasal-cannula.jpg"),
    imageAlt: "Dual-channel nasal oxygen cannula for comfortable oxygen therapy",
    description: "Advanced dual-channel nasal oxygen cannula designed for comfortable and efficient oxygen delivery with enhanced patient mobility."
  },
  {
    title: "Lung Exerciser",
    image: createImagePath(CATEGORY_PATH, "lung-exerciser.jpg"),
    imageAlt: "Post-operative breathing device for improving lung capacity",
    description: "Post-operative breathing device that helps improve lung capacity and prevent respiratory complications in surgical recovery environments."
  },
  {
    title: "Respiratory Circuits",
    image: createImagePath(CATEGORY_PATH, "respiratory-circuits.jpg"),
    imageAlt: "Ventilator-compatible breathing circuits for anaesthesia and critical care",
    description: "Ventilator-compatible breathing circuits used in anaesthesia and critical care environments for reliable respiratory support and patient safety."
  },
  {
    title: "Heat Moisture Exchanger with Bacterial Viral Filter (HME-BVF)",
    image: createImagePath(CATEGORY_PATH, "hme-bvf.jpg"),
    imageAlt: "Heat moisture exchanger with bacterial viral filter for mechanical ventilation",
    description: "Maintains humidity and prevents cross-contamination during mechanical ventilation or anaesthesia procedures, ensuring optimal patient safety."
  }
];

// Suction & Airway Management Products
const suctionAirwayProducts = [
  {
    title: "Suction Catheters",
    image: createImagePath(CATEGORY_PATH, "suction-catheters.jpg"),
    imageAlt: "High-performance suction catheters for airway management",
    description: "High-performance suction catheters essential for effective airway management and secretion removal during anaesthesia and post-operative care."
  },
  {
    title: "Yankauer Suction Set",
    image: createImagePath(CATEGORY_PATH, "yankauer-suction-set.jpg"),
    imageAlt: "Yankauer suction set for oropharyngeal suctioning during surgery",
    description: "Used for oropharyngeal suctioning during surgery or intensive care; ensures a clear airway for optimal patient respiratory function."
  }
];

// Cardiopulmonary Bypass & Surgical Perfusion Products
const cardiopulmonaryProducts = [
  {
    title: "Heart Lung Pack",
    image: createImagePath(CATEGORY_PATH, "heart-lung-pack.jpg"),
    imageAlt: "Complete heart-lung pack for cardiac surgery procedures",
    description: "Comprehensive heart-lung pack designed for extracorporeal circulation during cardiac surgery procedures, ensuring optimal perfusion support."
  },
  {
    title: "Heart Lung Pack With Coated Tubing",
    image: createImagePath(CATEGORY_PATH, "heart-lung-pack-coated.jpg"),
    imageAlt: "Advanced heart-lung pack with biocompatible coated tubing",
    description: "Advanced heart-lung pack featuring biocompatible coated tubing for enhanced hemocompatibility and reduced inflammatory response."
  },
  {
    title: "Cardioplegia Delivery Set",
    image: createImagePath(CATEGORY_PATH, "cardioplegia-set.jpg"),
    imageAlt: "Precision cardioplegia delivery set for cardiac protection",
    description: "Precision cardioplegia delivery set for safe and effective myocardial protection during cardiac surgical procedures."
  },
  {
    title: "Perfusion Accessories",
    image: createImagePath(CATEGORY_PATH, "perfusion-accessories.jpg"),
    imageAlt: "Complete range of perfusion accessories for cardiac surgery",
    description: "Comprehensive range of perfusion accessories designed to support various cardiac surgery procedures and extracorporeal circulation requirements."
  },
  {
    title: "Arterial Cannula (Adult & Pediatric)",
    image: createImagePath(CATEGORY_PATH, "arterial-cannula.jpg"),
    imageAlt: "Arterial cannula for adult and pediatric cardiac procedures",
    description: "High-quality arterial cannulas available in adult and pediatric sizes for optimal arterial access during cardiopulmonary bypass procedures."
  },
  {
    title: "Venous Cannula (Plastic & Metal Tip)",
    image: createImagePath(CATEGORY_PATH, "venous-cannula.jpg"),
    imageAlt: "Venous cannula with plastic and metal tip options",
    description: "Versatile venous cannulas with plastic and metal tip options, designed for efficient venous drainage during cardiac surgery procedures."
  },
  {
    title: "Arterial Filter",
    image: createImagePath(CATEGORY_PATH, "arterial-filter.jpg"),
    imageAlt: "High-efficiency arterial filter for cardiopulmonary bypass",
    description: "High-efficiency arterial filter designed to remove air bubbles and particles from the arterial line during cardiopulmonary bypass procedures."
  },
  {
    title: "Rigid Suction Tubes",
    image: createImagePath(CATEGORY_PATH, "rigid-suction-tubes.jpg"),
    imageAlt: "Durable rigid suction tubes for surgical procedures",
    description: "Durable rigid suction tubes designed for effective fluid and debris removal during various surgical and cardiac procedures."
  },
  {
    title: "Coronary Artery Ostial Cannula",
    image: createImagePath(CATEGORY_PATH, "coronary-ostial-cannula.jpg"),
    imageAlt: "Specialized coronary artery ostial cannula for cardiac surgery",
    description: "Specialized coronary artery ostial cannula designed for precise cardioplegia delivery and coronary perfusion during cardiac surgery."
  },
  {
    title: "Mister/Blower",
    image: createImagePath(CATEGORY_PATH, "mister-blower.jpg"),
    imageAlt: "Surgical mister and blower for operative field management",
    description: "Professional surgical mister and blower system for maintaining clear operative fields and effective irrigation during cardiac procedures."
  },
  {
    title: "Vessel Loops",
    image: createImagePath(CATEGORY_PATH, "vessel-loops.jpg"),
    imageAlt: "Soft silicone vessel loops for cardio-thoracic surgery",
    description: "Soft silicone loops used in cardio-thoracic surgery to isolate and retract vessels during surgical procedures with precision and safety."
  }
];

const ProductDisplay = ({ category }: ProductDisplayProps) => {
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
    setSelectedProduct(productTitle);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProduct(null);
  };

  const getButtonText = (productTitle: string) => {
    if (category === "oxygen-delivery" || category === "suction-airway") {
      return "Get Details";
    }
    return "Request Quote";
  };

  const handleButtonClick = (productTitle: string) => {
    if (category === "oxygen-delivery" || category === "suction-airway") {
      handleGetDetails(productTitle);
    } else {
      console.log(`Request quote for: ${productTitle}`);
    }
  };

  const products = getProducts();

  return (
    <section className="py-16 bg-white/80 backdrop-blur-sm relative">
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

      {selectedProduct && (category === "oxygen-delivery" || category === "suction-airway") && (
        <ProductDetailsDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          productTitle={selectedProduct}
        />
      )}
    </section>
  );
};

export default ProductDisplay;
