import { useState } from "react";
function FormdA()
{
    var[data,setdata]=useState({});
    
    return(<>
    <form onSubmit={(e)=>e.preventDefault()}>
        firstname<input type="text" onChange={f} name="firstname"/><br></br>
        lastname<input type="text" onChange={f} name="lastname"/><br></br>
        <input type="submit"/>

    </form>
     <h1>welcome {" "+data.firstname+" "+data.lastname}</h1> 
    </>)
    function f(e)
    {
        setdata({...data,[e.target.name]:e.target.value})
    }
  
}
export default FormdA