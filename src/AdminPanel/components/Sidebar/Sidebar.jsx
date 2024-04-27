import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsDatabaseAdd } from "react-icons/bs";
import BrandSection from "../../../UserPanel/components/Navbar/BrandSection";

export default function Sidebar({ toggleSidebar }) {
  const location = useLocation();

  const handleClick = () => {
    toggleSidebar(0, 0);
  };

  const isManageInventoryPage =
    location.pathname === "/bytebazaar/admin/manage-inventory";

  return (
    <>
      <div className="fixed top-0 left-0 z-10 flex flex-col w-12 h-full text-white transition-all duration-300 border-none hover:w-64 md:w-64 bg-Purple sidebar mr-[20px]">
        <div className="flex flex-col justify-between flex-grow overflow-x-hidden overflow-y-auto">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="hidden px-5 py-10 md:block">
              <div className="flex flex-row items-center h-8">
                <BrandSection isAdmin={true} />
              </div>
            </li>
            {/* MAIN */}
            <li className="hidden px-5 md:block">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                  Main
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/bytebazaar/admin"
                className="relative flex flex-row items-center pr-6 border-l-4 border-transparent h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 hover:border-blue-500 dark:hover:border-gray-800"
              >
                <span className="inline-flex items-center justify-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </span>
                <span className="ml-2 tracking-wide truncate text-md">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/bytebazaar/admin/manage-orders"
                className="relative flex flex-row items-center pr-6 border-l-4 border-transparent h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 hover:border-blue-500 dark:hover:border-gray-800"
              >
                <span className="inline-flex items-center justify-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </span>
                <span className="ml-2 tracking-wide truncate text-md">
                  Manage Orders
                </span>
              </Link>
            </li>
            {/* INVENTORY MANAGEMENT */}
            <li className="hidden px-5 pt-2 md:block">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                  Manage Inventory
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/bytebazaar/admin/manage-inventory"
                className="relative flex flex-row items-center pr-6 border-l-4 border-transparent h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 hover:border-blue-500 dark:hover:border-gray-800"
              >
                <span className="inline-flex items-center justify-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </span>
                <span className="ml-2 tracking-wide truncate text-md">
                  Update Products
                </span>
              </Link>
            </li>
            {isManageInventoryPage && (
              <li>
                <div
                  className="relative flex flex-row items-center pr-6 border-l-4 border-transparent cursor-pointer h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 hover:border-blue-500 dark:hover:border-gray-800"
                  onClick={handleClick}
                >
                  <div className="inline-flex items-center justify-center ml-4">
                    <BsDatabaseAdd />
                  </div>
                  <span className="ml-2 tracking-wide truncate text-md add-prods">
                    Add Products
                  </span>
                </div>
              </li>
            )}
            {/* USER MANAGEMENT */}
            <li className="hidden px-5 md:block">
              <div className="flex flex-row items-center h-8 mt-2">
                <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                  Manage Users
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/bytebazaar/admin/user-profiles"
                className="relative flex flex-row items-center pr-6 border-l-4 border-transparent h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 hover:border-blue-500 dark:hover:border-gray-800"
              >
                <span className="inline-flex items-center justify-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="ml-2 tracking-wide truncate text-md">
                  User Profiles
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/bytebazaar/admin/customer-support"
                className="relative flex flex-row items-center pr-6 border-l-4 border-transparent h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 hover:border-blue-500 dark:hover:border-gray-800"
              >
                <span className="inline-flex items-center justify-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </span>
                <span className="ml-2 tracking-wide truncate text-md">
                  Customer Support
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
