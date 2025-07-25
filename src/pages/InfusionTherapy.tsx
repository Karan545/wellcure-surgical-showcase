import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { useState, useEffect } from "react";
import Banner from "@/components/infusion-therapy/Banner";
import CategoryTabs from "@/components/infusion-therapy/CategoryTabs";
import ProductDisplay from "@/components/infusion-therapy/ProductDisplay";
import SEOHead from "@/components/SEOHead";

const InfusionTherapy = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("extension-tubes");

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Infusion Therapy Equipment | IV Cannulas & Extension Tubes"
        description="Complete infusion therapy solutions including IV cannulas, extension tubes, infusion sets, pressure monitoring lines & flow control devices for safe fluid delivery."
        keywords="infusion therapy, IV cannulas, extension tubes, infusion sets, pressure monitoring, flow control devices, intravenous equipment, medical infusion systems"
        canonicalUrl="https://wellcuresurgicals.com/infusion-therapy"
      />
      <Header />
      <Breadcrumb />
      <main className="flex-grow relative overflow-hidden">
        <Banner />

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

export default InfusionTherapy;