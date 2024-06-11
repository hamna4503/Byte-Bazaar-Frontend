import React, { useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { GetOrders } from "./GetOrders";
import { DispatchOrder } from "./DispatchOrder";
import { toast } from "react-toastify";
import { IoMdPricetag } from "react-icons/io";
import Pagination from "../../components/Pagination/Pagination.jsx";

export default function OrderTable() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5);

  const columns = [
    "Buyer Information",
    "Order Status",
    "Address",
    "Total Amount",
    "Payment Method",
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const orderData = await GetOrders();
        console.log(orderData);
        setOrders(orderData);
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

    fetchUsers();
  }, []);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="h-full p-5 px-5 py-2 mb-6 overflow-hidden md:ml-64 sm:ml-12 xs:ml-14">
      <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full">
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
            </tr>
          </thead>

          <tbody className="bg-white">
            {orders && orders.length > 0 ? (
              currentOrders.map((order) => (
                <tr key={order._id}>
                  <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <FaRegUserCircle
                          style={{
                            width: "30px",
                            height: "30px",
                          }}
                        />
                      </div>
                      <div className="ml-2">
                        <div className="font-medium leading-5 text-gray-900 text-md">
                          {order.shippingDetails.name}
                        </div>
                        <div className="text-sm leading-6 text-gray-500">
                          {order.shippingDetails.email}
                        </div>
                        <div className="text-sm leading-6 text-gray-500">
                          {order.shippingDetails.contact}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="inline-flex px-2.5 py-1.5 text-sm text-center font-semibold leading-5 text-white bg-Purple rounded-full">
                      {order.orderStatus != "pending"
                        ? "Dispatched"
                        : "Not Dispatched"}
                    </span>
                  </td>
                  <td className="px-4 py-4 leading-5 text-black whitespace-no-wrap border-b border-gray-200 text-md">
                    {order.shippingDetails.address},{" "}
                    {order.shippingDetails.postalCode}
                  </td>
                  <td className="px-4 py-4 leading-5 text-black whitespace-no-wrap border-b border-gray-200 text-md">
                    <span className="inline-flex">
                      <IoMdPricetag
                        className="mr-2 text-Purple"
                        style={{ width: "22px", height: "22px" }}
                      />
                      {order.orderTotal.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-4 py-4 leading-5 text-black whitespace-no-wrap border-b border-gray-200 text-md">
                    {order.paymentDetails.paymentOption}
                  </td>
                  <td className="px-4 py-4 font-medium leading-5 whitespace-no-wrap border-b border-gray-200 text-md">
                    <button
                      className={`${
                        order.orderStatus != "pending"
                          ? "text-gray-700 cursor-not-allowed"
                          : "text-Purple hover:text-gray-700"
                      }`}
                      onClick={() => DispatchOrder(order.userId, order._id)}
                      disabled={order.orderStatus != "pending"}
                    >
                      Dispatch
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-3 text-lg text-red-600 bold">
                  No Orders Found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(orders.length / ordersPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
