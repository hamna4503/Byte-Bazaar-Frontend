import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { GetConcerns } from "./GetConcerns";
import { CloseConcerns } from "./CloseConcerns";

export default function UserTable() {
  const [users, setUsers] = useState([]);

  const columns = ["User Information", "Type", "Message", "Status"];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await GetConcerns();
        setUsers(userData);
      } catch (error) {
        toast.error(`Error fetching customer concers ${error}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          draggable: false,
          closeOnClick: false,
          theme: "colored",
          transition: toast.flip,
        });
        console.error("Error fetching customer concers:", error);
      }
    };

    fetchUsers();
  }, []);

  const composeEmail = (email, subject) => {
    const emailLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = emailLink;
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
            {users && users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id}>
                  <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <FaUserCircle
                          style={{
                            width: "30px",
                            height: "30px",
                          }}
                        />
                      </div>
                      <div className="ml-2">
                        <div className="text-md font-medium leading-5 text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm leading-6 text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-md leading-5 text-black whitespace-no-wrap border-b border-gray-200">
                    {user.type}
                  </td>
                  <td className="px-4 py-4 text-md leading-5 text-black whitespace-no-wrap border-b border-gray-200">
                    <div className="h-16 overflow-hidden line-clamp-2">
                      {user.message}
                    </div>
                  </td>

                  <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="inline-flex px-2.5 py-1.5 text-sm font-semibold leading-5 text-white bg-Purple rounded-full">
                      {user.status ? "Pending" : "Closed"}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-md font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200">
                    <button
                      className={`${
                        !user.status
                          ? "text-gray-500 cursor-not-allowed mr-3"
                          : "text-Purple mr-3"
                      }`}
                      onClick={() => composeEmail(user.email, user.type)}
                      disabled={!user.status}
                    >
                      Send Email
                    </button>
                  </td>

                  <td className="px-4 py-4 text-md font-medium leading-5 whitespace-no-wrap border-b border-gray-200">
                    <button
                      className={`${
                        !user.status
                          ? "text-gray-500 cursor-not-allowed"
                          : "text-red-500 hover:text-red-700"
                      }`}
                      onClick={() => CloseConcerns(user._id, users, setUsers)}
                      disabled={!user.status}
                    >
                      Close
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-red-600 p-3 bold">
                  No Customer Messages Found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
