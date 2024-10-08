import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import AvailableFoods from './Component/AvailableFoods/AvailableFoods';
import LogIn from './Component/LogIn/LogIn';
import SignUp from './Component/SignUp/SignUp';
import AuthProvider from './AuthProvider/AuthProvider';
import AddFood from './Component/AddFood/AddFood';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ViewDetail from './Component/ViewDetail/ViewDetail';
import MyFoodRequest from './Component/MyFoodRequest/MyFoodRequest';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import ManageMyFood from './Component/ManageMyFood/ManageMyFood';
import Update from './Component/Update/Update';
import Error from './Error/Error';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <Root></Root>,
    children:[

      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/availableFoods",
        element:<AvailableFoods></AvailableFoods>
      },
      {
        path:"/addFood",
        element: <PrivateRoute>
                 <AddFood></AddFood>
                 </PrivateRoute>
        
      },
      {
        path:"/viewDetail/:id",
        element:<ViewDetail></ViewDetail>,
        loader:({params})=>fetch(`http://localhost:5014/food/${params.id}`)
      },
      {
        path:"myFoodRequest",
        element: <PrivateRoute>
                 <MyFoodRequest></MyFoodRequest>
                 </PrivateRoute>,
        

      },
      {
        path:"/manageMyFood",
        element:<PrivateRoute>
        <ManageMyFood></ManageMyFood>
        </PrivateRoute>,
        
      },
      {
        path:"/update/:id",
        element:<Update></Update>,
        // loader:({params})=>fetch(`http://localhost:5175/food/${params.id}`)
      },
      {
        path:"/logIn",
        element:<LogIn></LogIn>,
        loader:()=>fetch('http://localhost:5014/user')
      },
      {
        path:"/signUp",
        element:<SignUp></SignUp>
      }
    ]
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
    </QueryClientProvider>
   
  </React.StrictMode>,
)
