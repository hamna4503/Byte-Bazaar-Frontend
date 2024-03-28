import React, { useState } from "react";
import FormFields from "./FormFields";

export default function Form({isEditForm}) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* component */}
      <div className="flex justify-center items-center min-h-screen">
        {/* Sidebar Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75" />
            {/* Sidebar Content */}
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl">
                  {/* Sidebar Header */}
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

                  {/* Sidebar Content */}
                  <div className="mt-4 px-4 h-full overflow-auto">
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> */}
                    <FormFields />
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Open sidebar button */}
        {!isOpen && (
          <button
            onClick={toggleSidebar}
            className="fixed bottom-0 right-0 m-8 bg-black text-white rounded-md p-2"
          >
            Open Sidebar
          </button>
        )}
      </div>
    </>
  );
}
