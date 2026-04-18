const express=require("express")
const app=express();
function fun(req,res,next){
    console.log("hello world");
    next();
}
app.use(fun);

app.get("/",(req,res)=>{
    res.send("<h1>home page</h1>");
})
app.get("/about",fun,(req,res)=>{
    res.send("<h1>about page</h1>");
})
app.listen(3005,()=>console.log("server started"))
