// Write a ReactJS script to create a digital clock running continuously.
// (useEffect)
import { useState,useEffect } from "react"
function Pb365()
{
    var[ctime,setctime]=useState(new Date())
    useEffect(()=>{setInterval(()=>setctime(new Date()),1000)},[])
    return(<>
    <h1>Current Time {(ctime.toLocaleTimeString())}</h1></>)

}
export default Pb365