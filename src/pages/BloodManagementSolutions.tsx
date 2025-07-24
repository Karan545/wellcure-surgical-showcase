import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CategoryBanner from "@/components/shared/CategoryBanner";
import ProductDisplay from "@/components/blood-management/ProductDisplay";
import SEOHead from "@/components/SEOHead";

const BloodManagementSolutions = () => {
  const [isLoading, setIsLoading] = useState(true);

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
        title="Blood Management Solutions | Blood Administration Sets & Transfusion Equipment"
        description="Advanced blood administration equipment for safe transfusions. Blood administration sets with/without air vents for hospitals and critical care facilities."
        keywords="blood management solutions, blood administration sets, transfusion equipment, blood transfusion sets, air vent systems, hospital blood equipment"
        canonicalUrl="https://wellcuresurgicals.com/blood-management-solutions"
      />
      <Header />
      <Breadcrumb />
      <main className="flex-grow relative overflow-hidden">
        <CategoryBanner
          title="Blood Management Solutions"
          description="Advanced blood administration equipment designed for efficient and safe transfusions in critical care settings"
          imageUrl="/Product-images/Blood-Management-Solutions/WhatsApp Image 2025-07-07 at 15.59.43.jpeg"
          altText="Healthcare professional managing blood transfusion with IV bags in hospital setting"
        />

        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Blood Management Solutions | Safe Transfusion Equipment
              </h1>
              <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
                Discover our comprehensive range of blood administration sets and transfusion equipment designed for 
                safe, efficient, and sterile blood management in hospitals, blood banks, and critical care facilities worldwide.
              </p>
            </div>
            <ProductDisplay />
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-50 to-red-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Trusted Blood Management Solutions
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-8">
              Our blood administration sets meet international safety standards and are trusted by healthcare 
              professionals worldwide for reliable and safe blood transfusion procedures.
            </p>
            <Button className="ocean-to-forest-gradient text-white px-8 py-4 text-lg hover:shadow-lg transition-all">
              Request Product Information
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BloodManagementSolutions;