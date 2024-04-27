import axios from "axios";
import { toast } from "react-toastify";

export const AddProducts = async (productData) => {
  try {
    const response = await axios.post(
      "http://localhost:6005/api/add-prods",
      productData
    );

    if (response.status === 201) {
      console.log("Product created successfully:", response.data.message);
      window.location.reload();
      toast.success("Product Created Successfully.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        draggable: false,
        closeOnClick: false,
        theme: "colored",
        transition: toast.flip,
      });
      return response.data;
    } else {
      throw new Error("Failed to create product.");
    }
  } catch (error) {
    toast.error(`${error.response.data.message}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      draggable: false,
      closeOnClick: false,
      theme: "colored",
      transition: toast.flip,
    });
    console.error("Error creating product:", error);
    throw error;
  }
};
