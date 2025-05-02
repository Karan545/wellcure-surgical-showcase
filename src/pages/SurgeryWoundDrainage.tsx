
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CategoryBanner from "@/components/shared/CategoryBanner";
import { getProductImage, createImagePath } from "@/utils/imageUtils";

// Define products with local image path structure
const CATEGORY_PATH = "surgery-wound-drainage";

const productData = [
  {
    title: "Wound Drainage System",
    image: createImagePath(CATEGORY_PATH, "wound-drainage-system.jpg"),
    imageAlt: "Advanced closed wound drainage system for efficient fluid evacuation",
    description: "Advanced closed wound drainage system designed for efficient post-surgical fluid evacuation and infection prevention."
  },
  {
    title: "Surgical Suction Set",
    image: createImagePath(CATEGORY_PATH, "surgical-suction-set.jpg"),
    imageAlt: "High-quality surgical suction set for operating room procedures",
    description: "High-quality surgical suction set providing reliable vacuum pressure for various operating room procedures."
  },
  {
    title: "Thoracic Drainage System",
    image: createImagePath(CATEGORY_PATH, "thoracic-drainage-system.jpg"),
    imageAlt: "Specialized thoracic drainage system with three-chamber design",
    description: "Specialized three-chamber thoracic drainage system for managing air leaks and fluid collection from the pleural cavity."
  },
  {
    title: "Surgical Drain",
    image: createImagePath(CATEGORY_PATH, "surgical-drain.jpg"),
    imageAlt: "Flexible surgical drain with multiple perforations",
    description: "Flexible surgical drain with multiple perforations for effective fluid evacuation from surgical sites."
  }
];

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
          imageUrl={createImagePath(CATEGORY_PATH, "banner.jpg")}
          altText="Advanced surgical and wound drainage systems for medical facilities"
        />

        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Our Surgical Drainage Products</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Comprehensive range of high-quality surgical and wound drainage systems for optimal patient recovery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
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

export default SurgeryWoundDrainage;
