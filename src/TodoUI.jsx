//hooks

import React from "react";
import { useTodo } from "./assets/hooks/useTodo";
import{ useEffect,useRef } from "react";

function TodoUI(){
    const {todos,ntd,setntd,handleAddTodo,handleDeleteTodo}=useTodo();
    const ref1=React.useRef();
    React.useEffect(()=>{
        ref1.current.focus();
    },[])

    function handleButtonfocus(ev){
        if(ev.key==="Enter"){
            handleAddTodo();
        }
    }
    return(
        <div>
            <input 
                type="text" 
                ref={ref1} 
                value={ntd} 
                onKeyUp={(ev)=>{handleButtonfocus(ev)}}
                onChange={(e)=>{setntd(e.target.value)}}/>
            <button onClick={handleAddTodo}>Add todo</button>
            <ul>
                {todos.map((t,i)=>{
                    return <li key={i}>{t}<button onClick={()=>handleDeleteTodo(i)}>Delete</button></li>
                })}
            </ul>
        </div>
    )}
export default TodoUI;