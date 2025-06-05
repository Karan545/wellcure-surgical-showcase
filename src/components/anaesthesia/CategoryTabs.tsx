
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
            variant={selectedCategory === "oxygen-delivery" ? "default" : "outline"}
            className="text-lg px-8 py-6"
            onClick={() => setSelectedCategory("oxygen-delivery")}
          >
            Oxygen Delivery & Respiratory Care
          </Button>
          <Button
            size="lg"
            variant={selectedCategory === "suction-airway" ? "default" : "outline"}
            className="text-lg px-8 py-6"
            onClick={() => setSelectedCategory("suction-airway")}
          >
            Suction & Airway Management
          </Button>
          <Button
            size="lg"
            variant={selectedCategory === "cardiopulmonary" ? "default" : "outline"}
            className="text-lg px-8 py-6"
            onClick={() => setSelectedCategory("cardiopulmonary")}
          >
            Cardiopulmonary Bypass & Surgical Perfusion
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;
