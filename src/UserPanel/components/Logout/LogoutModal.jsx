import React from "react";
import Cookies from "js-cookie";
function LogoutModal({ setModalOpen, ModalOpen, setauthToken }) {
  const onClose = () => {
    setModalOpen(false);
  };
  const onConfirm = () => {
    Cookies.remove("authToken");
    setModalOpen(false);
    setauthToken(null);
    window.location.replace = "bytebazaar/";
  };

  return (
    <div className="z-[100] fixed inset-0 bg-Purple bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-200 p-12 px-16 rounded-lg shadow-lg border border-Purple">
        <h2 className="text-2xl mb-4 text-center text-extrabold text-black">
          Confirm Logout
        </h2>
        <p className="text-lg mb-4 text-Purple">
          Are you sure you want to logout?
        </p>
        <div className="flex justify-center">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-Purple hover:bg-Purple-900 text-white font-bold py-2 px-4 rounded"
            onClick={onConfirm}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
