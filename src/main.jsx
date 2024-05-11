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



const router = createBrowserRouter([
  {
    path: "/",
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
