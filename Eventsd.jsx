function Eventsd()
{
    return(
        <>
        <form onSubmit={fun}>
            username:
            <input type="text"  onChange={(e)=>console.log(e.target.value) }/><br/>
            <button type="button" onClick={()=>alert("you clicked once")}>click me</button><br/>
            <button type="button" onDoubleClick={()=>alert("you clicked twice")}>double click me</button><br/>
            <button type="submit">exit page</button>

        </form>

        </>
    )
}

function fun(e)
{
    e.preventDefault();
    alert("are you sure?")


}
export default Eventsd