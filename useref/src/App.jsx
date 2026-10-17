import { useRef } from "react";

import React from 'react'

function App() {
  let myref=useRef()
  console.log(myref);
  

  function abc(){
    myref.current.style.color="red"
    myref.current.style.fontSize="100px"
  }

  
  return (
    <div>
      <h1 ref={myref}> header1</h1>
      <h1 ref={myref}>header2</h1> 
     <h1>header3</h1>
      <button onClick={abc} >click</button>
    </div>
  )
}

export default App
