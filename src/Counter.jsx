//counter

import React, { useEffect } from "react"
import { connect } from "react-redux";
import { decAction, incAction  } from "./store/actions";

function Counter(props){

  useEffect(()=>{console.log("counter rendered")
    console.log(props);
  });
  return(
    <div> 
      <h1>Counter:{props.count}</h1>
      <button onClick={()=>{props.incfn()}}>INCREMENT</button>
      <button onClick={()=>{props.decfn()}}>DECREMENT</button>
    </div>
  )
}

function mapStateToProps(state){
  return state.counterReducer;
}
function mapDispatchToProps(dispatch){
  return {
    incfn: ()=>{
        dispatch(incAction())
    },
    decfn: ()=>{
        dispatch(decAction())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);

























// function Counter() {
//   const [count, setCount] = React.useState(0)

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   )
// }
// export default Counter;  