import { toast } from "react-toastify";

export const SuccessResponseToast = (response) => {
  toast.success(response, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    draggable: false,
    closeOnClick: false,
    theme: "colored",
    transition: toast.flip,
  });
  return response.data;
};
