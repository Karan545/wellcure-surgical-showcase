
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const productData = [
  {
    title: "Latex Sterile Examination Gloves Powdered",
    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80",
    description: "High-quality powdered latex examination gloves designed for superior protection and comfort during medical procedures."
  },
  {
    title: "Latex Sterile Examination Gloves Powder Free",
    image: "https://images.unsplash.com/photo-1603816129814-fd2dfd941e4c?auto=format&fit=crop&q=80",
    description: "Premium powder-free latex examination gloves for healthcare professionals with sensitive skin or in powder-sensitive environments."
  },
  {
    title: "Latex Sterile Powdered Surgical Gloves",
    image: "https://images.unsplash.com/photo-1585169695893-ded5baaf7d5e?auto=format&fit=crop&q=80",
    description: "Precision-designed powdered surgical gloves offering excellent tactile sensitivity and grip for surgical procedures."
  },
  {
    title: "Latex Sterile Surgical Gloves Powder Free",
    image: "https://images.unsplash.com/photo-1605692254117-21bd4ccd9716?auto=format&fit=crop&q=80",
    description: "Advanced powder-free surgical gloves providing optimal barrier protection while reducing the risk of allergic reactions."
  }
];

const MedicalGlovesDivision = () => {
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
              src="https://images.unsplash.com/photo-1587977521622-ef6f7be117d4?auto=format&fit=crop&q=80"
              alt="Medical Gloves Division Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">Medical Gloves Division</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Premium quality sterile gloves offering superior protection, comfort, and precision for healthcare professionals
            </p>
          </div>
        </section>

        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Our Medical Gloves</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Comprehensive range of high-quality latex gloves for examination and surgical procedures
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

export default MedicalGlovesDivision;
