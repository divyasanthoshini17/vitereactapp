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

  // const [parentMsg,setParentMsg] = React.useState("");
  // const [childMsg,setChildMsg] = React.useState("");
  const [messages,setMessages] = React.useState([]);

function sendParentMsg(text){
  setMessages(prev => [...prev,{sender:"parent",text}])
}

function sendChildMsg(text){
  setMessages(prev => [...prev,{sender:"child",text}])
}

  return (
    <>
      
     <div className="container">
      <Parent 
        messages={messages}
        sendToChild={sendParentMsg}
      />

      <Child 
        messages={messages}
        sendToParent={sendChildMsg}
      />
     </div>
     {/* <Parent 
        message={parentMsg}
        sendToChild={setParentMsg}
        childmessage={childMsg}
      />

      <Child 
        message={parentMsg}
        sendToParent={setChildMsg}
      /> */}

      {/* <div>
        <h1>hey</h1>
        <Link to="/counter">Counter</Link><br></br>
        <Link to="/todolist">Todo list</Link><br></br>
        <Link to="/recipe">Recipes</Link><br></br>
        <Link to="/products">Products</Link>
        <Link to="/reciperouting">Reciperouting</Link>
        <Outlet></Outlet>
        
      </div> */}

    </>
  )
}

export default App;
 