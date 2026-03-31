import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi=createApi({
    reducerPath: "todoApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000"}),
    endpoints:(builder)=>({
        getTodos:builder.query({
            query:()=>`/todos`,
        }),
        addTodos:builder.mutation({
            query:(newtodo)=>({
                url:`/todos`,
                method:'POST',
                body:newtodo,
            })
        }),
        delTodo:builder.mutation({
            query:(id)=>({
                url:`/todos/${id}`,
                method:'DELETE',
            })
        })
    })
});

export const {useGetTodosQuery,useAddTodosMutation,useDelTodoMutation}=todoApi;