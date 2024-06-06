import React from "react";
import Image2 from "../../../assets/images/home/image3.jpg";

export default function Featured() {
  return (
    <section>
      <div className="px-4 py-6 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="High-quality electronics"
                src={Image2}
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-Purple">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-Purple"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Discover the Best in Electronics
              </h2>

              <p className="mt-4 text-white">
                At ByteBazaar, we offer a curated selection of high-quality
                electronics to enhance your lifestyle. From the latest gadgets
                to essential accessories, our collection is designed to meet all
                your tech needs. Whether you're looking for cutting-edge
                headphones, powerful CPUs, or stylish smartwatches, we've got
                you covered.
              </p>

              <a
                href="/bytebazaar/shop"
                className="inline-block px-12 py-3 mt-8 text-sm font-medium bg-gray-300 border border-gray-300 rounded text-Purple hover:bg-transparent hover:text-gray-300 focus:outline-none focus:ring active:text-white"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
