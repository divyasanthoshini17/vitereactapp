import React, { useEffect } from "react";

function Todo({t,i, deltodo,to}) {

    useEffect(()=>{
        console.log(t+" rendered");
    })

    return(
        <li>{t}<button onClick={()=>deltodo(i,to)}>Delete</button></li>
    )
}
export default React.memo(Todo);