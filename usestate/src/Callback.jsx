import React from 'react'
import { useCallback } from 'react'

function Callback() {

    let my=useCallback(()=>{
        console.log( "hello");
      
    },[])


  return (
    <div>
      <button onClick={my}>click me</button>
    </div>
  )
}

export default Callback
