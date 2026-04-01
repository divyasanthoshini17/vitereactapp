import Counter from "./Counter"
import Todo from "./todo"
import Recipe from "./Recipe"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Menu from "./Menu"
import Footer from "./Footer"
import Todolist from "./Todolist"
import TodoUI from "./TodoUI"
import Parent from "./Parent"
import Child from "./Child"
import React from "react";
import { Link,Outlet } from "react-router-dom"

function App() {

  return (
      <div>
        <h1>hey</h1>
        <Link to="/recipe">Recipes</Link><br></br>
        <Link to="/products">Products</Link>
        <Link to="/reciperouting">Reciperouting</Link>
        <Outlet></Outlet>
        
      </div> 
  )
}

export default App;
 