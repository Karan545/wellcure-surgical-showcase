import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { getGastroProductContent } from "@/data/gastroenterology-product-details";
import ProductDetailsContent from "./ProductDetailsContent";
import ImageMagnifier from "@/components/shared/ImageMagnifier";

interface ProductDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
  };
}

const ProductDetailsDialog = ({ isOpen, onClose, product }: ProductDetailsDialogProps) => {
  const productContent = getGastroProductContent(product.title);

  if (!productContent) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="relative bg-white p-8 border-b sticky top-0 z-10">
          <DialogTitle className="text-3xl font-semibold text-gray-800 pr-8">
            Product Details
          </DialogTitle>
          <DialogClose className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        
        <div className="p-8">
          {/* Product Image with Magnifier */}
          {productContent.image && (
            <div className="flex justify-center mb-8">
              <div className="relative max-w-md w-full">
                <ImageMagnifier
                  src={productContent.image}
                  alt={productContent.name}
                  className="w-full"
                  magnifierSize={150}
                  zoomLevel={2.5}
                />
              </div>
            </div>
          )}
          
          <ProductDetailsContent content={productContent} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;