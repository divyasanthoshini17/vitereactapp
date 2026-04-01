import { StrictMode } from 'react'
import{Provider} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Counter from './Counter.jsx'
import Todolist from './Todolist.jsx'
import Recipe from './Recipe.jsx'
import Products from './Products.jsx'
import ProductDetails from './ProductDetails.jsx'
import Reciperouting from './Reciperouting.jsx'
import RecipeDetails from './RecipeDetails.jsx'

console.log(Counter)
const router= createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"/recipe",
                element:<Recipe></Recipe>
            },
            {
                path:"/products",
                element:<Products></Products>
            },
            {
                path:"/productDetails/:id",
                element:<ProductDetails></ProductDetails>
            },
            {
                path:"/reciperouting",
                element:<Reciperouting></Reciperouting>
            },
            {
                path:"/recipeDetails/:id",
                element:<RecipeDetails></RecipeDetails>
            },

        ]
    }
])

createRoot(document.getElementById('root')).render( 
    <StrictMode>
        
            <RouterProvider router={router} />
        
    </StrictMode>
)
