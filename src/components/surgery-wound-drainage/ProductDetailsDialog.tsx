import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { getProductDetails } from "@/data/surgery-wound-drainage-product-details";
import ProductNameSection from "./ProductNameSection";
import ProductFeatures from "./ProductFeatures";
import ProductSpecsTable from "./ProductSpecsTable";

interface ProductDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
  };
}

const ProductDetailsDialog = ({ isOpen, onClose, product }: ProductDetailsDialogProps) => {
  const productContent = getProductDetails(product.title);

  if (!productContent) {
    return null;
  }

  // Get product image from the data files
  const getProductImage = () => {
    const CATEGORY_PATH = "Surgery-&-Wound-Drainage";
    
    switch (product.title) {
      case "Wound Drainage System":
        return `/Product-images/${CATEGORY_PATH}/Drainage-&-Collection-Systems/Wound-Drainage-System.jpg`;
      case "Surgical Suction Set":
        return `/Product-images/${CATEGORY_PATH}/Surgical-Suction-Instruments/Surgical-Suction-Set.jpg`;
      case "Yankauer Suction Set":
        return `/Product-images/${CATEGORY_PATH}/Surgical-Suction-Instruments/Yankauer-Suction-Set.png`;
      case "Vessel Loops":
        return `/Product-images/${CATEGORY_PATH}/Retraction-&-Isolation-Tools/Vessel-Loops.png`;
      default:
        return null;
    }
  };

  const productImage = getProductImage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="relative bg-white p-8 border-b sticky top-0 z-10">
          <DialogTitle className="text-3xl font-semibold text-gray-800 pr-8">
            Product Details
          </DialogTitle>
          <DialogDescription className="sr-only">
            Detailed specifications and features for {productContent.name}
          </DialogDescription>
          <DialogClose className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        
        <div className="p-8 space-y-8">
          {/* Product Image */}
          {productImage && (
            <div className="flex justify-center mb-8">
              <div className="relative max-w-md w-full">
                <img
                  src={productImage}
                  alt={productContent.name}
                  className="w-full h-auto object-contain rounded-lg border shadow-sm bg-gray-50"
                  style={{ maxHeight: '300px' }}
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                    e.currentTarget.className = "w-full h-auto object-contain rounded-lg border shadow-sm bg-gray-100 flex items-center justify-center text-gray-400";
                  }}
                />
              </div>
            </div>
          )}

          <ProductNameSection name={productContent.name} />
          <ProductFeatures features={productContent.features} />
          <ProductSpecsTable 
            headers={productContent.table.headers} 
            rows={productContent.table.rows} 
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;