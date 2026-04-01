//tolistreducer
import { AddTodo, DelTodo } from "./constants";

const initialstate={todos:["go to goa", "eat biriyani"]}

function todoReducer(state=initialstate,action){
    if(action.type==AddTodo){
        return {todos: [...state.todos,action.payload]}
    }
    if(action.type==DelTodo){
        return {todos: state.todos.filter((t,i)=>i!==action.payload)}
    }
    if(action.type=="editTodo"){
        return{
            todos: state.todos.map((t,i)=>{
                if(i===action.payload.index){
                    return action.payload.newText;
                }
                return t;
            })}
    }
    return state;
}

export default todoReducer;