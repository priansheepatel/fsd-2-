//MIDDLEWARE - it is a funcion requst and response ni middele ma aetle middleware named
const express=require("express")
const app=express();
app.use(express.urlencoded({"extended":true}))
app.get("/",(req,res)=>{
    res.send(`<html>
        <body>
        <form method="post" action="/search">
        <input name="t1" type="text">
        <input type="submit" value="search">
        </form>
        </body>
        <html>`)
})

app.post("/search",(req,res)=>{
    res.send(`you have searched for ${req.body.t1}`)
})
app.listen(3002,()=>console.log("server started"))
