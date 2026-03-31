import { useDispatch, useSelector } from "react-redux";
import { inc ,dec} from "./counterSlice";
import React from "react";

function Counter(){
    const {count}= useSelector((state)=>state.counterReducer);
    const dispatch= useDispatch();
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>{
                dispatch(inc())
            }}>INCREMENT</button>
            <button onClick={()=>{
                dispatch(dec())
            }}>DECREMENT</button>
        </div>
    )
}

export default Counter;