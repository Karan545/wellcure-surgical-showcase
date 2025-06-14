
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { GastroProductDetailContent } from "@/data/gastroenterology-product-details";

interface ProductDetailsContentProps {
  content: GastroProductDetailContent;
}

const ProductDetailsContent = ({ content }: ProductDetailsContentProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-blue-800 mb-4">{content.name}</h3>
        
        {content.features && (
          <div className="mb-6">
            <h4 className="text-md font-medium text-gray-800 mb-3 flex items-center">
              🔹 Key Features
            </h4>
            <ul className="space-y-2 text-gray-700">
              {content.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {content.showInfantTable && (
          <div className="mb-6">
            <h4 className="text-md font-medium text-gray-800 mb-3 flex items-center">
              📊 Size & Length Chart
            </h4>
            <Table className="border">
              <TableHeader>
                <TableRow>
                  <TableHead className="border-r">French Size</TableHead>
                  <TableHead>Length (cm)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border-r font-medium">04 – 07 Fr</TableCell>
                  <TableCell>40 cm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border-r font-medium">08 – 12 Fr</TableCell>
                  <TableCell>50 cm</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}

        {content.showUmbilicalTable && (
          <div className="mb-6">
            <h4 className="text-md font-medium text-gray-800 mb-3 flex items-center">
              📊 Size Matrix
            </h4>
            <Table className="border">
              <TableHeader>
                <TableRow>
                  <TableHead className="border-r">French Size</TableHead>
                  <TableHead>Length (cm)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border-r font-medium">2.5 Fr</TableCell>
                  <TableCell>30 cm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border-r font-medium">3.5 Fr</TableCell>
                  <TableCell>40 cm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border-r font-medium">4 Fr • 5 Fr • 8 Fr</TableCell>
                  <TableCell>40 cm</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsContent;
