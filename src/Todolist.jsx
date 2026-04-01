import React, {useEffect} from "react";
import { connect } from "react-redux";
import { addtodoAction, deltodoAction } from "./store/actions";

function Todolist(props){

    useEffect(()=>{console.log("todo rendered")});
    
    return(
        <div>
            <h1>Todo List</h1>
            <ul>
                <input type="text" id="d1"></input>
                <button onClick={()=>{
                    const text = document.getElementById("d1").value;
                    props.addfn(text);
                }}>ADD todo</button>
                {props.todos.map((todo,index)=>{
                    return<li>{todo}
                       <button onClick={()=>{
                        props.delfn(index);
                       }}>Delete</button>
                       <button onClick={()=>{
                        props.dispatch({
                            type:"editTodo",
                            payload: {
                                index: index,
                                newText:"updated todo"
                            }
                        })
                       }}>EDIT</button>
                    </li>
                }) }
            </ul>
        </div>
    )
}

function mapState(state){
    return state.todoReducer;
}
function mapDispatch(dispatch){
    return {
        addfn: (text)=>{
                dispatch(addtodoAction(text))
            },
        delfn: (i)=>{
                dispatch(deltodoAction(i))
            },
            
    }
}
export default connect(mapState,mapDispatch)(Todolist);



























