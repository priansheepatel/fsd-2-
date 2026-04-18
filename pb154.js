const express=require("express");
const app=express();
var person=[{"name":"abc","height":180},{"name":"def","height":260},{"name":"xyz","height":280}]
app.get("/",(req,res)=>{
    res.send(person);
})
app.get("/sort",(req,res)=>{
    person.sort((a,b)=>b.height-a.height)
    res.send(person);
})
app.listen(3000);