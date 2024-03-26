import React, { useState } from "react";
import { debounce } from "lodash";

const SearchSort = ({ onSearch, isLoading, products, onSort }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  const debouncedSearch = debounce((query) => {
    onSearch(query);
  }, 300);

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const handleClear = () => {
    setSearchQuery("");
    onSearch("");
  };

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    onSort(option);
  };

  return (
    <div className="flex justify-center items-center">
      <input
        className="px-4 py-2 border-3 border-purple-300 rounded-lg mr-4 w-80 justify-center"
        type="text"
        placeholder="What are you looking for? "
        value={searchQuery}
        onChange={handleChange}
      />
      <div className="flex items-center">
        <select
          className="px-4 py-2 border-2 border-purple-300 rounded-lg mr-4 bg-[#9a999a] text-white"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="">Sort By</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          <option value="lowToHigh">Price Low to High</option>
          <option value="highToLow">Price High to Low</option>
        </select>
      </div>
      {searchQuery && (
        <button
          className="px-4 py-2 bg-purple-300 text-gray-900 rounded-lg"
          onClick={handleClear}
          disabled={isLoading}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchSort;
