import React from "react";
import Image1 from "../../../assets/images/home/image1.jpg";

export default function LatestTech() {
  return (
    <section
      className="overflow-hidden bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${Image1})` }}
    >
      <div className="p-8 bg-black/25 md:p-12 lg:px-16 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Advanced Electronics
          </h2>

          <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Get the latest electronic items at ByteBazaar, that revolutionize
            your lifestyle and computing.
          </p>

          <div className="mt-4 sm:mt-8">
            <a
              href="/bytebazaar/shop"
              className="inline-block px-12 py-3 text-lg font-medium text-white transition bg-gray-600 rounded-lg hover:bg-Purple focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Yours Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
