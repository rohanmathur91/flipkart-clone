import React from "react";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  return (
    <div className="w-full mx-4">
      <p className="my-4 text-gray-400">Showing some prodtcs</p>
      <div className="grid grid-cols-4 gap-3">
        {Array(10)
          .fill(0)
          .map((i) => (
            <ProductCard />
          ))}
      </div>
    </div>
  );
};
