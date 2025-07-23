import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CategoryBanner from "@/components/shared/CategoryBanner";
import Breadcrumb from "@/components/shared/Breadcrumb";
import FloatingIcons from "@/components/urological/FloatingIcons";
import CategoryTabs from "@/components/urological/CategoryTabs";
import ProductDisplay from "@/components/urological/ProductDisplay";
import SEOHead from "@/components/SEOHead";

const UrologicalInstruments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("urine-bags");

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
      <SEOHead 
        title="Urological Instruments | Urine Collection Bags & Drainage Catheters"
        description="Premium urological instruments including urine collection bags, drainage catheters, central venous devices & dialysis catheters. Quality medical equipment for healthcare professionals."
        keywords="urological instruments, urine collection bags, drainage catheters, central venous catheters, dialysis catheters, urological medical equipment, catheter systems"
        canonicalUrl="https://wellcuresurgicals.com/urological-instruments"
      />
      <Header />
      <Breadcrumb />
      <main className="flex-grow relative overflow-hidden">
        <FloatingIcons />

        <CategoryBanner
          title="Urological Instruments"
          description="Advanced urological solutions designed for precision, comfort, and optimal patient care"
          imageUrl="/lovable-uploads/cb5eb3c7-5163-4003-b5cb-6aad8ace1bdf.png"
          altText="Medical professionals in clean room environment manufacturing urological collection bags"
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