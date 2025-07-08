import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { getProductImage } from "@/utils/imageUtils";

// Import all product data
import { UrineCollectionBags, UrineDrainageCatheters } from "@/data/urological-data";
import { CentralVenousDevices, DialysisCatheters } from "@/data/urological-extended-data";
import { extensionTubes, ivCannulas, ivInfusionSets } from "@/data/infusion-therapy-data";
import { pressureMonitoringProducts, flowControlProducts, pediatricProducts } from "@/data/infusion-therapy-extended-data";
import { surgicalDrainageProducts, surgicalSuctionProducts, surgicalRetractionProducts } from "@/data/surgery-wound-drainage-data";
import { bloodManagementProductDetails } from "@/data/blood-management-product-details";
import { gastroProductDetails } from "@/data/gastroenterology-product-details";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Convert product detail records to product arrays
  const createProductsFromDetails = (details: Record<string, any>, category: string) => {
    return Object.keys(details).map(key => ({
      title: key,
      description: details[key].description || details[key].features?.[0] || "Medical device",
      category,
      image: details[key].image || "/placeholder.svg"
    }));
  };

  // Blood Management products
  const bloodProducts = [
    {
      title: "Blood Administration Set without Air Vent",
      description: "A sterile, single-use blood transfusion set for safe and efficient delivery of blood and blood components.",
      category: "Blood Management Solutions",
      image: "/Product-images/Blood-Management-Solutions/Blood-Administration-Set-without-Air-Vent.jpg"
    },
    {
      title: "Blood Administration Set with Air Vent", 
      description: "A sterile blood transfusion set with an air vent for safe and efficient delivery from rigid bottles.",
      category: "Blood Management Solutions",
      image: "/Product-images/Blood-Management-Solutions/Blood-Administration-Set-with-Air-Vent.avif"
    }
  ];

  // Gastroenterology products
  const gastroProducts = createProductsFromDetails(gastroProductDetails, "Gastroenterology Equipment");

  // Anaesthesia products - manually created from the component data
  const anaesthesiaProducts = [
    // Oxygen Delivery & Respiratory Care
    { title: "Oxygen Mask", description: "Comfortable and efficient oxygen mask designed for reliable oxygen therapy administration in anaesthesia and emergency care environments.", category: "Anaesthesia Systems", image: "/Product-images/Anaesthesia-Systems/Oxygen-Delivery-&-Respiratory-Care/Oxygen-Mask.jpeg" },
    { title: "Oxygen Catheter", description: "Precision-designed oxygen catheter for targeted oxygen delivery in various clinical settings, ensuring optimal patient comfort and safety.", category: "Anaesthesia Systems", image: "/Product-images/Anaesthesia-Systems/Oxygen-Delivery-&-Respiratory-Care/Oxygen-Catheter.webp" },
    { title: "Twin Bore Nasal Oxygen Cannula", description: "Advanced dual-channel nasal oxygen cannula designed for comfortable and efficient oxygen delivery with enhanced patient mobility.", category: "Anaesthesia Systems", image: "/Product-images/Anaesthesia-Systems/Oxygen-Delivery-&-Respiratory-Care/Twin-Bore-Nasal-Oxygen-Cannula.jpg" },
    { title: "Lung Exerciser", description: "Post-operative breathing device that helps improve lung capacity and prevent respiratory complications in surgical recovery environments.", category: "Anaesthesia Systems", image: "/lovable-uploads/c1e3e70e-7fa3-4295-b6e3-6c3b5dfbe25e.png" },
    { title: "Respiratory Circuits", description: "Ventilator-compatible breathing circuits used in anaesthesia and critical care environments for reliable respiratory support and patient safety.", category: "Anaesthesia Systems", image: "/Product-images/Anaesthesia-Systems/Oxygen-Delivery-&-Respiratory-Care/Respiratory-Circuits.png" },
    { title: "Heat Moisture Exchanger with Bacterial Viral Filter (HME-BVF)", description: "Maintains humidity and prevents cross-contamination during mechanical ventilation or anaesthesia procedures, ensuring optimal patient safety.", category: "Anaesthesia Systems", image: "/lovable-uploads/03537a53-4ff4-4ca6-b271-f6743b9b1c28.png" },
    
    // Suction & Airway Management
    { title: "Suction Catheters", description: "High-performance suction catheters essential for effective airway management and secretion removal during anaesthesia and post-operative care.", category: "Anaesthesia Systems", image: "/Product-images/Anaesthesia-Systems/Suction-&-Airway-Management/Suction-Catheters.png" },
    { title: "Yankauer Suction Set", description: "Used for oropharyngeal suctioning during surgery or intensive care; ensures a clear airway for optimal patient respiratory function.", category: "Anaesthesia Systems", image: "/Product-images/Anaesthesia-Systems/Suction-&-Airway-Management/Yankauer-Suction-Set.png" },
    
    // Cardiopulmonary Bypass & Surgical Perfusion
    { title: "Heart Lung Pack", description: "Comprehensive heart-lung pack designed for extracorporeal circulation during cardiac surgery procedures, ensuring optimal perfusion support.", category: "Anaesthesia Systems", image: "/Product-images/Anaesthesia-Systems/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Heart-Lung-Pack.png" },
    { title: "Heart Lung Pack With Coated Tubing", description: "Advanced heart-lung pack featuring biocompatible coated tubing for enhanced hemocompatibility and reduced inflammatory response.", category: "Anaesthesia Systems", image: "/Product-images/Anaesthesia-Systems/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Heart-Lung-Pack-With-Coated-Tubing.webp" },
    { title: "Cardioplegia Delivery Set", description: "Precision cardioplegia delivery set for safe and effective myocardial protection during cardiac surgical procedures.", category: "Anaesthesia Systems", image: "/Product-images/Anaesthesia-Systems/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Cardioplegia-Delivery-Set.png" },
    { title: "Perfusion Accessories", description: "Comprehensive range of perfusion accessories designed to support various cardiac surgery procedures and extracorporeal circulation requirements.", category: "Anaesthesia Systems", image: "/Product-images/Anaesthesia-Systems/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Perfusion-Accessories.png" },
    { title: "Arterial Cannula (Adult & Pediatric)", description: "High-quality arterial cannulas available in adult and pediatric sizes for optimal arterial access during cardiopulmonary bypass procedures.", category: "Anaesthesia Systems", image: "/Product-images/Anaesthesia-Systems/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Arterial-Cannula-(Adult & Pediatric).png" },
    { title: "Venous Cannula (Plastic & Metal Tip)", description: "Versatile venous cannulas with plastic and metal tip options, designed for efficient venous drainage during cardiac surgery procedures.", category: "Anaesthesia Systems", image: "/Product-images/Anaesthesia-Systems/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Venous-Cannula-(Plastic & Metal Tip).png" },
    { title: "Arterial Filter", description: "High-efficiency arterial filter designed to remove air bubbles and particles from the arterial line during cardiopulmonary bypass procedures.", category: "Anaesthesia Systems", image: "/Product-images/Anaesthesia-Systems/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Arterial-Filter.png" },
    { title: "Rigid Suction Tubes", description: "Durable rigid suction tubes designed for effective fluid and debris removal during various surgical and cardiac procedures.", category: "Anaesthesia Systems", image: "/Product-images/Anaesthesia-Systems/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Rigid-Suction-Tubes.png" },
    { title: "Coronary Artery Ostial Cannula", description: "Specialized coronary artery ostial cannula designed for precise cardioplegia delivery and coronary perfusion during cardiac surgery.", category: "Anaesthesia Systems", image: "/Product-images/Anaesthesia-Systems/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Coronary-Artery-Ostial-Cannula.png" },
    { title: "Mister/Blower", description: "Professional surgical mister and blower system for maintaining clear operative fields and effective irrigation during cardiac procedures.", category: "Anaesthesia Systems", image: "/Product-images/Anaesthesia-Systems/Cardiopulmonary-Bypass-&-Surgical-Perfusion/Mister-blower.png" }
  ];

  // Combine all products from different categories
  const allProducts = [
    ...UrineCollectionBags.map(p => ({ ...p, category: "Urological Instruments" })),
    ...UrineDrainageCatheters.map(p => ({ ...p, category: "Urological Instruments" })),
    ...CentralVenousDevices.map(p => ({ ...p, category: "Urological Instruments" })),
    ...DialysisCatheters.map(p => ({ ...p, category: "Urological Instruments" })),
    ...extensionTubes.map(p => ({ ...p, category: "Infusion Therapy" })),
    ...flowControlProducts.map(p => ({ ...p, category: "Infusion Therapy" })),
    ...ivCannulas.map(p => ({ ...p, category: "Infusion Therapy" })),
    ...ivInfusionSets.map(p => ({ ...p, category: "Infusion Therapy" })),
    ...pediatricProducts.map(p => ({ ...p, category: "Infusion Therapy" })),
    ...pressureMonitoringProducts.map(p => ({ ...p, category: "Infusion Therapy" })),
    ...surgicalDrainageProducts.map(p => ({ ...p, category: "Surgery & Wound Drainage" })),
    ...surgicalSuctionProducts.map(p => ({ ...p, category: "Surgery & Wound Drainage" })),
    ...surgicalRetractionProducts.map(p => ({ ...p, category: "Surgery & Wound Drainage" })),
    ...bloodProducts,
    ...gastroProducts,
    ...anaesthesiaProducts,
  ];

  useEffect(() => {
    if (query.trim()) {
      const results = allProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const getCategoryLink = (category: string) => {
    switch (category) {
      case "Urological Instruments":
        return "/urological-instruments";
      case "Infusion Therapy":
        return "/infusion-therapy";
      case "Blood Management Solutions":
        return "/blood-management-solutions";
      case "Gastroenterology Equipment":
        return "/gastroenterology";
      case "Surgery & Wound Drainage":
        return "/surgery-wound-drainage";
      case "Anaesthesia Systems":
        return "/anaesthesia-systems";
      default:
        return "/";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb />
      <main className="flex-grow relative overflow-hidden">
        <section className="py-16 bg-white/80 backdrop-blur-sm relative mt-14 md:mt-16 lg:mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Search Results
              </h1>
              {query && (
                <p className="text-gray-700 text-lg">
                  {searchResults.length} results found for "{query}"
                </p>
              )}
            </div>

            {!query ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">
                  Enter a search term to find products
                </p>
              </div>
            ) : searchResults.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">
                  No products found matching "{query}"
                </p>
                <p className="text-gray-400 mt-2">
                  Try searching with different keywords
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchResults.map((product, index) => {
                  const productImages = (product as any).images || [product.image];
                  
                  return (
                    <motion.div
                      key={`${product.category}-${product.title}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                        <div className="product-image-container">
                          <img
                            src={getProductImage(productImages[0])}
                            alt={product.imageAlt || product.title}
                            className="product-image-contain"
                            onError={(e) => {
                              e.currentTarget.src = "/placeholder.svg";
                            }}
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg line-clamp-2">
                            {product.title}
                          </CardTitle>
                          <p className="text-sm text-blue-600 font-medium">
                            {product.category}
                          </p>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <CardDescription className="text-base line-clamp-3">
                            {product.description}
                          </CardDescription>
                        </CardContent>
                        <div className="p-6 pt-0 mt-auto">
                          <Button 
                            className="w-full mb-2"
                            onClick={() => window.location.href = getCategoryLink(product.category)}
                          >
                            View in Category
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;