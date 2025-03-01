
import { TabsContent } from "@/components/ui/tabs";
import ProductGrid from "./ProductGrid";
import { Product } from "./ProductCard";

interface CategorySectionProps {
  value: string;
  title: string;
  description: string;
  products: Product[];
}

const CategorySection = ({ value, title, description, products }: CategorySectionProps) => {
  return (
    <TabsContent value={value} className="mt-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <ProductGrid products={products} />
    </TabsContent>
  );
};

export default CategorySection;
