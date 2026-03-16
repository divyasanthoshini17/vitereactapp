import React from "react";


function Child({messages,sendToParent}){
    const [text,setText]=React.useState("");
    const [childmessage,setchildmessage]=React.useState("");


    var ref2= React.useRef();
        
    React.useEffect(()=>{
        ref2.current.focus();
    },[])
    
    function handlebuttonfocus(ev){
        if(ev.key==="Enter"){
            setchildmessage(text);
            sendToParent(text);
            setText("")
        }
    }

    function handleChange(e){
        setText(e.target.value);
    }
        
    function handleSend(e){
        setchildmessage(text);
        sendToParent(text);
        setText("")

    }
    

    return(
        <div className="child">
            <div className="chat-navbar">
                <div className="profile"></div>
                <span>Child</span>
                <div className="icons">
                    <span>📞</span>
                    <span>📹</span>
                    <span>⋮</span>
                </div>
            </div>
            
            <div className="chat-area">
                {/* {message && <p className="c-p-msg">{message}</p>}
                parent message */}
                {/* {childmessage && <p className="child-msg">{childmessage}</p>} 
                child message */}
                {
                    messages.map((msg,index)=>(
                    <p 
                        key={index}
                        className={msg.sender === "child" ? "child-msg" : "c-p-msg"}
                    >
                        {msg.text}
                        {msg.sender==="child" && <span className="ticks">✔✔</span>}
                    </p>
                    ))
                }
            </div>
            
            <div className="input-container">
                <input 
                    type="text" 
                    ref={ref2}
                    value={text}
                    placeholder="Enter message" 
                    onChange={handleChange} 
                    onKeyUp={(ev)=>{handlebuttonfocus(ev)}}
                />
                <button onClick={handleSend} >Send</button>
            </div>
        </div>
    )
}
 
export default Child;