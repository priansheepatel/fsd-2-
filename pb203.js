// Write express js script to perform tasks as asked below.
// 1. Create one HTML file which contains two number type input
// fields, one dropdown which contains options to select like (addition,
// subtraction, multiplication, division) and one submit button.
// 2. The input fields must contain the value greater than 0 else it will
// give a message “Please enter the valid number”. Also, user must
// select any type of formula from the dropdown else give a message
// “You have not selected any formula”. (Message will be displayed on
// “/calc” page.)
// 3. If one formula is selected and numbers are entered then Both
// numbers should be stored in cookies which expires in 50 seconds.
// Respective calculations will be performed on the page “/calc”.
const express=require("express")
const app=express();
const path=require("path")
const cp=require("cookie-parser");
app.use(cp());
app.use(express.urlencoded({"extended":true}))
app.use(express.static(__dirname,{"index":"postd.html"}))
app.post("/calc",(req,res)=>{
    var n1=parseInt(req.body.n1)
    var n2=parseInt(req.body.n2)
    var op=req.body.op;
    if(n1<0||n2<0)
    {
        res.send("incorrect input")
    }
    else if(!op)
    {
        res.send("select some operation")
    }
    else{
        res.cookie("n1",req.body.n1)
        res.cookie("n2",req.body.n1)
        if(op=="add")
        {
            res.send(`addition is ${parseInt(req.cookies.n1)}+${parseInt(req.cookies.n1)}`)
        }
        else if(op=="sub")
        {
            res.send(`addition is ${parseInt(req.cookies.n1)}-${parseInt(req.cookies.n1)}`)
        }
        else if(op=="mul")
        {
            res.send(`addition is ${parseInt(req.cookies.n1)}*${parseInt(req.cookies.n1)}`)
        }
         else if(op=="div")
        {
            res.send(`addition is ${parseInt(req.cookies.n1)}/${parseInt(req.cookies.n1)}`)
        }
        else
        {
            res.send("not selected operation")
        }
    }

})
app.listen(3010,()=>console.log("server started"))
