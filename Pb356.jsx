import { useState } from "react"
function Pb356()
{
    var[txt,settxt]=useState("LJ University")
    var[c,setc]=useState("red")
    var[txt2,settxt2]=useState("React js hoocks")
    var[btntxt,setbtntxt]=useState("hide")
    return(<>
        <h1 style={{color:c}}>{txt}</h1>
        <h2>{txt2}</h2>
        <button onClick={f1}>change text</button>
        <button onDoubleClick={f2}>change color </button>
        <button onClick={f3}>hide/show</button>
        </>)
    function f1()
    {
        if(txt=="LJ University")
        {
            settxt("welcome Students")
        }
        else
            settxt("lj university...")
    }
    function f2()
    {
        if(c=="red")
        {
            setc("blue")
        }
    }  
    function f3()
    {
        if(btntxt="hide")
        {
            setbtntxt("show")
            settxt2("")
        }
        else
        {
            setbtntxt("hide")
             settxt2("react js hooks")
        }
    }      
        

}
export default Pb356