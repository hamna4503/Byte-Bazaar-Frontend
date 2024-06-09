import React, { useCallback, useContext, useEffect, useState } from "react";
import { OrderContext } from "./OrderContext";
import ShippingInfo from "../../pages/Checkout/ShippingInfo";
import CartState from "../CartState";
import { CartContext } from "../CartContext";
import axios from "axios";

function OrderState({ children }) {
  let { OrderTotal } = useContext(CartContext);
  const [OrderDetails, setOrderDetails] = useState(() => {
    let orderDetails = JSON.parse(sessionStorage.getItem("OrderDetails"));
    return orderDetails
      ? orderDetails
      : {
          shippingInfo: {},
          orderTotal: OrderTotal,
          paymentMethod: "online",
        };
  });
  const saveOrderDetails = () => {
    sessionStorage.setItem("OrderDetails", JSON.stringify(OrderDetails));
  };
  const processOrder = async () => {
    // let url = "";
    let res = await axios.post("http://localhost:6005/order/", OrderDetails, {
      withCredentials: true,
    });
    return res;
  };
  useEffect(() => {
    saveOrderDetails();
  }, [OrderDetails]);

  const checkoutOrder = () => {};
  return (
    <OrderContext.Provider
      value={{
        OrderDetails,
        setOrderDetails,
        saveOrderDetails,
        processOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export default OrderState;
