// Write an ExpressJS to take a textarea & submit button. After clicking 
// submit button the content of textarea should be represented on next 
// page by writing each sentence (separated by dot) in new line.
const express=require("express")
const app=express();
app.get("/",(req,res)=>{
    res.send(`<html>
        <body>
        <form method="get" action="/search">
    
       <textarea name="t1" placeholder="writearea"></textarea>
        <input type="submit" value="search">
        </form>
        </body>
        <html>`)
})
app.get("/search",(req,res)=>{
    //res.send(`you have searched for ${req.query.t1}`)
    var sen=req.query.t1.split(".");//textarea ma lakhelu request req ma store thay
    var output="";
    for(i=0;i<sen.length;i++)
    {
        output+=sen[i]+"<br>"
      
    }
    res.send(output)
})
app.listen(3004,()=>console.log("server started"))