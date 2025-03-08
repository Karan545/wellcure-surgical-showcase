import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Syringe, Bandage, Stethoscope, Thermometer } from "lucide-react";
import CategoryBanner from "@/components/shared/CategoryBanner";
import { getProductImage } from "@/utils/imageUtils";

// Define category path
const CATEGORY_PATH = "urological";

// Define product categories
const UrineCollectionBags = [
  {
    title: "Urine Collection Bag with Bottom Outlet",
    image: getProductImage(`/images/urological/Urine-Collection-Bag-with-Bottom-Outlet-600x600.jpg`),
    imageAlt: "Standard urine collection bag with bottom outlet",
    description: "Standard bottom outlet design for efficient drainage and ease of use."
  },
  {
    title: "Pediatric Urine Collection Bag",
    image: getProductImage(`/images/urological/pediatric-urine-collection-bag.jpg`),
    imageAlt: "Specially designed urine collection bags for pediatric patients",
    description: "Specially designed collection bags for pediatric patients with gentle adhesive and comfortable fit."
  }
];

const UrineDrainageCatheters = [
  {
    title: "Female Catheter",
    image: getProductImage(`/images/urological/female-catheter.jpg`),
    imageAlt: "Specially designed catheter for female patients with gentle insertion tip",
    description: "Specially designed catheter for female patients, featuring gentle insertion tip and optimal drainage capabilities."
  }
];

const UrologicalInstruments = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("urine-bags");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedCategory("urine-bags");

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const renderProducts = (category: string) => {
    const products = category === "urine-bags" ? UrineCollectionBags : UrineDrainageCatheters;

    return (
      <section className="py-16 bg-white/80 backdrop-blur-sm relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={product.image}
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
    );
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow relative overflow-hidden">
        <CategoryBanner
          title="Urological Instruments"
          description="Advanced urological solutions designed for precision, comfort, and optimal patient care"
          imageUrl={getProductImage(`/images/urological/banner.jpg`)}
          altText="Advanced urological instruments and medical supplies for healthcare professionals"
        />

        <section className="py-12 bg-gray-50/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant={selectedCategory === "urine-bags" ? "default" : "outline"}
                className="text-lg px-8 py-6"
                onClick={() => setSelectedCategory("urine-bags")}
              >
                Urine Collection Bags
              </Button>
              <Button
                size="lg"
                variant={selectedCategory === "catheters" ? "default" : "outline"}
                className="text-lg px-8 py-6"
                onClick={() => setSelectedCategory("catheters")}
              >
                Urine Drainage Catheters
              </Button>
            </div>
          </div>
        </section>

        {renderProducts(selectedCategory)}
      </main>
      <Footer />
    </div>
  );
};

export default UrologicalInstruments;
