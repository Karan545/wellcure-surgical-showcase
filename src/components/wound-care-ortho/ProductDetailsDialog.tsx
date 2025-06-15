
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ProductNameSection from "@/components/surgery-wound-drainage/ProductNameSection";
import ProductFeatures from "@/components/surgery-wound-drainage/ProductFeatures";
import ProductSpecsTable from "@/components/surgery-wound-drainage/ProductSpecsTable";
import { woundCareProductDetails, WoundCareProductDetail } from "@/data/wound-care-product-details";

interface ProductDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle: string;
}

const ProductDetailsDialog = ({ isOpen, onClose, productTitle }: ProductDetailsDialogProps) => {
  const productDetail: WoundCareProductDetail | undefined = woundCareProductDetails[productTitle];

  if (!productDetail) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800 mb-4">
            Product Details
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <ProductNameSection name={productDetail.title} />
          
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📋</span>
              <h3 className="text-lg font-semibold text-gray-800">Description:</h3>
            </div>
            <p className="text-base text-gray-700 ml-6">{productDetail.description}</p>
          </div>

          <ProductFeatures features={productDetail.features} />

          <ProductSpecsTable 
            headers={productDetail.specifications.headers}
            rows={productDetail.specifications.rows}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;
