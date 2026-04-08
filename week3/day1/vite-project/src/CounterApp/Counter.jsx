import { useState } from 'react'
import React from 'react'
import './Counter.css'

function Counter() {

    const [count,setCount] = useState(0)
  return (
    <>
       <div className="container">
           <h2>Counter App</h2>
           <div className="counter-content">{count}</div>
           <div className="btn">
            <button onClick={()=>{setCount(count+1)}} className='increment'>+</button>
            <button onClick={()=>{setCount(0)}} className='reset'>Reset</button>
            <button onClick={()=>{setCount(count-1)}} className='decrement'>-</button>
           </div>
       </div>
    </>
  )
}

export default Counter
