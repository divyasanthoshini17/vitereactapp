
import Parent from "./Parent"
import Child from "./Child"
import React from "react";

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

    </>
  )
}

export default App;
 