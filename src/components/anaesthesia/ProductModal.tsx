
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
      <DialogContent className="max-w-xl w-[95vw] max-h-[80vh] overflow-y-auto p-0 bg-white rounded-lg shadow-2xl relative">
        <DialogHeader className="sticky top-0 z-10 bg-white p-6 border-b">
          <DialogTitle className="text-2xl font-bold text-gray-800">{title}</DialogTitle>
        </DialogHeader>
        <div className="p-6 space-y-6">
          {image && (
            <img
              src={image}
              alt={imageAlt || title}
              className="w-full object-contain max-h-60 mb-4 rounded-md border"
            />
          )}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#003b5c]">Description</h3>
            <p className="text-base text-gray-700">{description}</p>
          </div>

          {features && features.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#003b5c]">Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {usage && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#003b5c]">Application / Usage</h3>
              <p className="text-gray-700">{usage}</p>
            </div>
          )}

          {specifications && specifications.headers && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#003b5c]">Specifications</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {specifications.headers.map((header, idx) => (
                        <TableHead key={idx}>{header}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {specifications.rows.map((row, rowIdx) => (
                      <TableRow key={rowIdx}>
                        {row.map((cell, cellIdx) => (
                          <TableCell key={cellIdx}>{cell}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {availableSizes && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#003b5c]">Available Sizes</h3>
              <p className="text-gray-700">
                {Array.isArray(availableSizes)
                  ? availableSizes.join(", ")
                  : availableSizes}
              </p>
            </div>
          )}

          {sterilization && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#003b5c]">Sterilization</h3>
              <p className="text-gray-700">{sterilization}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
