import { SuccessResponseToast } from "../../components/Toast/SuccessResponseToast";
import { NoSuccessResponseToast } from "../../components/Toast/NoSuccessResponseToast";
import { ErrorResponseToast } from "../../components/Toast/ErrorResponseToast";
import axios from "axios";

export const EditProducts = async (_id, productData) => {
  try {
    console.log(productData.id);
    const response = await axios.put(`http://localhost:6005/api/edit-prods`, {
      _id,
      ...productData,
    });

    if (response.status == 201 || response.status == 200) {
      SuccessResponseToast(response.data.message);
      window.location.reload();
      return;
    } else {
      NoSuccessResponseToast(response.data.message);
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    const er = ErrorResponseToast(errorMessage);
    throw er;
  }
};
