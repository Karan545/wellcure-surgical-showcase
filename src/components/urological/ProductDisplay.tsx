
import React from "react";
import ProductGrid from "@/components/infusion-therapy/ProductGrid";
import { UrineCollectionBags, UrineDrainageCatheters } from "@/data/urological-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductDisplayProps {
  category: string;
}

const ProductDisplay = ({ category }: ProductDisplayProps) => {
  const products = category === "urine-bags" ? UrineCollectionBags : UrineDrainageCatheters;

  // Add console logs to help debug image paths
  console.log("Category selected:", category);
  console.log("Products being rendered:", products);
  console.log("Sample image path:", products[0]?.image);

  return (
    <section className="py-16 bg-white/80 backdrop-blur-sm relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          {category === "urine-bags" ? "Urine Collection Bags" : "Urine Drainage Catheters"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.imageAlt || product.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error(`Failed to load image: ${product.image}`);
                    e.currentTarget.src = "/placeholder.svg"; // Fallback
                  }}
                />
              </div>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
