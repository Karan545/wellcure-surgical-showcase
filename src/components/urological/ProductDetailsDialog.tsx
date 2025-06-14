
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

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
      // Urine Collection Bags
      case "Pediatric Urine Collection Bag":
        return {
          name: "PEDIATRIC URINE COLLECTION BAG",
          features: [
            "Adhesive pediatric pouch, latex-free, for infants",
            "Capacity: 100–200 mL, with gentle foam adhesive backing",
            "Double-chamber or no-flow valve to prevent backflow",
            "Sterile, individually packed, CE/ISO certified"
          ]
        };
      case "Urine Collection Bag with Measured Volume Meter":
        return {
          name: "URINE COLLECTION BAG WITH MEASURED VOLUME METER",
          features: [
            "2000 mL bag + 250/500 mL urometer for accurate output measurement",
            "150 cm kink-resistant PVC tubing",
            "Closed circuit, anti-contamination design, overflow safety",
            "RF-sealed valves, universal catheter connector, sterile packaging"
          ]
        };
      case "Urine Collection Bag with Top Outlet":
        return {
          name: "URINE COLLECTION BAG WITH TOP OUTLET",
          features: [
            "Durable PVC bag with top-outlet catheter connection",
            "Leak-proof welded tubing, clear volume graduations (up to 2000 mL)",
            "Universal inlet connector fits all French gauge sizes",
            "Molded hanger & passive air vent, CE/ISO compliant"
          ]
        };
      case "Urine Collection Bag with T-type Bottom Outlet & Sampling Port":
        return {
          name: "URINE COLLECTION BAG WITH T-TYPE BOTTOM OUTLET & SAMPLING PORT",
          features: [
            "2000 mL capacity, T-type valve for one-hand drainage",
            "Built-in sampling port (needle or needle-free)",
            "100 cm kink-resistant tubing with universal connector",
            "Non-return valve optional; foldable hanger"
          ]
        };
      case "Urine Collection Bag with Bottom Outlet":
        return {
          name: "URINE COLLECTION BAG WITH BOTTOM OUTLET",
          features: [
            "2000 mL bag with simple bottom drain valve",
            "High-tensile, soft PVC tubing, clear graduations",
            "Universal connector; individually sterile packed"
          ]
        };
      case "Urine Collection Bag with Handle and Top Outlet":
        return {
          name: "URINE COLLECTION BAG WITH HANDLE AND TOP OUTLET",
          features: [
            "Ergonomic handle molded into top + top catheter outlet",
            "Same specs as top-outlet bags: vent PVC, graduations, hanger, sterile"
          ]
        };
      case "Urine Collection Bag with NRV":
        return {
          name: "URINE COLLECTION BAG WITH NRV (NON-RETURN VALVE)",
          features: [
            "2000 mL bag with built-in non-return valve to prevent backflow",
            "T-type outlet & sampling port, universal connectors, sterile sealed",
            "Soft kink-resistant tubing, wall-mount hanger, CE/ISO certified"
          ]
        };
      
      // Urine Drainage Catheters
      case "Female Catheter":
        return {
          name: "FEMALE CATHETER",
          features: [
            "Specially designed length (180-200mm) for female anatomy",
            "Medical-grade PVC construction, latex-free",
            "Available sizes: 6-24 Fr with color-coded connectors",
            "Smooth rounded tip for gentle insertion",
            "Radio-opaque line for X-ray visibility",
            "Individually sterile packed, CE/ISO certified",
            "Export-ready with international quality standards"
          ]
        };
      case "Rectal Catheter":
        return {
          name: "RECTAL CATHETER",
          features: [
            "Smooth surface finish with atraumatic rounded tip",
            "Medical-grade PVC material, latex-free construction",
            "Length: 300-400mm for optimal reach",
            "Available sizes: 6-30 Fr with funnel connector",
            "Flexible design for patient comfort",
            "Sterile, single-use, individually packed",
            "CE/ISO certified for international export"
          ]
        };
      case "Nelaton Catheter":
        return {
          name: "NELATON CATHETER",
          features: [
            "Straight-tip design with multiple drainage eyes",
            "Premium medical-grade PVC, latex-free",
            "Radio-opaque line for accurate positioning",
            "Color-coded funnel connector for size identification",
            "Smooth surface for easy insertion",
            "Individually sterile packed with peel-open packaging",
            "CE/ISO certified, export-ready quality"
          ],
          showTable: true
        };

      // Central Venous Access Devices
      case "CVC Kit (Single Lumen)":
        return {
          name: "CVC KIT — SINGLE LUMEN",
          features: [
            "Biocompatible polyurethane catheter: rigid during insertion, softens at body temperature",
            "Soft, beveled atraumatic tip for smooth entry",
            "Radiopaque catheter with clear length markings for accurate placement",
            "Supplied sterile, individually tray-packed, CE / ISO 13485 certified",
            "Kit components: indwelling catheter, Y-introducer needle with check valve, J-tip nickel-titanium guidewire, vessel dilator, scalpel, catheter holder & clamp, injection cap, extension-line clamp, optional guiding syringe"
          ]
        };
      case "CVC Kit (Double Lumen)":
        return {
          name: "CVC KIT — DOUBLE LUMEN",
          features: [
            "Twin independent channels for simultaneous infusion/monitoring",
            "Radiopaque catheter; graduated depth markers ensure precise positioning",
            "J-tip flexible guidewire reduces vessel perforation risk",
            "Complete sterile kit with all accessories (see list above)",
            "Available sizes: 4 Fr – 8 Fr, lengths 15 cm / 20 cm"
          ]
        };
      case "CVC Kit (Triple Lumen)":
        return {
          name: "CVC KIT — TRIPLE LUMEN",
          features: [
            "Triple lumen for multi-drug delivery and CVP measurement",
            "Non-kinking PU tube stiff at room temp, soft in vivo",
            "Color-coded clamps & hubs for easy line identification",
            "Supplied sterile with full accessory set",
            "Sizes: 5.5 Fr – 8 Fr, lengths 15 cm / 20 cm"
          ]
        };
      case "CVC Kit (Four Lumen)":
        return {
          name: "CVC KIT — FOUR LUMEN",
          features: [
            "Four independent lumens for complex critical-care therapies",
            "Soft, conical tip ensures atraumatic insertion",
            "Radiopaque body with depth marks; high-flow distal lumen",
            "Sterile tray-packed kit, export-ready (5 kits / box)",
            "Sizes: 8.5 Fr, lengths 10 cm / 13 cm / 16 cm / 20 cm"
          ],
          showCVCTable: true
        };
      case "Arterial Catheter Kit":
        return {
          name: "ARTERIAL CATHETER KIT",
          application: [
            "Continuous arterial blood-pressure monitoring",
            "Arterial blood sampling",
            "Infusion of drugs and solutions"
          ],
          characteristics: [
            "Semi-transparent, X-ray visible, pressure-resistant polyethylene tube",
            "Seldinger technique; catheter & guidewire protected by sheath",
            "Naturally echogenic introducer needle; nickel-titanium guidewire",
            "Sterile, ready-to-use kit (5 kits / box)"
          ],
          showArterialTable: true,
          kitContents: "catheter, safety needle, safety guidewire (straight flexible tip), dilator, syringe, clamps"
        };
      case "Arterial Catheter Kit with Extension":
        return {
          name: "ARTERIAL CATHETER KIT WITH EXTENSION",
          additionalFeatures: [
            "Pre-attached pressure extension line for rapid transducer hookup",
            "Same biocompatible, X-ray visible catheter as standard kit",
            "Reduces setup time in critical care and OR environments"
          ],
          showArterialExtensionTable: true,
          kitContents: "catheter with extension, safety needle, safety guidewire, dilator, syringe, clamps"
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
              <span className="text-lg">🩺</span>
              <h3 className="text-lg font-semibold text-gray-800">Product Name:</h3>
            </div>
            <p className="text-base text-gray-700 ml-6">{productContent.name}</p>
          </div>

          {/* Application Section (for arterial catheters) */}
          {productContent.application && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">🔹</span>
                <h3 className="text-lg font-semibold text-gray-800">Application:</h3>
              </div>
              
              <div className="ml-6 space-y-3">
                {productContent.application.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-sm text-gray-400 mt-1">•</span>
                    <p className="text-base text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Characteristics Section (for arterial catheters) */}
          {productContent.characteristics && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">🔹</span>
                <h3 className="text-lg font-semibold text-gray-800">Characteristics:</h3>
              </div>
              
              <div className="ml-6 space-y-3">
                {productContent.characteristics.map((characteristic, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-sm text-gray-400 mt-1">•</span>
                    <p className="text-base text-gray-700">{characteristic}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Features Section (for arterial catheter with extension) */}
          {productContent.additionalFeatures && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">🔹</span>
                <h3 className="text-lg font-semibold text-gray-800">Additional Features:</h3>
              </div>
              
              <div className="ml-6 space-y-3">
                {productContent.additionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-sm text-gray-400 mt-1">•</span>
                    <p className="text-base text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features Section */}
          {productContent.features && (
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
          )}

          {/* CVC Size Reference Table */}
          {productContent.showCVCTable && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">📊</span>
                <h3 className="text-lg font-semibold text-gray-800">Size Reference (representative ordering range):</h3>
              </div>
              
              <div className="ml-6 overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Lumens</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Fr Size</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Length (cm)</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Guidewire (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">1</td>
                      <td className="border border-gray-300 px-3 py-2">4 – 6 Fr</td>
                      <td className="border border-gray-300 px-3 py-2">13 / 20</td>
                      <td className="border border-gray-300 px-3 py-2">50 / 60</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2">2</td>
                      <td className="border border-gray-300 px-3 py-2">4 – 7 Fr</td>
                      <td className="border border-gray-300 px-3 py-2">16 / 20</td>
                      <td className="border border-gray-300 px-3 py-2">50 / 60</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">3</td>
                      <td className="border border-gray-300 px-3 py-2">5.5 – 7 Fr</td>
                      <td className="border border-gray-300 px-3 py-2">16 / 20</td>
                      <td className="border border-gray-300 px-3 py-2">50 / 60</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2">4</td>
                      <td className="border border-gray-300 px-3 py-2">8.5 Fr</td>
                      <td className="border border-gray-300 px-3 py-2">10 / 13 / 16 / 20</td>
                      <td className="border border-gray-300 px-3 py-2">50 / 60</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Arterial Catheter Specification Table (without extension) */}
          {productContent.showArterialTable && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">📊</span>
                <h3 className="text-lg font-semibold text-gray-800">Specification (without extension):</h3>
              </div>
              
              <div className="ml-6 overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Gauge</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Length (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">16 GA</td>
                      <td className="border border-gray-300 px-3 py-2">16, 20</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2">18 GA</td>
                      <td className="border border-gray-300 px-3 py-2">10, 20</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">20 GA</td>
                      <td className="border border-gray-300 px-3 py-2">06, 08, 10, 20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Arterial Catheter Specification Table (with extension) */}
          {productContent.showArterialExtensionTable && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">📊</span>
                <h3 className="text-lg font-semibold text-gray-800">Specification (with extension):</h3>
              </div>
              
              <div className="ml-6 overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Gauge</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Length (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">22 GA</td>
                      <td className="border border-gray-300 px-3 py-2">04, 06, 08, 10, 20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Kit Contents */}
          {productContent.kitContents && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">📦</span>
                <h3 className="text-lg font-semibold text-gray-800">Kit Contents:</h3>
              </div>
              <p className="text-base text-gray-700 ml-6">{productContent.kitContents}</p>
            </div>
          )}

          {/* Nelaton Catheter Size Table */}
          {productContent.showTable && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">📊</span>
                <h3 className="text-lg font-semibold text-gray-800">Available Sizes (Nelaton Catheter):</h3>
              </div>
              
              <div className="ml-6 overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Variant</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Length</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Size (Fr)</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Connector</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Material</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Male</td>
                      <td className="border border-gray-300 px-3 py-2">400 mm</td>
                      <td className="border border-gray-300 px-3 py-2">6–24 Fr</td>
                      <td className="border border-gray-300 px-3 py-2">Funnel</td>
                      <td className="border border-gray-300 px-3 py-2">Medical-grade PVC</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2">Female</td>
                      <td className="border border-gray-300 px-3 py-2">180–200 mm</td>
                      <td className="border border-gray-300 px-3 py-2">6–24 Fr</td>
                      <td className="border border-gray-300 px-3 py-2">Funnel</td>
                      <td className="border border-gray-300 px-3 py-2">Medical-grade PVC</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Pediatric</td>
                      <td className="border border-gray-300 px-3 py-2">400 mm</td>
                      <td className="border border-gray-300 px-3 py-2">6–10 Fr</td>
                      <td className="border border-gray-300 px-3 py-2">Funnel</td>
                      <td className="border border-gray-300 px-3 py-2">Medical-grade PVC</td>
                    </tr>
                  </tbody>
                </table>
                
                <p className="text-sm text-gray-600 mt-3 italic">
                  Export-ready notes: individually sterile packed, CE/ISO certified, radio‑opaque line, color‑coded connector, latex‑free
                </p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;
