// Write an ExpressJS to take a UserName, Password, Textarea for 
// “message” & submit 
// button using get method.
// 1) After clicking submit button the content of submitted details 
// should be represented on “/login” page along with one “show vowel” 
// link.
// 2) By clicking “show vowel” link count of vowel used in submitted 
// “message” will display on “/message” page. (Use next() to route 
// page)
const express=require("express")
const app=express();
count=0;
app.get("/",(req,res)=>{
    res.send(`<html>
        <body>
        <form method="get" action="/check">
        uname:
        <input name="un" type="text"><br>
        password:
        <input name="pass" type="password"><br>
        textarea:
        <textarea name="ta" placeholder="writearea"></textarea><br>
        <input type="submit" value="search">
        </form>
        </body>
        <html>`)
})
app.get("/login",(req,res,next)=>{
    res.send(`username:${req.query.un}<br> password:${req.query.pass}<br><a href="/message?v=${count}>show vowels</a>`)
})
app.get("/login",(req,res,next)=>{
  
     for(i=0;i<arr.length;i++)
    {
        if(arr[i]=="a"|arr|[i]=="e"||arr[i]=="i"||arr[i]=="o"||arr[i]=="u")
        {
            count++
        }
        
    }next()
})
 
app.get("/check",(req,res)=>{})
app.listen(3008,()=>console.log("server started"))
