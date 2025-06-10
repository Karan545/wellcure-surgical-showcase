
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ProductDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
  };
}

const ProductDetailsDialog = ({ isOpen, onClose, product }: ProductDetailsDialogProps) => {
  const getProductContent = () => {
    switch (product.title) {
      case "Pediatric Urine Collection Bag":
        return {
          name: "PEDIATRIC URINE COLLECTION BAG",
          features: [
            "Adhesive pediatric pouch, latex-free, for infants",
            "Capacity: 100–200 mL, with gentle foam adhesive backing",
            "Double-chamber or no-flow valve to prevent backflow",
            "Sterile, individually packed, CE/ISO certified"
          ]
        };
      case "Urine Collection Bag with Measured Volume Meter":
        return {
          name: "URINE COLLECTION BAG WITH MEASURED VOLUME METER",
          features: [
            "2000 mL bag + 250/500 mL urometer for accurate output measurement",
            "150 cm kink-resistant PVC tubing",
            "Closed circuit, anti-contamination design, overflow safety",
            "RF-sealed valves, universal catheter connector, sterile packaging"
          ]
        };
      case "Urine Collection Bag with Top Outlet":
        return {
          name: "URINE COLLECTION BAG WITH TOP OUTLET",
          features: [
            "Durable PVC bag with top-outlet catheter connection",
            "Leak-proof welded tubing, clear volume graduations (up to 2000 mL)",
            "Universal inlet connector fits all French gauge sizes",
            "Molded hanger & passive air vent, CE/ISO compliant"
          ]
        };
      case "Urine Collection Bag with T-type Bottom Outlet & Sampling Port":
        return {
          name: "URINE COLLECTION BAG WITH T-TYPE BOTTOM OUTLET & SAMPLING PORT",
          features: [
            "2000 mL capacity, T-type valve for one-hand drainage",
            "Built-in sampling port (needle or needle-free)",
            "100 cm kink-resistant tubing with universal connector",
            "Non-return valve optional; foldable hanger"
          ]
        };
      case "Urine Collection Bag with Bottom Outlet":
        return {
          name: "URINE COLLECTION BAG WITH BOTTOM OUTLET",
          features: [
            "2000 mL bag with simple bottom drain valve",
            "High-tensile, soft PVC tubing, clear graduations",
            "Universal connector; individually sterile packed"
          ]
        };
      case "Urine Collection Bag with Handle and Top Outlet":
        return {
          name: "URINE COLLECTION BAG WITH HANDLE AND TOP OUTLET",
          features: [
            "Ergonomic handle molded into top + top catheter outlet",
            "Same specs as top-outlet bags: vent PVC, graduations, hanger, sterile"
          ]
        };
      case "Urine Collection Bag with NRV":
        return {
          name: "URINE COLLECTION BAG WITH NRV (NON-RETURN VALVE)",
          features: [
            "2000 mL bag with built-in non-return valve to prevent backflow",
            "T-type outlet & sampling port, universal connectors, sterile sealed",
            "Soft kink-resistant tubing, wall-mount hanger, CE/ISO certified"
          ]
        };
      default:
        return null;
    }
  };

  const productContent = getProductContent();

  if (!productContent) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[600px] max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader className="relative">
          <DialogTitle className="text-xl font-semibold text-gray-800 pr-8">
            Product Details
          </DialogTitle>
          <DialogClose className="absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        
        <div className="mt-6 space-y-6">
          {/* Product Name Section */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🩺</span>
              <h3 className="text-lg font-semibold text-gray-800">Product Name:</h3>
            </div>
            <p className="text-base text-gray-700 ml-6">{productContent.name}</p>
          </div>

          {/* Key Features Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🔹</span>
              <h3 className="text-lg font-semibold text-gray-800">Key Features:</h3>
            </div>
            
            <div className="ml-6 space-y-3">
              {productContent.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-sm text-gray-400 mt-1">•</span>
                  <p className="text-base text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;
