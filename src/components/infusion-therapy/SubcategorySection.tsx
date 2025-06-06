
import { motion } from "framer-motion";
import ProductGrid from "./ProductGrid";
import { Product } from "./ProductCard";

interface SubcategorySectionProps {
  id: string;
  title: string;
  description: string;
  products: Product[];
}

const SubcategorySection = ({ id, title, description, products }: SubcategorySectionProps) => {
  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </motion.div>
        
        <ProductGrid products={products} />
      </div>
    </section>
  );
};

export default SubcategorySection;
