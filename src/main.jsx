import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import App from './App'
import { AlertProvider } from './context/alertContext/AlertProvider';
import { AuthProvider } from './context/authContext/AuthProvider';

import './styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AlertProvider>
          <App />
        </AlertProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
