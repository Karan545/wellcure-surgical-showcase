
export interface AnaesthesiaProductDetail {
  title: string;
  description: string;
  features: string[];
  specifications: {
    headers: string[];
    rows: string[][];
  };
}

export const anaesthesiaProductDetails: Record<string, AnaesthesiaProductDetail> = {
  "Oxygen Mask": {
    title: "Oxygen Mask",
    description: "Ergonomically designed mask to deliver oxygen therapy to patients with respiratory distress or low oxygen levels.",
    features: [
      "Soft, non-toxic PVC construction",
      "Adjustable nose clip and elastic strap",
      "Transparent mask body for patient visibility",
      "2-meter star lumen tubing to prevent occlusion"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Material", "Medical-grade PVC"],
        ["Sizes Available", "Adult & Pediatric"],
        ["Oxygen Inlet", "6mm connector"],
        ["Tubing Length", "200 cm standard"]
      ]
    }
  },
  "Nebulizer Mask": {
    title: "Nebulizer Mask",
    description: "Used to deliver aerosolized medication effectively into the lungs for asthma or respiratory treatments.",
    features: [
      "Anatomically contoured mask with elastic strap",
      "Nebulizer chamber capacity: 6–8 ml",
      "Delivers particle size <5 µm for efficient deposition",
      "Crush-resistant oxygen tubing"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Material", "Non-toxic PVC"],
        ["Sizes", "Adult & Pediatric"],
        ["Chamber Volume", "6–8 ml"],
        ["Particle Size", "<5 µm"]
      ]
    }
  },
  "Oxygen Catheter": {
    title: "Oxygen Catheter",
    description: "Flexible catheter for insertion into the nasal passage to deliver supplemental oxygen.",
    features: [
      "Rounded closed distal end with two lateral eyes",
      "Color-coded connector",
      "Non-toxic, kink-resistant material"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Sizes Available", "FG 8–FG 18"],
        ["Length", "40 cm"],
        ["Material", "Soft medical-grade PVC"]
      ]
    }
  },
  "Twin Bore Nasal Oxygen Cannula": {
    title: "Twin Bore Nasal Oxygen Cannula",
    description: "Dual-lumen nasal cannula designed for consistent oxygen flow during long-term oxygen therapy.",
    features: [
      "Soft prongs minimize nasal trauma",
      "Adjustable nose clip for comfort",
      "Star lumen tubing prevents collapse"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Sizes", "Adult & Pediatric"],
        ["Prong Type", "Curved, soft tip"],
        ["Tubing Length", "200 cm"]
      ]
    }
  },
  "Lung Exerciser": {
    title: "Lung Exerciser",
    description: "Respiratory exercise device for improving pulmonary function post-surgery or during rehabilitation.",
    features: [
      "Three-chamber design with color-coded balls",
      "Clear visibility for performance monitoring",
      "Encourages deep breathing exercises"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Capacity Range", "600 ml/sec – 1200 ml/sec"],
        ["Chambers", "3"],
        ["Material", "Transparent polycarbonate"]
      ]
    }
  },
  "Respiratory Circuits": {
    title: "Respiratory Circuits",
    description: "Closed-loop breathing circuit used with ventilators or anesthesia machines.",
    features: [
      "Kink-resistant, flexible tubing",
      "Available with or without water trap",
      "ISO-standard connectors"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Tube Length", "1.5m – 1.8m"],
        ["Options", "Adult, Pediatric"],
        ["Material", "EVA / Polypropylene"]
      ]
    }
  },
  "Heat Moisture Exchanger with Bacterial Viral Filter (HME-BVF)": {
    title: "Heat Moisture Exchanger with Bacterial Viral Filter (HME-BVF)",
    description: "Combines passive humidification with high-efficiency filtration for ventilated patients.",
    features: [
      "Electrostatic filter with moisture exchange",
      "> 99% bacterial and viral filtration efficiency",
      "Standard ISO connectors"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Filtration Efficiency", "≥99%"],
        ["Tidal Volume Range", "150 – 1500 ml"],
        ["Dead Space Volume", "~30 ml"],
        ["Connection", "15mm M/22mm F"]
      ]
    }
  },
  "Suction Catheters": {
    title: "Suction Catheters",
    description: "Flexible, sterile catheters used to aspirate mucus or other bodily fluids from the airway for patient airway clearance.",
    features: [
      "Soft, kink-resistant medical-grade PVC",
      "Frozen surface finish for smooth insertion",
      "Color-coded connector for size identification",
      "Atraumatic, round open tip with two lateral eyes",
      "Sterile and individually packed"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Sizes Available", "FG 6 to FG 18"],
        ["Length", "53 cm"],
        ["Sterility", "EO Sterilized"],
        ["Connector Type", "Color-coded funnel end"],
        ["Material", "Medical-grade PVC"],
        ["Packaging", "Individually packed (sterile)"]
      ]
    }
  },
  "Yankauer Suction Set": {
    title: "Yankauer Suction Set",
    description: "Rigid suction instrument used to aspirate oropharyngeal secretions while maintaining airway integrity. Common in surgical and ICU settings.",
    features: [
      "Bulbous tip with side eyes to reduce tissue trauma",
      "Transparent handle and tubing for visibility",
      "Ergonomic thumb control vent",
      "2-meter kink-resistant tubing",
      "Available with or without filter"
    ],
    specifications: {
      headers: ["Feature", "Description"],
      rows: [
        ["Tip Type", "Bulbous, open end with eyes"],
        ["Control Option", "Thumb control vent"],
        ["Tubing Length", "2.0 meters (standard)"],
        ["Material", "Rigid PVC / Polypropylene"],
        ["Packaging", "Individually sterile packed"],
        ["Variants", "With/without filter"]
      ]
    }
  }
};
