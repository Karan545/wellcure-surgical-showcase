import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CategoryBanner from "@/components/shared/CategoryBanner";
import { getProductImage, createImagePath } from "@/utils/imageUtils";
import ProductDisplay from "@/components/medical-gloves/ProductDisplay";

// Define products with local image path structure
const CATEGORY_PATH = "medical-gloves";

const productData = [
  {
    title: "Latex Sterile Examination Gloves Powdered",
    image: createImagePath(CATEGORY_PATH, "latex-exam-gloves-powdered.jpg"),
    imageAlt: "High-quality powdered latex examination gloves for medical procedures",
    description: "High-quality powdered latex examination gloves designed for superior protection and comfort during medical procedures."
  },
  {
    title: "Latex Sterile Examination Gloves Powder Free",
    image: createImagePath(CATEGORY_PATH, "latex-exam-gloves-powder-free.jpg"),
    imageAlt: "Premium powder-free latex examination gloves for healthcare professionals",
    description: "Premium powder-free latex examination gloves for healthcare professionals with sensitive skin or in powder-sensitive environments."
  },
  {
    title: "Latex Sterile Powdered Surgical Gloves",
    image: createImagePath(CATEGORY_PATH, "latex-surgical-gloves-powdered.jpg"),
    imageAlt: "Precision-designed powdered surgical gloves with excellent tactile sensitivity",
    description: "Precision-designed powdered surgical gloves offering excellent tactile sensitivity and grip for surgical procedures."
  },
  {
    title: "Latex Sterile Surgical Gloves Powder Free",
    image: createImagePath(CATEGORY_PATH, "latex-surgical-gloves-powder-free.jpg"),
    imageAlt: "Advanced powder-free surgical gloves for optimal barrier protection",
    description: "Advanced powder-free surgical gloves providing optimal barrier protection while reducing the risk of allergic reactions."
  }
];

const MedicalGlovesDivision = () => {
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
          title="Medical Gloves Division"
          description="Premium quality sterile gloves offering superior protection, comfort, and precision for healthcare professionals"
          imageUrl="/lovable-uploads/c536be25-6a30-4a2e-8ded-9c049088ae64.png"
          altText="Medical professional inspecting quality blue surgical gloves in a controlled manufacturing environment"
        />

        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Our Medical Gloves</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Comprehensive range of high-quality latex gloves for examination and surgical procedures
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

export default MedicalGlovesDivision;
