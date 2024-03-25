import React, { useState, useEffect } from "react";
import SearchSort from "./SearchSort";
import ItemCard from "../itemCard/ItemCard";
import products from "./Products";
import FilterOptions from "./FilterOptions";
import ShopHeader from "./ShopHeader";
import bgimg from "../../assets/images/Shop/bg.jpg";

const ShopMain = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    brand: "",
  });
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:6005/api/products");
      const data = await response.json();
      setFilteredProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  /*filter ka main function*/
  useEffect(() => {
    applyFilters(filters);
  }, [filters]);

  const applyFilters = ({ category, priceRange, brand }) => {
    let filteredProducts = products.filter((product) => {
      const categoryMatch = category === "" || product.category === category;
      const priceMatch =
        priceRange === "" || parseInt(product.price) <= parseInt(priceRange);
      const brandMatch =
        brand === "" ||
        product.brand.toLowerCase().includes(brand.toLowerCase());
      return categoryMatch && priceMatch && brandMatch;
    });

    setFilteredProducts(filteredProducts);
    console.log(filteredProducts);
  };

  /*Search ki logic*/
  const handleSearch = (query) => {
    setIsLoading(true);
    const filtered = products.filter(
      (product) =>
        product.name.toString().toLowerCase().includes(query.toLowerCase()) ||
        (product.description &&
          product.description.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredProducts(filtered);
    setIsLoading(false);
  };

  /*Sort ki logic*/

  const handleSort = (option) => {
    let sortedProducts = [...filteredProducts];
    switch (option) {
      case "az":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "lowToHigh":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "highToLow":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="bg-gray-200 w-full sm overflow-x-hidden "  style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="flex justify-center items-center flex-wrap sm:px-12 px-4 bg-[#390a48] py-7 mx-0">
        <SearchSort
          onSearch={handleSearch}
          isLoading={isLoading}
          products={filteredProducts}
          onSort={handleSort}
        />
      </div>
      <div className="container mx-0 flex">
        <div className="w-1/4">
          <FilterOptions onFilter={applyFilters} />
        </div>
        <div className="w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center px-4">
            {filteredProducts.map((product) => (
              <ItemCard
                key={product.id}
                id={product.id}
                itemImg={product.image}
                itemName={product.name}
                itemDescription={product.description}
                itemPrice={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMain;
