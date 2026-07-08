const express=require("express")
const app=express()
const cors=require("cors")
const mg=require("mongoose")
app.use(cors())
app.use(express.json())
mg.connect("mongodb://localhost:27017/mydb").then(()=>console.log("connection successfull")).catch((e)=>console.log("connection failed",e));
const sc=mg.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true,minlength:"8", maxlength:"16"}
})
mg.pluaralize(null)
const person=mg.model("person",sc)
app.post("/Signup",async(requestAnimationFrame,res)=>{
    try{
    var un=req.body.un;
    var pw=req.body.pw;
    var p1=new person({username:un,password:pw})
    var r=await p1.save()
    console.log("inser successfull",r)
    res.send(un+"data inserted from backend")

}
catch(e){
    console.log("inserted failed")

}}
)