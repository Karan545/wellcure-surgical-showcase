
export interface GastroProductDetailContent {
  name: string;
  features?: string[];
  showInfantTable?: boolean;
  showUmbilicalTable?: boolean;
}

export const gastroProductDetails: Record<string, GastroProductDetailContent> = {
  "Infant Feeding Tube": {
    name: "INFANT FEEDING TUBE",
    features: [
      "Medical-grade PVC, latex & DEHP-free",
      "Closed distal end with two smooth lateral eyes for gentle feeding/aspiration",
      "Radiopaque line for X-ray detection; centimetre graduations every 1 cm (5 – 35 cm)",
      "Colour-coded funnel connector for easy French-size identification",
      "Sterile, EO-packed; CE / ISO 13485 certified; single-use"
    ],
    showInfantTable: true
  },
  "Levin's Tube": {
    name: "LEVIN'S TUBE",
    features: [
      "Single-lumen PVC gastric drainage tube, transparent & non-toxic",
      "Coned distal tip with four large lateral eyes for efficient aspiration",
      "Radiopaque stripe along entire length for placement verification",
      "Standard adult length: 48 in / 122 cm; sizes 12 Fr – 18 Fr",
      "Funnel connector with size colour-code; sterile, ready-to-use"
    ]
  },
  "Ryle's Tube": {
    name: "RYLE'S TUBE", 
    features: [
      "Enteral feeding & gastric decompression tube, PVC; latex, DEHP & BPA-free",
      "Radiopaque line + numeric depth marks every 1 cm for accurate placement",
      "Funnel end colour-coded by size for quick ID; four distal eyes",
      "Adult & paediatric sizes: 6 Fr – 20 Fr; standard length 105 cm",
      "Smooth rounded tip minimises mucosal trauma; sterile EO pack"
    ]
  },
  "Umbilical Catheter": {
    name: "UMBILICAL CATHETER",
    features: [
      "Biocompatible polyurethane (PUR) catheter for neonatal arterial/venous access",
      "Low-profile hub with radiopaque markings to 34 cm for tip location",
      "Smooth rounded tip; non-kinking even at 2.5 Fr",
      "Sterile, single-use; supplied 20 / 180 pcs per case (size dependent)"
    ],
    showUmbilicalTable: true
  }
};

export const getGastroProductContent = (productTitle: string): GastroProductDetailContent | null => {
  return gastroProductDetails[productTitle] || null;
};
