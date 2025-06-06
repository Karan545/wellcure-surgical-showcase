
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Bandage, Bone, Scissors, Activity } from "lucide-react";
import CategoryBanner from "@/components/shared/CategoryBanner";
import CategoryTabs from "@/components/wound-care-ortho/CategoryTabs";
import ProductDisplay from "@/components/wound-care-ortho/ProductDisplay";

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
  const [selectedCategory, setSelectedCategory] = useState("wound-care");

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
          imageUrl="/lovable-uploads/2bab3cd1-259b-412f-a6cb-a8fa62b5e6a0.png"
          altText="Doctor examining patient's wrist with orthopedic brace"
        />

        <CategoryTabs 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ProductDisplay category={selectedCategory} />
      </main>
      <Footer />
    </div>
  );
};

export default WoundCareOrtho;
