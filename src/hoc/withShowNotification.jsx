import { toast } from 'react-toastify';

const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    };
export const showToast =() => {
    console.log("click")
    toast('hello world');

}    

const withShowNotification = (Component) => (props) => {
    

    return <Component {...props} />;
};





export default withShowNotification;