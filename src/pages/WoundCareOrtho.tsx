
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Bandage, Bone, Scissors, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryBanner from "@/components/shared/CategoryBanner";
import { getProductImage, createImagePath } from "@/utils/imageUtils";

// Define products with local image path structure
const WOUND_CARE_PATH = "wound-care";
const ORTHO_PATH = "ortho";

const woundCareProducts = [
  {
    title: "Advanced Wound Dressing",
    image: createImagePath(WOUND_CARE_PATH, "advanced-wound-dressing.jpg"),
    imageAlt: "Innovative wound dressing with moisture control technology",
    description: "Innovative wound dressing with moisture control technology for optimal healing environment."
  },
  {
    title: "Antimicrobial Wound Gel",
    image: createImagePath(WOUND_CARE_PATH, "antimicrobial-wound-gel.jpg"),
    imageAlt: "Specialized antimicrobial gel formula for wound healing",
    description: "Specialized gel formula with antimicrobial properties to prevent infection while promoting healing."
  },
  {
    title: "Hydrocolloid Dressings",
    image: createImagePath(WOUND_CARE_PATH, "hydrocolloid-dressings.jpg"),
    imageAlt: "Self-adhesive waterproof dressings for wound care",
    description: "Self-adhesive, waterproof dressings that form a gel when in contact with wound exudate."
  },
  {
    title: "Wound Cleansing Solution",
    image: createImagePath(WOUND_CARE_PATH, "wound-cleansing-solution.jpg"),
    imageAlt: "Gentle yet effective solution for cleansing wounds",
    description: "Gentle yet effective solution for cleansing wounds and preparing the area for dressing application."
  }
];

const orthoProducts = [
  {
    title: "Knee Support Brace",
    image: createImagePath(ORTHO_PATH, "knee-support-brace.jpg"),
    imageAlt: "Anatomically designed knee brace for support and stability",
    description: "Anatomically designed knee brace providing optimal support and stability during rehabilitation."
  },
  {
    title: "Ankle Stabilizer",
    image: createImagePath(ORTHO_PATH, "ankle-stabilizer.jpg"),
    imageAlt: "Compression ankle support with adjustable straps",
    description: "Compression ankle support with adjustable straps for custom fit and enhanced stability."
  },
  {
    title: "Wrist Splint",
    image: createImagePath(ORTHO_PATH, "wrist-splint.jpg"),
    imageAlt: "Ergonomic wrist support with removable stay",
    description: "Ergonomic wrist support with removable stay for immobilization and pain relief."
  },
  {
    title: "Cervical Collar",
    image: createImagePath(ORTHO_PATH, "cervical-collar.jpg"),
    imageAlt: "Foam cervical collar for neck support and alignment",
    description: "Foam cervical collar providing gentle support and alignment for neck injuries."
  },
  {
    title: "Back Support Belt",
    image: createImagePath(ORTHO_PATH, "back-support-belt.jpg"),
    imageAlt: "Lumbar support belt with adjustable compression",
    description: "Lumbar support belt with adjustable compression for lower back pain and injury prevention."
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

const WoundCareOrtho = () => {
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

  const renderProducts = (products: any[]) => {
    return (
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
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <FloatingIcon delay={0} duration={15} x={100} y={100}>
            <Bandage size={48} />
          </FloatingIcon>
          <FloatingIcon delay={2} duration={20} x={500} y={200}>
            <Bone size={64} />
          </FloatingIcon>
          <FloatingIcon delay={4} duration={18} x={200} y={400}>
            <Scissors size={56} />
          </FloatingIcon>
          <FloatingIcon delay={6} duration={16} x={700} y={300}>
            <Activity size={48} />
          </FloatingIcon>
        </div>

        <CategoryBanner
          title="Wound Care & Ortho Range"
          description="Comprehensive solutions for wound management and orthopedic support for enhanced patient recovery"
          imageUrl={createImagePath("combined", "wound-care-ortho-banner.jpg")}
          altText="Advanced wound care products and orthopedic supports for patient recovery"
        />

        <section className="py-16 bg-white/80 backdrop-blur-sm relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Our Comprehensive Solutions</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Advanced products for wound management and orthopedic support designed for optimal healing and patient comfort
              </p>
            </div>
            
            <Tabs defaultValue="wound-care" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-8">
                <TabsTrigger 
                  value="wound-care" 
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Wound Care
                </TabsTrigger>
                <TabsTrigger 
                  value="ortho-range" 
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Ortho Range
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="wound-care" className="mt-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800">Wound Care Products</h3>
                  <p className="text-gray-600 mt-2">Advanced solutions for effective wound management and healing</p>
                </div>
                {renderProducts(woundCareProducts)}
              </TabsContent>
              
              <TabsContent value="ortho-range" className="mt-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800">Orthopedic Support Products</h3>
                  <p className="text-gray-600 mt-2">Specialized orthopedic supports and braces for joint and musculoskeletal conditions</p>
                </div>
                {renderProducts(orthoProducts)}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WoundCareOrtho;
