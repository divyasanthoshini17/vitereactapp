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



























// import React from "react";
// import Todo from "./todo";

// function Todolist(){
//     const [todos,settodos]=React.useState([]);

//     var[ntd,setntd]=React.useState("")

//     function handleAddTodo(){
//         settodos([...todos,ntd]); 
//     }
//     var deletetodo=React.useCallback(function(ind,to){
//         var temp=[...to];
//         console.log(temp[ind]+" unmounted");
//         temp.splice(ind,1);
//         settodos([...temp]);
//     },[])
//     return(
//         <div>
//             <input type="text"  value={ntd} onChange={(e)=>{setntd(e.target.value)}}/>
//             <button onClick={handleAddTodo}>Add todo</button>
//             <ul>
//                 {todos.map((t,i,to)=>{
//                     return <Todo to={todos} t={t} key={i} i={i} deltodo={deletetodo}></Todo>
//                 })}
//             </ul>
//         </div>
//     )
    
// }

// export default Todolist;