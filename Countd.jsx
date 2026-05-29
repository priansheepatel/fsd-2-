import { useState } from "react";

function Countd()
{
    var [count,setcount]=useState(0)
    return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>{
        if (count<50)
        {setcount(++count)}
        }}>increment</button>
    <button onClick={()=>{
        if(count>10)
        {setcount(--count)}
        }}>decrement</button>
    </>
        )

}
export default Countd