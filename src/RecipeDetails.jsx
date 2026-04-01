//routing

import { useParams } from "react-router-dom";
import React from "react";

function RecipeDetails(){
    var {id}= useParams()
    var [rdeatils,setRdetails]=React.useState({})
    React.useEffect(()=>
            {fetch(`https://dummyjson.com/recipes/${id}`)
             .then((res) => res.json())
             .then((data) => {
                setRdetails({...data});
          });},[])
    
        return(
            
            <div>
                <h1>{rdeatils.name}</h1>
                <img src={rdeatils.image} width="100px" height="100px"/>
            </div>
        )
}

export default RecipeDetails