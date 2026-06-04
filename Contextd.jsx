import { createContext } from "react";
import C1 from "./C1"
var fname=createContext()
var lname=createContext()

function Contextd()
{
    return(<>
    <fname.Provider value="prianshee">
    <lname.Provider value="patel">
        <C1/>
        </lname.Provider>
        </fname.Provider>
    </>)
}
export default Contextd
export {fname,lname}