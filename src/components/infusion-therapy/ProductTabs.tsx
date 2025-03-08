
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategorySection from "./CategorySection";
import { extensionTubes, ivCannulas, ivInfusionSets } from "@/data/infusion-therapy-data";

const ProductTabs = () => {
  return (
    <Tabs defaultValue="extension-tubes" className="w-full">
      <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-gray-100">
        <TabsTrigger 
          value="extension-tubes" 
          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
        >
          Extension Tubes
        </TabsTrigger>
        <TabsTrigger 
          value="infusion-sets" 
          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
        >
          I.V Infusion Sets
        </TabsTrigger>
        <TabsTrigger 
          value="cannulas" 
          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
        >
          I.V. Cannula
        </TabsTrigger>
      </TabsList>
      
      <CategorySection 
        value="extension-tubes"
        title="Extension Tubes"
        description="High-quality extension lines for various clinical applications"
        products={extensionTubes}
      />
      
      <CategorySection 
        value="infusion-sets"
        title="I.V Infusion Sets"
        description="Comprehensive range of infusion sets for various clinical needs"
        products={ivInfusionSets}
      />
      
      <CategorySection 
        value="cannulas"
        title="I.V. Cannula"
        description="Advanced intravenous cannulas designed for comfort and safety"
        products={ivCannulas}
      />
    </Tabs>
  );
};

export default ProductTabs;
