
import { Product } from "@/components/infusion-therapy/ProductCard";

// Placeholder paths for local images - you can replace these with your actual paths later
const IMAGE_BASE = "/placeholder-images/infusion-therapy";

export const extensionTubes: Product[] = [
  {
    title: "High Pressure Extension Line",
    image: `${IMAGE_BASE}/extension-tubes/high-pressure.jpg`,
    imageAlt: "Medical high pressure extension line for infusion therapy",
    description: "Durable extension line designed for high-pressure applications, with reinforced walls and secure connectors."
  },
  {
    title: "Low Pressure Extension Line",
    image: `${IMAGE_BASE}/extension-tubes/low-pressure.jpg`,
    imageAlt: "Medical low pressure extension line for standard infusions",
    description: "Flexible extension line for standard pressure infusions, featuring clear markings and smooth fluid flow."
  },
  {
    title: "PVC Free High Pressure Extension Line",
    image: `${IMAGE_BASE}/extension-tubes/pvc-free.jpg`,
    imageAlt: "PVC-free high pressure medical extension line",
    description: "Environmentally-friendly, PVC-free extension line with high-pressure resistance and biocompatible materials."
  }
];

export const ivInfusionSets: Product[] = [
  {
    title: "I.V. Infusion Set with Airvent",
    image: `${IMAGE_BASE}/iv-sets/with-airvent.jpg`,
    imageAlt: "IV infusion set with integrated air vent system",
    description: "Complete infusion set featuring an integrated air vent for consistent flow and prevention of air locks."
  },
  {
    title: "I.V. Infusion Set with Flow Regulator",
    image: `${IMAGE_BASE}/iv-sets/with-flow-regulator.jpg`,
    imageAlt: "IV infusion set with precision flow regulation mechanism",
    description: "Precision infusion set with adjustable flow regulator for accurate control of fluid administration rates."
  },
  {
    title: "I.V. Infusion Set with Micro Drip",
    image: `${IMAGE_BASE}/iv-sets/micro-drip.jpg`,
    imageAlt: "IV infusion set with micro-drip chamber for precise delivery",
    description: "Specialized infusion set with micro-drip chamber for precise delivery of small volume infusions."
  },
  {
    title: "I.V. Infusion Set without Airvent",
    image: `${IMAGE_BASE}/iv-sets/without-airvent.jpg`,
    imageAlt: "Standard IV infusion set without air vent",
    description: "Standard infusion set without air vent, ideal for gravity-fed infusions and general application."
  }
];

export const ivCannulas: Product[] = [
  {
    title: "I.V. Cannula-AZcan",
    image: `${IMAGE_BASE}/cannulas/azcan.jpg`,
    imageAlt: "AZcan standard intravenous cannula with smooth insertion point",
    description: "Standard intravenous cannula with smooth insertion point and comfortable hub design."
  },
  {
    title: "I.V. Cannula-AZcath",
    image: `${IMAGE_BASE}/cannulas/azcath.jpg`,
    imageAlt: "AZcath premium catheter-style IV cannula",
    description: "Premium catheter-style IV cannula with flexible tubing and enhanced stability."
  },
  {
    title: "I.V. Cannula-AZflon",
    image: `${IMAGE_BASE}/cannulas/azflon.jpg`,
    imageAlt: "AZflon advanced fluorinated polymer IV cannula",
    description: "Advanced fluorinated polymer IV cannula for reduced friction and longer indwelling times."
  },
  {
    title: "I.V. Cannula-AZneo",
    image: `${IMAGE_BASE}/cannulas/azneo.jpg`,
    imageAlt: "AZneo specially designed neonatal IV cannula",
    description: "Specially designed neonatal IV cannula with extra-small gauge and gentle insertion mechanism."
  },
  {
    title: "I.V. Cannula-AZpen",
    image: `${IMAGE_BASE}/cannulas/azpen.jpg`,
    imageAlt: "AZpen pen-grip style IV cannula",
    description: "Pen-grip style IV cannula providing enhanced control during insertion procedures."
  },
  {
    title: "I.V. Cannula-AZwin",
    image: `${IMAGE_BASE}/cannulas/azwin.jpg`,
    imageAlt: "AZwin wingless design IV cannula",
    description: "Wingless design IV cannula for specialized applications requiring minimal surface profile."
  },
  {
    title: "Safety I.V. Cannula – AZSafe",
    image: `${IMAGE_BASE}/cannulas/azsafe.jpg`,
    imageAlt: "AZSafe advanced safety IV cannula with needle protection",
    description: "Advanced safety IV cannula with needle protection mechanism to prevent needlestick injuries."
  }
];
