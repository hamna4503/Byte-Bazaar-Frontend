import React, { useState, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdPricetags } from "react-icons/io";
import { toast } from "react-toastify";
import { GetProducts } from "./GetProducts";
import { DeleteProducts } from "./DeleteProducts";

export default function ProductsTable({ toggleSidebar }) {
  const [prods, setProds] = useState([]);
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
        toast.error(`Error fetching users ${error}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          draggable: false,
          closeOnClick: false,
          theme: "colored",
          transition: toast.flip,
        });
        console.error("Error fetching users:", error);
      }
    };

    fetchProds();
  }, []);

  // Delete Products
  const handleDeleteProduct = async (productId) => {
    try {
      await DeleteProducts(productId); 
      const response = await fetch(
        `http://localhost:6005/api/delete-prods`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setProds(prods.filter((prod) => prod._id !== productId));
        toast.success("Product deleted successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          draggable: false,
          closeOnClick: false,
          theme: "colored",
          transition: toast.flip,
        });
      } else {
        throw new Error("Error Deleting the Product.");
      }
    } catch (error) {
      toast.error(`Error deleting product: ${error}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        draggable: false,
        closeOnClick: false,
        theme: "colored",
        transition: toast.flip,
      });
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="h-full mb-10 md:ml-64 sm:ml-12 xs:ml-14 p-5 overflow-hidden">
      <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full">
          <thead>
            <tr>
              {columns.map((columnName) => (
                <th
                  key={columnName}
                  className="px-4 py-3 text-md font-medium leading-4 tracking-wider text-left uppercase border-b border-gray-200 bg-Purple text-white"
                >
                  {columnName}
                </th>
              ))}
              <th className="px-4 py-3 border-b border-gray-200 bg-Purple text-white" />
              <th className="px-4 py-3 border-b border-gray-200 bg-Purple text-white" />
            </tr>
          </thead>

          <tbody className="bg-white">
            {prods && prods.length > 0 ? (
              prods.map((prod) => (
                <tr key={prod._id}>
                  <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-left">
                      <div className="flex-shrink-0 w-14 h-14 mr-1">
                        <img
                          className="w-full h-full object-contain"
                          src={prod.image}
                          alt={prod.id}
                        />
                      </div>

                      <div className="ml-2">
                        <div className="text-md font-medium leading-5 text-gray-900">
                          {prod.name}
                        </div>
                        <div className="text-sm leading-6 text-gray-500">
                          {prod.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-md leading-5 text-black whitespace-no-wrap border-b border-gray-200">
                    <div className="h-16 overflow-hidden line-clamp-2">
                      {prod.description}
                    </div>
                  </td>

                  <td className="px-4 py-4 text-md leading-5 text-black whitespace-no-wrap border-b border-gray-200">
                    <span className="inline-flex">
                      <IoMdPricetags
                        className="mr-2 text-Purple"
                        style={{ width: "22px", height: "22px" }}
                      />
                      {prod.price}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-md leading-5 text-black whitespace-no-wrap border-b border-gray-200">
                    {prod.brand}
                  </td>
                  <td className="py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                    <span className="inline-flex px-2.5 py-1 text-sm font-semibold leading-5 text-white bg-Purple rounded-full">
                      {prod.rating}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200">
                    <button
                      className="text-Purple dark:hover:text-gray-700 mr-3"
                      onClick={() => toggleSidebar(prod._id)}
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
                      className="text-Purple dark:hover:text-gray-700 mx-3"
                      onClick={() => handleDeleteProduct(prod._id)}
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
                <td className="text-red-600 p-3 bold">No Products Found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
