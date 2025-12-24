import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import App from './App.jsx'
import { router } from './router/router.jsx';
import { ToastContainer } from 'react-toastify';
import AuthProvaider from './Contex/AuthProvaider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvaider>
  <RouterProvider router={router}></RouterProvider>
     <ToastContainer />
    </AuthProvaider>
  </StrictMode>,
)
