
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
            variant={selectedCategory === "extension-tubes" ? "default" : "outline"}
            className="text-lg px-8 py-6 whitespace-nowrap"
            onClick={() => setSelectedCategory("extension-tubes")}
          >
            Extension Tubes
          </Button>
          <Button
            size="lg"
            variant={selectedCategory === "iv-sets" ? "default" : "outline"}
            className="text-lg px-8 py-6 whitespace-nowrap"
            onClick={() => setSelectedCategory("iv-sets")}
          >
            I.V. Infusion Sets
          </Button>
          <Button
            size="lg"
            variant={selectedCategory === "iv-cannulas" ? "default" : "outline"}
            className="text-lg px-8 py-6 whitespace-nowrap"
            onClick={() => setSelectedCategory("iv-cannulas")}
          >
            I.V. Cannula
          </Button>
          <Button
            size="lg"
            variant={selectedCategory === "pressure-monitoring" ? "default" : "outline"}
            className="text-lg px-8 py-6 whitespace-nowrap"
            onClick={() => setSelectedCategory("pressure-monitoring")}
          >
            Pressure Monitoring Lines
          </Button>
          <Button
            size="lg"
            variant={selectedCategory === "flow-control" ? "default" : "outline"}
            className="text-lg px-8 py-6 whitespace-nowrap"
            onClick={() => setSelectedCategory("flow-control")}
          >
            Flow Control Devices
          </Button>
          <Button
            size="lg"
            variant={selectedCategory === "pediatric-sets" ? "default" : "outline"}
            className="text-lg px-8 py-6 whitespace-nowrap"
            onClick={() => setSelectedCategory("pediatric-sets")}
          >
            Pediatric Infusion Sets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;
