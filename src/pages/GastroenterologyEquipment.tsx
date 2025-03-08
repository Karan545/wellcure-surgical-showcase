import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Microscope, Stethoscope, HeartPulse, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryBanner from "@/components/shared/CategoryBanner";

const gastroenterologyProducts = [
  {
    title: "Infant Feeding Tube",
    image: "https://images.unsplash.com/photo-1581093458791-9d09008b0d02?auto=format&fit=crop&q=80",
    description: "Specially designed feeding tubes for infants, providing gentle and safe delivery of nutrition with optimal comfort."
  },
  {
    title: "Levin's Tube",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80",
    description: "Single-lumen nasogastric tube designed for gastric decompression, feeding, and administration of medications."
  },
  {
    title: "Ryle's Tube",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80",
    description: "Fine-bore feeding tube with radio-opaque line for accurate placement confirmation and optimal patient comfort."
  },
  {
    title: "Umbilical Catheter",
    image: "https://images.unsplash.com/photo-1583912267550-d42ddb4518f4?auto=format&fit=crop&q=80",
    description: "Specialized catheter for umbilical vessel cannulation in neonates, featuring smooth tapered tip and precise length markings."
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

const GastroenterologyEquipment = () => {
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
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <FloatingIcon delay={0} duration={15} x={100} y={100}>
            <Microscope size={48} />
          </FloatingIcon>
          <FloatingIcon delay={2} duration={20} x={500} y={200}>
            <Stethoscope size={64} />
          </FloatingIcon>
          <FloatingIcon delay={4} duration={18} x={200} y={400}>
            <HeartPulse size={56} />
          </FloatingIcon>
          <FloatingIcon delay={6} duration={16} x={700} y={300}>
            <Thermometer size={48} />
          </FloatingIcon>
        </div>

        <CategoryBanner
          title="Gastroenterology Equipment"
          description="Advanced endoscopic systems and specialized tools for precise gastrointestinal procedures and diagnostics"
          imageUrl="https://images.unsplash.com/photo-1631217862332-090e298eff2b?auto=format&fit=crop&q=80"
        />

        <section className="py-16 bg-white/80 backdrop-blur-sm relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Our Gastroenterology Products</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Premium quality gastroenterology tools designed for maximum precision and patient comfort
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {gastroenterologyProducts.map((product, index) => (
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
                      alt={product.title}
                      className="w-full h-48 object-cover"
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

export default GastroenterologyEquipment;
