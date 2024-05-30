import React, { useState, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdPricetags } from "react-icons/io";
import { GetProducts } from "./GetProducts";
import { DeleteProducts } from "./DeleteProducts";
import Pagination from "../../components/Pagination/Pagination.jsx";

export default function ProductsTable({ toggleSidebar }) {
  const [prods, setProds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [prodsPerPage] = useState(4);

  const columns = [
    "Product Info",
    "Product Description",
    "Price",
    "Brand",
    "Ratings",
  ];

  //Get Products
  useEffect(() => {
    const fetchProds = async () => {
      try {
        const prodsData = await GetProducts();
        setProds(prodsData);
      } catch (error) {
        throw new Error("Error Fetching the Products.");
      }
    };

    fetchProds();
  }, []);

  // Delete Products
  const handleDeleteProduct = async (prodId, id) => {
    try {
      await DeleteProducts(prodId, id);
    } catch (error) {
      console.error("Error deleting product:", error);
      throw new Error("Error Deleting the Product.");
    }
  };

  const indexOfLastProd = currentPage * prodsPerPage;
  const indexOfFirstProd = indexOfLastProd - prodsPerPage;
  const currentProds = prods.slice(indexOfFirstProd, indexOfLastProd);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="h-full px-5 py-2 mb-4 overflow-hidden md:ml-64 sm:ml-12 xs:ml-14">
      <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full prods-table">
          <thead>
            <tr>
              {columns.map((columnName) => (
                <th
                  key={columnName}
                  className="px-4 py-3 font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-gray-200 text-md bg-Purple"
                >
                  {columnName}
                </th>
              ))}
              <th className="px-4 py-3 text-white border-b border-gray-200 bg-Purple" />
              <th className="px-4 py-3 text-white border-b border-gray-200 bg-Purple" />
            </tr>
          </thead>

          <tbody className="bg-white">
            {prods && prods.length > 0 ? (
              currentProds.map((prod) => (
                <tr key={prod._id}>
                  <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-left">
                      <div className="flex-shrink-0 mr-1 w-14 h-14">
                        <img
                          className="object-contain w-full h-full"
                          src={"http://localhost:6005" + prod.image}
                          alt="image"
                        />
                      </div>
                      <div className="ml-2">
                        <div className="font-medium leading-5 text-gray-900 text-md">
                          {prod.name}
                        </div>
                        <div className="text-sm leading-6 text-gray-500">
                          {prod.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 leading-5 text-black whitespace-no-wrap border-b border-gray-200 text-md">
                    <div className="h-10 overflow-hidden line-clamp-2">
                      {prod.description}
                    </div>
                  </td>

                  <td className="px-4 py-4 leading-5 text-black whitespace-no-wrap border-b border-gray-200 text-md">
                    <span className="inline-flex">
                      <IoMdPricetags
                        className="mr-2 text-Purple"
                        style={{ width: "22px", height: "22px" }}
                      />
                      {prod.price}
                    </span>
                  </td>
                  <td className="px-4 py-4 leading-5 text-black whitespace-no-wrap border-b border-gray-200 text-md">
                    {prod.brand}
                  </td>
                  <td className="py-4 text-center whitespace-no-wrap border-b border-gray-200">
                    <span className="inline-flex px-2.5 py-1 text-sm font-semibold leading-5 text-white bg-Purple rounded-full">
                      {prod.rating}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200">
                    <button
                      className="mr-3 text-Purple dark:hover:text-gray-700 edit-btn"
                      onClick={() => toggleSidebar(prod._id, prod.id)}
                    >
                      <AiFillEdit
                        style={{
                          width: "24px",
                          height: "24px",
                        }}
                      />
                    </button>
                  </td>

                  <td className="px-4 py-4 text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200">
                    <button
                      className="mx-3 text-Purple dark:hover:text-gray-700 delete-btn"
                      onClick={() => handleDeleteProduct(prod._id, prod.id)}
                    >
                      <RiDeleteBin6Fill
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-3 text-lg text-red-600 bold">
                  No Products Found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(prods.length / prodsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
