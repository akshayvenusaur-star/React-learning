import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
function Usememo() {
    let [price,setprice]=useState(100)
    let[quantity,setquantity]=useState(2)

    let mymemo=useMemo(()=>{
     return price*quantity

    },[price,quantity])


    function add(){
        setquantity(quantity+1)
    }
    function sub(){
          setquantity(quantity-1)
    }
  return (
    <div>
      <h3>price:{price}</h3>
      <h3>quantity:{quantity}</h3>
      <h3>total:{mymemo}</h3>
      <button onClick={add}>add</button>
      <button onClick={sub}>cancel</button>
    </div>
  )
}

export default Usememo
