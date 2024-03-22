import React, { useState, useEffect } from 'react';
import SearchSort from './SearchSort';
import ItemCard from '../ItemCard/ItemCard';
import products from './Products';
import FilterOptions from './FilterOptions';
import ShopHeader from './ShopHeader';

const ShopMain = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isLoading, setIsLoading] = useState(false);
    const [filters, setFilters] = useState({ category: '', priceRange: '', brand: '' });


    /*filter ka main function*/
    useEffect(() => {
        applyFilters(filters);
    }, [filters]);
    
    const applyFilters = ({ category, priceRange, brand }) => {
        let filteredProducts = products.filter(product => {
            const categoryMatch = category === '' || product.category === category;
            const priceMatch = priceRange === '' || parseInt(product.price) <= parseInt(priceRange);
            const brandMatch = brand === '' || product.brand.toLowerCase().includes(brand.toLowerCase());
            return categoryMatch && priceMatch && brandMatch;
        });
        setFilteredProducts(filteredProducts);
    };

     /*Search ki logic*/
    const handleSearch = (query) => {
        setIsLoading(true);
        const filtered = products.filter(
            (product) =>
                product.name.toString().toLowerCase().includes(query.toLowerCase()) ||
                (product.description && product.description.toLowerCase().includes(query.toLowerCase()))
        );
        setFilteredProducts(filtered);
        setIsLoading(false);
    };

     /*Sort ki logic*/

    const handleSort = (option) => {
        let sortedProducts = [...filteredProducts];
        switch (option) {
            case 'az':
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'za':
                sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'lowToHigh':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'highToLow':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        setFilteredProducts(sortedProducts);
    };

    return (
        
        
        <div className="bg-gray-900 w-full sm">
          
            <div className="flex justify-center items-center  sm:px-12 px-4 bg-[#ffffff19] py-7 mx-0">
                <SearchSort onSearch={handleSearch} isLoading={isLoading} products={filteredProducts} onSort={handleSort} />
            </div>
            <div className="container mx-0 flex">
                <div className="w-1/4">
                    <FilterOptions onFilter={applyFilters} />
                </div>
                <div className="w-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center px-4">
                        {filteredProducts.map((product) => (
                            <ItemCard
                                key={product.id}
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
