import React from "react";
import { ProductCard } from "./ProductCard";
import { useFilters } from "../contexts/filter-context";

export const Products = () => {
  const { products, sortedProducts } = useFilters();

  return (
    <div className="w-full mx-4">
      <p className="my-4 text-gray-500">
        Showing {sortedProducts.length} of {products.length} products
      </p>
      <div className="w-full grid grid-cols-4 gap-3 mb-8">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
