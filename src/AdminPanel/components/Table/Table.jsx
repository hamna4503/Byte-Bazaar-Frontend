// import React, { useState } from "react";

// export default function Table({data}) {
//   // Sample data array (to be replaced with axios)
//   const columns=["Name", "Title", "Status", "Role"];

//   const data = [
//     {
//       id: 1,
//       name: "John Doe",
//       email: "john@example.com",
//       title: "Software Engineer",
//       role: "Owner",
//       status: "Active",
//     },
//     {
//       id: 2,
//       name: "John Doe",
//       email: "john@example.com",
//       title: "Software Engineer",
//       role: "Owner",
//       status: "Active",
//     },
//     {
//       id: 3,
//       name: "John Doe",
//       email: "john@example.com",
//       title: "Software Engineer",
//       role: "Owner",
//       status: "Active",
//     },
//   ];

//   return (
//     <>
//       <div className="h-full mb-10 md:ml-64 sm:ml-12 xs:ml-14 p-5 overflow-hidden">
//         <div className="flex flex-col mt-4">
//           <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
//             <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
//               <table className="min-w-full">
//                 <thead>
//                   <tr>
//                     <th className="px-4 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-gray-200 bg-Purple text-white">
//                       Name
//                     </th>
//                     <th className="px-4 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-gray-200 bg-Purple text-white">
//                       Title
//                     </th>
//                     <th className="px-4 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-gray-200 bg-Purple text-white">
//                       Status
//                     </th>
//                     <th className="px-4 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-gray-200 bg-Purple text-white">
//                       Role
//                     </th>
//                     <th className="px-4 py-3 border-b border-gray-200 bg-Purple text-white" />
//                     {/* <th className="px-4 py-3 border-b border-gray-200 bg-Purple text-white" /> */}
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white">
//                   {data.map((item) => (
//                     <tr key={item.id}>
//                       <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
//                         <div className="flex items-center">
//                           <div className="flex-shrink-0 w-10 h-10">
//                             <img
//                               className="w-10 h-10 rounded-full"
//                               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                               alt=""
//                             />
//                           </div>
//                           <div className="ml-4">
//                             <div className="text-sm font-medium leading-5 text-gray-900">
//                               {item.name}
//                             </div>
//                             <div className="text-sm leading-5 text-gray-500">
//                               {item.email}
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
//                         <div className="text-sm leading-5 text-gray-900">
//                           {item.title}
//                         </div>
//                         <div className="text-sm leading-5 text-gray-500">
//                           {item.role}
//                         </div>
//                       </td>
//                       <td className="px-4 py-4 whitespace-no-wrap border-b border-gray-200">
//                         <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
//                           {item.status}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
//                         {item.role}
//                       </td>
//                       <td className="px-4 py-4 text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200">
//                         <button
//                           className="text-indigo-600 hover:text-indigo-900"
//                         >
//                           Edit
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function Table({ toggleSidebar }) {
  const columns = ["Name", "Title", "Status", "Role"];

  // const EditForm= ()=>{
  //   toggleSidebar;
  //   IsEditForm;
  // }

  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      title: "Software Engineer",
      role: "Owner",
      status: "Active",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@example.com",
      title: "Software Engineer",
      role: "Owner",
      status: "Active",
    },
    {
      id: 3,
      name: "John Doe",
      email: "john@example.com",
      title: "Software Engineer",
      role: "Owner",
      status: "Active",
    },
  ];
  return (
    <>
      <div className="h-full mb-10 md:ml-64 sm:ml-12 xs:ml-14 p-5 overflow-hidden">
        <div className="flex flex-col mt-4">
          <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    {columns.map((columnName) => (
                      <th
                        key={columnName}
                        className="px-4 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase border-b border-gray-200 bg-Purple text-white"
                      >
                        {columnName}
                      </th>
                    ))}
                    <th className="px-4 py-3 border-b border-gray-200 bg-Purple text-white" />
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {data.map((item) => (
                    <tr key={item.id}>
                      {columns.map((columnName) => (
                        <td
                          key={columnName}
                          className="px-4 py-4 whitespace-no-wrap border-b border-gray-200"
                        >
                          {item[columnName.toLowerCase()]}
                        </td>
                      ))}
                      <td className="py-4 text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200">
                        <button
                          className="text-Purple dark:hover:text-gray-700 mr-5"
                          onClick={() => toggleSidebar(1)}
                        >
                          <AiFillEdit
                            style={{
                              width: "24px",
                              height: "24px",
                            }}
                          />
                        </button>

                        <button
                          className="text-Purple dark:hover:text-gray-700 ml-5"
                          onClick={() => toggleSidebar(1)}
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
