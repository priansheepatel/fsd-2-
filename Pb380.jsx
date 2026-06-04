// Create a ReactJS program using function component having two input
// fields for num1 and num2 and two buttons for addition and subtraction of
// the two numbers. Display the respective outputs on same page using
// useState hook. Also display alert box as an effect on every time the addition
// button is clicked using useEffect hook. 
import { useState,useEffect } from "react"
function Pb380()
{
    var[n1,setn1]=useState(0)
    var[n2,setn2]=useState(0)
    var[add,setadd]=useState(0)
    var[sub,setsub]=useState(0)
    useEffect(()=>alert("addition"),[add])

return(<>
   num1<input type="text" onChange={(e)=>setn1(e.target.value)} /><br/>
   num2<input type="text" onChange={(e)=>setn2(e.target.value)} /><br/>

   <button onClick={()=>setadd(parseInt(n1)+parseInt(n2))}>+</button>
   <button onClick={()=>setsub(n1-n2)}>-</button>
   <h1>addition:{add}</h1>
   <h1>subtraction:{sub}</h1>
    
</>)

}
export default Pb380