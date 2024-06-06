import {
  FaWallet,
  FaThumbsUp,
  FaShoppingBag,
  FaTruckMoving,
} from "react-icons/fa";

export default function ChooseUs() {
  const arr = [
    { name: "Affordable Price Guarantee", icon: FaWallet },
    { name: "Highly Qualified Service", icon: FaThumbsUp },
    { name: "Wide Variety of Products", icon: FaShoppingBag },
    { name: "Reliable Product Delivery", icon: FaTruckMoving },
  ];

  return (
    <div className="my-10 slider-container">
      <div className="flex flex-col gap-6 py-10 mb-10 text-center bg-Purple">
        <h1 className="text-5xl font-bold text-white">Why Choose Us?</h1>
        <h3 className="text-3xl text-white">
          A Brand Name You Can Trust and Rely On
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {arr.map((item) => (
          <div
            key={item.name}
            className="flex items-center flex-col gap-4 text-center w-[200px] border-white px-4 py-12 border rounded-3xl shadow-xl transform transition-transform duration-300 hover:scale-110 bg-Purple"
          >
            <item.icon size={32} className="w-20 mb-2 text-gray-200" />
            <h2 className="text-lg text-white">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
