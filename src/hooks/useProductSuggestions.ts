
import { useMemo } from "react";

// Static sample product names across typical medical/surgical product lines
// Replace or extend this array with product names from your actual data sources!
const PRODUCT_NAMES = [
  "Infant Feeding Tube",
  "Levin's Tube",
  "Ryle's Tube",
  "Umbilical Catheter",
  "Urine Collection Bag",
  "Paediatric Urine Collection Bag",
  "Measuring Volume Chamber",
  "Anaesthesia Face Mask",
  "Surgical Gloves",
  "Blood Administration Set",
  "IV Cannula",
  "Wound Drainage System",
  "Gauze Swab",
  "Elastic Bandage",
  "Disposable Syringe",
  "Three Way Stop Cock",
  "Suction Catheter"
  // ...add more as needed
];

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
