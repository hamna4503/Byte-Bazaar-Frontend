import axios from "axios";
import { toast } from "react-toastify";

export const EditProducts = async (_id, prodId, productData) => {
  console.log("In Edit _id", _id);
  console.log("ID", prodId);
  try {
    const response = await axios.put(`http://localhost:6005/api/edit-prods`, {
      _id,
      prodId,
      ...productData,
    });

    if (response.status === 200) {
      console.log("Product edited successfully");
      window.location.reload();
      toast.success("Product Edited Successfully.", {
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
    console.error("Error editing product:", error);
    toast.error(`${error.response.data.message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      draggable: false,
      closeOnClick: false,
      theme: "colored",
      transition: toast.flip,
    });
    throw error;
  }
};
