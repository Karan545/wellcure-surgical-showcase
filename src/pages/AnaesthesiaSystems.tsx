
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CategoryBanner from "@/components/shared/CategoryBanner";
import { getProductImage, createImagePath } from "@/utils/imageUtils";

// Define products with local image path structure
const CATEGORY_PATH = "anaesthesia";

// Oxygen Delivery & Respiratory Care Products
const oxygenDeliveryProducts = [
  {
    title: "Oxygen Mask",
    image: createImagePath(CATEGORY_PATH, "oxygen-mask.jpg"),
    imageAlt: "High-quality oxygen mask for reliable oxygen therapy in hospital settings",
    description: "Comfortable and efficient oxygen mask designed for reliable oxygen therapy administration in anaesthesia and emergency care environments."
  },
  {
    title: "Nebulizer Mask",
    image: createImagePath(CATEGORY_PATH, "nebulizer-mask.jpg"),
    imageAlt: "Professional nebulizer mask for effective medication delivery",
    description: "High-quality nebulizer mask engineered for effective medication delivery through aerosol inhalation therapy in clinical settings."
  },
  {
    title: "Oxygen Catheter",
    image: createImagePath(CATEGORY_PATH, "oxygen-catheter.jpg"),
    imageAlt: "Precision oxygen catheter for targeted oxygen delivery",
    description: "Precision-designed oxygen catheter for targeted oxygen delivery in various clinical settings, ensuring optimal patient comfort and safety."
  },
  {
    title: "Twin Bore Nasal Oxygen Cannula",
    image: createImagePath(CATEGORY_PATH, "twin-bore-nasal-cannula.jpg"),
    imageAlt: "Dual-channel nasal oxygen cannula for comfortable oxygen therapy",
    description: "Advanced dual-channel nasal oxygen cannula designed for comfortable and efficient oxygen delivery with enhanced patient mobility."
  }
];

// Suction & Airway Management Products
const suctionAirwayProducts = [
  {
    title: "Suction Catheters",
    image: createImagePath(CATEGORY_PATH, "suction-catheters.jpg"),
    imageAlt: "High-performance suction catheters for airway management",
    description: "High-performance suction catheters essential for effective airway management and secretion removal during anaesthesia and post-operative care."
  }
];

