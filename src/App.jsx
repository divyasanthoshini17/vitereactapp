import Counter from "./Counter"
import Todo from "./todo"
import React from "react";
import { Link,Outlet } from "react-router-dom"
import Todolist from "./Todolist";

function App() {


  return (
    <>
      <Counter></Counter>
      <Todolist></Todolist>

    </>
  )
}

export default App;
 