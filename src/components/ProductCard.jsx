import React from "react";

export const ProductCard = ({
  id,
  alt,
  price,
  sizes,
  imageUrl,
  idealFor,
  brandName,
  productName,
}) => {
  return (
    <article className="border">
      <img src={imageUrl} alt={alt} className="aspect-[1/2] w-full h-72" />
      <section className="p-1">
        <div>
          <p className="text-gray-500">{brandName}</p>
          <p className="line-clamp-1">{productName}</p>
        </div>
        <div className="flex justify-between">
          <span>₹{price}</span>
        </div>

        <div className="flex gap-2">
          <span className="text-gray-500">Size: </span>
          {sizes.map((type, index) => (
            <span key={index}>{type.toUpperCase()}</span>
          ))}
        </div>
      </section>
    </article>
  );
};

ProductCard.defaultProps = {
  id: "",
  alt: "",
  price: 0,
  sizes: [],
  imageUrl: "",
  idealFor: "",
  brandName: "",
  productName: "",
};
