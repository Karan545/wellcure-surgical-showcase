
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const productData = [
  {
    title: "Nebulizer Mask",
    image: "https://images.unsplash.com/photo-1583912267220-99c4c0999fc2?auto=format&fit=crop&q=80",
    description: "High-quality nebulizer mask for effective medication delivery through aerosol inhalation."
  },
  {
    title: "Oxygen Catheter",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    description: "Precision-designed oxygen catheter for targeted oxygen delivery in various clinical settings."
  },
  {
    title: "Oxygen Mask",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80",
    description: "Comfortable and efficient oxygen mask for reliable oxygen therapy administration."
  },
  {
    title: "Suction Catheters",
    image: "https://images.unsplash.com/photo-1579154204449-5387c5197804?auto=format&fit=crop&q=80",
    description: "High-performance suction catheters for effective airway management and secretion removal."
  },
  {
    title: "Twin Bore Nasal Oxygen Cannula",
    image: "https://images.unsplash.com/photo-1583912268183-f03c4972e8e8?auto=format&fit=crop&q=80",
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
        <section className="relative h-[300px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&q=80"
              alt="Anaesthesia Systems Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">Anaesthesia Systems</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Advanced respiratory and oxygen delivery solutions for optimal patient comfort and effective treatment
            </p>
          </div>
        </section>

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

export default AnaesthesiaSystems;
