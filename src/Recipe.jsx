//recipe

import React from "react";

function Recipe(){
    const [recipes, setrecipes] = React.useState([]);
    React.useEffect(()=>{ fetch("https://dummyjson.com/recipes")
        .then((res) => res.json())
        .then((data) => {setrecipes(data.recipes)})},[])

    return(
        <>
            {recipes.map((recipe) => {
                return (
                <div className="card" key={recipe.id}>
                    <img src={recipe.image} alt={recipe.name}/>
                    <h3>{recipe.name}</h3>
                </div>
                );
            })}
        </>
    )
}
export default Recipe;