
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ProductDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
  };
}

const ProductDetailsDialog = ({ isOpen, onClose, product }: ProductDetailsDialogProps) => {
  const getProductContent = () => {
    switch (product.title) {
      case "I.V. Flow Regulator Extension Set":
        return {
          name: "I.V. FLOW REGULATOR EXTENSION SET",
          features: [
            "Precise flow rate control of IV fluids with range of 5 to 250 ml/hr",
            "With \"Y\" Injection Port (Latex or Latex Free) for intermittent medication",
            "Also available with Thumb Support \"Y\" Injection Port and Needle Free \"Y\" Site",
            "Soft & kink-resistant PVC tubing",
            "Male Luer Connector at one end and Female Luer Connector at the other",
            "Standard Tube Length: 20 cm without \"Y\" site & 40 cm with \"Y\" site",
            "Tube Diameter: I Ø 3.0 mm, O Ø 4.1 mm"
          ]
        };
      case "I.V. Infusion Set with Flow Regulator":
        return {
          name: "I.V. INFUSION SET WITH FLOW REGULATOR",
          features: [
            "Precise flow rate control of IV fluids with range of 5 to 250 ml/hr",
            "With \"Y\" Injection Port (Latex or Latex Free) for intermittent medication",
            "Also available with Thumb Support \"Y\" Injection Port and Needle Free \"Y\" Site",
            "Soft & kink-resistant PVC tubing",
            "Male Luer Connector at one end and Female Luer Connector at the other",
            "Standard Tube Length: 20 cm without \"Y\" site & 40 cm with \"Y\" site",
            "Tube Diameter: I Ø 3.0 mm, O Ø 4.1 mm"
          ]
        };
      case "High Pressure Extension Line":
        return {
          name: "High Pressure Extension Lines",
          features: [
            "Constructed from non-toxic medical-grade PVC",
            "Designed for high-pressure infusion applications",
            "Withstands up to 450 psi (approx. 31 bar) working pressure",
            "Fitted with male luer lock at one end and female luer lock at the other",
            "Highly kink-resistant tubing for uninterrupted flow",
            "Transparent material for easy fluid monitoring",
            "Sterile, disposable, EO sterilized",
            "Available in both standard and customized lengths"
          ],
          table: {
            headers: ["Length (cm)", "Internal Diameter", "Pressure Rating"],
            rows: [
              ["10 cm", "1.0 mm", "450 psi"],
              ["25 cm", "1.0 mm", "450 psi"],
              ["50 cm", "1.0 mm", "450 psi"],
              ["100 cm", "1.0 mm", "450 psi"]
            ]
          }
        };
      case "Low Pressure Extension Line":
        return {
          name: "Low Pressure Extension Lines",
          features: [
            "Designed for routine infusion and extension of IV line length",
            "Made of flexible, kink-resistant PVC",
            "Working pressure capacity: less than 4.5 bar (65 psi)",
            "Provided with male luer lock & female luer lock connectors",
            "Transparent tubing for visual monitoring",
            "Sterile and individually packed",
            "Ideal for neonatal and paediatric use where pressure is controlled"
          ],
          table: {
            headers: ["Length (cm)", "Pressure Rating", "Application Type"],
            rows: [
              ["10 cm", "≤ 65 psi", "Neonatal/General use"],
              ["25 cm", "≤ 65 psi", "Paediatric/General"],
              ["50 cm", "≤ 65 psi", "IV line extensions"],
              ["100 cm", "≤ 65 psi", "Long tube connections"]
            ]
          }
        };
      case "PVC Free High Pressure Extension Line":
        return {
          name: "PVC-Free High Pressure Extension Lines",
          features: [
            "Manufactured from DEHP-free, PVC-free medical polymer",
            "Suitable for high-pressure contrast media injection",
            "Biocompatible and eco-safe; non-toxic and latex-free",
            "Pressure resistance: 450 psi",
            "Equipped with secure male-female luer lock connectors",
            "Available in transparent or amber tint for light-sensitive medications",
            "EO Sterilized and individually packed"
          ],
          table: {
            headers: ["Length (cm)", "Colour", "Pressure Capacity"],
            rows: [
              ["10 cm", "Transparent", "450 psi"],
              ["25 cm", "Amber / Clear", "450 psi"],
              ["50 cm", "Transparent", "450 psi"],
              ["100 cm", "Amber", "450 psi"]
            ]
          }
        };
      default:
        return null;
    }
  };

  const productContent = getProductContent();

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
          <DialogClose className="absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        
        <div className="mt-6 space-y-6">
          {/* Product Name Section */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🔗</span>
              <h3 className="text-lg font-semibold text-gray-800">Product Name:</h3>
            </div>
            <p className="text-base text-gray-700 ml-6">{productContent.name}</p>
          </div>

          {/* Key Features Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🔹</span>
              <h3 className="text-lg font-semibold text-gray-800">Key Features:</h3>
            </div>
            
            <div className="ml-6 space-y-3">
              {productContent.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-sm text-gray-400 mt-1">•</span>
                  <p className="text-base text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Table Section (if available) */}
          {productContent.table && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">📏</span>
                <h3 className="text-lg font-semibold text-gray-800">Available Lengths/Variants:</h3>
              </div>
              
              <div className="ml-6">
                <Table className="border border-gray-200">
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      {productContent.table.headers.map((header, index) => (
                        <TableHead key={index} className="font-semibold text-gray-700 border-r border-gray-200 last:border-r-0">
                          {header}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {productContent.table.rows.map((row, rowIndex) => (
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
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;
