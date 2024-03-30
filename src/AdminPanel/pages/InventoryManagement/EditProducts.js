import axios from "axios";
import { toast } from "react-toastify";

export const EditProducts = async (productData, _id) => {
    console.log("In Edit", _id);
  try {
    const response = await axios.put(`http://localhost:6005/api/edit-prods`, {
      _id,
      ...productData,
    });

    if (response.status === 200) {
      console.log("Product edited successfully:", response.data);
      window.location.reload();
      toast.success("Product edited successfully", {
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
      throw new Error("Failed to edit product.");
    }
  } catch (error) {
    toast.error(`Error editing product: ${error.message}`, {
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
