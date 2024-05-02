import { SuccessResponseToast } from "../../components/Toast/SuccessResponseToast";
import { NoSuccessResponseToast } from "../../components/Toast/NoSuccessResponseToast";
import { ErrorResponseToast } from "../../components/Toast/ErrorResponseToast";

export const DeleteProducts = async (_id, id) => {
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
      body: JSON.stringify({ _id, id }),
    });

    const responseData = await response.json();

    if (response.ok) {
      SuccessResponseToast(responseData.message);
      window.location.reload();
      return;
    } else {
      NoSuccessResponseToast(responseData.message);
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    const er = ErrorResponseToast(errorMessage);
    throw er;
  }
};
