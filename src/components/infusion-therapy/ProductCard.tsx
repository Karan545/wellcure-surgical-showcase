
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export interface Product {
  title: string;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
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
  );
};

export default ProductCard;
