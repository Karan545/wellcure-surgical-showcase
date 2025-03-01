
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategorySection from "./CategorySection";
import { extensionTubes, ivCannulas, ivInfusionSets } from "@/data/infusion-therapy-data";

const ProductTabs = () => {
  return (
    <Tabs defaultValue="extension-tubes" className="w-full">
      <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
        <TabsTrigger value="extension-tubes">Extension Tubes</TabsTrigger>
        <TabsTrigger value="infusion-sets">I.V Infusion Sets</TabsTrigger>
        <TabsTrigger value="cannulas">I.V. Cannula</TabsTrigger>
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
