import React from "react";

export const ProductCard = () => {
  return (
    <article className="border">
      <button>whislist</button>
      <img src="" alt="" />
      <section>
        <div>
          <p className="text-gray-400">product brand</p>
          <p>product name</p>
        </div>
        <div className="flex justify-between">
          <span>price</span>
          <span>discount</span>
        </div>
        <p>offer name</p>
      </section>
    </article>
  );
};
