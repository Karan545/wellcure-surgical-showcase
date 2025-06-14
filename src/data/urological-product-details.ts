
export interface ProductDetailContent {
  name: string;
  features?: string[];
  application?: string[];
  characteristics?: string[];
  additionalFeatures?: string[];
  showTable?: boolean;
  showCVCTable?: boolean;
  showArterialTable?: boolean;
  showArterialExtensionTable?: boolean;
  kitContents?: string;
}

export const productDetails: Record<string, ProductDetailContent> = {
  // Urine Collection Bags
  "Pediatric Urine Collection Bag": {
    name: "PEDIATRIC URINE COLLECTION BAG",
    features: [
      "Adhesive pediatric pouch, latex-free, for infants",
      "Capacity: 100–200 mL, with gentle foam adhesive backing",
      "Double-chamber or no-flow valve to prevent backflow",
      "Sterile, individually packed, CE/ISO certified"
    ]
  },
  "Urine Collection Bag with Measured Volume Meter": {
    name: "URINE COLLECTION BAG WITH MEASURED VOLUME METER",
    features: [
      "2000 mL bag + 250/500 mL urometer for accurate output measurement",
      "150 cm kink-resistant PVC tubing",
      "Closed circuit, anti-contamination design, overflow safety",
      "RF-sealed valves, universal catheter connector, sterile packaging"
    ]
  },
  "Urine Collection Bag with Top Outlet": {
    name: "URINE COLLECTION BAG WITH TOP OUTLET",
    features: [
      "Durable PVC bag with top-outlet catheter connection",
      "Leak-proof welded tubing, clear volume graduations (up to 2000 mL)",
      "Universal inlet connector fits all French gauge sizes",
      "Molded hanger & passive air vent, CE/ISO compliant"
    ]
  },
  "Urine Collection Bag with T-type Bottom Outlet & Sampling Port": {
    name: "URINE COLLECTION BAG WITH T-TYPE BOTTOM OUTLET & SAMPLING PORT",
    features: [
      "2000 mL capacity, T-type valve for one-hand drainage",
      "Built-in sampling port (needle or needle-free)",
      "100 cm kink-resistant tubing with universal connector",
      "Non-return valve optional; foldable hanger"
    ]
  },
  "Urine Collection Bag with Bottom Outlet": {
    name: "URINE COLLECTION BAG WITH BOTTOM OUTLET",
    features: [
      "2000 mL bag with simple bottom drain valve",
      "High-tensile, soft PVC tubing, clear graduations",
      "Universal connector; individually sterile packed"
    ]
  },
  "Urine Collection Bag with Handle and Top Outlet": {
    name: "URINE COLLECTION BAG WITH HANDLE AND TOP OUTLET",
    features: [
      "Ergonomic handle molded into top + top catheter outlet",
      "Same specs as top-outlet bags: vent PVC, graduations, hanger, sterile"
    ]
  },
  "Urine Collection Bag with NRV": {
    name: "URINE COLLECTION BAG WITH NRV (NON-RETURN VALVE)",
    features: [
      "2000 mL bag with built-in non-return valve to prevent backflow",
      "T-type outlet & sampling port, universal connectors, sterile sealed",
      "Soft kink-resistant tubing, wall-mount hanger, CE/ISO certified"
    ]
  },
  
  // Urine Drainage Catheters
  "Female Catheter": {
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
  },
  "Rectal Catheter": {
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
  },
  "Nelaton Catheter": {
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
  },

  // Central Venous Access Devices
  "CVC Kit (Single Lumen)": {
    name: "CVC KIT — SINGLE LUMEN",
    features: [
      "Biocompatible polyurethane catheter: rigid during insertion, softens at body temperature",
      "Soft, beveled atraumatic tip for smooth entry",
      "Radiopaque catheter with clear length markings for accurate placement",
      "Supplied sterile, individually tray-packed, CE / ISO 13485 certified",
      "Kit components: indwelling catheter, Y-introducer needle with check valve, J-tip nickel-titanium guidewire, vessel dilator, scalpel, catheter holder & clamp, injection cap, extension-line clamp, optional guiding syringe"
    ]
  },
  "CVC Kit (Double Lumen)": {
    name: "CVC KIT — DOUBLE LUMEN",
    features: [
      "Twin independent channels for simultaneous infusion/monitoring",
      "Radiopaque catheter; graduated depth markers ensure precise positioning",
      "J-tip flexible guidewire reduces vessel perforation risk",
      "Complete sterile kit with all accessories (see list above)",
      "Available sizes: 4 Fr – 8 Fr, lengths 15 cm / 20 cm"
    ]
  },
  "CVC Kit (Triple Lumen)": {
    name: "CVC KIT — TRIPLE LUMEN",
    features: [
      "Triple lumen for multi-drug delivery and CVP measurement",
      "Non-kinking PU tube stiff at room temp, soft in vivo",
      "Color-coded clamps & hubs for easy line identification",
      "Supplied sterile with full accessory set",
      "Sizes: 5.5 Fr – 8 Fr, lengths 15 cm / 20 cm"
    ]
  },
  "CVC Kit (Four Lumen)": {
    name: "CVC KIT — FOUR LUMEN",
    features: [
      "Four independent lumens for complex critical-care therapies",
      "Soft, conical tip ensures atraumatic insertion",
      "Radiopaque body with depth marks; high-flow distal lumen",
      "Sterile tray-packed kit, export-ready (5 kits / box)",
      "Sizes: 8.5 Fr, lengths 10 cm / 13 cm / 16 cm / 20 cm"
    ],
    showCVCTable: true
  },
  "Arterial Catheter Kit": {
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
  },
  "Arterial Catheter Kit with Extension": {
    name: "ARTERIAL CATHETER KIT WITH EXTENSION",
    additionalFeatures: [
      "Pre-attached pressure extension line for rapid transducer hookup",
      "Same biocompatible, X-ray visible catheter as standard kit",
      "Reduces setup time in critical care and OR environments"
    ],
    showArterialExtensionTable: true,
    kitContents: "catheter with extension, safety needle, safety guidewire, dilator, syringe, clamps"
  }
};

export const getProductContent = (productTitle: string): ProductDetailContent | null => {
  return productDetails[productTitle] || null;
};
