
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ProductSpecsTableProps {
  headers: string[];
  rows: string[][];
}

const ProductSpecsTable = ({ headers, rows }: ProductSpecsTableProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">📏</span>
        <h3 className="text-lg font-semibold text-gray-800">Technical Specifications:</h3>
      </div>
      
      <div className="ml-6">
        <Table className="border border-gray-200">
          <TableHeader>
            <TableRow className="bg-gray-50">
              {headers.map((header, index) => (
                <TableHead key={index} className="font-semibold text-gray-700 border-r border-gray-200 last:border-r-0">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex} className="hover:bg-gray-50">
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex} className="border-r border-gray-200 last:border-r-0">
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductSpecsTable;
