
import React,{useReducer,useState} from 'react'

const initialState={
    count:0
}
const reducer=(state,action)=>{
switch(action.type){
  case 'increment':
    return {count:state.count+1}
  case 'decrement':
      return { count: state.count - 1 };
  default:
      throw new Error();
}

}
function  App() {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
   <>
   <h1>Count:{state.count}</h1>
   <button onClick={()=>dispatch({type:'increment'})}>+</button>
   <button onClick={()=>dispatch({type:'decrement'})}>-</button>
   </>
  )
}

export default App