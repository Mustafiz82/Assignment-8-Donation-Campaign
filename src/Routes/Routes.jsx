import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import MainLayout from "../MainLayout/MainLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
            loader: () => fetch('public/DonationData.json')
            
        },
        {
            path:"/Donation",
            element: <Donation></Donation>
        },
        {
            path:"/Statistics",
            element: <Statistics></Statistics>
        },
        {
            path:"/Donation/detail",
            element: <Donation></Donation>
        },
      ]
      

      
    },
  ]);