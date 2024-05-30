import React from "react";

export default function Newsletter() {
  return (
    <div className="my-14 slider-container">
      <div className="flex flex-col items-center gap-8 mb-6 text-center">
        <h1 className="text-5xl font-bold text-black">Our Newsletter</h1>
        <h3 className="mb-4 text-xl text-black w-[50%]">
          Subscribe to our Newsletter to stay updated with our latest news,
          articles, and resources. Get exclusive insights, tips, and early
          access to new features, sent to your inbox weekly!
        </h3>
      </div>
      <div className="max-w-xl mx-auto mt-8">
        <form action="#" className="flex-col sm:flex sm:gap-4">
          <div className="sm:flex-1">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 text-black transition bg-white border border-transparent rounded-md shadow-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-Purple"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-full gap-2 px-5 py-3 mt-8 text-white transition rounded-md group bg-Purple focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
