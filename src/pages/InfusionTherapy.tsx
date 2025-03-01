
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { useState, useEffect } from "react";
import Banner from "@/components/infusion-therapy/Banner";
import ProductTabs from "@/components/infusion-therapy/ProductTabs";

const InfusionTherapy = () => {
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
        <Banner />

        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Our Infusion Therapy Products</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Comprehensive range of high-quality infusion therapy devices and accessories
              </p>
            </div>
            
            <ProductTabs />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InfusionTherapy;
