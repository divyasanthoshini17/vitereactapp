import React from "react";
import { Link,Outlet } from "react-router-dom"
import Prod from "./products_RTK";
import Sform from "./studentform";
import Tododb from "./Todo_rtx_db";

function App() {

  return (
    <>
    <Sform></Sform>
    <Tododb></Tododb>
    <Prod></Prod>
    <Outlet></Outlet>
      
    
    </>
  )
}

export default App;
 