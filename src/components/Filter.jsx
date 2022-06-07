import React from "react";
import { useFilters } from "../contexts/filter-context";

export const Filter = () => {
  const { sortBy, brands, sizes, idealFor, filterDispatch } = useFilters();

  const handleClearAllClick = () => {
    filterDispatch({ type: "CLEAR_FILTER" });
  };

  const handleSortChange = (sortByType) => {
    filterDispatch({ type: "SET_SORT_BY", payload: sortByType });
  };

  const handleIdealForChange = (e) => {
    filterDispatch({ type: "SET_IDEAL_FOR", payload: e.target.value });
  };

  const handleSizeChange = (e) => {
    filterDispatch({ type: "SET_SIZE", payload: e.target.value });
  };

  const handleBrandChange = (e) => {
    filterDispatch({ type: "SET_BRAND", payload: e.target.value });
  };

  return (
    <aside className="w-[20rem] p-8">
      <section className="mt-4 flex flex-col mb-4">
        <div className="flex items-center justify-between">
          <span>Sort by</span>
          <button className="hover:underline" onClick={handleClearAllClick}>
            Clear all
          </button>
        </div>

        <label>
          <input
            type="radio"
            name="price"
            checked={sortBy === "LOW_TO_HIGH"}
            onChange={() => handleSortChange("LOW_TO_HIGH")}
          />
          Low to High
        </label>

        <label>
          <input
            type="radio"
            name="price"
            checked={sortBy === "HIGH_TO_LOW"}
            onChange={() => handleSortChange("HIGH_TO_LOW")}
          />
          High to Low
        </label>
      </section>

      <section className="flex flex-col mb-4">
        <div>Ideal for</div>
        <label>
          <input
            type="checkbox"
            value="men"
            checked={idealFor.men}
            onChange={handleIdealForChange}
          />
          Men
        </label>
        <label>
          <input
            type="checkbox"
            value="women"
            checked={idealFor.women}
            onChange={handleIdealForChange}
          />
          Women
        </label>
      </section>

      <section className="flex flex-col mb-4">
        <div>Size</div>

        <label>
          <input
            type="checkbox"
            value="s"
            checked={sizes.s}
            onChange={handleSizeChange}
          />
          Small
        </label>
        <label>
          <input
            type="checkbox"
            value="m"
            checked={sizes.m}
            onChange={handleSizeChange}
          />
          Medium
        </label>
        <label>
          <input
            type="checkbox"
            value="l"
            checked={sizes.l}
            onChange={handleSizeChange}
          />
          Large
        </label>
        <label>
          <input
            type="checkbox"
            value="xl"
            checked={sizes.xl}
            onChange={handleSizeChange}
          />
          Extra Large
        </label>
      </section>

      <section className="flex flex-col mb-4">
        <div>Brand</div>
        <label>
          <input
            type="checkbox"
            value="adidas"
            checked={brands.adidas}
            onChange={handleBrandChange}
          />
          Adidas
        </label>
        <label>
          <input
            type="checkbox"
            value="eyebogler"
            checked={brands.eyebogler}
            onChange={handleBrandChange}
          />
          Eyebogler
        </label>
        <label>
          <input
            type="checkbox"
            value="allensolly"
            checked={brands.allensolly}
            onChange={handleBrandChange}
          />
          Allen Solly
        </label>
        <label>
          <input
            type="checkbox"
            value="killer"
            checked={brands.killer}
            onChange={handleBrandChange}
          />
          killer
        </label>

        <label>
          <input
            type="checkbox"
            value="biba"
            checked={brands.biba}
            onChange={handleBrandChange}
          />
          Biba
        </label>
      </section>
    </aside>
  );
};
