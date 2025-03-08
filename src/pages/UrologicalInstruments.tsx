
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Syringe, Bandage, Stethoscope, Thermometer } from "lucide-react";
import CategoryBanner from "@/components/shared/CategoryBanner";
import { getProductImage, IMAGE_PATHS, createImagePath } from "@/utils/imageUtils";

// Define products with local image path structure
const CATEGORY_PATH = "urological";

const UrineCollectionBags = [
  {
    title: "Pediatric Urine Collection Bag",
    image: createImagePath(CATEGORY_PATH, "pediatric-urine-collection-bag.jpg"),
    imageAlt: "Specially designed urine collection bags for pediatric patients",
    description: "Specially designed collection bags for pediatric patients with gentle adhesive and comfortable fit."
  },
  {
    title: "Urine Collection Bag with Measured Volume Meter",
    image: createImagePath(CATEGORY_PATH, "urine-collection-bag-volume-meter.jpg"),
    imageAlt: "Urine collection bag with precise volume measurement markings",
    description: "Precise volume measurement markings with clear visibility for accurate monitoring."
  },
  {
    title: "Urine Collection Bag with Top Outlet",
    image: createImagePath(CATEGORY_PATH, "urine-collection-bag-top-outlet.jpg"),
    imageAlt: "Urine collection bag with convenient top outlet design",
    description: "Convenient top outlet design for easy drainage and handling."
  },
  {
    title: "Urine Collection Bag with T-type Bottom Outlet & Sampling Port",
    image: createImagePath(CATEGORY_PATH, "urine-collection-bag-t-bottom-outlet.jpg"),
    imageAlt: "Advanced urine collection bag with T-type outlet and sampling port",
    description: "Advanced design with T-type outlet and dedicated sampling port for sterile collection."
  },
  {
    title: "Urine Collection Bag with Bottom Outlet",
    image:  getProductImage(`public/images/urological/Urine-Collection-Bag-with-Bottom-Outlet-600x600.jpg`),
    imageAlt: "Standard urine collection bag with bottom outlet",
    description: "Standard bottom outlet design for efficient drainage and ease of use."
  },
  {
    title: "Urine Collection Bag with Handle and Top Outlet",
    image: createImagePath(CATEGORY_PATH, "urine-collection-bag-handle.jpg"),
    imageAlt: "Ergonomic urine collection bag with handle for improved mobility",
    description: "Ergonomic handle design with top outlet for improved mobility and handling."
  },
  {
    title: "Urine Collection Bag with NRV",
    image: createImagePath(CATEGORY_PATH, "urine-collection-bag-nrv.jpg"),
    imageAlt: "Urine collection bag with non-return valve for backflow prevention",
    description: "Built-in Non-Return Valve (NRV) for preventing backflow and maintaining sterility."
  }
];

const UrineDrainageCatheters = [
  {
    title: "Female Catheter",
    image: createImagePath(CATEGORY_PATH, "female-catheter.jpg"),
    imageAlt: "Specially designed catheter for female patients with gentle insertion tip",
    description: "Specially designed catheter for female patients, featuring gentle insertion tip and optimal drainage capabilities for enhanced comfort and effectiveness."
  },
  {
    title: "Rectal Catheter",
    image: createImagePath(CATEGORY_PATH, "rectal-catheter.jpg"),
    imageAlt: "High-quality rectal catheter with smooth surface finish and atraumatic tip",
    description: "High-quality rectal catheter with smooth surface finish and atraumatic tip, designed for safe and comfortable bowel management procedures."
  },
  {
    title: "Nelaton Catheter",
    image: createImagePath(CATEGORY_PATH, "nelaton-catheter.jpg"),
    imageAlt: "Premium straight-tip urinary catheter with multiple eyes for efficient drainage",
    description: "Premium straight-tip urinary catheter with multiple eyes for efficient drainage, made from medical-grade materials for optimal patient safety."
  }
];

const FloatingIcon = ({ children, delay, duration, x, y }: { 
  children: React.ReactNode; 
  delay: number; 
  duration: number;
  x: number;
  y: number;
}) => (
  <motion.div
    className="absolute text-gray-100 opacity-20"
    initial={{ x: x, y: y }}
    animate={{ 
      x: x + 50,
      y: y + 50,
      rotate: 360
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

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
    );
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <FloatingIcon delay={0} duration={15} x={100} y={100}>
            <Syringe size={48} />
          </FloatingIcon>
          <FloatingIcon delay={2} duration={20} x={500} y={200}>
            <Bandage size={64} />
          </FloatingIcon>
          <FloatingIcon delay={4} duration={18} x={200} y={400}>
            <Stethoscope size={56} />
          </FloatingIcon>
          <FloatingIcon delay={6} duration={16} x={700} y={300}>
            <Thermometer size={48} />
          </FloatingIcon>
          <FloatingIcon delay={8} duration={22} x={900} y={500}>
            <Bandage size={72} />
          </FloatingIcon>
          <FloatingIcon delay={10} duration={19} x={300} y={600}>
            <Syringe size={52} />
          </FloatingIcon>
        </div>

        <CategoryBanner
          title="Urological Instruments"
          description="Advanced urological solutions designed for precision, comfort, and optimal patient care"
          imageUrl={createImagePath(CATEGORY_PATH, "banner.jpg")}
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
