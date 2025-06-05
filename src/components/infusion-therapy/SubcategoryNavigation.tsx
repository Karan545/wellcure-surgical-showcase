
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SubcategoryNavigation = () => {
  const subcategories = [
    { id: "extension-tubes", label: "Extension Tubes" },
    { id: "iv-sets", label: "I.V. Infusion Sets" },
    { id: "iv-cannulas", label: "I.V. Cannula" },
    { id: "pressure-monitoring", label: "Pressure Monitoring Lines" },
    { id: "flow-control", label: "Flow Control Devices" },
    { id: "pediatric-sets", label: "Pediatric Infusion Sets" }
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
