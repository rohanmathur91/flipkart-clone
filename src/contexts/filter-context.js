import { createContext, useContext, useReducer } from "react";
import { products } from "../data";
import {
  getIdealProducts,
  getProductsByBrand,
  getProductsBySize,
  getSearchedProducts,
  getSortedProducts,
} from "../utils";

const FilterContext = createContext();

const filterInitialState = {
  products: products,
  searchQuery: "",
  sortBy: "",
  idealFor: { men: false, women: false },
  sizes: {
    s: false,
    m: false,
    l: false,
    xl: false,
  },
  brands: {
    adidas: false,
    eyebogler: false,
    allensolly: false,
    killer: false,
    biba: false,
  },
};

const filterReducer = (filterState, { type, payload }) => {
  console.log(type, payload);

  switch (type) {
    case "SET_SORT_BY":
      return { ...filterState, sortBy: payload };

    case "SET_IDEAL_FOR":
      return {
        ...filterState,
        idealFor: {
          ...filterState.idealFor,
          [payload]: !filterState.idealFor[payload],
        },
      };

    case "SET_SIZE":
      return {
        ...filterState,
        sizes: { ...filterState.sizes, [payload]: !filterState.sizes[payload] },
      };

    case "SET_BRAND":
      return {
        ...filterState,
        brands: {
          ...filterState.brands,
          [payload]: !filterState.brands[payload],
        },
      };

    case "SET_SEARCH_QUERY":
      return {
        ...filterState,
        searchQuery: payload,
      };

    case "CLEAR_FILTER":
      return filterInitialState;

    default:
      throw new Error(`${type} type not found.`);
  }
};

const FilterProvider = ({ children }) => {
  const [
    { sortBy, idealFor, brands, sizes, searchQuery, products },
    filterDispatch,
  ] = useReducer(filterReducer, filterInitialState);

  console.log(searchQuery);

  const idealProducts = getIdealProducts(products, idealFor);
  const productsBySizes = getProductsBySize(idealProducts, sizes);
  const productsByBrand = getProductsByBrand(productsBySizes, brands);
  const searchedProducts = getSearchedProducts(productsByBrand, searchQuery);
  const sortedProducts = getSortedProducts(searchedProducts, sortBy);

  return (
    <FilterContext.Provider
      value={{
        sortBy,
        idealFor,
        brands,
        sizes,
        products,
        searchQuery,
        sortedProducts,
        filterDispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilters = () => useContext(FilterContext);

export { useFilters, FilterProvider };