// Cardiopulmonary Bypass & Surgical Perfusion Products
const cardiopulmonaryProducts = [
  {
    title: "Heart Lung Pack",
    image: createImagePath(CATEGORY_PATH, "heart-lung-pack.jpg"),
    imageAlt: "Complete heart-lung pack for cardiac surgery procedures",
    description: "Comprehensive heart-lung pack designed for extracorporeal circulation during cardiac surgery procedures, ensuring optimal perfusion support."
  },
  {
    title: "Heart Lung Pack With Coated Tubing",
    image: createImagePath(CATEGORY_PATH, "heart-lung-pack-coated.jpg"),
    imageAlt: "Advanced heart-lung pack with biocompatible coated tubing",
    description: "Advanced heart-lung pack featuring biocompatible coated tubing for enhanced hemocompatibility and reduced inflammatory response."
  },
  {
    title: "Cardioplegia Delivery Set",
    image: createImagePath(CATEGORY_PATH, "cardioplegia-set.jpg"),
    imageAlt: "Precision cardioplegia delivery set for cardiac protection",
    description: "Precision cardioplegia delivery set for safe and effective myocardial protection during cardiac surgical procedures."
  },
  {
    title: "Perfusion Accessories",
    image: createImagePath(CATEGORY_PATH, "perfusion-accessories.jpg"),
    imageAlt: "Complete range of perfusion accessories for cardiac surgery",
    description: "Comprehensive range of perfusion accessories designed to support various cardiac surgery procedures and extracorporeal circulation requirements."
  },
  {
    title: "Arterial Cannula (Adult & Pediatric)",
    image: createImagePath(CATEGORY_PATH, "arterial-cannula.jpg"),
    imageAlt: "Arterial cannula for adult and pediatric cardiac procedures",
    description: "High-quality arterial cannulas available in adult and pediatric sizes for optimal arterial access during cardiopulmonary bypass procedures."
  },
  {
    title: "Venous Cannula (Plastic & Metal Tip)",
    image: createImagePath(CATEGORY_PATH, "venous-cannula.jpg"),
    imageAlt: "Venous cannula with plastic and metal tip options",
    description: "Versatile venous cannulas with plastic and metal tip options, designed for efficient venous drainage during cardiac surgery procedures."
  },
  {
    title: "Arterial Filter",
    image: createImagePath(CATEGORY_PATH, "arterial-filter.jpg"),
    imageAlt: "High-efficiency arterial filter for cardiopulmonary bypass",
    description: "High-efficiency arterial filter designed to remove air bubbles and particles from the arterial line during cardiopulmonary bypass procedures."
  },
  {
    title: "Rigid Suction Tubes",
    image: createImagePath(CATEGORY_PATH, "rigid-suction-tubes.jpg"),
    imageAlt: "Durable rigid suction tubes for surgical procedures",
    description: "Durable rigid suction tubes designed for effective fluid and debris removal during various surgical and cardiac procedures."
  },
  {
    title: "Coronary Artery Ostial Cannula",
    image: createImagePath(CATEGORY_PATH, "coronary-ostial-cannula.jpg"),
    imageAlt: "Specialized coronary artery ostial cannula for cardiac surgery",
    description: "Specialized coronary artery ostial cannula designed for precise cardioplegia delivery and coronary perfusion during cardiac surgery."
  },
  {
    title: "Mister/Blower",
    image: createImagePath(CATEGORY_PATH, "mister-blower.jpg"),
    imageAlt: "Surgical mister and blower for operative field management",
    description: "Professional surgical mister and blower system for maintaining clear operative fields and effective irrigation during cardiac procedures."
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

  const ProductSection = ({ title, description, products, keywords }: {
    title: string;
    description: string;
    products: typeof oxygenDeliveryProducts;
    keywords: string;
  }) => (
    <section className="py-12 bg-gray-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
            {description}
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <strong>Keywords:</strong> {keywords}
          </div>
        </div>
        
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
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{product.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                <Button className="w-full ocean-to-forest-gradient text-white hover:shadow-lg transition-all">
                  Request Quote
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow relative overflow-hidden">
        <CategoryBanner
          title="Anaesthesia Systems"
          description="Comprehensive range of airway management devices, oxygen delivery systems, and cardiopulmonary bypass accessories for safe and effective patient care in hospital and surgical environments"
          imageUrl="/lovable-uploads/09a97209-15e1-4bca-9938-b67922a11d93.png"
          altText="Healthcare professional managing anaesthesia systems in modern operating room"
        />

        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Anaesthesia Systems | Airway Management & Respiratory Care Devices
              </h1>
              <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
                Discover our complete range of anaesthesia systems including airway management devices, oxygen delivery masks, 
                suction catheters, and cardiopulmonary bypass accessories designed for safe and effective patient care in 
                hospital and surgical environments worldwide.
              </p>
            </div>
          </div>
        </section>

        <ProductSection
          title="Oxygen Delivery & Respiratory Care"
          description="Advanced devices designed for efficient and safe oxygen delivery in anaesthesia and emergency care settings. Our respiratory care products are engineered to meet the demanding requirements of hospital and surgical environments, ensuring optimal patient comfort and clinical outcomes."
          products={oxygenDeliveryProducts}
          keywords="oxygen mask, nebulizer mask, nasal oxygen cannula, oxygen catheter, respiratory therapy devices"
        />

        <ProductSection
          title="Suction & Airway Management"
          description="Essential airway clearance products designed for maintaining respiratory pathways during anaesthesia and post-operative care. Our suction devices ensure effective secretion removal and airway patency in critical care situations."
          products={suctionAirwayProducts}
          keywords="suction catheter, airway suction device, respiratory suction tube"
        />

        <ProductSection
          title="Cardiopulmonary Bypass & Surgical Perfusion"
          description="Premium components specifically designed for cardiac surgery procedures, providing reliable extracorporeal circulation, perfusion support, and surgical assistance. Our cardiopulmonary bypass products meet the highest standards for cardiac surgical interventions."
          products={cardiopulmonaryProducts}
          keywords="heart-lung pack, arterial cannula, venous cannula, cardioplegia set, surgical blower, perfusion accessories"
        />

        <section className="py-16 bg-gradient-to-br from-[#003b5c]/10 to-[#1f5f5b]/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Partner with Global Healthcare Excellence
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-8">
              Our anaesthesia systems are trusted by hospitals and medical facilities worldwide. 
              Contact our team for detailed specifications, bulk pricing, and international shipping options.
            </p>
            <Button className="ocean-to-forest-gradient text-white px-8 py-4 text-lg hover:shadow-lg transition-all">
              Request Detailed Catalog
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AnaesthesiaSystems;
