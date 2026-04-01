import React from "react";

function Parent({messages,sendToChild}){

    const [text,setText]=React.useState("");

    var ref1= React.useRef();
    
    React.useEffect(()=>{
        ref1.current.focus();
    },[])

    function handlebuttonfocus(ev){
        if(ev.key==="Enter"){
            sendToChild(text);
            setText("")

        }
    }

    function handleChange(e){
        setText(e.target.value);
        
    }

    function handleSend(){
        sendToChild(text);
        setText("")
        
    }

    return(
        <div className="parent">

            <div className="chat-navbar">
                <div className="profile"></div>
                <span>Parent</span>
                <div className="icons">
                    <span>📞</span>
                    <span>📹</span>
                    <span>⋮</span>
                </div>
            </div>


           <div className="chat">
                {/* {message && <p className="parent-msg">{message}</p>}
                {/* parent message */}
                {/* {childmessage && <p className="p-c-msg"> {childmessage}</p>} 
                childmessage */}

                {
                    messages.map((msg,index)=>(
                    <p 
                        key={index}
                        className={msg.sender === "parent" ? "parent-msg" : "p-c-msg"}
                    >
                        {msg.text}
                        {msg.sender === "parent" && <span className="ticks">✔✔</span>}
                    </p>
                    ))
                }
           </div>

            <div className="input-container">
                <input
                    type="text"
                    ref={ref1}
                    value={text}
                    placeholder="Enter message" 
                    onChange={handleChange}
                    onKeyUp={(ev)=>{handlebuttonfocus(ev)}}
                />
                <button onClick={handleSend}>Send </button>
            </div>
        </div>
    )
}

export default Parent;
