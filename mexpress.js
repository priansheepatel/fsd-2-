const express=require("express")
const app=express()
const mg=require("mongoose")
mg.connect("mongodb://localhost:27017/mydb").then(()=>console.log("connection successfull")).catch((e)=>console.log("connection failed",e));
app.use(express.static(__dirname,{index:"eform.html"}))
const sc=mg.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true,minlength:"8", maxlength:"16"}
})
mg.pluralize(null)
const user=mg.model("user",sc)
app.get("/signup",async(req,res)=>{
    try{
        var un=req.query.uname;
        var pwd=req.query.pw;
        var u1=new user({username:un,password:pwd})
        var r=await u1.save();
        console.log("insert successfull",r)
        res.send(`<h1>${un} is saved to mydb</h1>`)
    }
    catch(e)
    {
        console.log("insert failled",e)
        res.send("SORRY!can not create user")
    }
})
app.listen(5000,()=>console.log())