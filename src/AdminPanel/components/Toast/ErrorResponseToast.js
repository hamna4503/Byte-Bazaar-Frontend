import { toast } from "react-toastify";

export const ErrorResponseToast = (error) => {
  toast.error(`${error}`, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    draggable: false,
    closeOnClick: false,
    theme: "colored",
    transition: toast.flip,
  });
  return error;
};
