import { toast } from "react-toastify";

const toastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};
export const showToast = (message) => {
  console.log("click");
  toast(message), toastOptions;
};

const withShowNotification = (Component) => (props) => {
  return <Component {...props} />;
};

export default withShowNotification;
