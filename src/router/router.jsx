import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepages from "../Pages/Homepages";
import Plants from "../Pages/Plants";
import Myprofile from "../Pages/Myprofile";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";

export const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        index:true,
        element:<Homepages></Homepages>
      },
      {
        path:'/plants',
        element:<Plants></Plants>
      },
      {
        path:'/profile',
        element:<Myprofile></Myprofile>,
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
      {
        path:'/signin',
        element:<Signin></Signin>
      },
    ]
  },
])