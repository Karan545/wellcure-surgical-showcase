import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { GastroProductDetailContent } from "@/data/gastroenterology-product-details";

interface ProductDetailsContentProps {
  content: GastroProductDetailContent;
}

const ProductDetailsContent = ({ content }: ProductDetailsContentProps) => {
  return (
    <div className="space-y-8">
      {/* Product Name Section */}
      <div className="border-b border-gray-200 pb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">🩺</span>
          <h3 className="text-2xl font-semibold text-gray-800">Product Name:</h3>
        </div>
        <p className="text-xl text-gray-700 ml-10">{content.name}</p>
      </div>

      {/* Key Features Section */}
      {content.features && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🔹</span>
            <h3 className="text-2xl font-semibold text-gray-800">Key Features:</h3>
          </div>
          
          <div className="ml-10 space-y-4">
            {content.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-lg text-gray-400 mt-1">•</span>
                <p className="text-lg text-gray-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Infant Feeding Tube Size & Length Chart */}
      {content.showInfantTable && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📊</span>
            <h3 className="text-2xl font-semibold text-gray-800">Size & Length Chart:</h3>
          </div>
          
          <div className="ml-10">
            <Table className="border border-gray-200">
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold text-gray-800 text-lg border-r border-gray-200 p-4">
                    French Size
                  </TableHead>
                  <TableHead className="font-semibold text-gray-800 text-lg p-4">
                    Length (cm)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="border-r border-gray-200 p-4 text-base font-medium">
                    04 – 07 Fr
                  </TableCell>
                  <TableCell className="p-4 text-base">
                    40 cm
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="border-r border-gray-200 p-4 text-base font-medium">
                    08 – 12 Fr
                  </TableCell>
                  <TableCell className="p-4 text-base">
                    50 cm
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {/* Umbilical Catheter Size Matrix */}
      {content.showUmbilicalTable && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📊</span>
            <h3 className="text-2xl font-semibold text-gray-800">Size Matrix:</h3>
          </div>
          
          <div className="ml-10">
            <Table className="border border-gray-200">
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold text-gray-800 text-lg border-r border-gray-200 p-4">
                    French Size
                  </TableHead>
                  <TableHead className="font-semibold text-gray-800 text-lg p-4">
                    Length (cm)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="border-r border-gray-200 p-4 text-base font-medium">
                    2.5 Fr
                  </TableCell>
                  <TableCell className="p-4 text-base">
                    30 cm
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="border-r border-gray-200 p-4 text-base font-medium">
                    3.5 Fr
                  </TableCell>
                  <TableCell className="p-4 text-base">
                    40 cm
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="border-r border-gray-200 p-4 text-base font-medium">
                    4 Fr • 5 Fr • 8 Fr
                  </TableCell>
                  <TableCell className="p-4 text-base">
                    40 cm
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsContent;