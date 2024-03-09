import React, { useState } from 'react'

function App() {
    const [count,setcount]=useState(5);
    const handleAdd=()=>{
        setcount(count=>count+1)
        setcount(count=>count+1)
        setcount(count=>count+1)
    }
    const handleRemove=()=>{
        if(count>0){
        setcount(count=>count-1)
        }
    }
  return (
    <div>
      <h1>Counter :{count} </h1>
      <button onClick={handleAdd}>Add +1 </button>
      <button onClick={handleRemove}>Decrease -1</button>
    </div>
  )
}

export default App
