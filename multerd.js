const express=require("express")
const app=express();
const multer=require("multer");
const upload=multer({"dest":"./single"});
app.use (express.static(__dirname,{index:"multerd.html"}));
app.use(express.urlencoded({extended:true}));
app.post("/upload",upload.single("myfile"),
(req,res)=>{
    if(req.file)
        res.send(`${req.file.originalname} uploded successfully`)
    else
        res.send("no file")
    console.log(req.file);
    res.send("file uploaded successfully");})
app.listen(3012,()=>console.log("server started"))
