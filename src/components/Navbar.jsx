import React, { useState } from "react";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="bg-blue-500">
      <div className="max-w-screen-md mx-auto flex flex-row items-center p-4">
        <div className="text-xl font-semibold text-white">Flikpkart</div>

        <input
          type="search"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search for products"
          className="p-2 ml-auto w-100 min-w-[20rem] outline-none border border-gray-300 focus:border-gray-400"
        />
      </div>
    </nav>
  );
};
