import { AlertContext } from './AlertContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AlertProvider = ({ children }) => {
  return (
    <AlertContext.Provider value={{ toast }}>
      { children }
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AlertContext.Provider>
  )
}
