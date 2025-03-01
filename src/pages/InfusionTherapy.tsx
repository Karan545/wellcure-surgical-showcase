
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Droplets, Syringe, Stethoscope, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const extensionTubes = [
  {
    title: "High Pressure Extension Line",
    image: "https://images.unsplash.com/photo-1579154204661-305a1ff49faa?auto=format&fit=crop&q=80",
    description: "Durable extension line designed for high-pressure applications, with reinforced walls and secure connectors."
  },
  {
    title: "Low Pressure Extension Line",
    image: "https://images.unsplash.com/photo-1583912267550-d42ddb4518f4?auto=format&fit=crop&q=80",
    description: "Flexible extension line for standard pressure infusions, featuring clear markings and smooth fluid flow."
  },
  {
    title: "PVC Free High Pressure Extension Line",
    image: "https://images.unsplash.com/photo-1581093458791-9d09008b0d02?auto=format&fit=crop&q=80",
    description: "Environmentally-friendly, PVC-free extension line with high-pressure resistance and biocompatible materials."
  }
];

const ivInfusionSets = [
  {
    title: "I.V. Infusion Set with Airvent",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80",
    description: "Complete infusion set featuring an integrated air vent for consistent flow and prevention of air locks."
  },
  {
    title: "I.V. Infusion Set with Flow Regulator",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80",
    description: "Precision infusion set with adjustable flow regulator for accurate control of fluid administration rates."
  },
  {
    title: "I.V. Infusion Set with Micro Drip",
    image: "https://images.unsplash.com/photo-1579154204661-305a1ff49faa?auto=format&fit=crop&q=80",
    description: "Specialized infusion set with micro-drip chamber for precise delivery of small volume infusions."
  },
  {
    title: "I.V. Infusion Set without Airvent",
    image: "https://images.unsplash.com/photo-1583912267550-d42ddb4518f4?auto=format&fit=crop&q=80",
    description: "Standard infusion set without air vent, ideal for gravity-fed infusions and general application."
  }
];

const ivCannulas = [
  {
    title: "I.V. Cannula-AZcan",
    image: "https://images.unsplash.com/photo-1581093458791-9d09008b0d02?auto=format&fit=crop&q=80",
    description: "Standard intravenous cannula with smooth insertion point and comfortable hub design."
  },
  {
    title: "I.V. Cannula-AZcath",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80",
    description: "Premium catheter-style IV cannula with flexible tubing and enhanced stability."
  },
  {
    title: "I.V. Cannula-AZflon",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80",
    description: "Advanced fluorinated polymer IV cannula for reduced friction and longer indwelling times."
  },
  {
    title: "I.V. Cannula-AZneo",
    image: "https://images.unsplash.com/photo-1579154204661-305a1ff49faa?auto=format&fit=crop&q=80",
    description: "Specially designed neonatal IV cannula with extra-small gauge and gentle insertion mechanism."
  },
  {
    title: "I.V. Cannula-AZpen",
    image: "https://images.unsplash.com/photo-1583912267550-d42ddb4518f4?auto=format&fit=crop&q=80",
    description: "Pen-grip style IV cannula providing enhanced control during insertion procedures."
  },
  {
    title: "I.V. Cannula-AZwin",
    image: "https://images.unsplash.com/photo-1581093458791-9d09008b0d02?auto=format&fit=crop&q=80",
    description: "Wingless design IV cannula for specialized applications requiring minimal surface profile."
  },
  {
    title: "Safety I.V. Cannula – AZSafe",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80",
    description: "Advanced safety IV cannula with needle protection mechanism to prevent needlestick injuries."
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

const InfusionTherapy = () => {
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
            <Droplets size={48} />
          </FloatingIcon>
          <FloatingIcon delay={2} duration={20} x={500} y={200}>
            <Syringe size={64} />
          </FloatingIcon>
          <FloatingIcon delay={4} duration={18} x={200} y={400}>
            <Stethoscope size={56} />
          </FloatingIcon>
          <FloatingIcon delay={6} duration={16} x={700} y={300}>
            <Thermometer size={48} />
          </FloatingIcon>
        </div>

        <section className="relative h-[300px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579154204661-305a1ff49faa?auto=format&fit=crop&q=80"
              alt="Infusion Therapy Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">Infusion Therapy</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Complete range of infusion systems, IV cannulas, and administration sets designed for safe and accurate fluid delivery
            </p>
          </div>
        </section>

        <section className="py-16 bg-white/80 backdrop-blur-sm relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Our Infusion Therapy Products</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Comprehensive range of high-quality infusion therapy devices and accessories
              </p>
            </div>
            
            <Tabs defaultValue="extension-tubes" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
                <TabsTrigger value="extension-tubes">Extension Tubes</TabsTrigger>
                <TabsTrigger value="infusion-sets">I.V Infusion Sets</TabsTrigger>
                <TabsTrigger value="cannulas">I.V. Cannula</TabsTrigger>
              </TabsList>
              
              <TabsContent value="extension-tubes" className="mt-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800">Extension Tubes</h3>
                  <p className="text-gray-600 mt-2">High-quality extension lines for various clinical applications</p>
                </div>
                {renderProducts(extensionTubes)}
              </TabsContent>
              
              <TabsContent value="infusion-sets" className="mt-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800">I.V Infusion Sets</h3>
                  <p className="text-gray-600 mt-2">Comprehensive range of infusion sets for various clinical needs</p>
                </div>
                {renderProducts(ivInfusionSets)}
              </TabsContent>
              
              <TabsContent value="cannulas" className="mt-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800">I.V. Cannula</h3>
                  <p className="text-gray-600 mt-2">Advanced intravenous cannulas designed for comfort and safety</p>
                </div>
                {renderProducts(ivCannulas)}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InfusionTherapy;
