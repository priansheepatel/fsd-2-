function Productsu(p)
{
//    find age > 40 and print their name
    return(
        <div style={{border:"4px solid blue",borderRadius:"15px",margin:"10px",backgroundColor:"#33e7ff",textAlign:"center",justifyContent:"center",width:"200px"}}>
            <h1>{p.pname}</h1>
            <img src={p.img} height="200px" width="200px"/>
            <h3>{p.price}</h3>
       
        </div>
    )
}
export default Productsu