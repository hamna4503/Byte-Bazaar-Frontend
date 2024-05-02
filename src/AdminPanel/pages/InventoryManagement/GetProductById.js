import { SuccessResponseToast } from "../../components/Toast/SuccessResponseToast";
import { ErrorResponseToast } from "../../components/Toast/ErrorResponseToast";
import { NoSuccessResponseToast } from "../../components/Toast/NoSuccessResponseToast";

export const GetProductById = async (_id) => {
  try {
    const response = await fetch(`http://localhost:6005/api/get-prod-by-id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: _id }),
    });

    const responseData = await response.json();
    return responseData;
    // if (!response.ok) {
    //   NoSuccessResponseToast(response.data.message);
    // }
    // SuccessResponseToast(response.data.message);
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    const er = ErrorResponseToast(errorMessage);
    throw er;
  }
};
