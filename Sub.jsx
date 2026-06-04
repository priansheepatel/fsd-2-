import { useContext } from "react";
import { N1,N2 } from "./Cald";
function Sub()
{
    var no1=parseInt(useContext(N1))
    var no2=parseInt(useContext(N2))

    return(<>
    <h1>Sub: {no1-no2}</h1></>)
}
export default Sub