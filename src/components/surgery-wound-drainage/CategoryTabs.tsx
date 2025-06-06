
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
            variant={selectedCategory === "surgical-drainage" ? "default" : "outline"}
            className="text-lg px-8 py-6 whitespace-nowrap"
            onClick={() => setSelectedCategory("surgical-drainage")}
          >
            Drainage & Collection Systems
          </Button>
          <Button
            size="lg"
            variant={selectedCategory === "surgical-suction" ? "default" : "outline"}
            className="text-lg px-8 py-6 whitespace-nowrap"
            onClick={() => setSelectedCategory("surgical-suction")}
          >
            Surgical Suction Instruments
          </Button>
          <Button
            size="lg"
            variant={selectedCategory === "surgical-retraction" ? "default" : "outline"}
            className="text-lg px-8 py-6 whitespace-nowrap"
            onClick={() => setSelectedCategory("surgical-retraction")}
          >
            Retraction & Isolation Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;
