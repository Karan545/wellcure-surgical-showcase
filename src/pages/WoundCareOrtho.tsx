import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Bandage, Bone, Scissors, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const woundCareProducts = [
  {
    title: "Advanced Wound Dressing",
    image: "https://images.unsplash.com/photo-1612776572997-76cc42e058c3?auto=format&fit=crop&q=80",
    description: "Innovative wound dressing with moisture control technology for optimal healing environment."
  },
  {
    title: "Antimicrobial Wound Gel",
    image: "https://images.unsplash.com/photo-1583912267550-d42ddb4518f4?auto=format&fit=crop&q=80",
    description: "Specialized gel formula with antimicrobial properties to prevent infection while promoting healing."
  },
  {
    title: "Hydrocolloid Dressings",
    image: "https://images.unsplash.com/photo-1581093458791-9d09008b0d02?auto=format&fit=crop&q=80",
    description: "Self-adhesive, waterproof dressings that form a gel when in contact with wound exudate."
  },
  {
    title: "Wound Cleansing Solution",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80",
    description: "Gentle yet effective solution for cleansing wounds and preparing the area for dressing application."
  }
];

const orthoProducts = [
  {
    title: "Knee Support Brace",
    image: "https://images.unsplash.com/photo-1588774069410-a944888230b1?auto=format&fit=crop&q=80",
    description: "Anatomically designed knee brace providing optimal support and stability during rehabilitation."
  },
  {
    title: "Ankle Stabilizer",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80",
    description: "Compression ankle support with adjustable straps for custom fit and enhanced stability."
  },
  {
    title: "Wrist Splint",
    image: "https://images.unsplash.com/photo-1579154204661-305a1ff49faa?auto=format&fit=crop&q=80",
    description: "Ergonomic wrist support with removable stay for immobilization and pain relief."
  },
  {
    title: "Cervical Collar",
    image: "https://images.unsplash.com/photo-1583912267550-d42ddb4518f4?auto=format&fit=crop&q=80",
    description: "Foam cervical collar providing gentle support and alignment for neck injuries."
  },
  {
    title: "Back Support Belt",
    image: "https://images.unsplash.com/photo-1581093458791-9d09008b0d02?auto=format&fit=crop&q=80",
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

        <section className="relative h-[300px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1588774069410-a944888230b1?auto=format&fit=crop&q=80"
              alt="Wound Care & Ortho Range Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">Wound Care & Ortho Range</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Comprehensive solutions for wound management and orthopedic support for enhanced patient recovery
            </p>
          </div>
        </section>

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
