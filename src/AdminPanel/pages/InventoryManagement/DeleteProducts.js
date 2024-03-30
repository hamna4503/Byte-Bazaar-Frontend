import { toast } from "react-toastify";

export const DeleteProducts = async (_id) => {
  try {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmed) {
      return;
    }

    const response = await fetch("http://localhost:6005/api/delete-prods", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });

    if (response.status !== 200) {
      throw new Error("Delete request failed");
    }

    window.location.reload();
    toast.success("Product deleted successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      draggable: false,
      closeOnClick: false,
      theme: "colored",
      transition: toast.flip,
    });
  } catch (error) {
    toast.error(`Error deleting product: ${error}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      draggable: false,
      closeOnClick: false,
      theme: "colored",
      transition: toast.flip,
    });
    console.error("Error deleting product:", error);
  }
};
