
import React from "react";
import ProductGrid from "@/components/infusion-therapy/ProductGrid";
import { UrineCollectionBags, UrineDrainageCatheters } from "@/data/urological-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProductDisplayProps {
  category: string;
}

const ProductDisplay = ({ category }: ProductDisplayProps) => {
  const products = category === "urine-bags" ? UrineCollectionBags : UrineDrainageCatheters;

  // Add console logs to help debug image paths
  console.log("Category selected:", category);
  console.log("Products being rendered:", products);
  console.log("Sample image path:", products[0]?.image);

  // Fallback images from Unsplash in case product images don't load
  const fallbackImages = [
    "/placeholder.svg",
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    "https://images.unsplash.com/photo-1524230572899-a752b3835840",
    "https://images.unsplash.com/photo-1487252665478-49b61b47f302"
  ];

  // Get a random fallback image
  const getRandomFallback = () => {
    return fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
  };

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
                    // Log the current URL for debugging
                    console.log("Current window location:", window.location.href);
                    // Use a random fallback image
                    e.currentTarget.src = getRandomFallback();
                    // Show a toast notification
                    toast.error(`Couldn't load image for ${product.title}`, {
                      description: "Using fallback image instead",
                      duration: 3000
                    });
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
