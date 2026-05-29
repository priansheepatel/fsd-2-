import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from "./Home.jsx"
import Contact from "./Contact"
import About from "./About"
import Products from "./Products"
import Nopage from "./Nopage.jsx"
function Routed()
{
    return(
        <>
        <BrowserRouter>
        <Link to="/">home</Link>
        <Link to="/about">about us</Link>
        <Link to="/products">products</Link>
        <Link to="/contact">contact us</Link>
        <hr/>
        <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
              <Route path="/products" element={<Products/>}/>
               <Route path="/contact" element={<Contact/>}/>
               <Route path="*" element={<Nopage/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Routed