
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Droplets } from "lucide-react";
import { getProductImage, createImagePath } from "@/utils/imageUtils";
import ProductDisplay from "@/components/blood-management/ProductDisplay";

// Define products with local image path structure
const CATEGORY_PATH = "blood-management";

const productData = [
  {
    title: "Blood Administration Set without Air Vent",
    image: createImagePath(CATEGORY_PATH, "blood-admin-set-no-air-vent.jpg"),
    imageAlt: "High-quality blood administration set for safe transfusions",
    description: "High-quality blood administration set without air vent for safe and efficient blood transfusions."
  },
  {
    title: "Blood Administration Set with Air Vent",
    image: createImagePath(CATEGORY_PATH, "blood-admin-set-with-air-vent.jpg"),
    imageAlt: "Premium blood administration set with integrated air vent",
    description: "Premium blood administration set with integrated air vent for controlled and precise blood transfusions."
  }
];

const BloodManagementSolutions = () => {
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
      <Breadcrumb />
      <main className="flex-grow relative overflow-hidden">
        {/* Icon-based Category Header */}
        <section className="px-3 py-6 mt-14 md:mt-16 lg:mt-20 md:px-4 md:py-8">
          <div className="container mx-auto">
            <div className="relative bg-gradient-to-br from-red-50 to-red-100 rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-red-200">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="mb-6"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-2xl mx-auto">
                    <Droplets className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white" />
                  </div>
                </motion.div>
                
                <motion.h1 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight text-red-900"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 1.2,
                    delay: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  Blood Management Solutions
                </motion.h1>
                <motion.p 
                  className="max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4 text-red-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1,
                    delay: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  Advanced blood administration equipment designed for efficient and safe transfusions in critical care settings
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Our Blood Management Products</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Comprehensive range of high-quality blood administration sets for medical professionals
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

export default BloodManagementSolutions;
