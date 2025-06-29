import { Product } from "@/components/infusion-therapy/ProductCard";
import { createImagePath } from "@/utils/imageUtils";

const CATEGORY_PATH = "Infusion-Therapy";

export const extensionTubes: Product[] = [
  {
    title: "High Pressure Extension Line",
    image: `/Product-images/${CATEGORY_PATH}/Extension-Tubes/High-Pressure-Extension-Line.jpg`,
    imageAlt: "Medical high pressure extension line for infusion therapy",
    description: "Durable extension line designed for high-pressure applications, with reinforced walls and secure connectors."
  },
  {
    title: "Low Pressure Extension Line",
    image: `/Product-images/${CATEGORY_PATH}/Extension-Tubes/Low-Pressure-Extension-Line.jpg`,
    imageAlt: "Medical low pressure extension line for standard infusions",
    description: "Flexible extension line for standard pressure infusions, featuring clear markings and smooth fluid flow."
  },
  {
    title: "PVC Free High Pressure Extension Line",
    image: `/Product-images/${CATEGORY_PATH}/Extension-Tubes/PVC-Free-High-Pressure-Extension-Line.png`,
    imageAlt: "PVC-free high pressure medical extension line",
    description: "Environmentally-friendly, PVC-free extension line with high-pressure resistance and biocompatible materials."
  }
];

export const ivInfusionSets: Product[] = [
  {
    title: "I.V. Infusion Set with Airvent",
    image: `/Product-images/${CATEGORY_PATH}/I.V.-Infusion-Sets/I.V.-Infusion-Set-with-Airvent.jpg`,
    imageAlt: "IV infusion set with integrated air vent system",
    description: "Complete infusion set featuring an integrated air vent for consistent flow and prevention of air locks."
  },
  {
    title: "I.V. Infusion Set with Flow Regulator",
    image: `/Product-images/${CATEGORY_PATH}/I.V.-Infusion-Sets/I.V.-Infusion-Set-with-Flow-Regulator.png`,
    imageAlt: "IV infusion set with precision flow regulation mechanism",
    description: "Precision infusion set with adjustable flow regulator for accurate control of fluid administration rates."
  },
  {
    title: "I.V. Infusion Set with Micro Drip",
    image: `/Product-images/${CATEGORY_PATH}/I.V.-Infusion-Sets/I.V.-Infusion-Set-with-Micro-Drip.avif`,
    imageAlt: "IV infusion set with micro-drip chamber for precise delivery",
    description: "Specialized infusion set with micro-drip chamber for precise delivery of small volume infusions."
  },
  {
    title: "I.V. Infusion Set without Airvent",
    image: `/Product-images/${CATEGORY_PATH}/I.V.-Infusion-Sets/I.V.-Infusion-Set-without-Airvent.jpg`,
    imageAlt: "Standard IV infusion set without air vent",
    description: "Standard infusion set without air vent, ideal for gravity-fed infusions and general application."
  }
];

export const ivCannulas: Product[] = [
  {
    title: "I.V. Cannula-AZcan",
    image: `/Product-images/${CATEGORY_PATH}/I.V.-Cannula/I.V.-Cannula-AZcan.jpg`,
    imageAlt: "AZcan standard intravenous cannula with smooth insertion point",
    description: "Standard intravenous cannula with smooth insertion point and comfortable hub design."
  },
  {
    title: "I.V. Cannula-AZcath",
    image: `/Product-images/${CATEGORY_PATH}/I.V.-Cannula/I.V.-Cannula-AZcath.png`,
    imageAlt: "AZcath premium catheter-style IV cannula",
    description: "Premium catheter-style IV cannula with flexible tubing and enhanced stability."
  },
  {
    title: "I.V. Cannula-AZflon",
    image: `/Product-images/${CATEGORY_PATH}/I.V.-Cannula/I.V.-Cannula-AZflon.jpg`,
    imageAlt: "AZflon advanced fluorinated polymer IV cannula",
    description: "Advanced fluorinated polymer IV cannula for reduced friction and longer indwelling times."
  },
  {
    title: "I.V. Cannula-AZneo",
    image: `/Product-images/${CATEGORY_PATH}/I.V.-Cannula/I.V.-Cannula-AZneo.jpg`,
    imageAlt: "AZneo specially designed neonatal IV cannula",
    description: "Specially designed neonatal IV cannula with extra-small gauge and gentle insertion mechanism."
  },
  {
    title: "I.V. Cannula-AZpen",
    image: `/Product-images/${CATEGORY_PATH}/I.V.-Cannula/I.V.-Cannula-AZpen.jpg`,
    imageAlt: "AZpen pen-grip style IV cannula",
    description: "Pen-grip style IV cannula providing enhanced control during insertion procedures."
  },
  {
    title: "I.V. Cannula-AZwin",
    image: `/Product-images/${CATEGORY_PATH}/I.V.-Cannula/I.V.-Cannula-AZwin.png`,
    imageAlt: "AZwin wingless design IV cannula",
    description: "Wingless design IV cannula for specialized applications requiring minimal surface profile."
  },
  {
    title: "Safety I.V. Cannula – AZSafe",
    image: `/Product-images/${CATEGORY_PATH}/I.V.-Cannula/Safety-I.V.-Cannula – AZSafe.jpg`,
    imageAlt: "AZSafe advanced safety IV cannula with needle protection",
    description: "Advanced safety IV cannula with needle protection mechanism to prevent needlestick injuries."
  }
];