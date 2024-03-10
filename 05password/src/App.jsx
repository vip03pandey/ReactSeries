import { useCallback, useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number,setNumber]=useState(false);
  const [character,setCharacter]=useState(false);
  const [password,setPassword]=useState("");


  const passwordCopy=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)});

  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number){
      str+="0123456789"
    }
    if(character){
      str+="\|[]{}()*&^%$#@!?/~"
    }
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char)
    }
    setPassword(pass);

  },[length,number,character,setPassword])

  
  useEffect(()=>{passwordGenerator()},[length,number,character,passwordGenerator])
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center py-1 text-2xl'>Password Generator</h1>
    <div className='flex shadow-lg overflow-hidden mb-4 py-3'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3 rounded-lg'
      placeholder='password'
      readOnly
      ref={passwordRef} />
      <button
      className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 mx-2 rounded-md' onClick={passwordCopy}>Copy</button>
    </div>
    <div className='flex text-sm gap-x-4 py-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" 
        min={6}
        max={100}
        value={length}
        className='curson-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label htmlFor="">Length :{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={number}
        id='numberInput'
        onChange={()=>{setNumber((prev)=>!prev)}} />
        <label htmlFor="">Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={character}
        id='characterInput'
        onChange={()=>{setCharacter(!character)}} />
        <label htmlFor="">Character</label>
      </div>
    </div>
    </div>

    
  )
}
export default App
