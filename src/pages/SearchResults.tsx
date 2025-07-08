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

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState<any[]>([]);

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