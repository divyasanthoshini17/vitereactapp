import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'          
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './storertk.js'
import App from './App.jsx'
import React from 'react'  
import ProdDetails from './products_details_rtk.jsx' 


const router= createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"/products_details_rtk/:id",
                element:<ProdDetails></ProdDetails>
            },
        ]      
    }
])
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
         <RouterProvider router={router} />
    </Provider>

)
