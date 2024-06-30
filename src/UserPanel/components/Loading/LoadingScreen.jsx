import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const LoadingScreen = () => (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-transparent z-[100]">
    <div className="text-black">
      <BiLoaderCircle
        className="animate-spin text-Purple"
        size={48}
        color="purple"
      />
      <div className="mt-2">Loading...</div>
    </div>
  </div>
);

export default LoadingScreen;
