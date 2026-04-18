// Write an expressJS code which loads login.html file upon browsing
// localhost:3010. The Login.html file contains input for
// username,password and two checkboxes named remember and
// subscribe,on submitting the file it should go to /data page where
// username,password and selected checkboxes are pinted,in addition to
// that a logout button should be there,onclicking this button it should
// go back to home page “localhost:3010/”.(GET/POST any method can
// be used)[Write all necessary files code]
const express=require("express")
const app=express();
const path=require("path")
app.use(express.static(__dirname,{"index":"pb153.html"}))
app.get("/login",(req,res)=>{
    if(req.query.rem)
        r="yes";
    else
        r="no"
    if(req.query.sub)
        s="yes";
    else
        s="no"
    res.send(`username${req.query.un}<br>password:${req.query.pw}<br>remember me:${r}<br>subscribe:${s}<form action="/"><input type="submit" value="logout"></form>` );
})
app.listen(3012,()=>console.log("server started 😏"))
