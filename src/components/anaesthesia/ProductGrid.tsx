
import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
}

interface ProductGridProps {
  products: Product[];
  getButtonText: (title: string) => string;
  handleButtonClick: (title: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  getButtonText,
  handleButtonClick
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {products.map((product, index) => (
      <ProductCard
        key={product.title}
        product={product}
        index={index}
        buttonText={getButtonText(product.title)}
        onButtonClick={handleButtonClick}
      />
    ))}
  </div>
);

export default ProductGrid;
