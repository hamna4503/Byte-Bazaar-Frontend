import React from "react";
import BLogo from "../../assets/images/navbar/bytelogo.png";
import Signup from "../../assets/images/signup/signup.png";

export default function SignUp(){
    return (
      <>
        <div className="h-full bg-Purple">
          {/* Container */}
          <div className="mx-auto">
            <div className="flex justify-center px-6 py-12">
              {/* Row */}
              <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                {/* Col */}
                <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
                  <img src={Signup} />
                </div>

                {/* Col */}
                <div className="w-full lg:w-7/12 p-8 rounded-lg lg:rounded-l-none bg-white">
                  <div className="font-mono flex items-center justify-center mb-6">
                    <img
                      width={40}
                      height={40}
                      className="rounded-full mr-1 lg:block hidden"
                      src={BLogo}
                      alt="avatar-img"
                    />
                    <span className="text-sm font-bold text-Purple lg:block hidden">
                      ByteBazaar
                    </span>
                  </div>

                  <h3 className="py-4 text-2xl text-center text-black">
                    Create an Account!
                  </h3>

                  <form className="px-8 pt-6 pb-2 mb-4 rounded">
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

                    <div className="flex justify-center gap-8 align-center py-4 flex-wrap mb-4">
                      <button
                        className="w-70 text-sm px-14 py-1.5 font text-white shadow-sm rounded-lg focus:outline-none focus:shadow-outline bg-Purple"
                        type="button"
                      >
                        Register
                      </button>

                      <span className="font-bold text-black">OR</span>

                      <button className="w-70 max-w-xs text-sm font text-white shadow-sm rounded-lg px-3 py-1.5 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline bg-Purple">
                        {/* <div className="bg-white p-2 rounded-full"> */}
                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                          <path
                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                            fill="#4285f4"
                          />
                          <path
                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                            fill="#34a853"
                          />
                          <path
                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                            fill="#fbbc04"
                          />
                          <path
                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                            fill="#ea4335"
                          />
                        </svg>
                        {/* </div> */}
                        <span className="ml-4">Sign Up with Google</span>
                      </button>
                      {/* </div> */}
                    </div>

                    <hr className="mb-6 border-t" />
                    <div className="text-center">
                      <a
                        className="inline-block text-sm align-baseline hover:text-blue-800 text-Purple"
                        href="#"
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a
                        className="inline-block text-sm text-Purple align-baseline hover:text-blue-800"
                        href="./index.html"
                      >
                        Already have an account? Login!
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};