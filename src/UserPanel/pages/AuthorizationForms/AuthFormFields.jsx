import React from "react";

export default function AuthFormFields({isLoginForm}){
    return (
      <>
        {!isLoginForm && (
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              {/* <label
                          className="block mb-2 text-sm  text-black"
                          htmlFor="firstName"
                        >
                          First Name
                        </label> */}
              <input
                className="mb-4 w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="First Name"
                required
              />
            </div>
            <div className="md:ml-2">
              {/* <label
                          className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                          htmlFor="lastName"
                        >
                          Last Name
                        </label> */}
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
        )}

        <div className="mb-4">
          {/* <label
                        className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="email"
                      >
                        Email
                      </label> */}
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>

        {isLoginForm && (
          <div className="my-6 md:mr-2 md:mb-0">
            {/* <label
                          className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                          htmlFor="password"
                        >
                          Password
                        </label> */}

            <input
              className="w-full px-3 py-2 mb-6 text-sm leading-tight text-gray-700 dark:text-black border border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
        )}

        {!isLoginForm && (
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              {/* <label
                          className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                          htmlFor="password"
                        >
                          Password
                        </label> */}

              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="md:ml-2">
              {/* <label
                          className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                          htmlFor="c_password"
                        >
                          Confirm Password
                        </label> */}
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="c_password"
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>
          </div>
        )}
      </>
    );
}