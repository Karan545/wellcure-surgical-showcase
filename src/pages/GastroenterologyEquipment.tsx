import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CategoryBanner from "@/components/shared/CategoryBanner";
import { getProductImage } from "@/utils/imageUtils";
import ProductDetailsDialog from "@/components/gastroenterology/ProductDetailsDialog";
import SEOHead from "@/components/SEOHead";

// Define products with uploaded image paths
const gastroenterologyProducts = [
  {
    title: "Infant Feeding Tube",
    image: "/Product-images/Gastroenterology-Equipment/Infant-Feeding-Tube.png",
    imageAlt: "Specialized infant feeding tube for gentle nutrition delivery",
    description: "Specially designed feeding tubes for infants, providing gentle and safe delivery of nutrition with optimal comfort."
  },
  {
    title: "Levin's Tube",
    image: "/Product-images/Gastroenterology-Equipment/Levin's-Tube.jpg",
    imageAlt: "Levin's single-lumen nasogastric tube for medical applications",
    description: "Single-lumen nasogastric tube designed for gastric decompression, feeding, and administration of medications."
  },
  {
    title: "Ryle's Tube",
    image: "/Product-images/Gastroenterology-Equipment/Ryle's-Tube.png",
    imageAlt: "Fine-bore Ryle's feeding tube with radio-opaque line",
    description: "Fine-bore feeding tube with radio-opaque line for accurate placement confirmation and optimal patient comfort."
  },
  {
    title: "Umbilical Catheter",
    image: "/Product-images/Gastroenterology-Equipment/Umbilical-Catheter.jpg",
    imageAlt: "Specialized catheter for umbilical vessel cannulation in neonates",
    description: "Specialized catheter for umbilical vessel cannulation in neonates, featuring smooth tapered tip and precise length markings."
  }
];

const GastroenterologyEquipment = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ title: string } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleGetDetails = (product: { title: string }) => {
    console.log('handleGetDetails called with:', product);
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    console.log('handleCloseDialog called');
    setIsDialogOpen(false);
    setSelectedProduct(null);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Gastroenterology Equipment - Feeding Tubes & Catheters | Wellcure Surgicals"
        description="Advanced gastroenterology equipment including infant feeding tubes, Levin's tubes, Ryle's tubes, and umbilical catheters for precise gastrointestinal procedures."
        canonicalUrl="/gastroenterology"
        keywords="gastroenterology equipment, feeding tubes, infant feeding tube, levin's tube, ryle's tube, umbilical catheter, gastrointestinal instruments"
      />
      <Header />
      <Breadcrumb />
      <main className="flex-grow relative overflow-hidden">
        <CategoryBanner
          title="Gastroenterology Equipment"
          description="Advanced endoscopic systems and specialized tools for precise gastrointestinal procedures and diagnostics"
          imageUrl="/lovable-uploads/c2d6db4f-7f83-4be1-9b8f-fbeb5bae0885.png"
          altText="Medical professional inspecting medical tubing in clean room environment"
        />

        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Our Gastroenterology Products</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Premium quality gastroenterology tools designed for maximum precision and patient comfort
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {gastroenterologyProducts.map((product, index) => {
                const hasEdgeDetails = product.title.includes("Tube") || 
                                      product.title.includes("Catheter") ||
                                      product.title.includes("Feeding") ||
                                      product.title.includes("Scale");

                return (
                  <motion.div
                    key={product.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                    style={{ minHeight: '450px' }}
                  >
                    <div className="product-image-container flex-shrink-0">
                      <img
                        src={getProductImage(product.image)}
                        alt={product.imageAlt || product.title}
                        className={hasEdgeDetails ? "product-image-contain" : "product-image"}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                          e.currentTarget.className = "product-image-error";
                          e.currentTarget.textContent = "Image not available";
                        }}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2">{product.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">{product.description}</p>
                      <div className="mt-auto">
                        <Button 
                          variant="default"
                          className="w-full bg-[#003b5c] hover:bg-[#002f4a] text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                          onClick={() => {
                            console.log('Button clicked for:', product.title);
                            handleGetDetails(product);
                          }}
                        >
                          Get Details
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {selectedProduct && (
        <ProductDetailsDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default GastroenterologyEquipment;