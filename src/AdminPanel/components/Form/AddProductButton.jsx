import React from "react";

const AddProductButton = ({ toggleSidebar }) => {
  return (
    <button
      onClick={toggleSidebar}
      className="fixed bottom-0 right-0 m-8 bg-Purple text-white rounded-md px-2 py-1.5"
    >

      Add Products
    </button>
  );
};

export default AddProductButton;
