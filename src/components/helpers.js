import { toast } from "react-toastify";
export const showSuccessMessage = (message) => {
  toast.success(message, { status: "success" });
};

export const showErrorMessage = (message) => {
  toast.error(message, { status: "error" });
};

export const showSearchMessage = (message) => {
  toast.info(message, { status: "info" });
};
