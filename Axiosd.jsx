import axios from 'axios'
import { useState,useEffect } from 'react'
function Axiosd()
{
    var [im,setim]=useState(null);
     var [im2,setim2]=useState(null);
    useEffect(()=>{axios.get("https://dog.ceo/api/breeds/image/random").then((r)=>setim(r.data.message)).catch((e)=>console.log(e));

    },[])
   
    useEffect(()=>{axios.get("https://official-joke-api.appspot.com/random_joke").then((r)=>setim2(r.data.message)).catch((e)=>console.log(e));

    },[])
    return(<><img src={im} alt='dogs'/>
    <h1>{im2}</h1>
    </>

    )
}
export default Axiosd