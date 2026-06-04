import { useState } from "react";

function Pb376()
{
     var[data,setdata]=useState({});
        
    return(<>
    <form onSubmit={(e)=>{fun}}>
        Studentname<input type="text" onChange={f} name="studentname"/><br/>

        gender:
        <input type="radio" name="gender" value="boys" onChange={f}/>boy<br/>

        <input type="radio" name="gender" value="girls" onChange={f}/>girl<br/>

        

        subjects:<select name="sub" onChange={f} >
            <option value="english">english</option>
            <option value="gujrati">gujrati</option>

        </select><br/>

        <input type="submit"/><br/>

    </form>


    </>)
    function f(e)
    {
         setdata({...data,[e.target.studentname]:e.target.value})
         
    }
    function fun(e)
    {
        e.preventDefault()
        {
            alert(JSON.stringify(data))
        }
    }
}
export default Pb376