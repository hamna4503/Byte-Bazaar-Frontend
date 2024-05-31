import React from "react";
import headphone from "../../../assets/images/home/headphone1.jpg";
import airpods from "../../../assets/images/home/airpods.jpg";

export default function ShopPreview() {
  return (
    <section>
      <div className="px-4 py-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-3">
          <img
            alt="Airpods"
            src={airpods}
            className="object-cover w-full h-40 sm:h-56 md:h-full lazyload"
            loading="lazy"
          />

          <div className="h-auto p-2 text-center bg-Purple md:p-12 lg:px-16 lg:py-24">
            <div className="max-w-xl mx-auto">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Explore the Latest in Electronic Gadgets
              </h2>

              <p className="hidden text-white/90 sm:mt-4 sm:block">
                Discover our top-notch collection of headphones, airpods, and
                electronic gadgets. From high-quality audio equipment to the
                latest in smart technology, we have everything you need to stay
                connected and entertained. Browse our selection of hard drives,
                smartwatches, motherboards, and more to find the perfect gadget
                for you.
              </p>

              <div className="mt-4 md:mt-8">
                <a
                  href="/bytebazaar/shop"
                  className="inline-block px-12 py-3 text-sm font-medium transition bg-white border border-white rounded text-Purple hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Explore Shop
                </a>
              </div>
            </div>
          </div>

          <img
            alt="Headphones"
            src={headphone}
            className="object-cover w-full h-40 sm:h-56 md:h-full lazyload"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
