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
      case "I.V. Flow Regulator Extension Set":
        return {
          name: "I.V. FLOW REGULATOR EXTENSION SET",
          image: "/Product-images/Infusion-Therapy/Flow-Control-Devices/I.V.-Flow-Regulator-Extension-Set.png",
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
          image: "/Product-images/Infusion-Therapy/I.V.-Infusion-Sets/I.V.-Infusion-Set-with-Flow-Regulator.png",
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
          image: "/Product-images/Infusion-Therapy/Extension-Tubes/High-Pressure-Extension-Line.jpg",
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
          image: "/Product-images/Infusion-Therapy/Extension-Tubes/Low-Pressure-Extension-Line.jpg",
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
          image: "/Product-images/Infusion-Therapy/Extension-Tubes/PVC-Free-High-Pressure-Extension-Line.png",
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
          image: "/Product-images/Infusion-Therapy/I.V.-Infusion-Sets/I.V.-Infusion-Set-with-Airvent.jpg",
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
          image: "/Product-images/Infusion-Therapy/I.V.-Infusion-Sets/I.V.-Infusion-Set-with-Micro-Drip.avif",
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
          image: "/Product-images/Infusion-Therapy/I.V.-Infusion-Sets/I.V.-Infusion-Set-without-Airvent.jpg",
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
          image: "/Product-images/Infusion-Therapy/I.V.-Cannula/I.V.-Cannula-AZcan.jpg",
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
          image: "/Product-images/Infusion-Therapy/I.V.-Cannula/I.V.-Cannula-AZcath.png",
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
          image: "/Product-images/Infusion-Therapy/I.V.-Cannula/I.V.-Cannula-AZflon.jpg",
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
          image: "/Product-images/Infusion-Therapy/I.V.-Cannula/I.V.-Cannula-AZneo.jpg",
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
          image: "/Product-images/Infusion-Therapy/I.V.-Cannula/I.V.-Cannula-AZpen.jpg",
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
          image: "/Product-images/Infusion-Therapy/I.V.-Cannula/I.V.-Cannula-AZwin.png",
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
          image: "/Product-images/Infusion-Therapy/I.V.-Cannula/Safety-I.V.-Cannula – AZSafe.jpg",
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
      case "Pressure Monitoring Line":
        return {
          name: "PRESSURE MONITORING LINE",
          image: "/Product-images/Infusion-Therapy/Pressure-Monitoring-Lines/Pressure-Monitoring-Line.png",
          features: [
            "Designed for pressure monitoring during intensive care and anesthesia",
            "Tubing is non-DEHP, non-toxic and kink resistant",
            "Standard tube length: 100 cm, 150 cm, 200 cm",
            "Color-coded connectors for easy identification",
            "Male luer lock on one end, female luer lock or stopcock at the other",
            "Sterile and individually packed"
          ]
        };
      case "Pressure Monitoring Kit (Single)":
      case "Pressure Monitoring Kit (Double)":
      case "Pressure Monitoring Kit (Triple)":
        return {
          name: "PRESSURE MONITORING KITS",
          image: `/Product-images/Infusion-Therapy/Pressure-Monitoring-Lines/Pressure-Monitoring-Kit-(${product.title.includes('Single') ? 'Single' : product.title.includes('Double') ? 'Double' : 'Triple'}).png`,
          features: [
            "Complete monitoring solutions for intensive care settings",
            "Available in single, double, and triple line configurations",
            "Includes appropriate stopcocks for each configuration",
            "Universal pressure transducer compatibility",
            "Latex-free and EO sterilized for safety"
          ],
          table: {
            headers: ["Feature", "Single Kit", "Double Kit", "Triple Kit"],
            rows: [
              ["Number of Lines", "1", "2", "3"],
              ["Stopcock Included", "1-Way", "2-Way", "3-Way"],
              ["Extension Tube Length", "100 cm", "150 cm", "200 cm"],
              ["Pressure Transducer Compatibility", "Universal", "Universal", "Universal"],
              ["Latex Free", "Yes", "Yes", "Yes"],
              ["Sterile", "EO Sterile", "EO Sterile", "EO Sterile"]
            ]
          }
        };
      case "Extension Line With Needle-Free Connectors":
        return {
          name: "EXTENSION LINE WITH NEEDLE-FREE CONNECTORS",
          image: "/Product-images/Infusion-Therapy/Pressure-Monitoring-Lines/Extension-Line-With-Needle-Free-Connectors.jpg",
          features: [
            "Designed for safe fluid transfer and drug administration",
            "Needle-Free Y-Site connector ensures closed system access and reduces contamination risk",
            "Standard lengths available: 10 cm, 25 cm, 50 cm",
            "Pressure-resistant tubing for high flow without kinking",
            "Soft, kink-resistant, DEHP-free PVC construction",
            "Ends: Male Luer Lock to Needle-Free Connector",
            "Minimal dead space and low priming volume",
            "Sterilized using Ethylene Oxide (EO) gas",
            "Individually packed, non-toxic, non-pyrogenic",
            "Suitable for critical care and pressure monitoring environments"
          ],
          table: {
            headers: ["Specification", "Value"],
            rows: [
              ["Tube Lengths Available", "10 cm, 25 cm, 50 cm"],
              ["End Connectors", "Male Luer Lock to Y-Site"],
              ["Material", "DEHP-free medical-grade PVC"],
              ["Sterilization", "EO Sterile"],
              ["Needle-Free Valve", "Integrated, high-flow design"],
              ["Packaging", "Individually packed"],
              ["Usage", "Single use, disposable"]
            ]
          }
        };
      case "Pediatric I.V. Set":
        return {
          name: "PEDIATRIC I.V. SET",
          image: "/Product-images/Infusion-Therapy/Pediatric-Infusion-Sets/Pediatric-I.V.-Set.png",
          features: [
            "Designed for accurate fluid and medication administration in neonates and pediatric patients",
            "Transparent drip chamber for clear visibility and air bubble detection",
            "Graduated chamber with optional burette-type reservoir",
            "Floating shut-off valve to prevent air embolism",
            "Sharp sterile spike for effortless puncture of IV bottles/bags",
            "15μm particle filter for protection",
            "Latex-free injection port for intermittent drug administration",
            "DEHP-free medical-grade PVC tubing",
            "Precision roller clamp for consistent flow control",
            "Sterilized by EO gas; individually blister-packed"
          ],
          table: {
            headers: ["Feature", "Description"],
            rows: [
              ["Intended Use", "Neonatal / Pediatric IV Infusion"],
              ["Burette Option", "100 mL (available on specific model)"],
              ["Filtration", "15μm Disc Filter"],
              ["Drip Chamber", "Cylindrical, Transparent"],
              ["Tubing", "DEHP-Free, Kink-Resistant"],
              ["Flow Regulator", "Precision Roller Clamp"],
              ["Injection Site", "Latex-Free"],
              ["Sterilization", "EO Gas"],
              ["Packaging", "Individual Blister Pack"]
            ]
          }
        };
      case "Burette Set":
        return {
          name: "BURETTE SET",
          image: "/Product-images/Infusion-Therapy/Pediatric-Infusion-Sets/Burette-Set.png",
          features: [
            "Ideal for pediatric applications where accurate infusion volume is essential",
            "100 mL calibrated burette with clear, easy-to-read graduation",
            "Automatic shut-off float valve to prevent air embolism",
            "15μm inline filter for enhanced patient safety",
            "Kink-resistant DEHP-free PVC tubing",
            "Precision flow controller for dose accuracy",
            "Sharp, medical-grade spike compatible with standard IV bottles",
            "Latex-free Y-site injection port",
            "EO gas sterilized; individually blister-packed for hygiene"
          ],
          table: {
            headers: ["Feature", "Description"],
            rows: [
              ["Burette Capacity", "100 mL with 1 mL graduation"],
              ["Float Valve", "Auto shut-off to prevent air entry"],
              ["Filtration", "15μm Disc Filter"],
              ["Injection Port", "Latex-Free Y-site"],
              ["Tubing", "Transparent, DEHP-Free PVC"],
              ["Flow Control", "Precision Roller Clamp"],
              ["Sterilization", "Ethylene Oxide (EO)"],
              ["Compatibility", "Standard IV Bottles"],
              ["Packaging", "Individually Blister Packed"]
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
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="relative bg-white p-8 border-b sticky top-0 z-10">
          <DialogTitle className="text-3xl font-semibold text-gray-800 pr-8">
            Product Details
          </DialogTitle>
          <DialogDescription className="sr-only">
            Detailed specifications and features for {productContent.name}
          </DialogDescription>
          <DialogClose className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        
        <div className="p-8 space-y-8">
          {/* Product Image */}
          {productContent.image && (
            <div className="flex justify-center mb-8">
              <div className="relative max-w-md w-full">
                <img
                  src={productContent.image}
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

          {/* Product Name Section */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🔗</span>
              <h3 className="text-2xl font-semibold text-gray-800">Product Name:</h3>
            </div>
            <p className="text-xl text-gray-700 ml-10">{productContent.name}</p>
          </div>

          {/* Key Features Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🔹</span>
              <h3 className="text-2xl font-semibold text-gray-800">Key Features:</h3>
            </div>
            
            <div className="ml-10 space-y-4">
              {productContent.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-lg text-gray-400 mt-1">•</span>
                  <p className="text-lg text-gray-700 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Table Section (if available) */}
          {productContent.table && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">📏</span>
                <h3 className="text-2xl font-semibold text-gray-800">Technical Specifications:</h3>
              </div>
              
              <div className="ml-10">
                <Table className="border border-gray-200">
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      {productContent.table.headers.map((header, index) => (
                        <TableHead key={index} className="font-semibold text-gray-800 text-lg border-r border-gray-200 last:border-r-0 p-4">
                          {header}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {productContent.table.rows.map((row, rowIndex) => (
                      <TableRow key={rowIndex} className="hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <TableCell key={cellIndex} className="border-r border-gray-200 last:border-r-0 p-4 text-base">
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