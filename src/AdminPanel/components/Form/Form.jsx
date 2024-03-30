import React, { useState } from "react";
import FormFields from "./FormFields";
import ProductsTable from "../../pages/InventoryManagement/ProductsTable";
import Sidebar from "../Sidebar/Sidebar";

export default function Form() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditForm, setIsEditForm] = useState(false);
  const [prodId, setProdId] = useState(0);

  const toggleSidebar = (_id) => {
    if (_id === 0) {
      console.log("Frontend - Add Mode", _id);
      setIsEditForm(false);
      setProdId(0);
    } else if (_id !== 0) {
      console.log("Frontend - Edit Mode", _id);
      setIsEditForm(true);
      setProdId(_id);
    } else {
      console.log("Error");
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar toggleSidebar={toggleSidebar} />
      <ProductsTable toggleSidebar={toggleSidebar} />

      <div className="flex justify-center items-center min-h-screen">
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-Purple bg-opacity-75" />
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl">
                  <div className="flex items-center justify-between px-4 ">
                    <h2 className="text-xl font-semibold text-Purple px-3">
                      {!isEditForm ? "Add Products" : "Edit Products"}
                    </h2>

                    <button
                      onClick={toggleSidebar}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="h-6 w-6"
                        x-description="Heroicon name: x"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-4 px-4 h-full overflow-auto">
                    {!isEditForm ? (
                      <FormFields isEditForm={false} />
                    ) : (
                      <FormFields isEditForm={true} _id={prodId} />
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
}
