import { createSlice } from "@reduxjs/toolkit"

const initialState={todos:["go to goa","beach"]}

export const TodoSlice=createSlice({
    name:"Todo",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.todos.push(action.payload);
        },
        del:(state,action)=>{
            state.todos.splice(action.payload,1);
        }
    }
})

export const {add,del}=TodoSlice.actions;
const todoReducer=TodoSlice.reducer;
export default todoReducer;