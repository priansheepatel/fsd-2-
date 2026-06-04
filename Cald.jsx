//  create form that take two num from user and create three button add,sub,mul each button call componate which use context of two number and displays respectively results
import { useState,createContext } from "react";
import Add from "./Add"
import Sub from "./Sub"
import Mul from "./Mul"

const N1=createContext()
const N2=createContext()


function Cald()
{
     var[n1,setn1]=useState(0)
      var[n2,setn2]=useState(0)
      var[op,setop]=useState("")
    return(<>
   n1:<input type="text" onChange={(e)=>setn1(e.target.value)}/>
   n2:<input type="text" onChange={(e)=>setn2(e.target.value)}/>
    <button onClick={()=>setop("add")}>add</button>
    <button onClick={()=>setop("sub")}>sub</button>
    <button onClick={()=>setop("mul")}>mul</button>

   <N1.Provider value={n1}>
   <N2.Provider value={n2}>
    {op=="add" && <Add/>}
    {op=="sub" && <Sub/>}
    {op=="mul" && <Mul/>}
    

   </N2.Provider>
   </N1.Provider>

    </>)
}
export default Cald
export {N1,N2}