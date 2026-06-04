// Create a React app:
// • Display product quantity
// • Add buttons “Add Item” and “Remove Item”
// • Quantity should never go below 0
// • Use useReducer to manage state
import { useState,useReducer } from "react"
function Pb386()
{
    var[no,setno]=useState(0)
    var [count,dis]=useReducer(red,0)
   
   
       return(<>
       <h1>{count}</h1>
       <button onClick={()=>dis({change:"inc"})}>inc</button>
       <button onClick={()=>dis({change:"dec"})}>dec</button>
       <button onClick={()=>dis({change:"reset"})}>reset</button><br></br>
        no to inc:<input type="number" onChange={(e)=>setno(e.target.value)}/><br></br>
       <button onClick={()=>dis({change:"custominc",value:no})}>custominc</button>
   
   
   
           </>)
           
        function red(count,action)
        {
            if(action.change=="inc")
            {
                return count+1
            }
            else if(action.change=="dec" && count>0)
            {
                return count-1
            }
             else if(action.change=="reset")
            {
                return 0
            }
            else
            {
                return count+parseInt(action.value)
            }

        }
    
}
export default Pb386