
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CategoryBanner from "@/components/shared/CategoryBanner";
import { getProductImage, createImagePath } from "@/utils/imageUtils";

// Define products with local image path structure
const CATEGORY_PATH = "anaesthesia";

const productData = [
  {
    title: "Nebulizer Mask",
    image: createImagePath(CATEGORY_PATH, "nebulizer-mask.jpg"),
    imageAlt: "High-quality nebulizer mask for effective medication delivery",
    description: "High-quality nebulizer mask for effective medication delivery through aerosol inhalation."
  },
  {
    title: "Oxygen Catheter",
    image: createImagePath(CATEGORY_PATH, "oxygen-catheter.jpg"),
    imageAlt: "Precision-designed oxygen catheter for targeted oxygen delivery",
    description: "Precision-designed oxygen catheter for targeted oxygen delivery in various clinical settings."
  },
  {
    title: "Oxygen Mask",
    image: createImagePath(CATEGORY_PATH, "oxygen-mask.jpg"),
    imageAlt: "Comfortable and efficient oxygen mask for reliable oxygen therapy",
    description: "Comfortable and efficient oxygen mask for reliable oxygen therapy administration."
  },
  {
    title: "Suction Catheters",
    image: createImagePath(CATEGORY_PATH, "suction-catheters.jpg"),
    imageAlt: "High-performance suction catheters for effective airway management",
    description: "High-performance suction catheters for effective airway management and secretion removal."
  },
  {
    title: "Twin Bore Nasal Oxygen Cannula",
    image: createImagePath(CATEGORY_PATH, "twin-bore-nasal-cannula.jpg"),
    imageAlt: "Dual-channel nasal oxygen cannula for comfortable oxygen delivery",
    description: "Dual-channel nasal oxygen cannula for comfortable and efficient oxygen delivery."
  }
];

const AnaesthesiaSystems = () => {
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
          title="Anaesthesia Systems"
          description="Advanced respiratory and oxygen delivery solutions for optimal patient comfort and effective treatment"
          imageUrl="/lovable-uploads/906551ae-6937-499f-ae9b-c81a405bc014.png"
          altText="Nurse assisting patient with oxygen mask and nebulizer treatment in clinical setting"
        />

        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Our Anaesthesia Products</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Comprehensive range of high-quality respiratory equipment and oxygen delivery systems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default AnaesthesiaSystems;
