
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SubcategoryNavigation = () => {
  const subcategories = [
    { id: "surgical-drainage", label: "Drainage & Collection Systems" },
    { id: "surgical-suction", label: "Surgical Suction Instruments" },
    { id: "surgical-retraction", label: "Retraction & Isolation Tools" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-12 bg-gray-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
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
                className="text-lg px-8 py-6 whitespace-nowrap"
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
