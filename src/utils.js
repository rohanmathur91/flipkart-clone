export const getSortedProducts = (products, sortByType) => {
  switch (sortByType) {
    case "LOW_TO_HIGH":
      return [...products].sort((p1, p2) => p1.price - p2.price);

    case "HIGH_TO_LOW":
      return [...products].sort((p1, p2) => p2.price - p1.price);

    default:
      return products;
  }
};

export const getIdealProducts = (products, idealForFilter) => {
  // If any one filter is applied from this group
  // then return the product of whichever is applied
  return products.filter((product) =>
    Object.values(idealForFilter).some((filterValue) => filterValue)
      ? product.idealFor
        ? idealForFilter[product.idealFor]
        : product
      : product
  );
};

export const getProductsBySize = (products, sizesFilter) => {
  return products.filter((product) =>
    Object.values(sizesFilter).some((sizeValue) => sizeValue)
      ? product.sizes.some((size) => sizesFilter[size])
      : product
  );
};

export const getProductsByBrand = (products, brandsFilter) => {
  return products.filter((product) =>
    Object.values(brandsFilter).some((brandValue) => brandValue)
      ? brandsFilter[product.brandName.toLowerCase().split(" ").join("")]
      : product
  );
};

export const getSearchedProducts = (products, searchQuery) => {
  return products.filter(({ brandName, productName }) =>
    searchQuery
      ? productName.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        brandName.toLowerCase().includes(searchQuery.toLowerCase().trim())
      : true
  );
};
