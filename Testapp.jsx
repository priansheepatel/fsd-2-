import pic from "./assets/1.jfif";
function Testapp()
{
    var myname="pri";
    return(
        <>
       <h1>abc</h1>
       <h2>hello...{myname}</h2>
        <p style={{color:"red",textDecoration:"underline",backgroundColor:"yellow",fontSize:32}}>some para</p>

        <form>
            username:<input type="text" height="200px" width="200px"/>
        </form>
        <img src={"1.jfif"} alt="1"/>
        <button onClick={()=>alert("hello")}>click me</button>
        
          <button onClick={fun}>call fun</button>
          <div className="fav">this is some text</div>
        </>
       

    )
}
export default Testapp;

function fun()
{
    alert("helllo...........fun")
}