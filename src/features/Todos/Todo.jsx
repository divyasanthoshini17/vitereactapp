import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {add,del} from "./todoSlice";

function Todolists(){
    const{todos}=useSelector((state)=>state.todoReducer)
    const dispatch=useDispatch();
    const [ntd,setntd]=React.useState("")
    return(
        <div>
            <h1>Todos</h1>
            <input type="text" onChange={(e)=>{
                setntd(e.target.value)
            }}></input>
            <button 
                onClick={()=>{
                    dispatch(add(ntd))
                }}>ADD</button>
            <ul>
                {
                todos.map((t,i)=>{
                    return <li>{t}<button 
                                    onClick={()=>{
                                        dispatch(del(i))
                                    }}>
                                    Delete
                                </button>
                            </li>
                })}
            </ul>
        </div>
    )
}

export default Todolists;