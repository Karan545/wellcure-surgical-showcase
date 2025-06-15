import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CategoryBanner from "@/components/shared/CategoryBanner";
import { getProductImage, createImagePath } from "@/utils/imageUtils";
import ProductDisplay from "@/components/blood-management/ProductDisplay";

// Define products with local image path structure
const CATEGORY_PATH = "blood-management";

const productData = [
  {
    title: "Blood Administration Set without Air Vent",
    image: createImagePath(CATEGORY_PATH, "blood-admin-set-no-air-vent.jpg"),
    imageAlt: "High-quality blood administration set for safe transfusions",
    description: "High-quality blood administration set without air vent for safe and efficient blood transfusions."
  },
  {
    title: "Blood Administration Set with Air Vent",
    image: createImagePath(CATEGORY_PATH, "blood-admin-set-with-air-vent.jpg"),
    imageAlt: "Premium blood administration set with integrated air vent",
    description: "Premium blood administration set with integrated air vent for controlled and precise blood transfusions."
  }
];

const BloodManagementSolutions = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow relative overflow-hidden">
        <CategoryBanner
          title="Blood Management Solutions"
          description="Advanced blood administration equipment designed for efficient and safe transfusions in critical care settings"
          imageUrl="/lovable-uploads/9763c16d-111e-4536-847a-4d0fcee171aa.png"
          altText="Medical professionals working with blood administration equipment in a sterile environment"
        />

        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Our Blood Management Products</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Comprehensive range of high-quality blood administration sets for medical professionals
              </p>
            </div>
            <ProductDisplay />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BloodManagementSolutions;
