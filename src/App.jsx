import Counter from "./features/Counter/Counter";
import Todolists from "./features/Todos/Todo";
import React from "react";
import { Link,Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Counter></Counter>
      <Todolists></Todolists>
    </>
  )
}

export default App;
 