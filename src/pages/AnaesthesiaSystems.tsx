import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CategoryBanner from "@/components/shared/CategoryBanner";
import CategoryTabs from "@/components/anaesthesia/CategoryTabs";
import ProductDisplay from "@/components/anaesthesia/ProductDisplay";
import SEOHead from "@/components/SEOHead";

const AnaesthesiaSystems = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("oxygen-delivery");

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
        title="Anaesthesia Systems - Oxygen Delivery & Respiratory Care | Wellcure Surgicals"
        description="Comprehensive range of anaesthesia systems including oxygen delivery devices, respiratory care equipment, and cardiopulmonary bypass accessories for safe patient care."
        canonicalUrl="/anaesthesia-systems"
        keywords="anaesthesia systems, oxygen delivery, respiratory care, cardiopulmonary bypass, suction catheters, airway management, anaesthesia equipment"
      />
      <Header />
      <Breadcrumb />
      <main className="flex-grow relative overflow-hidden">
        <CategoryBanner
          title="Anaesthesia Systems"
          description="Comprehensive range of airway management devices, oxygen delivery systems, and cardiopulmonary bypass accessories for safe and effective patient care in hospital and surgical environments"
          imageUrl="/lovable-uploads/09a97209-15e1-4bca-9938-b67922a11d93.png"
          altText="Healthcare professional managing anaesthesia systems in modern operating room"
        />

        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Anaesthesia Systems | Airway Management & Respiratory Care Devices
              </h1>
              <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
                Discover our complete range of anaesthesia systems including airway management devices, oxygen delivery masks, 
                suction catheters, and cardiopulmonary bypass accessories designed for safe and effective patient care in 
                hospital and surgical environments worldwide.
              </p>
            </div>
          </div>
        </section>

        <CategoryTabs 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ProductDisplay category={selectedCategory} />

        <section className="py-16 bg-gradient-to-br from-[#003b5c]/10 to-[#1f5f5b]/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Partner with Global Healthcare Excellence
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-8">
              Our anaesthesia systems are trusted by hospitals and medical facilities worldwide. 
              Contact our team for detailed specifications, bulk pricing, and international shipping options.
            </p>
            <Button className="ocean-to-forest-gradient text-white px-8 py-4 text-lg hover:shadow-lg transition-all">
              Request Detailed Catalog
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AnaesthesiaSystems;