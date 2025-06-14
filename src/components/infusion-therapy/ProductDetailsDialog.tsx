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
      case "I.V. Infusion Set with Airvent":
        return {
          name: "I.V. INFUSION SET WITH AIRVENT",
          features: [
            "Manufactured from medical-grade, non-toxic PVC",
            "With airvented spike to allow air entry during infusion",
            "Transparent drip chamber with sharp spike for easy piercing",
            "Flow regulator ensures smooth and accurate fluid control",
            "Flexible and kink-resistant tubing",
            "Luer lock or luer slip connector at distal end",
            "Sterile, single-use, and EO sterilized"
          ],
          table: {
            headers: ["Feature", "Specification"],
            rows: [
              ["Chamber Type", "Vented"],
              ["Drop Size", "20 drops/ml (macrodrip)"],
              ["Tube Length", "150 cm approx."],
              ["Flow Regulator", "Yes"],
              ["Injection Port", "Optional (latex/non-latex)"],
              ["Connector", "Luer lock / Luer slip"]
            ]
          }
        };
      case "I.V. Infusion Set with Micro Drip":
        return {
          name: "I.V. INFUSION SET WITH MICRO DRIP",
          features: [
            "Designed for precise volume-controlled infusion, especially for paediatrics",
            "Microdrip chamber with 60 drops/ml accuracy",
            "Made from non-toxic, DEHP-free PVC",
            "Flexible tube with low memory and high kink resistance",
            "Suitable for neonatal and sensitive medication administration",
            "Sterile, single-use, individually packed",
            "Can be provided with optional needle and injection port"
          ],
          table: {
            headers: ["Feature", "Specification"],
            rows: [
              ["Chamber Type", "Micro drip"],
              ["Drop Size", "60 drops/ml"],
              ["Tube Length", "150 cm approx."],
              ["Flow Regulator", "Yes"],
              ["Material", "Medical-grade DEHP-free PVC"],
              ["Connector Type", "Luer lock / slip"]
            ]
          }
        };
      case "I.V. Infusion Set without Airvent":
        return {
          name: "I.V. INFUSION SET WITHOUT AIRVENT",
          features: [
            "Designed for closed infusion systems (e.g., plastic IV bottles)",
            "No airvent to avoid contamination risk",
            "Sharp, non-vented spike for easy piercing",
            "Transparent drip chamber and precise flow regulator",
            "Manufactured from medical-grade materials ensuring sterility and safety",
            "Latex or latex-free injection port available as required",
            "EO sterilized, sterile, and ready to use"
          ],
          table: {
            headers: ["Feature", "Specification"],
            rows: [
              ["Chamber Type", "Non-vented"],
              ["Drop Size", "20 drops/ml"],
              ["Tube Length", "150 cm approx."],
              ["Flow Regulator", "Yes"],
              ["Suitable For", "Collapsible IV fluid bags"],
              ["Connector Type", "Luer slip / lock"]
            ]
          }
        };
      case "I.V. Cannula-AZcan":
        return {
          name: "I.V. CANNULA – AZCAN",
          features: [
            "PTFE catheter with precision-ground triple-bevel needle",
            "Injection port with color-coded cap for drug delivery",
            "Wings for secure fixation",
            "Luer lock cap included",
            "Sterile, single-use, EO sterilized"
          ],
          table: {
            headers: ["Feature", "Detail"],
            rows: [
              ["Catheter Material", "PTFE"],
              ["Sizes Available", "14G to 26G"],
              ["Port Type", "With injection port"],
              ["Sterilization", "EO Gas"],
              ["Color Coding", "International Standard"]
            ]
          }
        };
      case "I.V. Cannula-AZcath":
        return {
          name: "I.V. CANNULA – AZCATH",
          features: [
            "FEP catheter with ultra-smooth insertion",
            "Injection port for bolus injection",
            "Radiopaque stripes for X-ray visibility",
            "DEHP-free components",
            "Sterile and ready to use"
          ],
          table: {
            headers: ["Feature", "Detail"],
            rows: [
              ["Catheter Material", "FEP"],
              ["Needle", "Stainless steel"],
              ["Radiopaque", "Yes"],
              ["Sizes", "14G–26G"],
              ["Sterilization", "EO Gas"]
            ]
          }
        };
      case "I.V. Cannula-AZflon":
        return {
          name: "I.V. CANNULA – AZFLON",
          features: [
            "Made from polyurethane for minimal vessel trauma",
            "Luer lock injection port",
            "Flaps with wide grip area",
            "High biocompatibility and kink resistance"
          ],
          table: {
            headers: ["Feature", "Detail"],
            rows: [
              ["Catheter Material", "Polyurethane (PU)"],
              ["Port Type", "Yes"],
              ["Radiopaque", "Yes"],
              ["Sizes", "14G–26G"],
              ["Packaging", "Blister, EO sterilized"]
            ]
          }
        };
      case "I.V. Cannula-AZneo":
        return {
          name: "I.V. CANNULA – AZNEO",
          features: [
            "Microbore catheter for neonatal and pediatric use",
            "Soft and flexible PU tubing",
            "Color-coded hub and injection port",
            "DEHP and latex-free"
          ],
          table: {
            headers: ["Feature", "Detail"],
            rows: [
              ["Patient Use", "Neonatal/Pediatric"],
              ["Catheter Material", "PU"],
              ["Sizes", "24G, 26G"],
              ["Sterile", "Yes, EO sterilized"]
            ]
          }
        };
      case "I.V. Cannula-AZpen":
        return {
          name: "I.V. CANNULA – AZPEN",
          features: [
            "Pen-type cannula for faster insertion",
            "Closed catheter system reduces blood spillage",
            "Flashback chamber ensures placement",
            "Smooth grip with streamlined design"
          ],
          table: {
            headers: ["Feature", "Detail"],
            rows: [
              ["Style", "Pen type"],
              ["Port Type", "With injection port"],
              ["Flashback Chamber", "Yes"],
              ["Sizes", "18G–26G"],
              ["Sterilization", "EO Gas"]
            ]
          }
        };
      case "I.V. Cannula-AZwin":
        return {
          name: "I.V. CANNULA – AZWIN",
          features: [
            "Winged I.V. cannula with large stabilizing wings",
            "Ideal for short-term infusion therapy",
            "Ergonomic grip for ease of insertion",
            "Transparent flashback chamber"
          ],
          table: {
            headers: ["Feature", "Detail"],
            rows: [
              ["Type", "Winged"],
              ["Flashback Chamber", "Yes"],
              ["Sizes", "16G–26G"],
              ["Injection Port", "Available"],
              ["Sterile", "Yes"]
            ]
          }
        };
      case "Safety I.V. Cannula – AZSafe":
        return {
          name: "SAFETY I.V. CANNULA – AZSAFE",
          features: [
            "Safety shield mechanism for needlestick injury prevention",
            "Needle retracts automatically after use",
            "Complies with international safety standards",
            "Injection port and wings for secure handling"
          ],
          table: {
            headers: ["Feature", "Detail"],
            rows: [
              ["Safety Mechanism", "Auto needle shielding"],
              ["Sizes", "14G–26G"],
              ["Catheter Material", "FEP / PU"],
              ["Safety Certification", "ISO 23908 compliant"],
              ["Sterilization", "EO Gas"]
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
                <h3 className="text-lg font-semibold text-gray-800">Technical Specifications:</h3>
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
