//routing

import { Link } from "react-router-dom";
import React from "react";

function Reciperouting(){
    var [recipe,setRecipe]=React.useState([])
    React.useEffect(()=>
        {fetch("https://dummyjson.com/recipes")
         .then((res) => res.json())
         .then((data) => {
            setRecipe([...data.recipes]);
      });},[])

    return(
        
        <div>
            {recipe?.map((r)=>{
                return <li>
                    <Link to={`/recipeDetails/${r.id}`}>{r.name}</Link>
                </li>
            })}
        </div>
        
    )
}
export default Reciperouting
