
import React from "react";
import { Button } from "@/components/ui/button";

interface CategoryTabsProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryTabs = ({ selectedCategory, setSelectedCategory }: CategoryTabsProps) => {
  return (
    <section className="py-12 bg-gray-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant={selectedCategory === "urine-bags" ? "default" : "outline"}
            className="text-lg px-8 py-6"
            onClick={() => setSelectedCategory("urine-bags")}
          >
            Urine Collection Bags
          </Button>
          <Button
            size="lg"
            variant={selectedCategory === "catheters" ? "default" : "outline"}
            className="text-lg px-8 py-6"
            onClick={() => setSelectedCategory("catheters")}
          >
            Urine Drainage Catheters
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;
