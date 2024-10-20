import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <button
        className={`px-3 py-1 rounded-md ${
          currentPage === 1
            ? "bg-gray-200 text-gray-700 cursor-not-allowed"
            : "bg-Purple text-white"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className="sr-only">Prev Page</span>
        <BsArrowLeft className="w-4 h-6 text-white" />
      </button>
      <div>
        <label htmlFor="PaginationPage" className="sr-only">
          Page
        </label>
        <div className="relative w-12 h-8">
          <div className="relative flex items-center justify-center w-full h-full text-xs font-medium bg-gray-200 border border-gray-100 rounded text-Purple">
            {currentPage}
          </div>
        </div>
      </div>
      <button
        className={`px-3 py-1 rounded-md ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-700 cursor-not-allowed"
            : "bg-Purple text-white"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="sr-only">Next Page</span>
        <BsArrowRight className="w-4 h-6 text-white" />
      </button>
    </div>
  );
};

export default Pagination;


