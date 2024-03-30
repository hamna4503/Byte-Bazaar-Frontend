import React, { useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { GetOrders } from "./GetOrders";
import {DispatchOrder} from "./DispatchOrder";
import { toast } from "react-toastify";
import { IoMdPricetag } from "react-icons/io";

export default function OrderTable() {
  const [orders, setOrders] = useState([]);

  const columns = ["Buyer Information", "Address", "City", "Total Amount", "Order Status"];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const orderData = await GetOrders();
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
            </tr>
          </thead>

          <tbody className="bg-white">
            {orders && orders.length > 0 ? (
              orders.map((order) => (
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
                        <div className="text-md font-medium leading-5 text-gray-900">
                          {order.name}
                        </div>
                        <div className="text-sm leading-6 text-gray-500">
                          {order.email}
                        </div>
                        <div className="text-sm leading-6 text-gray-500">
                          {order.phone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="inline-flex px-2.5 py-1.5 text-sm font-semibold leading-5 text-white bg-Purple rounded-full">
                      {order.isDispatched ? "Dispatched" : "Not Dispatched"}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-md leading-5 text-black whitespace-no-wrap border-b border-gray-200">
                    {order.address}
                  </td>
                  <td className="px-4 py-4 text-md leading-5 text-black whitespace-no-wrap border-b border-gray-200">
                    {order.city}
                  </td>
                  <td className="px-4 py-4 text-md leading-5 text-black whitespace-no-wrap border-b border-gray-200">
                    <span className="inline-flex">
                      <IoMdPricetag
                        className="mr-2 text-Purple"
                        style={{ width: "22px", height: "22px" }}
                      />
                      {order.totalAmount}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-md font-medium leading-5 whitespace-no-wrap border-b border-gray-200">
                    <button
                      className={`${
                        !order.isDispatched
                          ? "text-gray-700 cursor-not-allowed"
                          : "text-red-500 hover:text-red-700"
                      }`}
                      onClick={() =>
                        DispatchOrder(order.email, orders, setOrders)
                      }
                      disabled={!order.isDispatched}
                    >
                      Dispatch
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-red-600 p-3 bold">No Orders Found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
