import React from "react";
import { Filter } from "./Filter";
import { Products } from "./Products";

export const ProductListing = () => {
  return (
    <main className="max-w-screen-xl mx-auto flex flex-row">
      <Filter />
      <Products />
    </main>
  );
};
