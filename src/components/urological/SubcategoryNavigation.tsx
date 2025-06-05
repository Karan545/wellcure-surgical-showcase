
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SubcategoryNavigation = () => {
  const subcategories = [
    { id: "urine-bags", label: "Urine Collection Bags" },
    { id: "urine-drainage", label: "Urine Drainage Catheters" },
    { id: "central-venous", label: "Central Venous Access Devices" },
    { id: "dialysis", label: "Dialysis Catheters" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-8 bg-gray-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {subcategories.map((subcategory, index) => (
            <motion.div
              key={subcategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full text-center px-4 py-6 h-auto whitespace-normal"
                onClick={() => scrollToSection(subcategory.id)}
              >
                {subcategory.label}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubcategoryNavigation;
