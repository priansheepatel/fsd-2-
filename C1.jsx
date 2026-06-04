import { useContext } from "react";
import { fname,lname } from "./Contextd";
function C1()
{
    var f=useContext(fname)
    var l=useContext(lname)

    return(<>
    <h1>welcome {f}{l}</h1></>)
}
export default C1