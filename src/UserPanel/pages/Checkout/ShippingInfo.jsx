import { useContext, useState } from "react";
import { OrderContext } from "../../contexts/Order/OrderContext";
export default function ShippingInfo() {
  let { OrderDetails, setOrderDetails } = useContext(OrderContext);
  const [orderData, setorderData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    postalCode: "",
  });
  const handleChange = (e) => {
    setorderData({ ...orderData, [e.target.name]: e.target.value });
    setOrderDetails({
      ...OrderDetails,
      shippingInfo: { ...orderData, [e.target.name]: e.target.value },
    });
    console.log(OrderDetails);
  };

  return (
    <>
      <div
        className="w-full mx-auto px-10 py-2"
        // onSubmit={(e) => console.log(e)}
      >
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
              minLength={3}
              maxLength={25}
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
              minLength={9}
              maxLength={40}
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
            minLength={10}
            max={100}
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full group">
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="contact"
              type="tel"
              placeholder="Phone Number (e.g: 03319354435)"
              autoComplete="off"
              value={orderData.contact}
              onChange={handleChange}
              required
              minLength={11}
              maxLength={11}
            />
          </div>
          <div className="relative z-0 w-full group">
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="postalCode"
              type="text"
              placeholder="Postal Code (e.g:01101)"
              autoComplete="off"
              required
              value={orderData.postalCode}
              onChange={handleChange}
              minLength={5}
              maxLength={5}
            />
          </div>
        </div>
      </div>
    </>
  );
}
