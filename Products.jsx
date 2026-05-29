import Productsu from "./Productsu.jsx";
function Products()
{
    return(
        <div style={{display:"flex"}}>
        <Productsu pname="shampoo" img="p1.jfif" price="500"/>
         <Productsu pname="watch" img="p2.webp" price="12000"/>
          <Productsu pname="hand bag" img="p3.webp" price="18000"/>
           <Productsu pname="iphone" img="p4.jfif" price="225000"/>
        </div>
    )
}
export default Products