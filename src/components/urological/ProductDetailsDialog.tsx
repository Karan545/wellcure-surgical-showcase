import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { getProductContent } from "@/data/urological-product-details";
import ProductDetailsContent from "./ProductDetailsContent";

interface ProductDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
  };
}

const ProductDetailsDialog = ({ isOpen, onClose, product }: ProductDetailsDialogProps) => {
  const productContent = getProductContent(product.title);

  if (!productContent) {
    return null;
  }

  // Get product image from the data files
  const getProductImage = () => {
    const CATEGORY_PATH = "Urological-Instruments";
    
    switch (product.title) {
      case "Pediatric Urine Collection Bag":
        return `/Product-images/${CATEGORY_PATH}/Urine-Collection-Bags/Pediatric-Urine-Collection-Bag.webp`;
      case "Urine Collection Bag with Measured Volume Meter":
        return `/Product-images/${CATEGORY_PATH}/Urine-Collection-Bags/Urine-Collection-Bag-with-Measured-Volume-Meter.jpeg`;
      case "Urine Collection Bag with Top Outlet":
        return `/Product-images/${CATEGORY_PATH}/Urine-Collection-Bags/Urine-collection-bag-with-top-outlet.jpg`;
      case "Urine Collection Bag with T-type Bottom Outlet & Sampling Port":
        return `/Product-images/${CATEGORY_PATH}/Urine-Collection-Bags/Urine-Collection-Bag-with-T-type-Bottom-Outlet-&-Sampling-Port.jpg`;
      case "Urine Collection Bag with Bottom Outlet":
        return `/Product-images/${CATEGORY_PATH}/Urine-Collection-Bags/Urine-Collection-Bag-with-Bottom-Outlet.jpg`;
      case "Urine Collection Bag with Handle and Top Outlet":
        return `/Product-images/${CATEGORY_PATH}/Urine-Collection-Bags/urine-collection-bag-with-handle-and-top-outlet.jpg`;
      case "Urine Collection Bag with NRV":
        return `/Product-images/${CATEGORY_PATH}/Urine-Collection-Bags/Urine-Collection-Bag-with-NRV.jpg`;
      case "Female Catheter":
        return `/Product-images/${CATEGORY_PATH}/Urine-Drainage-Catheters/Female-Catheter.webp`;
      case "Rectal Catheter":
        return `/Product-images/${CATEGORY_PATH}/Urine-Drainage-Catheters/Rectal-Catheter.jpg`;
      case "Nelaton Catheter":
        return `/Product-images/${CATEGORY_PATH}/Urine-Drainage-Catheters/Nelaton-Catheter.jpg`;
      case "Central Venous Catheter Kit":
        return `/Product-images/${CATEGORY_PATH}/Urine-Drainage-Catheters/Central-Venous-Catheter-Kit.png`;
      case "Multi-Lumen Central Catheter":
        return `/Product-images/${CATEGORY_PATH}/Urine-Drainage-Catheters/Multi-Lumen-Central-Catheter.avif`;
      case "CVC Kit (Single Lumen)":
        return `/Product-images/${CATEGORY_PATH}/Central-Venous-Access-Devices/CVC-Kit-(Single Lumen).jpg`;
      case "CVC Kit (Double Lumen)":
        return `/Product-images/${CATEGORY_PATH}/Central-Venous-Access-Devices/CVC-Kit-(Double Lumen).avif`;
      case "CVC Kit (Triple Lumen)":
        return `/Product-images/${CATEGORY_PATH}/Central-Venous-Access-Devices/CVC-Kit-(Triple Lumen).avif`;
      case "CVC Kit (Four Lumen)":
        return `/Product-images/${CATEGORY_PATH}/Central-Venous-Access-Devices/CVC-Kit-(Four Lumen).jpg`;
      case "Arterial Catheter Kit":
        return `/Product-images/${CATEGORY_PATH}/Central-Venous-Access-Devices/Arterial-Catheter-Kit.png`;
      case "Arterial Catheter Kit with Extension":
        return `/Product-images/${CATEGORY_PATH}/Central-Venous-Access-Devices/Arterial-Catheter-Kit-with-Extension.jpg`;
      case "Hemodialysis Catheter (Single Lumen)":
        return `/Product-images/${CATEGORY_PATH}/Dialysis-Catheters/Hemodialysis-Catheter-(Single Lumen).png`;
      case "Hemodialysis Catheter (Double Lumen)":
        return `/Product-images/${CATEGORY_PATH}/Dialysis-Catheters/Hemodialysis-Catheter-(Double Lumen).png`;
      case "Hemodialysis Catheter (Triple Lumen)":
        return `/Product-images/${CATEGORY_PATH}/Dialysis-Catheters/Hemodialysis-Catheter-(Triple Lumen).png`;
      case "Long Term Hemodialysis Catheter":
        return `/Product-images/${CATEGORY_PATH}/Dialysis-Catheters/Long-Term-Hemodialysis-Catheter.png`;
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
          <DialogClose className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        
        <div className="p-8">
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
          
          <ProductDetailsContent content={productContent} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;