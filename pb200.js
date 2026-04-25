// You have been assigned to develop a user feedback form for a website
// using Express.js and cookies. Implement the following requirements:
//  Process a form with the following fields: Name, Email , Message , Rating
// (radio buttons: Bad, Average, Good, Very Good, Excellent) When the user
// submits the form, store their feedback information (name, email, message,
// and rating) in a cookie named "feedback" that expires in 10 seconds.
// Display a confirmation message to the user after successfully submitting the
// form & Create a link to display the feedback details stored in the "feedback"
// cookie. When the user click to the link, retrieve the feedback information
// from the cookie and display it on the page also include a link on the
// feedback details page to Logout. When the user clicks the link, user
// redirected to home page. Make app.js file use get method in express js. No
// need to write html file having form elemens
const express=require("express")
const app=express();
const path=require("path")
const cp=require("cookie-parser");
app.use(cp());
app.use(express.urlencoded({"extended":true}))
app.use(express.static(__dirname,{"index":"pb200.html"}))
app.get("/login",(req,res)=>{
    var {un,email,msg,rating}=req.query;
    var fb={un,email,msg,rating};
    res.cookie("feedback",fb);
    res.send(`thank you for feedback<br><a href="/details>show feedback</a>`);
    
})
app.get("/details",(req,res)=>{
        res.send(`name:${req.cookies.feedback.un}<br>email:${req.cookies.feedback.email}<br>msg:${req.cookies.feedback.msg}<br>rating:${req.cookies.feedback.rating}<br>`)
    })
app.listen(3011,()=>console.log("server started"))
