
import { Product } from "@/components/infusion-therapy/ProductCard";
import { createImagePath } from "@/utils/imageUtils";

const CATEGORY_PATH = "infusion-therapy";

// Pressure Monitoring Lines & Kits
export const pressureMonitoringProducts: Product[] = [
  {
    title: "Pressure Monitoring Line",
    image: createImagePath(CATEGORY_PATH, "pressure-monitoring/monitoring-line.jpg"),
    imageAlt: "High-precision pressure monitoring line for critical care applications",
    description: "High-precision pressure monitoring line designed for real-time hemodynamic monitoring in critical care and surgical environments."
  },
  {
    title: "Pressure Monitoring Kit (Single)",
    image: createImagePath(CATEGORY_PATH, "pressure-monitoring/single-kit.jpg"),
    imageAlt: "Single-line pressure monitoring kit for basic hemodynamic monitoring",
    description: "Single-line pressure monitoring kit providing essential components for basic hemodynamic monitoring and pressure measurement."
  },
  {
    title: "Pressure Monitoring Kit (Double)",
    image: createImagePath(CATEGORY_PATH, "pressure-monitoring/double-kit.jpg"),
    imageAlt: "Double-line pressure monitoring kit for advanced hemodynamic assessment",
    description: "Double-line pressure monitoring kit enabling simultaneous monitoring of multiple pressure parameters for comprehensive patient assessment."
  },
  {
    title: "Pressure Monitoring Kit (Triple)",
    image: createImagePath(CATEGORY_PATH, "pressure-monitoring/triple-kit.jpg"),
    imageAlt: "Triple-line pressure monitoring kit for complex critical care scenarios",
    description: "Triple-line pressure monitoring kit designed for complex critical care scenarios requiring multiple simultaneous pressure measurements."
  },
  {
    title: "Extension Line With Needle-Free Connectors",
    image: createImagePath(CATEGORY_PATH, "pressure-monitoring/needle-free-extension.jpg"),
    imageAlt: "Needle-free extension line for safe medication administration",
    description: "Extension line with needle-free connectors providing safe medication administration and reducing needlestick injury risk."
  },
  {
    title: "One Way Stopcock",
    image: createImagePath(CATEGORY_PATH, "pressure-monitoring/one-way-stopcock.jpg"),
    imageAlt: "Single-port stopcock for controlled fluid flow management",
    description: "Single-port stopcock providing controlled fluid flow management and secure connection points for infusion systems."
  },
  {
    title: "Two Way Stopcock",
    image: createImagePath(CATEGORY_PATH, "pressure-monitoring/two-way-stopcock.jpg"),
    imageAlt: "Dual-port stopcock for versatile infusion control",
    description: "Dual-port stopcock offering versatile infusion control with multiple connection options for complex medication protocols."
  },
  {
    title: "Three Way Stopcock",
    image: createImagePath(CATEGORY_PATH, "pressure-monitoring/three-way-stopcock.jpg"),
    imageAlt: "Triple-port stopcock for advanced infusion management",
    description: "Triple-port stopcock enabling advanced infusion management with multiple simultaneous connections and flow control options."
  }
];

// Infusion Flow Control Devices
export const flowControlProducts: Product[] = [
  {
    title: "I.V. Flow Regulator Extension Set",
    image: createImagePath(CATEGORY_PATH, "flow-control/flow-regulator-set.jpg"),
    imageAlt: "Precision I.V. flow regulator extension set for accurate fluid delivery",
    description: "Precision I.V. flow regulator extension set providing accurate control of infusion rates and consistent fluid delivery in clinical settings."
  }
];

// Pediatric Infusion Sets
export const pediatricProducts: Product[] = [
  {
    title: "Burette Set",
    image: createImagePath(CATEGORY_PATH, "pediatric/burette-set.jpg"),
    imageAlt: "Pediatric burette set for precise volume-controlled infusions",
    description: "Pediatric burette set designed for precise volume-controlled infusions, ensuring accurate fluid delivery for pediatric and neonatal patients."
  },
  {
    title: "Pediatric I.V. Set",
    image: createImagePath(CATEGORY_PATH, "pediatric/pediatric-iv-set.jpg"),
    imageAlt: "Specialized pediatric I.V. set for child-safe fluid delivery",
    description: "Specialized pediatric I.V. set engineered for child-safe fluid delivery with appropriate flow rates and safety features for young patients."
  }
];
