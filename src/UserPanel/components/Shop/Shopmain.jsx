import React, { useState, useEffect } from "react";
import SearchSort from "./SearchSort";
import ItemCard from "../itemCard/ItemCard";
import Image from "../../assets/images/home/image1.jpg";
import products from "./Products";
import FilterOptions from "./FilterOptions";
import ShopHeader from "./ShopHeader";
import bgimg from "../../assets/images/Shop/bg.jpg";
import LoadingScreen from "../../components/Loading/LoadingScreen";
const ShopMain = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [CompleteData, setCompleteData] = useState([]);
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
      const response = await fetch("http://localhost:6005/api/get-prods");
      const data = await response.json();
      console.log(data);
      setFilteredProducts(data.data);
      setCompleteData(data.data);
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
    let filterProducts = CompleteData.filter((product) => {
      const categoryMatch = category === "" || product.category === category;
      const priceMatch =
        priceRange === "" || parseInt(product.price) <= parseInt(priceRange);
      const brandMatch =
        brand === "" ||
        product.brand.toLowerCase().includes(brand.toLowerCase());
      return categoryMatch && priceMatch && brandMatch;
    });

    setFilteredProducts(filterProducts);
    console.log(filterProducts);
  };

  /*Search ki logic*/
  const handleSearch = (query) => {
    setIsLoading(true);
    const filtered = CompleteData.filter(
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
    <div className="w-full overflow-x-hidden bg-gray-200 sm ">
      <div className="relative">
        <img
          src={Image}
          className="object-center w-screen h-[70vh] object-cover"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center px-4 mx-0 sm:px-12 bg-Purple py-7">
        <SearchSort
          onSearch={handleSearch}
          isLoading={isLoading}
          products={filteredProducts}
          onSort={handleSort}
        />
      </div>
      <div className="flex items-center justify-center mx-0 mb-6">
        <div className="flex flex-wrap items-center w-10/12 justify-evenly gap-x-5">
          {isLoading ? (
            <LoadingScreen />
          ) : (
            filteredProducts?.map((product) => (
              <ItemCard
                key={product._id}
                id={product._id}
                itemImg={"http://localhost:6005" + product.image}
                itemName={product.name}
                itemDescription={product.description}
                itemPrice={product.price}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopMain;
