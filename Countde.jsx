import { useEffect, useState } from "react";
function Countde()
{
    var [c1,setc1]=useState(0)

    var [count,setcount]=useState(0)
    useEffect(()=>alert("count updated"),[])
    return(
    <>
    <h1>{count}</h1>
    <h1>{c1}</h1>
    <button onClick={()=>{setcount(++count)}}>increment</button>
    <button onClick={()=>{setcount(--count)}}>decrement</button>
    
    <button onClick={()=>{setc1(c1+5)}}>inc +5</button>
        </>)
    

}
export default Countde