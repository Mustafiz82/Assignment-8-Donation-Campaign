import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Donation from "../component/Donations/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import MainLayout from "../MainLayout/MainLayout";
import DonationDetail from "../Pages/Donation-detail/DonationDetail";
import DonationLIst from "../Pages/DonationList/DonationLIst";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
            loader: () => fetch('DonationData.json')
              
        },
        {
            path:"/Donation",
            element: <DonationLIst></DonationLIst>
        },
        {
            path:"/Statistics",
            element: <Statistics></Statistics>
        },
        {
            path:"/DonationDetail/:id",
            element: <DonationDetail></DonationDetail>,
            loader: ({params}) => fetch(`/DonationData.json`)
        },
      ]
      

      
    },
  ]);