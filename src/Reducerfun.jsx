import React, { useReducer } from "react"

function todoReducer(state,action){
    if(action.type=="addTodo"){
        return {todos: [...state.todos,action.payload]}
    }
    if(action.type=="delTodo"){
        return {todos: state.todos.filter((t,i)=>i!==action.payload)}
    }
}

function Todos(){
var [state,dispatch]=useReducer(todoReducer,{todos:["go to goa"," eat biriyani"]});
    return(
        <div>
            <input type="text" id="d1"/>
            <button 
                onClick={()=>{
                    dispatch({
                        type: "addTodo",
                        payload: document.getElementById("d1").value,
                    })}}> ADD Todo
        
            </button>
            <ul>
                {
                    state.todos.map((todo,index)=>{
                        return <li>{todo}
                                    <button onClick={()=>{
                                        dispatch({
                                            type: "delTodo",
                                            payload:index,
                                        })
                                    }}>Delete</button>

                                    <button onClick={()=>{
                                        dispatch({
                                            type: "Edittodo",
                                            payload:index,
                                        })
                                    }}>Edit</button>
                        
                        
                            </li>
                    })
                }
            </ul>
        </div>
    )
}


export default Todos;









































// function reducer(state,action){
//     if(action.type=="INC"){
//         return { count: state.count + 1 }
//     }
//     if (action.type=="DEC"){
//         return {count: state.count - 1 }
//     }

// }


// function Countering(){

//     var[state,dispatch]=useReducer(reducer,{count:0});

//     return(
//         <div>
//             <h1>Counter: {state.count}</h1>

//             <button onClick={()=>{dispatch({type: "INC"})}}>INCREMENT</button>

//             <button onClick={()=>{dispatch({type: "DEC"})}}>DECREMENT</button>

//         </div>
//     )

// }
// export default Countering