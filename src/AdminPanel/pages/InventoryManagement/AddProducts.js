import { SuccessResponseToast } from "../../components/Toast/SuccessResponseToast";
import { NoSuccessResponseToast } from "../../components/Toast/NoSuccessResponseToast";
import { ErrorResponseToast } from "../../components/Toast/ErrorResponseToast";
import axios from "axios";
export const AddProducts = async (productData) => {
  try {
    const response = await axios.post(
      "http://localhost:6005/api/add-prods",
      productData
    );
    if (response.status == 201 || response.status == 200) {
      SuccessResponseToast(response.data.message);
      window.location.reload();
      return;
    }
    else{
      NoSuccessResponseToast(response.data.message);
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    const er = ErrorResponseToast(errorMessage);
    throw er;
  }
};
