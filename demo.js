
import './index.css'; // Link to your CSS file
import React,{useEffect,useState} from "react";
export function App() {
  let[count,setCount]=useState(0)
  return (
    <div className="ball">
    <h1 className="count" onDoubleClick={()=>{alert("cant edit it")}}>{count}</h1>
    <button className='increment-button' onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}
