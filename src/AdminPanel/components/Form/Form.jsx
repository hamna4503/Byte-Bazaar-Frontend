import React, { useState } from "react";
import FormFields from "./FormFields";
import Sidebar from "../Sidebar/Sidebar";
import ProductsTable from "../../pages/InventoryManagement/ProductsTable";

export default function Form() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditForm, setIsEditForm] = useState(false);
  const [prodId, setProdId] = useState(0);
  const [imageId, setImageId] = useState(0);

  const toggleSidebar = (_id, imageId) => {
    if (_id === 0) {
      setIsEditForm(false);
      setProdId(0);
      setImageId(0);
    } else if (_id !== 0) {
      setIsEditForm(true);
      setProdId(_id);
      setImageId(imageId);
    } else {
      console.log("Error");
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar toggleSidebar={toggleSidebar} />
      <ProductsTable toggleSidebar={toggleSidebar} />

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-opacity-75 bg-Purple" />
          <section className="absolute inset-y-0 right-0 flex max-w-full pl-10">
            <div className="w-screen max-w-md">
              <div className="flex flex-col h-full py-6 bg-white shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="px-3 text-xl font-semibold text-Purple">
                    {!isEditForm ? "Add Products" : "Edit Products"}
                  </h2>
                  <button
                    onClick={toggleSidebar}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="w-6 h-6"
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
                <div className="h-full px-4 mt-4 overflow-auto">
                  {!isEditForm ? (
                    <FormFields isEditForm={false} />
                  ) : (
                    <FormFields
                      isEditForm={true}
                      _id={prodId}
                      prodId={imageId}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
