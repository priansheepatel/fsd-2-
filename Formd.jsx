import { useState } from "react";
function Formd()
{
    var[fn,setfn]=useState("");
    var[ln,setln]=useState("");
    return(<>
    <form onSubmit={(e)=>e.preventDefault()}>
        firstname<input type="text" onChange={f1}/><br></br>
        lastname<input type="text" onChange={f2}/><br></br>
        <input type="submit"/>

    </form>
    <h1>welcome {fn}{ln}</h1>
    </>)
    function f1(e)
    {
        setfn(e.target.value)
    }
    function f2(e)
    {
        setln(e.target.value)
    }
}
export default Formd