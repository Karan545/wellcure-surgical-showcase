
import React from "react";
import ProductGrid from "@/components/infusion-therapy/ProductGrid";
import { UrineCollectionBags, UrineDrainageCatheters } from "@/data/urological-data";

interface ProductDisplayProps {
  category: string;
}

const ProductDisplay = ({ category }: ProductDisplayProps) => {
  const products = category === "urine-bags" ? UrineCollectionBags : UrineDrainageCatheters;

  // Add console logs to help debug image paths
  console.log("Products being rendered:", products);
  console.log("Sample image path:", products[0].image);

  return (
    <section className="py-16 bg-white/80 backdrop-blur-sm relative">
      <div className="container mx-auto px-4">
        <ProductGrid products={products} />
      </div>
    </section>
  );
};

export default ProductDisplay;
