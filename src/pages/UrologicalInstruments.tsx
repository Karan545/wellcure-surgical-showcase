
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CategoryBanner from "@/components/shared/CategoryBanner";
import FloatingIcons from "@/components/urological/FloatingIcons";
import CategoryTabs from "@/components/urological/CategoryTabs";
import ProductDisplay from "@/components/urological/ProductDisplay";
import { createImagePath } from "@/utils/imageUtils";

const CATEGORY_PATH = "urological";

const UrologicalInstruments = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("urine-bags");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedCategory("urine-bags");
    
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
        <FloatingIcons />

        <CategoryBanner
          title="Urological Instruments"
          description="Advanced urological solutions designed for precision, comfort, and optimal patient care"
          imageUrl={createImagePath(CATEGORY_PATH, "banner.jpg")}
          altText="Advanced urological instruments and medical supplies for healthcare professionals"
        />

        <CategoryTabs 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ProductDisplay category={selectedCategory} />
      </main>
      <Footer />
    </div>
  );
};

export default UrologicalInstruments;
