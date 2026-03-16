import { useState } from "react";

export function useTodo(){
    const [todos, settodos] = useState(["go to goa", "eat"]);
    const [ntd, setntd] = useState("");
    const handleAddTodo = () => {
        settodos([...todos,ntd]);
        setntd("");
    }

    const handleDeleteTodo = (i) => {
        var temp=[...todos];
        temp.splice(i,1);
        settodos([...temp]);
    }
    return {todos,ntd,setntd,handleAddTodo,handleDeleteTodo};
}
