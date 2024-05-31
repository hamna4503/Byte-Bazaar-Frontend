import React from "react";

export default function Newsletter() {
  return (
    <div className="mb-8 mt-14 slider-container">
      <div className="flex flex-col gap-6 py-10 mb-6 text-center bg-Purple">
        <h1 className="text-5xl font-bold text-white">Our Newsletter</h1>
        <h3 className="text-3xl text-white">
          Stay Updated With the Latest Trends!
        </h3>
      </div>

      <div className="max-w-2xl p-6 mx-auto">
        <form action="#" className="flex flex-col items-center gap-6">
          <h3 className="mb-4 text-xl text-center text-gray-800">
            Subscribe to our Newsletter to stay updated with our latest news,
            articles, and resources. Get exclusive insights, tips, and early
            access to new features, sent to your inbox weekly!
          </h3>
          <div className="w-full">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 text-black transition bg-white border rounded-md shadow-sm border-Purple focus:border-Purple focus:outline-none focus:ring-2 focus:ring-gray-300"
              autoComplete="off"
              required
            />
          </div>
          <button
            type="submit"
            className="w-[200px] px-6 py-3 text-lg font-semibold text-white transition rounded-md bg-Purple hover:bg-Purple-dark focus:outline-none focus:ring-2 focus:ring-Purple focus:ring-opacity-50"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
