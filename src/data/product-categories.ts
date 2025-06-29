/**
 * Product categories and subcategories for simulation.
 * In a real system, this would be replaced with a database or CMS query.
 */
export type Subcategory = {
  name: string;
  slug: string;
}
export type ProductCategory = {
  name: string;
  slug: string;
  subcategories?: Subcategory[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    name: "Anaesthesia Systems",
    slug: "/anaesthesia-systems",
    subcategories: [
      { name: "Breathing Circuits", slug: "/anaesthesia-systems#breathing-circuits" },
      { name: "Face Masks", slug: "/anaesthesia-systems#face-masks" },
    ],
  },
  {
    name: "Infusion Therapy",
    slug: "/infusion-therapy",
    subcategories: [
      { name: "I.V. Cannula", slug: "/infusion-therapy#iv-cannula" },
      { name: "Infusion Sets", slug: "/infusion-therapy#infusion-sets" },
    ],
  },
  {
    name: "Urological Instruments",
    slug: "/urological-instruments",
    subcategories: [
      { name: "Urine Bags", slug: "/urological-instruments#urine-bags" },
      { name: "Catheters", slug: "/urological-instruments#catheters" },
    ],
  },
  {
    name: "Blood Management Solutions",
    slug: "/blood-management-solutions",
  },
  {
    name: "Surgery & Wound Drainage",
    slug: "/surgery-wound-drainage",
  },
  {
    name: "Gastroenterology Equipment",
    slug: "/gastroenterology-equipment",
  },
];