
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const productData = [
  {
    title: "Blood Administration Set without Air Vent",
    image: "https://images.unsplash.com/photo-1581093450021-a7c13b91246e?auto=format&fit=crop&q=80",
    description: "High-quality blood administration set without air vent for safe and efficient blood transfusions."
  },
  {
    title: "Blood Administration Set with Air Vent",
    image: "https://images.unsplash.com/photo-1576671414121-aa2d45ebb3b2?auto=format&fit=crop&q=80",
    description: "Premium blood administration set with integrated air vent for controlled and precise blood transfusions."
  }
];

const BloodManagementSolutions = () => {
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
        <section className="relative h-[300px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1615461066841-6116e61857c6?auto=format&fit=crop&q=80"
              alt="Blood Management Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">Blood Management Solutions</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Advanced blood administration equipment designed for efficient and safe transfusions in critical care settings
            </p>
          </div>
        </section>

        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Our Blood Management Products</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Comprehensive range of high-quality blood administration sets for medical professionals
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

export default BloodManagementSolutions;
