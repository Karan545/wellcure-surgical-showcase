import { Product } from "@/components/infusion-therapy/ProductCard";

const CATEGORY_PATH = "Infusion-Therapy";

// Pressure Monitoring Lines & Kits
export const pressureMonitoringProducts: Product[] = [
  {
    title: "Pressure Monitoring Line",
    image: `/Product-images/${CATEGORY_PATH}/Pressure-Monitoring-Lines/Pressure-Monitoring-Line.png`,
    imageAlt: "High-precision pressure monitoring line for critical care applications",
    description: "High-precision pressure monitoring line designed for real-time hemodynamic monitoring in critical care and surgical environments."
  },
  {
    title: "Pressure Monitoring Kit (Single)",
    image: `/Product-images/${CATEGORY_PATH}/Pressure-Monitoring-Lines/Pressure-Monitoring-Kit-(Single).png`,
    imageAlt: "Single-line pressure monitoring kit for basic hemodynamic monitoring",
    description: "Single-line pressure monitoring kit providing essential components for basic hemodynamic monitoring and pressure measurement."
  },
  {
    title: "Pressure Monitoring Kit (Double)",
    image: `/Product-images/${CATEGORY_PATH}/Pressure-Monitoring-Lines/Pressure-Monitoring-Kit-(Double).png`,
    imageAlt: "Double-line pressure monitoring kit for advanced hemodynamic assessment",
    description: "Double-line pressure monitoring kit enabling simultaneous monitoring of multiple pressure parameters for comprehensive patient assessment."
  },
  {
    title: "Pressure Monitoring Kit (Triple)",
    image: `/Product-images/${CATEGORY_PATH}/Pressure-Monitoring-Lines/Pressure-Monitoring-Kit-(Triple).png`,
    imageAlt: "Triple-line pressure monitoring kit for complex critical care scenarios",
    description: "Triple-line pressure monitoring kit designed for complex critical care scenarios requiring multiple simultaneous pressure measurements."
  },
  {
    title: "Extension Line With Needle-Free Connectors",
    image: `/Product-images/${CATEGORY_PATH}/Pressure-Monitoring-Lines/Extension-Line-With-Needle-Free-Connectors.jpg`,
    imageAlt: "Needle-free extension line for safe medication administration",
    description: "Extension line with needle-free connectors providing safe medication administration and reducing needlestick injury risk."
  },
  {
    title: "One Way Stopcock",
    image: `/Product-images/${CATEGORY_PATH}/Pressure-Monitoring-Lines/One-Way-Stopcock.png`,
    imageAlt: "Single-port stopcock for controlled fluid flow management",
    description: "Single-port stopcock providing controlled fluid flow management and secure connection points for infusion systems."
  },
  {
    title: "Two Way Stopcock",
    image: `/Product-images/${CATEGORY_PATH}/Pressure-Monitoring-Lines/Two-Way-Stopcock.png`,
    imageAlt: "Dual-port stopcock for versatile infusion control",
    description: "Dual-port stopcock offering versatile infusion control with multiple connection options for complex medication protocols."
  },
  {
    title: "Three Way Stopcock",
    image: `/Product-images/${CATEGORY_PATH}/Pressure-Monitoring-Lines/Three-Way-Stopcock.png`,
    imageAlt: "Triple-port stopcock for advanced infusion management",
    description: "Triple-port stopcock enabling advanced infusion management with multiple simultaneous connections and flow control options."
  }
];

// Infusion Flow Control Devices
export const flowControlProducts: Product[] = [
  {
    title: "I.V. Flow Regulator Extension Set",
    image: `/Product-images/${CATEGORY_PATH}/Flow-Control-Devices/I.V.-Flow-Regulator-Extension-Set.png`,
    imageAlt: "Precision I.V. flow regulator extension set for accurate fluid delivery",
    description: "Precision I.V. flow regulator extension set providing accurate control of infusion rates and consistent fluid delivery in clinical settings."
  }
];

// Pediatric Infusion Sets
export const pediatricProducts: Product[] = [
  {
    title: "Burette Set",
    image: `/Product-images/${CATEGORY_PATH}/Pediatric-Infusion-Sets/Burette-Set.png`,
    imageAlt: "Pediatric burette set for precise volume-controlled infusions",
    description: "Pediatric burette set designed for precise volume-controlled infusions, ensuring accurate fluid delivery for pediatric and neonatal patients."
  },
  {
    title: "Pediatric I.V. Set",
    image: `/Product-images/${CATEGORY_PATH}/Pediatric-Infusion-Sets/Pediatric-I.V.-Set.png`,
    imageAlt: "Specialized pediatric I.V. set for child-safe fluid delivery",
    description: "Specialized pediatric I.V. set engineered for child-safe fluid delivery with appropriate flow rates and safety features for young patients."
  }
];