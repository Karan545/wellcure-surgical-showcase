
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CategoryBanner from "@/components/shared/CategoryBanner";
import FloatingIcons from "@/components/urological/FloatingIcons";
import SubcategoryNavigation from "@/components/urological/SubcategoryNavigation";
import SubcategorySection from "@/components/urological/SubcategorySection";
import { UrineCollectionBags, UrineDrainageCatheters } from "@/data/urological-data";
import { CentralVenousDevices, DialysisCatheters } from "@/data/urological-extended-data";

const UrologicalInstruments = () => {
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
        <FloatingIcons />

        <CategoryBanner
          title="Urological Instruments"
          description="Advanced urological solutions designed for precision, comfort, and optimal patient care"
          imageUrl="/lovable-uploads/cb5eb3c7-5163-4003-b5cb-6aad8ace1bdf.png"
          altText="Medical professionals in clean room environment manufacturing urological collection bags"
        />

        <SubcategoryNavigation />

        <SubcategorySection
          id="urine-bags"
          title="Urine Collection Bags"
          description="Comprehensive range of urine collection bags designed for various patient demographics and clinical requirements. Our collection includes pediatric-specific designs, measured volume chambers, and specialized outlet configurations to meet diverse healthcare facility needs."
          products={UrineCollectionBags}
        />

        <SubcategorySection
          id="urine-drainage"
          title="Urine Drainage Catheters"
          description="High-quality urinary catheters engineered for patient comfort and clinical efficiency. Our catheter range includes specialized designs for different patient populations and clinical scenarios, ensuring optimal drainage and minimal discomfort."
          products={UrineDrainageCatheters}
        />

        <SubcategorySection
          id="central-venous"
          title="Central Venous Access Devices"
          description="Advanced central venous catheter systems for critical care and intensive care unit applications. These devices provide reliable vascular access for complex medical procedures, medication administration, and continuous monitoring in urological and critical care settings."
          products={CentralVenousDevices}
        />

        <SubcategorySection
          id="dialysis"
          title="Dialysis Catheters"
          description="Specialized hemodialysis catheters designed for renal replacement therapy and dialysis applications. Our dialysis catheter range includes both temporary and long-term access solutions for chronic kidney disease management and acute renal failure treatment."
          products={DialysisCatheters}
        />
      </main>
      <Footer />
    </div>
  );
};

export default UrologicalInstruments;
