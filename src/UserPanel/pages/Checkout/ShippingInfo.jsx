import { useState } from "react";
export default function ShippingInfo() {
  const [orderData, setorderData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    postalCode: "",
  });
  const handleChange = (e) => {
    setorderData({ ...orderData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="w-full mx-auto px-10 py-2">
        <h2 className="text-2xl text-center text-black mb-8">
          Shipping Information
        </h2>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full group">
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="off"
              required
              value={orderData.name}
              onChange={handleChange}
              //   onChange={handleChange}
              // value={orderData.address}
            />
          </div>
          <div className="relative z-0 w-full group">
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Email Address"
              autoComplete="off"
              required
              value={orderData.email}
              onChange={handleChange}

              //   onChange={handleChange}
              // value={orderData.address}
            />
          </div>
        </div>

        <div className="relative z-0 w-full my-8 group">
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            name="address"
            type="text"
            placeholder="Address"
            autoComplete="off"
            required
            value={orderData.address}
            onChange={handleChange}
            //   onChange={handleChange}
            // value={orderData.address}
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full group">
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="contact"
              type="tel"
              placeholder="Contact"
              autoComplete="off"
              value={orderData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative z-0 w-full group">
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="postalCode"
              type="text"
              placeholder="Postal Code"
              autoComplete="off"
              required
              value={orderData.postalCode}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}
