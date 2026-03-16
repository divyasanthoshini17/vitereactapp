import React from "react";
import Todo from "./todo";

function Todolist(){
    const [todos,settodos]=React.useState([]);

    var[ntd,setntd]=React.useState("")

    function handleAddTodo(){
        settodos([...todos,ntd]); 
    }
    var deletetodo=React.useCallback(function(ind,to){
        var temp=[...to];
        console.log(temp[ind]+" unmounted");
        temp.splice(ind,1);
        settodos([...temp]);
    },[])
    return(
        <div>
            <input type="text"  value={ntd} onChange={(e)=>{setntd(e.target.value)}}/>
            <button onClick={handleAddTodo}>Add todo</button>
            <ul>
                {todos.map((t,i,to)=>{
                    return <Todo to={todos} t={t} key={i} i={i} deltodo={deletetodo}></Todo>
                })}
            </ul>
        </div>
    )
    
}

export default Todolist;