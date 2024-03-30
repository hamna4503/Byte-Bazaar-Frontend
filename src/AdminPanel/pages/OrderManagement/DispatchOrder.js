import axios from "axios";
import { toast } from "react-toastify";

export const DispatchOrder = async ( _id) => {
  try {
    const response = await axios.put(`http://localhost:6005/api/dispatch-orders`, {
      _id,
    });

    if (response.status === 200) {
      console.log("Order Dispatched Successfully:", response.data);
      window.location.reload();
      toast.success("Order Dispatched Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        draggable: false,
        closeOnClick: false,
        theme: "colored",
        transition: toast.flip,
      });
      return response.data;
    } else {
      throw new Error("Failed to dispatch order.");
    }
  } catch (error) {
    toast.error(`Error dispatching order: ${error.message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      draggable: false,
      closeOnClick: false,
      theme: "colored",
      transition: toast.flip,
    });
    console.error("Error editing product:", error);
    throw error;
  }
};
