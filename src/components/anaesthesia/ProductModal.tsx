import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ImageMagnifier from "@/components/shared/ImageMagnifier";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    description: string;
    features?: string[];
    usage?: string;
    specifications?: {
      headers: string[];
      rows: string[][];
    };
    availableSizes?: string | string[];
    sterilization?: string;
    image?: string;
    imageAlt?: string;
  } | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  const {
    title,
    description,
    features,
    usage,
    specifications,
    availableSizes,
    sterilization,
    image,
    imageAlt
  } = product;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        aria-describedby="product-modal-desc"
        className="fixed left-1/2 top-1/2 z-[100] max-w-4xl w-[95vw] translate-x-[-50%] translate-y-[-50%] max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl p-0 border"
      >
        <DialogHeader className="sticky top-0 z-10 bg-white p-8 border-b">
          <DialogTitle className="text-3xl font-bold text-gray-800">{title}</DialogTitle>
          <DialogDescription asChild>
            <span id="product-modal-desc" className="sr-only">
              {description || "Product details dialog"}
            </span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-8 space-y-8">
          {/* Product Image with Magnifier */}
          {image && (
            <div className="flex justify-center mb-6">
              <div className="relative max-w-md w-full">
                <ImageMagnifier
                  src={image}
                  alt={imageAlt || title}
                  className="w-full"
                  magnifierSize={150}
                  zoomLevel={2.5}
                />
              </div>
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#003b5c] flex items-center">
              <span className="mr-2">📋</span>
              Description
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
          </div>

          {/* Features */}
          {features && features.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#003b5c] flex items-center">
                <span className="mr-2">🔹</span>
                Features
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="text-lg leading-relaxed">{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Usage */}
          {usage && (
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#003b5c] flex items-center">
                <span className="mr-2">🎯</span>
                Application / Usage
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">{usage}</p>
            </div>
          )}

          {/* Specifications */}
          {specifications && specifications.headers && (
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#003b5c] flex items-center">
                <span className="mr-2">📊</span>
                Specifications
              </h3>
              <div className="overflow-x-auto">
                <Table className="border border-gray-200">
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      {specifications.headers.map((header, idx) => (
                        <TableHead key={idx} className="font-semibold text-gray-800 text-base border-r border-gray-200 last:border-r-0 p-4">
                          {header}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {specifications.rows.map((row, rowIdx) => (
                      <TableRow key={rowIdx} className="hover:bg-gray-50">
                        {row.map((cell, cellIdx) => (
                          <TableCell key={cellIdx} className="border-r border-gray-200 last:border-r-0 p-4 text-base">
                            {cell}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {/* Available Sizes */}
          {availableSizes && (
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#003b5c] flex items-center">
                <span className="mr-2">📏</span>
                Available Sizes
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {Array.isArray(availableSizes)
                  ? availableSizes.join(", ")
                  : availableSizes}
              </p>
            </div>
          )}

          {/* Sterilization */}
          {sterilization && (
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#003b5c] flex items-center">
                <span className="mr-2">🧪</span>
                Sterilization
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">{sterilization}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;