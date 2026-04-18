const express=require("express")
const app=express();
app.get("/day/:day",(req,res)=>{
    // res.send(req.params);
    res.send("today is "+req.params.day)
});
 app.get("/month/:month",(req,res)=>{
        res.send("current month is "+req.params.month)
    })
 app.get("/day/:day/month/:month",(req,res)=>{
        res.send("current month is "+req.params.month+"and day is "+req.params.day)
    })
    app.get("/day",(req,res)=>{
        res.send(req.query)
    })    
app.listen(3001,()=>console.log("server started"))