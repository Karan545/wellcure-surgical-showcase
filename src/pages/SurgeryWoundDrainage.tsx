import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { useState, useEffect } from "react";
import CategoryBanner from "@/components/shared/CategoryBanner";
import CategoryTabs from "@/components/surgery-wound-drainage/CategoryTabs";
import ProductDisplay from "@/components/surgery-wound-drainage/ProductDisplay";
import SEOHead from "@/components/SEOHead";

const SurgeryWoundDrainage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("surgical-drainage");

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
        title="Surgery & Wound Drainage - Surgical Drainage Systems | Wellcure Surgicals"
        description="Advanced drainage solutions for effective post-surgical recovery and wound management. Professional surgical suction instruments and retraction tools."
        canonicalUrl="/surgery-wound-drainage"
        keywords="surgical drainage, wound drainage systems, surgical suction, retraction tools, post-operative care, surgical instruments, wound management"
      />
      <Header />
      <Breadcrumb />
      <main className="flex-grow relative overflow-hidden">
        <CategoryBanner
          title="Surgery & Wound Drainage"
          description="Advanced drainage solutions for effective post-surgical recovery and wound management"
          imageUrl="/lovable-uploads/02cf3074-41e4-47b4-bd6c-068aa0514366.png"
          altText="Medical professionals testing wound drainage equipment in a sterile environment"
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

export default SurgeryWoundDrainage;