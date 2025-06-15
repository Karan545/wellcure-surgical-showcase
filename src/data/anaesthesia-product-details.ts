export interface AnaesthesiaProductDetail {
  title: string;
  description: string;
  features?: string[];
  usage?: string;
  specifications?: {
    headers: string[];
    rows: string[][];
  };
  availableSizes?: string | string[];
  sterilization?: string;
  image?: string;
  imageAlt?: string;
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
  },
  "Heart Lung Pack": {
    title: "Heart Lung Pack",
    description: "Comprehensive sterile kit for extracorporeal circulation during cardiac surgery.",
    features: [
      "Includes reservoir, tubing, filters, accessories",
      "Latex free & biocompatible materials",
      "Color-coded components for easy assembly"
    ],
    usage: "Supports cardiopulmonary bypass during open-heart procedures.",
    specifications: {
      headers: ["Component", "Material", "Application"],
      rows: [
        ["Reservoir", "Medical-grade Polycarbonate", "Blood collection"],
        ["Tubing", "PVC", "Blood flow management"],
        ["Filter", "Polyester", "Particle removal"]
      ]
    },
    sterilization: "EO Gas Sterilized",
  },
  "Heart Lung Pack With Coated Tubing": {
    title: "Heart Lung Pack With Coated Tubing",
    description: "Advanced pack with biocompatible coated tubing for improved patient safety and reduced inflammatory response.",
    features: [
      "Heparin or biocompatible coating",
      "Reduced thrombogenicity",
      "Similar configuration as standard packs"
    ],
    usage: "Enhances hemocompatibility and minimizes complications during cardiac surgery.",
    specifications: {
      headers: ["Component", "Material", "Coating"],
      rows: [
        ["Tubing", "Medical PVC", "Heparin/Phosphorylcholine"],
        ["Reservoir", "Polycarbonate", "-"]
      ]
    },
    sterilization: "EO Gas Sterilized"
  },
  "Cardioplegia Delivery Set": {
    title: "Cardioplegia Delivery Set",
    description: "Precision set to deliver cardioplegia solution for cardiac muscle protection during surgery.",
    features: [
      "Precision flow control",
      "Luer lock connectors",
      "Kink-resistant Medical PVC tubing"
    ],
    usage: "Infuses cardioplegia to protect myocardial tissue during cardiac arrest.",
    specifications: {
      headers: ["Component", "Size", "Connector Type"],
      rows: [
        ["Tubing", "150 cm", "Luer Lock"],
        ["Chamber", "10 ml", "Universal"]
      ]
    },
    sterilization: "EO Gas Sterilized"
  },
  "Perfusion Accessories": {
    title: "Perfusion Accessories",
    description: "Full range of accessories to support extracorporeal surgeries and optimize perfusion efficiency.",
    features: [
      "Includes clamps, connectors, sampling ports",
      "Universal compatibility",
      "Single-use sterile packaging"
    ],
    usage: "Assists and complements main perfusion circuit in bypass procedures.",
    specifications: {
      headers: ["Accessory", "Application"],
      rows: [
        ["Clamp", "Flow regulation"],
        ["Connector", "Circuit linking"],
        ["Port", "Sampling/Injection"]
      ]
    },
    sterilization: "EO Gas Sterilized"
  },
  "Arterial Cannula (Adult & Pediatric)": {
    title: "Arterial Cannula (Adult & Pediatric)",
    description: "Sterile, single-use cannula designed for arterial access during cardiopulmonary bypass.",
    features: [
      "Available in adult and pediatric sizes",
      "Tapered smooth tip for easy insertion",
      "Kink-resistant body"
    ],
    usage: "Enables safe arterial blood withdrawal and return in open-heart surgery.",
    specifications: {
      headers: ["Size", "Tip Type", "Sterility", "Application"],
      rows: [
        ["16–24 Fr", "Straight/Curved", "EO Gas", "Open-heart surgery"]
      ]
    },
    availableSizes: "16–24 Fr (Adult), 8–14 Fr (Pediatric)",
    sterilization: "EO Gas",
  },
  "Venous Cannula (Plastic & Metal Tip)": {
    title: "Venous Cannula (Plastic & Metal Tip)",
    description: "Flexible venous cannulas for efficient venous return during cardiac surgery, available with plastic or metal tip.",
    features: [
      "Wire-reinforced tubing resists kinking",
      "Plastic or atraumatic metal tip options",
      "Radiopaque marker for positioning"
    ],
    usage: "Facilitates quick, safe venous drainage in cardiopulmonary bypass.",
    specifications: {
      headers: ["Size", "Tip Type", "Sterility"],
      rows: [
        ["18–32 Fr", "Straight/Curved, Plastic/Metal", "EO Gas"]
      ]
    },
    availableSizes: "18–32 Fr",
    sterilization: "EO Gas"
  },
  "Arterial Filter": {
    title: "Arterial Filter",
    description: "High-efficiency arterial filter designed to remove air and particulates from the arterial line during bypass.",
    features: [
      "Micron mesh for micro-emboli removal",
      "Minimal priming volume",
      "Luer lock side ports"
    ],
    usage: "Ensures patient safety by reducing embolic risk during surgeries.",
    specifications: {
      headers: ["Filter Size", "Micron Rating", "Priming Volume"],
      rows: [
        ["40 mm", "40 μm", "35 ml"]
      ]
    },
    sterilization: "EO Gas"
  },
  "Rigid Suction Tubes": {
    title: "Rigid Suction Tubes",
    description: "Durable rigid suction tubes for efficient removal of fluids and debris during surgery.",
    features: [
      "Sturdy medical polymers",
      "Ergonomic handle designs",
      "Multiple length and diameter options"
    ],
    usage: "Maintaining clear surgical field during cardiac and other procedures.",
    specifications: {
      headers: ["Length", "Diameter", "Sterility"],
      rows: [
        ["220 mm", "6–12 mm", "EO Gas"]
      ]
    },
    availableSizes: "6 mm, 8 mm, 10 mm, 12 mm",
    sterilization: "EO Gas"
  },
  "Coronary Artery Ostial Cannula": {
    title: "Coronary Artery Ostial Cannula",
    description: "Specialized cannula for precision cardioplegia delivery via coronary ostium during heart surgery.",
    features: [
      "Soft bulbous tip for secure placement",
      "Flexible, kink-resistant body",
      "Color-coded sets by size"
    ],
    usage: "Enables selective coronary perfusion to protect myocardium.",
    specifications: {
      headers: ["Size", "Tip Type", "Sterility"],
      rows: [
        ["2.0–3.5 mm", "Bulb tip", "EO Gas"]
      ]
    },
    availableSizes: "2.0–3.5 mm",
    sterilization: "EO Gas"
  },
  "Mister/Blower": {
    title: "Mister/Blower",
    description: "Operative field management device for targeted irrigation and air flow in cardiac surgery.",
    features: [
      "Dual function: irrigation and air blowing",
      "Fine, adjustable mist",
      "Lightweight ergonomic body"
    ],
    usage: "Maintains clear field visibility during delicate procedures.",
    specifications: {
      headers: ["Function", "Control", "Sterility"],
      rows: [
        ["Mister/Blower", "Thumb control", "Gamma/E0"]
      ]
    },
    sterilization: "Gamma/E0"
  },
  "Vessel Loops": {
    title: "Vessel Loops",
    description: "Soft silicone vessel retraction loops for precise isolation and retraction during surgery.",
    features: [
      "Non-latex, radiopaque silicone material",
      "Available in assorted colors and thicknesses",
      "Sterile, single use"
    ],
    usage: "Isolates blood vessels for safe dissection during cardio-thoracic procedures.",
    specifications: {
      headers: ["Size", "Color", "Sterility"],
      rows: [
        ["2 mm", "Assorted", "EO Gas"]
      ]
    },
    availableSizes: ["2 mm, 3 mm, 4 mm"],
    sterilization: "EO Gas"
  }
};
