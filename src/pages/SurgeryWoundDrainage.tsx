
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { useState, useEffect } from "react";
import CategoryBanner from "@/components/shared/CategoryBanner";
import SubcategoryNavigation from "@/components/surgery-wound-drainage/SubcategoryNavigation";
import SubcategorySection from "@/components/urological/SubcategorySection";
import { 
  surgicalDrainageProducts, 
  surgicalSuctionProducts, 
  surgicalRetractionProducts 
} from "@/data/surgery-wound-drainage-data";

const SurgeryWoundDrainage = () => {
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
          title="Surgery & Wound Drainage"
          description="Advanced drainage solutions for effective post-surgical recovery and wound management"
          imageUrl="/lovable-uploads/02cf3074-41e4-47b4-bd6c-068aa0514366.png"
          altText="Medical professionals testing wound drainage equipment in a sterile environment"
        />

        <SubcategoryNavigation />

        <SubcategorySection
          id="surgical-drainage"
          title="Surgical Drainage & Collection Systems"
          description="Comprehensive drainage systems designed for post-operative fluid management and infection prevention. Our collection includes wound drainage systems, thoracic catheters, and specialized drainage devices for various surgical applications."
          products={surgicalDrainageProducts}
        />

        <SubcategorySection
          id="surgical-suction"
          title="Surgical Suction Instruments"
          description="High-performance suction instruments essential for maintaining clear surgical fields and effective airway management. Our suction sets provide reliable vacuum pressure for various operating room procedures and critical care scenarios."
          products={surgicalSuctionProducts}
        />

        <SubcategorySection
          id="surgical-retraction"
          title="Surgical Retraction & Isolation Tools"
          description="Precision surgical tools designed for vessel isolation and tissue retraction during complex surgical procedures. These instruments provide surgeons with the control and visibility needed for safe and effective vascular and cardiac surgery."
          products={surgicalRetractionProducts}
        />
      </main>
      <Footer />
    </div>
  );
};

export default SurgeryWoundDrainage;
