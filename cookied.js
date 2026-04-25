// cookie is data which is stored in customer side
// httpt is stateless protocall 
// create->response
// read->request
// update->response
// delete->response
const express=require("express")
const app=express();
const cp=require("cookie-parser");
app.use(cp());
app.get ("/",(req,res)=>{
    res.cookie("fname","pri")//create
    res.cookie("lname","patel")//create
    res.cookie("rollno",106,{expires:new Date(Date.now()+5000)})//create
    res.cookie("marks",30)//create
    res.cookie("rollno",101)//update
    res.clearCookie("lname");//imediatly delete
    res.send(`${req.cookies.lname}<br>${req.cookies.fname}`)

});
app.get("/about",(req,res)=>{
    res.send(req.cookies)
})
app.listen(3000,()=>console.log("server started"));