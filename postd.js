const express=require("express")
const app=express();
const path=require("path")
app.use(express.urlencoded({"extended":true}))
app.use(express.static(__dirname,{"index":"postd.html"}))
app.post("/calc",(req,res)=>{
    
})
