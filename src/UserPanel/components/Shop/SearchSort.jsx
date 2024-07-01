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
    <div className="flex items-center justify-center">
      <input
        className="justify-center px-4 py-2 mr-4 border-purple-300 rounded-lg border-3 w-80"
        type="text"
        placeholder="What are you looking for? "
        value={searchQuery}
        onChange={handleChange}
      />
      <div className="flex items-center">
        <select
          className="px-4 py-2 mr-4 text-black bg-purple-300 rounded-lg border-1 border-Purple"
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
          className="px-5 py-2 text-gray-900 bg-purple-300 rounded-lg"
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
