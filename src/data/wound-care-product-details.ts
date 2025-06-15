
export interface WoundCareProductDetail {
  title: string;
  description: string;
  features: string[];
  specifications: {
    headers: string[];
    rows: string[][];
  };
}

export const woundCareProductDetails: Record<string, WoundCareProductDetail> = {
  "Advanced Wound Dressing": {
    title: "Advanced Wound Dressing",
    description: "A highly absorbent, non-adherent multilayer dressing designed to promote moist wound healing and protect the wound from contamination.",
    features: [
      "Sterile, ready-to-use multilayer construction",
      "Absorbent pad manages wound exudate",
      "Non-woven backing for flexibility",
      "Breathable to maintain optimal moisture balance",
      "Available in multiple sizes",
      "Latex-free"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Type", "Sterile, Multilayer"],
        ["Sizes", "5x5 cm, 10x10 cm, 10x20 cm"],
        ["Absorbency", "High"],
        ["Material", "Non-woven + absorbent core"],
        ["Sterility", "EO sterilized"],
        ["Usage", "Chronic wounds, post-surgical care"]
      ]
    }
  },
  "Antimicrobial Wound Gel": {
    title: "Antimicrobial Wound Gel",
    description: "A hydrogel infused with antimicrobial agents designed to reduce bacterial load and promote a moist wound environment.",
    features: [
      "Broad-spectrum antimicrobial protection",
      "Provides cooling, soothing relief",
      "Maintains moist wound environment",
      "Ideal for partial and full-thickness wounds",
      "Transparent gel for wound observation"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Base Type", "Hydrogel"],
        ["Antimicrobial Agent", "Silver-based"],
        ["Volume", "15g, 25g, 50g"],
        ["Indications", "Burns, ulcers, surgical wounds"],
        ["Packaging", "Sterile tube"]
      ]
    }
  },
  "Hydrocolloid Dressings": {
    title: "Hydrocolloid Dressings",
    description: "Self-adhesive dressings that form a gel when in contact with wound exudate, ideal for shallow, non-infected wounds.",
    features: [
      "Provides moist healing environment",
      "Promotes autolytic debridement",
      "Waterproof and breathable",
      "Conforms to wound contours",
      "Reduces dressing change frequency"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Material", "Hydrocolloid with polyurethane film"],
        ["Sizes", "5x5 cm, 10x10 cm, 15x15 cm"],
        ["Sterility", "EO Sterilized"],
        ["Wear Time", "Up to 7 days"],
        ["Indications", "Pressure sores, minor burns, ulcers"]
      ]
    }
  },
  "Wound Cleansing Solution": {
    title: "Wound Cleansing Solution",
    description: "Non-cytotoxic isotonic solution used for irrigation and cleansing of wounds to reduce contamination and support healing.",
    features: [
      "Ready-to-use sterile solution",
      "Non-irritating and non-cytotoxic",
      "Aids in removal of debris and exudates",
      "Suitable for acute and chronic wounds"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Type", "Sterile irrigation solution"],
        ["Composition", "Isotonic saline with mild surfactants"],
        ["Volume", "100 ml, 250 ml, 500 ml"],
        ["Packaging", "Sealed bottle with nozzle"],
        ["Indications", "Ulcers, burns, surgical incisions"]
      ]
    }
  }
};
