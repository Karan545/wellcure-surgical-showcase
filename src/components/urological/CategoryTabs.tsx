
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <Button
            size="lg"
            variant={selectedCategory === "urine-bags" ? "default" : "outline"}
            className="text-lg px-8 py-6 whitespace-nowrap"
            onClick={() => setSelectedCategory("urine-bags")}
          >
            Urine Collection Bags
          </Button>
          <Button
            size="lg"
            variant={selectedCategory === "urine-drainage" ? "default" : "outline"}
            className="text-lg px-8 py-6 whitespace-nowrap"
            onClick={() => setSelectedCategory("urine-drainage")}
          >
            Urine Drainage Catheters
          </Button>
          <Button
            size="lg"
            variant={selectedCategory === "central-venous" ? "default" : "outline"}
            className="text-lg px-8 py-6 whitespace-nowrap"
            onClick={() => setSelectedCategory("central-venous")}
          >
            Central Venous Access Devices
          </Button>
          <Button
            size="lg"
            variant={selectedCategory === "dialysis" ? "default" : "outline"}
            className="text-lg px-8 py-6 whitespace-nowrap"
            onClick={() => setSelectedCategory("dialysis")}
          >
            Dialysis Catheters
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;
