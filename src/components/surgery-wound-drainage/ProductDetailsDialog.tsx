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
      case "Wound Drainage System":
        return {
          name: "WOUND DRAINAGE SYSTEM",
          features: [
            "Closed wound drainage system designed to prevent retrograde infection",
            "Silicone/medical-grade PVC tubing with low memory for kink resistance",
            "Graduated collection chamber with 200–400 mL options",
            "Available with flat, perforated, or round fluted drains",
            "Vacuum-generating bellow for active suction",
            "Easy clamp for one-handed use during disposal",
            "Latex-free & sterile; individually packed"
          ],
          table: {
            headers: ["Feature", "Description"],
            rows: [
              ["Chamber Capacity", "200 mL / 400 mL"],
              ["Material", "Silicone or Medical-grade PVC"],
              ["Drain Type", "Flat / Perforated / Fluted Round"],
              ["Vacuum Source", "Self-expanding bellow"],
              ["Tubing", "Kink-resistant, DEHP-Free"],
              ["Sterilization", "EO Gas"],
              ["Packaging", "Sterile, Single-use"]
            ]
          }
        };
      case "Thoracic Drainage Catheter (Angled)":
        return {
          name: "THORACIC DRAINAGE CATHETER (ANGLED)",
          features: [
            "Designed for effective drainage of air, blood, or fluid from pleural cavity",
            "Angled tip for easy insertion and anatomical alignment",
            "Soft radiopaque PVC ensures patient safety and imaging compatibility",
            "Marked tube with depth graduation",
            "Available in multiple sizes (12Fr to 36Fr)",
            "Supplied sterile, single-use only"
          ],
          table: {
            headers: ["Feature", "Description"],
            rows: [
              ["Tip Design", "Angled Tip"],
              ["Size Range", "12Fr – 36Fr"],
              ["Radiopaque", "Yes"],
              ["Markings", "Depth Graduation"],
              ["Material", "Medical PVC"],
              ["Sterilization", "EO Gas"]
            ]
          }
        };
      case "Thoracic Drainage Catheter (Straight)":
        return {
          name: "THORACIC DRAINAGE CATHETER (STRAIGHT)",
          features: [
            "Straight variant of thoracic catheter with identical drainage efficiency",
            "Large eye openings for enhanced fluid evacuation",
            "Soft, radiopaque medical-grade PVC",
            "Depth marking for controlled insertion",
            "Available from 12Fr to 36Fr",
            "Sterile, single-use"
          ],
          table: {
            headers: ["Feature", "Description"],
            rows: [
              ["Tip Design", "Straight"],
              ["Eye Design", "Large, Open"],
              ["Size Range", "12Fr – 36Fr"],
              ["Radiopaque", "Yes"],
              ["Depth Marked", "Yes"],
              ["Sterilization", "EO Gas"]
            ]
          }
        };
      case "Thoracic Drainage System":
        return {
          name: "THORACIC DRAINAGE SYSTEM",
          features: [
            "Closed thoracic drainage system for post-op or trauma use",
            "Graduated collection chamber (2000 mL+)",
            "Anti-reflux valve prevents backflow of air or fluid",
            "Multiple ports for drainage and irrigation",
            "Can be connected to suction for active drainage",
            "Transparent collection chamber for easy inspection",
            "Provided sterile, disposable"
          ],
          table: {
            headers: ["Feature", "Description"],
            rows: [
              ["Chamber Volume", "2000 mL+"],
              ["Backflow Protection", "Anti-Reflux Valve"],
              ["Drainage Mode", "Passive or Suction-Activated"],
              ["Material", "Medical Grade PVC"],
              ["Port Design", "Multi-Port"],
              ["Sterile Packaging", "Yes"]
            ]
          }
        };
      case "Surgical Drain":
        return {
          name: "SURGICAL DRAIN",
          features: [
            "Post-operative surgical drain for continuous fluid evacuation",
            "Perforated tubing for uniform suction across wound surface",
            "Available in round & flat profiles",
            "Radiopaque line for x-ray identification",
            "DEHP-free PVC or Silicone",
            "Can be used with closed wound drainage systems",
            "EO gas sterilized and individually packed"
          ],
          table: {
            headers: ["Feature", "Description"],
            rows: [
              ["Drain Type", "Round or Flat"],
              ["Perforation", "Multi-hole Design"],
              ["Radiopaque", "Yes"],
              ["Material", "Silicone or DEHP-free PVC"],
              ["Compatibility", "Closed Drainage Systems"],
              ["Packaging", "Sterile, Single-use"]
            ]
          }
        };
      case "Surgical Suction Set":
        return {
          name: "SURGICAL SUCTION SET",
          features: [
            "Used for removal of fluids during surgical procedures",
            "Flexible, kink-resistant suction tube made from medical-grade PVC",
            "Equipped with universal connectors to fit all types of suction equipment",
            "Available in various lengths (e.g., 210 cm, 250 cm)",
            "Optionally provided with vented or non-vented options",
            "Sterile and ready to use"
          ],
          table: {
            headers: ["Feature", "Description"],
            rows: [
              ["Tube Length", "210 cm / 250 cm"],
              ["Tube Material", "Medical-Grade PVC"],
              ["Kink Resistance", "Yes"],
              ["Connector Type", "Universal, Vented / Non-Vented"],
              ["Sterilization", "EO Gas"],
              ["Usage", "Single-use, sterile"]
            ]
          }
        };
      case "Yankauer Suction Set":
        return {
          name: "YANKAUER SUCTION SET",
          features: [
            "Designed for precision suction during surgical or dental procedures",
            "Set includes Yankauer suction tip and a transparent suction tube",
            "Rigid suction tip with a bulbous head and smooth edges for atraumatic insertion",
            "Available with or without a vent hole",
            "Ergonomic design for controlled suction and operator comfort",
            "Universal adapter connects to standard suction tubing",
            "Available in curved or straight variants",
            "Sterile, single-use"
          ],
          table: {
            headers: ["Feature", "Description"],
            rows: [
              ["Tip Style", "Yankauer, Rigid"],
              ["Tip Type", "Bulbous Head (Vented / Non-Vented)"],
              ["Tube Material", "Transparent Medical PVC"],
              ["Length", "210 cm / Customizable"],
              ["Sterile Packaging", "EO Sterilized, Single-use"],
              ["Connector Compatibility", "Universal Adapter"]
            ]
          }
        };
      case "Vessel Loops":
        return {
          name: "VESSEL LOOPS",
          features: [
            "Used for temporary occlusion, retraction, and identification of arteries, veins, tendons, and nerves during surgical procedures",
            "Made from soft, medical-grade silicone that ensures gentle handling and minimizes trauma",
            "Available in multiple vibrant colors for easy identification during procedures",
            "Radiopaque strip included for visibility under imaging",
            "Can be sterilized (EtO) and is latex-free",
            "Non-adherent and non-toxic",
            "Available in standard lengths and thicknesses"
          ],
          table: {
            headers: ["Feature", "Description"],
            rows: [
              ["Material", "Medical-grade Silicone"],
              ["Sterilization", "EO Sterile, Ready-to-use"],
              ["Latex-Free", "Yes"],
              ["Radiopaque Strip", "Yes"],
              ["Color Variants", "Red, Blue, Yellow, Green, White"],
              ["Width Options", "2.5 mm, 4.0 mm"],
              ["Length", "400 mm (standard)"],
              ["Application", "Retraction, Isolation, Identification"],
              ["Packaging", "Individually packed, sterile"]
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
          <DialogDescription className="sr-only">
            Detailed specifications and features for {productContent.name}
          </DialogDescription>
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

          {/* Table Section */}
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;
