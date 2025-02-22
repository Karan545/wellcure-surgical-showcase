
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const UrineCollectionBags = [
  {
    title: "Pediatric Urine Collection Bag",
    image: "https://images.unsplash.com/photo-1583912267550-d42ddb4518f4?auto=format&fit=crop&q=80",
    description: "Specially designed collection bags for pediatric patients with gentle adhesive and comfortable fit."
  },
  {
    title: "Urine Collection Bag with Measured Volume Meter",
    image: "https://images.unsplash.com/photo-1581093458791-9d09008b0d02?auto=format&fit=crop&q=80",
    description: "Precise volume measurement markings with clear visibility for accurate monitoring."
  },
  {
    title: "Urine Collection Bag with Top Outlet",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80",
    description: "Convenient top outlet design for easy drainage and handling."
  },
  {
    title: "Urine Collection Bag with T-type Bottom Outlet & Sampling Port",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80",
    description: "Advanced design with T-type outlet and dedicated sampling port for sterile collection."
  },
  {
    title: "Urine Collection Bag with Bottom Outlet",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80",
    description: "Standard bottom outlet design for efficient drainage and ease of use."
  },
  {
    title: "Urine Collection Bag with Handle and Top Outlet",
    image: "https://images.unsplash.com/photo-1581093458791-9d09008b0d02?auto=format&fit=crop&q=80",
    description: "Ergonomic handle design with top outlet for improved mobility and handling."
  },
  {
    title: "Urine Collection Bag with NRV",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80",
    description: "Built-in Non-Return Valve (NRV) for preventing backflow and maintaining sterility."
  }
];

const UrineDrainageCatheters = [
  {
    title: "Female Catheter",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    description: "Specially designed catheter for female patients, featuring gentle insertion tip and optimal drainage capabilities for enhanced comfort and effectiveness."
  },
  {
    title: "Rectal Catheter",
    image: "https://images.unsplash.com/photo-1583912267550-d42ddb4518f4?auto=format&fit=crop&q=80",
    description: "High-quality rectal catheter with smooth surface finish and atraumatic tip, designed for safe and comfortable bowel management procedures."
  },
  {
    title: "Nelaton Catheter",
    image: "https://images.unsplash.com/photo-1581093458791-9d09008b0d02?auto=format&fit=crop&q=80",
    description: "Premium straight-tip urinary catheter with multiple eyes for efficient drainage, made from medical-grade materials for optimal patient safety."
  }
];

const UrologicalInstruments = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("urine-bags");

  useEffect(() => {
    // Set default category when component mounts
    setSelectedCategory("urine-bags");
  }, []);

  const renderProducts = (category: string) => {
    const products = category === "urine-bags" ? UrineCollectionBags : UrineDrainageCatheters;

    return (
      <section className="py-16 bg-white">
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
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Banner Section */}
        <section className="relative h-[300px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80"
              alt="Urological Instruments Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">Urological Instruments</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Advanced urological solutions designed for precision, comfort, and optimal patient care
            </p>
          </div>
        </section>

        {/* Category Buttons */}
        <section className="py-12 bg-gray-50">
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

        {/* Products Section */}
        {renderProducts(selectedCategory)}
      </main>
      <Footer />
    </div>
  );
};

export default UrologicalInstruments;
