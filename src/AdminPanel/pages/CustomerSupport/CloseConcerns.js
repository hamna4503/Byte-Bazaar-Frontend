import { toast } from "react-toastify";

export const CloseConcerns = async (_id) => {
  try {
    const confirmed = window.confirm(
      "Are you sure you want to close this concern?"
    );
    if (!confirmed) {
      return;
    }

    const response = await fetch("http://localhost:6005/api/close-concerns", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });

    if (!response.ok) {
      throw new Error("Close Concern Request Failed");
    }

    window.location.reload();
    toast.success("Concern Closed Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      draggable: false,
      closeOnClick: false,
      theme: "colored",
      transition: toast.flip,
    });
  } catch (error) {
    toast.error(`Error Closing Concern ${error}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      draggable: false,
      closeOnClick: false,
      theme: "colored",
      transition: toast.flip,
    });
    console.error("Error Closing Concern:", error);
  }
};
