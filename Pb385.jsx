// Create a ReactJS program using function component having two input
// fields for num1 and num2 and two buttons for addition and subtraction of
// the two numbers. Display the respective outputs on same page using
// useState hook. Also display alert box as an effect on every time the addition
// button is clicked using useEffect hook. 
import { useState,useEffect } from "react"
function Pb385()
{
    var[c,setc]=useState(0)
    var[inc,setinc]=useState(false)
    useEffect(()=>{
      
            if(inc)
            {
                var interval=setInterval(()=>setc(++c),1000)
            }
           
               return()=>clearInterval(interval)
            
        
    },[inc])
return(<>
    <h1>{c}</h1>
    <button onClick={()=>setinc(true)}>Start</button>
    <button onClick={()=>setinc(false)}>Stop</button>

    
</>)

}
export default Pb385
