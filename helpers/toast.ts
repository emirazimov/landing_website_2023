import toast, { ToastPosition } from 'react-hot-toast';

const style = {
    borderRadius: '10px',
    background: 'rgba(10, 10, 11, 0.9)',
    color: '#fff',
    marginTop: 80,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    padding: 20,
    paddingRight: 40,
    paddingLeft: 40,
};

type displayToastType = {
    message: string,
    type?: 'success' | 'error' | '',
    duration?: number,
    position?: ToastPosition,
    id: string
};

export const displayToast = ({ message, type = '', duration = 4000, position = 'top-center', id = ''}: displayToastType) => {
    const options = { duration, style, position, id };

    if (type) {
        toast[type](message, options);
    } else {
        toast(message, options);
    }
};
