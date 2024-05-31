import React from "react";
import headphone from "../../../assets/images/home/headphone2.jpg";
import cpu from "../../../assets/images/home/CPU.jpg";
import controller from "../../../assets/images/home/controller.jpg";

const items = [
  {
    src: cpu,
    alt: "CPU",
    title: "Gaming Setups",
    large: false,
  },
  {
    src: controller,
    alt: "Controller",
    title: "Electronic Gadgets",
    large: false,
  },
  {
    src: headphone,
    alt: "Headphones",
    title: "Trendy HeadPhones",
    large: true,
  },
];

export default function Landing() {
  return (
    <section>
      <ul className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-3">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              item.large
                ? "lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1"
                : ""
            }
          >
            <a href="/bytebazaar/shop" className="relative block group">
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover w-full transition duration-500 aspect-square lazyload"
                loading="lazy"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end gap-3 p-6">
                <h3 className="text-3xl font-medium text-white">
                  {item.title}
                </h3>
                <span className="mt-1.5 inline-block bg-Purple border border-gray-600 rounded-lg px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
