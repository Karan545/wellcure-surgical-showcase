
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { useState, useEffect } from "react";
import Banner from "@/components/infusion-therapy/Banner";
import SubcategoryNavigation from "@/components/infusion-therapy/SubcategoryNavigation";
import SubcategorySection from "@/components/urological/SubcategorySection";
import { extensionTubes, ivInfusionSets, ivCannulas } from "@/data/infusion-therapy-data";
import { pressureMonitoringProducts, flowControlProducts, pediatricProducts } from "@/data/infusion-therapy-extended-data";

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow relative overflow-hidden">
        <Banner />

        <SubcategoryNavigation />

        <SubcategorySection
          id="extension-tubes"
          title="Extension Tubes"
          description="High-quality extension tubes designed for various pressure applications in infusion therapy. Our range includes both standard and PVC-free options to meet diverse clinical requirements and environmental considerations."
          products={extensionTubes}
        />

        <SubcategorySection
          id="iv-sets"
          title="I.V. Infusion Sets"
          description="Comprehensive range of intravenous infusion sets featuring various configurations including air vent systems, flow regulators, and micro-drip chambers for precise fluid administration and optimal patient care."
          products={ivInfusionSets}
        />

        <SubcategorySection
          id="iv-cannulas"
          title="I.V. Cannula"
          description="Advanced intravenous cannula collection featuring specialized designs for different clinical scenarios. Our cannula range includes safety mechanisms, various tip configurations, and specialized coatings for enhanced patient comfort and clinical efficiency."
          products={ivCannulas}
        />

        <SubcategorySection
          id="pressure-monitoring"
          title="Pressure Monitoring Lines & Kits"
          description="Precision pressure monitoring systems designed for real-time hemodynamic assessment in critical care environments. Our comprehensive kits include single, double, and triple-line configurations with needle-free connectors and various stopcock options."
          products={pressureMonitoringProducts}
        />

        <SubcategorySection
          id="flow-control"
          title="Infusion Flow Control Devices"
          description="Advanced flow regulation systems for precise control of intravenous fluid delivery. These devices ensure consistent infusion rates and provide healthcare professionals with reliable tools for accurate medication administration."
          products={flowControlProducts}
        />

        <SubcategorySection
          id="pediatric-sets"
          title="Pediatric Infusion Sets"
          description="Specialized infusion sets designed specifically for pediatric and neonatal patients. Our pediatric range includes burette sets for volume-controlled delivery and specialized I.V. sets with appropriate flow rates for child-safe fluid administration."
          products={pediatricProducts}
        />
      </main>
      <Footer />
    </div>
  );
};

export default InfusionTherapy;
