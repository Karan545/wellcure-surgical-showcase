
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CategoryBanner from "@/components/shared/CategoryBanner";
import { getProductImage, createImagePath } from "@/utils/imageUtils";

// Define products with local image path structure
const CATEGORY_PATH = "medical-gloves";

const productData = [
  {
    title: "Latex Sterile Examination Gloves Powdered",
    image: createImagePath(CATEGORY_PATH, "latex-exam-gloves-powdered.jpg"),
    imageAlt: "High-quality powdered latex examination gloves for medical procedures",
    description: "High-quality powdered latex examination gloves designed for superior protection and comfort during medical procedures."
  },
  {
    title: "Latex Sterile Examination Gloves Powder Free",
    image: createImagePath(CATEGORY_PATH, "latex-exam-gloves-powder-free.jpg"),
    imageAlt: "Premium powder-free latex examination gloves for healthcare professionals",
    description: "Premium powder-free latex examination gloves for healthcare professionals with sensitive skin or in powder-sensitive environments."
  },
  {
    title: "Latex Sterile Powdered Surgical Gloves",
    image: createImagePath(CATEGORY_PATH, "latex-surgical-gloves-powdered.jpg"),
    imageAlt: "Precision-designed powdered surgical gloves with excellent tactile sensitivity",
    description: "Precision-designed powdered surgical gloves offering excellent tactile sensitivity and grip for surgical procedures."
  },
  {
    title: "Latex Sterile Surgical Gloves Powder Free",
    image: createImagePath(CATEGORY_PATH, "latex-surgical-gloves-powder-free.jpg"),
    imageAlt: "Advanced powder-free surgical gloves for optimal barrier protection",
    description: "Advanced powder-free surgical gloves providing optimal barrier protection while reducing the risk of allergic reactions."
  }
];

const MedicalGlovesDivision = () => {
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
          title="Medical Gloves Division"
          description="Premium quality sterile gloves offering superior protection, comfort, and precision for healthcare professionals"
          imageUrl="/lovable-uploads/c536be25-6a30-4a2e-8ded-9c049088ae64.png"
          altText="Medical professional inspecting quality blue surgical gloves in a controlled manufacturing environment"
        />

        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Our Medical Gloves</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Comprehensive range of high-quality latex gloves for examination and surgical procedures
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {productData.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={getProductImage(product.image)}
                      alt={product.imageAlt || product.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Button className="w-full">Learn More</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MedicalGlovesDivision;
