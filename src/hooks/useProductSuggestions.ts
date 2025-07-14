
import { useMemo } from "react";

// Import all product data from the website
import { UrineCollectionBags, UrineDrainageCatheters } from "@/data/urological-data";
import { CentralVenousDevices, DialysisCatheters } from "@/data/urological-extended-data";
import { extensionTubes, ivCannulas, ivInfusionSets } from "@/data/infusion-therapy-data";
import { pressureMonitoringProducts, flowControlProducts, pediatricProducts } from "@/data/infusion-therapy-extended-data";
import { surgicalDrainageProducts, surgicalSuctionProducts, surgicalRetractionProducts } from "@/data/surgery-wound-drainage-data";

// Blood Management products
const bloodProducts = [
  { title: "Blood Administration Set without Air Vent" },
  { title: "Blood Administration Set with Air Vent" }
];

// Gastroenterology products
const gastroProducts = [
  { title: "Infant Feeding Tube" },
  { title: "Levin's Tube" },
  { title: "Ryle's Tube" },
  { title: "Umbilical Catheter" }
];

// Anaesthesia products
const anaesthesiaProducts = [
  { title: "Oxygen Mask" },
  { title: "Oxygen Catheter" },
  { title: "Twin Bore Nasal Oxygen Cannula" },
  { title: "Lung Exerciser" },
  { title: "Respiratory Circuits" },
  { title: "Heat Moisture Exchanger with Bacterial Viral Filter (HME-BVF)" },
  { title: "Suction Catheters" },
  { title: "Yankauer Suction Set" },
  { title: "Heart Lung Pack" },
  { title: "Heart Lung Pack With Coated Tubing" },
  { title: "Cardioplegia Delivery Set" },
  { title: "Perfusion Accessories" },
  { title: "Arterial Cannula (Adult & Pediatric)" },
  { title: "Venous Cannula (Plastic & Metal Tip)" },
  { title: "Arterial Filter" },
  { title: "Rigid Suction Tubes" },
  { title: "Coronary Artery Ostial Cannula" },
  { title: "Mister/Blower" }
];

// Surgery & Wound Drainage products
const surgeryProducts = [
  { title: "Wound Drainage System" },
  { title: "Surgical Suction Set" },
  { title: "Yankauer Suction Set" },
  { title: "Vessel Loops" }
];

// Combine all actual products from the website
const allProducts = [
  ...UrineCollectionBags,
  ...UrineDrainageCatheters,
  ...CentralVenousDevices,
  ...DialysisCatheters,
  ...extensionTubes,
  ...flowControlProducts,
  ...ivCannulas,
  ...ivInfusionSets,
  ...pediatricProducts,
  ...pressureMonitoringProducts,
  ...surgicalDrainageProducts,
  ...surgicalSuctionProducts,
  ...surgicalRetractionProducts,
  ...bloodProducts,
  ...gastroProducts,
  ...anaesthesiaProducts,
  ...surgeryProducts
];

// Extract product names from actual website data
const PRODUCT_NAMES = allProducts.map(product => product.title);

// Returns suggestions for the user's search term (case-insensitive, starts-with or includes)
export function useProductSuggestions(query: string) {
  const suggestions = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];
    return PRODUCT_NAMES.filter((name) =>
      name.toLowerCase().includes(trimmed)
    ).slice(0, 8); // show max 8 suggestions
  }, [query]);

  return suggestions;
}
