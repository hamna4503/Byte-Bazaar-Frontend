import React, { useState } from "react";

const FilterOptions = ({ products, onFilter }) => {
    const [category, setCategory] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [brand, setBrand] = useState("");

    const applyFilters = () => {
        const filtered = products.filter(product => {
            const categoryMatch = category === '' || product.category === category;
            const priceMatch = priceRange === '' || parseInt(product.price) <= parseInt(priceRange);
            const brandMatch = brand === '' || product.brand.toLowerCase().includes(brand.toLowerCase());
            return categoryMatch && priceMatch && brandMatch;
        });
        onFilter(filtered);
    };

    return (
        <div className="bg-[#9b9a9b] text-white h-auto p-4 shadow-md mt-2 mb-1 sm:w-3/4 md:w-4/5 lg:w-5/6">
            <h2 className="text-lg text-white font-semibold mb-2">Filter Options</h2>
            <hr />
            <div className="mt-2 mb-4 h-auto">
                <h3 className="font-semibold mb-2 text-purple-900 sm:text-sm">Filter by Category:</h3>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border p-2 w-full text-black"
                >
                    <option value="">All</option>
                    <option value="CPU Equipment">CPU Equipment</option>
                    <option value="Monitor">Monitor</option>
                    <option value="Graphic Cards">Graphic Cards</option>
                    <option value="Mouse and Keyboard">Mouse and Keyboard</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Accessories">Accessories</option>
                
                </select>
            </div>
            <div className="mb-4">
                <h3 className="font-semibold mb-2 text-purple-900">Filter by Price Range:</h3>
                <input
                    type="number"
                    value={priceRange}
                    min={0}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="border p-2 w-full text-black"
                />
            </div>
            <div>
                <h3 className="font-semibold mb-2 text-purple-900">Filter by Brand:</h3>
                <input
                    type="text"
                    placeholder="Enter brand name"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="border p-2 w-full text-black"
                />
            </div>

            <div>
                <button className="w-full mt-2 px-4 py-7 text-white bg-[#390a48]" onClick={applyFilters}>Apply Filter</button>
            </div>
        </div>
    );
};

export default FilterOptions;
