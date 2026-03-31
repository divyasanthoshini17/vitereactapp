import { useAddTodosMutation, useGetTodosQuery, useDelTodoMutation } from "./services/Todosdb";
import { useState } from "react";

function Tododb(){
    const{data,isLoading,error}=useGetTodosQuery();
    const [addTodo]=useAddTodosMutation();
    const [deleteTodo] = useDelTodoMutation();
    const [text, setText] = useState("");
    const handleAdd = async () => {
        if (!text) return; // prevent empty

        await addTodo({
            todos: text,
            status: "not complete",
            category: "general"
        });

        setText(""); // clear input
    };

    if(isLoading) return<h1>LOADING</h1>
    if(error) return<h1>Not LOAding</h1>

    return(
        <div>
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter task..."
            />
            <button onClick={handleAdd}>Add Todo</button>
            {data.map((todo)=>{
                return(
                    <div key={todo.id}>
                        <h3>{todo.todos}</h3>
                        <button onClick={() => deleteTodo(todo.id)}>Delete </button>
                        {/* <p>Status: {todo.status}</p>
                        <p>Category: {todo.category}</p> */}
                    </div>
                )
            })}
        </div>
    )
}

export default Tododb;