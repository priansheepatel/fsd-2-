const express=require("express")
const app=express();
app.use(express.static(__dirname))
app.get("/",(req,res)=>{
    res.send(`<img src="2.jpg" alt="myimage">`);

})
app.listen(3010,()=>console.log("server started"))