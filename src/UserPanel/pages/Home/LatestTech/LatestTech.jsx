import React from "react";

export default function LatestTech() {
  return (
    <section className="overflow-hidden bg-[url('https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80')] bg-cover bg-top bg-no-repeat">
      <div className="p-8 bg-black/25 md:p-12 lg:px-16 lg:py-24">
        <div className="flex flex-col items-center text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Latest Electronic Items
          </h2>

          <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Discover the latest electronic items that revolutionize your
            lifestyle. From cutting-edge gadgets to innovative devices, explore
            a world of technology designed to enhance every aspect of your day.
          </p>

          <div className="mt-4 sm:mt-8">
            <a
              href="#"
              className="inline-block px-12 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Yours Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
