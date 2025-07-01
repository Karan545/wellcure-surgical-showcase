export interface GastroProductDetailContent {
  name: string;
  features?: string[];
  showInfantTable?: boolean;
  showUmbilicalTable?: boolean;
  image?: string;
}

export const gastroProductDetails: Record<string, GastroProductDetailContent> = {
  "Infant Feeding Tube": {
    name: "INFANT FEEDING TUBE",
    image: "/Product-images/Gastroenterology-Equipment/Infant-Feeding-Tube.png",
    features: [
      "Medical-grade PVC, latex & DEHP-free construction",
      "Closed distal end with two smooth lateral eyes for gentle feeding/aspiration",
      "Radiopaque line for X-ray detection with centimetre graduations every 1 cm (5 – 35 cm)",
      "Colour-coded funnel connector for easy French-size identification",
      "Sterile, EO-packed; CE / ISO 13485 certified; single-use only",
      "Available in French sizes 04 – 07 Fr (40 cm length) and 08 – 12 Fr (50 cm length)",
      "Smooth surface finish minimizes mucosal trauma during insertion",
      "Biocompatible materials ensure patient safety and comfort"
    ],
    showInfantTable: true
  },
  "Levin's Tube": {
    name: "LEVIN'S TUBE",
    image: "/Product-images/Gastroenterology-Equipment/Levin's-Tube.jpg",
    features: [
      "Single-lumen PVC gastric drainage tube, transparent & non-toxic",
      "Coned distal tip with four large lateral eyes for efficient aspiration",
      "Radiopaque stripe along entire length for placement verification",
      "Standard adult length: 48 in / 122 cm; sizes 12 Fr – 18 Fr available",
      "Funnel connector with size colour-code for easy identification",
      "Sterile, ready-to-use with individual packaging",
      "Smooth insertion with minimal patient discomfort",
      "Suitable for gastric decompression and feeding applications"
    ]
  },
  "Ryle's Tube": {
    name: "RYLE'S TUBE",
    image: "/Product-images/Gastroenterology-Equipment/Ryle's-Tube.png",
    features: [
      "Enteral feeding & gastric decompression tube, PVC construction",
      "Latex, DEHP & BPA-free for enhanced patient safety",
      "Radiopaque line with numeric depth marks every 1 cm for accurate placement",
      "Funnel end colour-coded by size for quick identification",
      "Four distal eyes for optimal drainage efficiency",
      "Adult & paediatric sizes: 6 Fr – 20 Fr; standard length 105 cm",
      "Smooth rounded tip minimises mucosal trauma during insertion",
      "Sterile EO packaging ensures product integrity"
    ]
  },
  "Umbilical Catheter": {
    name: "UMBILICAL CATHETER",
    image: "/Product-images/Gastroenterology-Equipment/Umbilical-Catheter.jpg",
    features: [
      "Biocompatible polyurethane (PUR) catheter for neonatal arterial/venous access",
      "Low-profile hub with radiopaque markings up to 34 cm for precise tip location",
      "Smooth rounded tip design for atraumatic insertion",
      "Non-kinking construction even at smallest 2.5 Fr size",
      "Available in sizes 2.5 Fr (30 cm), 3.5 Fr (40 cm), and 4-8 Fr (40 cm)",
      "Sterile, single-use with individual packaging",
      "Supplied in quantities of 20 or 180 pieces per case (size dependent)",
      "Designed specifically for umbilical vessel cannulation in neonates"
    ],
    showUmbilicalTable: true
  }
};

export const getGastroProductContent = (productTitle: string): GastroProductDetailContent | null => {
  console.log('Looking for product:', productTitle);
  console.log('Available products:', Object.keys(gastroProductDetails));
  
  const content = gastroProductDetails[productTitle];
  if (!content) {
    console.warn(`No product details found for: ${productTitle}`);
    return null;
  }
  
  return content;
};