import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../../assets/images/home/image1.jpg";
import Image2 from "../../../assets/images/home/image2.jpg";
import Image3 from "../../../assets/images/home/image3.jpg";
//import Image from "../../designLayouts/Image";
//import ShopNow from "../../designLayouts/buttons/ShopNow";

export default function Sale() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 py-20 md:flex-row lg:gap-10">
      <div className="bg-Purple w-full md:w-2/3 lg:w-1/2 h-[800px] flex flex-col justify-center items-center text-black">
        <div className="w-full mb-4 aspect-w-4 aspect-h-3">
          <img className="object-cover w-full h-full" src={Image1} />
        </div>
        <div className="w-full mx-4 text-left h-140 md:h-200 lg:h-260 ">
          <div className="mx-8">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-5xl">
              Imprimante sales
            </h2>
            <p className="mb-6 text-lg md:text-xl lg:text-2xl">
              Up to{" "}
              <span className="text-4xl font-bold md:text-5xl lg:text-5xl">
                30%
              </span>{" "}
              sales for all impriamnte{" "}
            </p>
            <div className="mb-8 ">{/* <ShopNow /> */}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-auto gap-4 md:w-2/3 lg:w-1/2 lg:gap-10">
        <div className="w-full h-1/2">
          {/* <Link to="/shop"> */}
          <img className="object-cover w-full h-full" src={Image1} />
          {/* </Link> */}
        </div>
        <div className="w-full h-1/2">
          {/* <Link to="/shop"> */}
          <img className="object-cover w-full h-full" src={Image2} />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
