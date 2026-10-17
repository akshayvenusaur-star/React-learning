import React, { useState } from 'react'

function Usestate() {

  let [state,setstate]=useState(0

  )
   console.log(state);

  function increment(){
       setstate(state+1)

  }
  function decrement(params) {
  setstate(state-1)
}

  return <div>
    <h1>{state}</h1>
    <button  onClick={increment}>increment</button>
      <button  onClick={decrement}>decrement</button>

  </div>
}

export default Usestate