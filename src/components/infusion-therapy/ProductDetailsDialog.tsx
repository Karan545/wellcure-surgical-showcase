
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
  // Only show details for specific products
  if (product.title !== "I.V. Flow Regulator Extension Set" && product.title !== "I.V. Infusion Set with Flow Regulator") {
    return null;
  }

  const getProductContent = () => {
    if (product.title === "I.V. Flow Regulator Extension Set") {
      return {
        name: "I.V. FLOW REGULATOR EXTENSION SET",
        features: [
          "Precise flow rate control of IV fluids with range of 5 to 250 ml/hr",
          "With \"Y\" Injection Port (Latex or Latex Free) for intermittent medication",
          "Also available with Thumb Support \"Y\" Injection Port and Needle Free \"Y\" Site",
          "Soft & kink-resistant PVC tubing",
          "Male Luer Connector at one end and Female Luer Connector at the other",
          "Standard Tube Length: 20 cm without \"Y\" site & 40 cm with \"Y\" site",
          "Tube Diameter: I Ø 3.0 mm, O Ø 4.1 mm"
        ]
      };
    } else {
      return {
        name: "I.V. INFUSION SET WITH FLOW REGULATOR",
        features: [
          "Precise flow rate control of IV fluids with range of 5 to 250 ml/hr",
          "With \"Y\" Injection Port (Latex or Latex Free) for intermittent medication",
          "Also available with Thumb Support \"Y\" Injection Port and Needle Free \"Y\" Site",
          "Soft & kink-resistant PVC tubing",
          "Male Luer Connector at one end and Female Luer Connector at the other",
          "Standard Tube Length: 20 cm without \"Y\" site & 40 cm with \"Y\" site",
          "Tube Diameter: I Ø 3.0 mm, O Ø 4.1 mm"
        ]
      };
    }
  };

  const productContent = getProductContent();

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

          {/* Common Features Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🔹</span>
              <h3 className="text-lg font-semibold text-gray-800">Common Features (Model 1011 & 1051):</h3>
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
