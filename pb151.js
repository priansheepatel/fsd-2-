
// using Express js make student information form only two fileds like 
// name and mobile no and send data on console after submitting 
// "submit" button
const express=require("express")
const app=express();
app.get("/",(req,res)=>{
    res.send(`<html>
        <body>
        <form method="post" action="/data">
        name:
        <input name="t1" type="text">
        mobileno:
        <input name="t2" type="contact">
        <input type="submit" value="data">
        </form>
        </body>
        <html>`)
})
app.post("/data",(req,res)=>{
    console.log("name"+req.body.t1)
    console.log("mo.no"+req.body.t2)
    res.send(`studentname ${req.body.t1} and mobile no ${req.body.t2}`)
})
app.listen(3003,()=>console.log("server started"))
