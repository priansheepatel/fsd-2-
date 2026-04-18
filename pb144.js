// write an express.js script to load an HTML file having username and 
// password and submit button. On clicking submit button. It should 
// jump on "check" page using "POST" method. If username is "admin" 
// , then jump on next middleware to print "welcome… admin" , if 
// username is not "admin" , then stay on same middleware to print 
// "warning msg" in red color.
const express=require("express")
const app=express();
app.use(express.urlencoded({"extended":true}))
app.get("/",(req,res)=>{
    res.send(`<html>
        <body>
        <form method="post" action="/check">
        uname:
        <input name="un" type="text"><br>
        password:
        <input name="pass" type="password"><br>
        <input type="submit" value="search">
        </form>
        </body>
        <html>`)
})
function f1(req,res,next)
{
    if(req.body.un==="admin")
    {
        next();
    }
    else
    {
        res.send("<h1 style='color:red'>warning:invalid user</h1>")
    }
}
function f2(req,res,next)
{
    res.send("<h1>welcom...admin</h1>")
}
app.post("/check",f1,f2,(req,res)=>{})
app.listen(3007,()=>console.log("server started"))

