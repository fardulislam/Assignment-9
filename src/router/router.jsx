
import MainLayout from "../Layout/MainLayout";
import Homepages from "../Pages/Homepages";
import Plants from "../Pages/Plants";
import Myprofile from "../Pages/Myprofile";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import Priviteroute from "../Priviterouter/Priviteroute";
import PlantsDetails from "../Pages/PlantsDetails";
import { createBrowserRouter } from "react-router";



const plantsdata = async()=>{
  const res = await fetch('/Plants.json');
  return res.json();
}

export const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    loader:plantsdata,
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
        path:'/plants/:plantId',
        element:<PlantsDetails></PlantsDetails>
      },
      {
        path:'/profile',
        element:<Priviteroute>
          <Myprofile></Myprofile>
        </Priviteroute>,
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