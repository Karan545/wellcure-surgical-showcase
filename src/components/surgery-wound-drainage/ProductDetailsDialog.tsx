
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[600px] max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader className="relative">
          <DialogTitle className="text-xl font-semibold text-gray-800 pr-8">
            Product Details
          </DialogTitle>
          <DialogDescription className="sr-only">
            Detailed specifications and features for {productContent.name}
          </DialogDescription>
          <DialogClose className="absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        
        <div className="mt-6 space-y-6">
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
