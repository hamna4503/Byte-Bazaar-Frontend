// import React from "react";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   return (
//     <div className="flex items-center justify-center gap-4 mt-4">
//       <button
//         className={`px-3 py-1 rounded-md ${
//           currentPage === 1
//             ? "bg-gray-200 text-gray-700 cursor-not-allowed"
//             : "bg-Purple text-white"
//         }`}
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//       >
//         <span className="sr-only">Prev Page</span>
//         <BsArrowLeft className="w-4 h-6 text-white" />
//       </button>
//       <div>
//         <label htmlFor="PaginationPage" className="sr-only">
//           Page
//         </label>
//         <div className="relative w-12 h-8">
//           <div className="relative flex items-center justify-center w-full h-full text-xs font-medium bg-gray-200 border border-gray-100 rounded text-Purple">
//             {currentPage}
//           </div>
//         </div>
//       </div>
//       <button
//         className={`px-3 py-1 rounded-md ${
//           currentPage === totalPages
//             ? "bg-gray-200 text-gray-700 cursor-not-allowed"
//             : "bg-Purple text-white"
//         }`}
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//       >
//         <span className="sr-only">Next Page</span>
//         <BsArrowRight className="w-4 h-6 text-white" />
//       </button>
//     </div>
//   );
// };

// export default Pagination;

// import React, { useState } from "react";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const [inputPage, setInputPage] = useState(""); // Temporary state for user input

//   const handlePageInput = (e) => {
//     const page = e.target.value;
//     if (/^\d*$/.test(page)) {
//       // Only allow numeric input
//       setInputPage(page);
//     }
//   };

//   const handleInputBlur = () => {
//     if (inputPage) {
//       const pageNumber = Math.max(1, Math.min(totalPages, Number(inputPage))); // Clamp input to valid range
//       onPageChange(pageNumber); // Navigate to valid page
//       setInputPage(""); // Reset temporary input
//     }
//   };

//   const displayValue = inputPage || currentPage;
//   return (
//     <div className="flex items-center justify-center gap-4 mt-4">
//       {/* First Page Button */}
//       <button
//         className={`px-3 py-1 rounded-md ${
//           currentPage === 1
//             ? "bg-gray-200 text-gray-700 cursor-not-allowed"
//             : "bg-Purple text-white"
//         }`}
//         onClick={() => onPageChange(1)}
//         disabled={currentPage === 1}
//       >
//         1
//       </button>

//       {/* Previous Page Button */}
//       <button
//         className={`px-3 py-1 rounded-md ${
//           currentPage === 1
//             ? "bg-gray-200 text-gray-700 cursor-not-allowed"
//             : "bg-Purple text-white"
//         }`}
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//       >
//         <BsArrowLeft className="w-4 h-6 text-white" />
//       </button>

//       <div className="relative w-20 h-10">
//         <label htmlFor="PaginationPage" className="sr-only">
//           Current Page
//         </label>
//         <input
//           type="number"
//           id="PaginationPage"
//           min="1"
//           max={totalPages}
//           value={inputPage || currentPage} // Show current page unless editing
//           onChange={handlePageInput}
//           onBlur={handleInputBlur}
//           placeholder={`1-${totalPages}`} // Clear placeholder
//           className="w-full h-full text-sm font-medium text-center placeholder-gray-400 transition-all duration-200 bg-gray-100 border rounded-md text-Purple focus:outline-none focus:ring-2 focus:ring-Purple focus:border-Purple"
//         />
//         {inputPage < 1 || inputPage > totalPages ? (
//           <span className="absolute mt-1 text-xs text-red-500 top-full">
//             Enter a valid page (1-{totalPages})
//           </span>
//         ) : null}
//       </div>

//       {/* Next Page Button */}
//       <button
//         className={`px-3 py-1 rounded-md ${
//           currentPage === totalPages
//             ? "bg-gray-200 text-gray-700 cursor-not-allowed"
//             : "bg-Purple text-white"
//         }`}
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//       >
//         <BsArrowRight className="w-4 h-6 text-white" />
//       </button>

//       {/* Last Page Button */}
//       <button
//         className={`px-3 py-1 rounded-md ${
//           currentPage === totalPages
//             ? "bg-gray-200 text-gray-700 cursor-not-allowed"
//             : "bg-Purple text-white"
//         }`}
//         onClick={() => onPageChange(totalPages)}
//         disabled={currentPage === totalPages}
//       >
//         {totalPages}
//       </button>
//     </div>
//   );
// };

// export default Pagination;

import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      {/* First Page Button */}
      <button
        className={`px-3 py-1 rounded-md ${
          currentPage === 1
            ? "bg-gray-200 text-gray-700 cursor-not-allowed"
            : "bg-Purple text-white"
        }`}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        1
      </button>

      {/* Previous Page Button */}
      <button
        className={`px-3 py-1 rounded-md ${
          currentPage === 1
            ? "bg-gray-200 text-gray-700 cursor-not-allowed"
            : "bg-Purple text-white"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <BsArrowLeft className="w-4 h-6 text-white" />
      </button>

      {/* Display page Number */}
      <div className="relative w-12 h-8">
        <label htmlFor="PaginationPage" className="sr-only">
          Current Page
        </label>
        <div className="relative flex items-center justify-center w-full h-full text-xs font-medium bg-gray-200 border border-gray-100 rounded text-Purple">
          {currentPage}
        </div>
      </div>

      {/* Next Page Button */}
      <button
        className={`px-3 py-1 rounded-md ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-700 cursor-not-allowed"
            : "bg-Purple text-white"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <BsArrowRight className="w-4 h-6 text-white" />
      </button>

      {/* Last Page Button */}
      <button
        className={`px-3 py-1 rounded-md ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-700 cursor-not-allowed"
            : "bg-Purple text-white"
        }`}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        {totalPages}
      </button>
    </div>
  );
};

export default Pagination;
