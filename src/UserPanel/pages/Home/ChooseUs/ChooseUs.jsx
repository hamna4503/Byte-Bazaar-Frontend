import {
  FaWallet,
  FaThumbsUp,
  FaShoppingBag,
  FaTruckMoving,
} from "react-icons/fa";

export default function ChooseUs() {
  return (
    <div className="flex flex-col flex-wrap gap-6 px-4 py-16 bg-Purple md:px-10 lg:px-20">
      <div className="flex flex-col gap-6 mb-6 text-center">
        <h1 className="text-5xl font-bold text-white">Why Choose Us?</h1>
        <h3 className="text-3xl text-white">
          A Brand Name You Can Trust and Rely On
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex items-center flex-col gap-4 text-center w-[200px] border-Purple px-4 py-12 border rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-110">
          <FaWallet size={32} className="w-20 mb-2 text-gray-300" />
          <h2 className="text-lg text-white">Affordable Price Guarantee</h2>
        </div>
        <div className="flex items-center flex-col gap-4 text-center w-[200px] border-Purple px-4 py-12 border rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-110">
          <FaThumbsUp size={32} className="mb-2 text-gray-300" />
          <h2 className="text-lg text-white">Highly Qualified Service</h2>
        </div>
        <div className="flex items-center flex-col gap-4 text-center w-[200px] border-Purple px-4 py-12 border rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-110">
          <FaShoppingBag size={32} className="mb-2 text-gray-300" />
          <h2 className="text-lg text-white">Wide Variety of Products</h2>
        </div>
        <div className="flex items-center flex-col gap-4 text-center w-[200px] border-Purple px-4 py-12 border rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-110">
          <FaTruckMoving size={32} className="mb-2 text-gray-300" />
          <h2 className="text-lg text-white">Reliable Product Delivery</h2>
        </div>
      </div>
    </div>
  );
}