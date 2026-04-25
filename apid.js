const express=require("express")
const app=express();
const api=require("./api.js");
app.use("/",api);
app.listen(3012,()=>console.log("server started"))