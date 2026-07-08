// 5 cord chep 9 3 code 5 marks and 2 code chep 10 5 marks total 25 marks
//1.require mongoose
const mg=require("mongoose")
//2.establish connection
mg.connect("mongodb://localhost:27017/mydb").then(()=>console.log("connection successful")).catch((e)=>console.log("cannot connect",e));
// 3.create schema
const sc=mg.Schema({sname:String,age:Number,pass:Boolean,doj:Date,division:Object,marks:Array})
// 4.create model
const student= new mg.model("student",sc);

async function created() 
{
    try
    {var s1=new student({
        sname:"olive",
        age:18,
        pass:true,
        doj:new Date("2025-05-26"),
        division:{dept:"sy1",class:"a4"},
        marks:[18,22,16]
    })
    var r=await s1.save()
    console.log("inserted successfull",r)
    }
    catch(e)
    {
        console.log("cannot insert data",e)

    }
}
//created()
var sm=[{sname:"henry",age:22,pass:false,doj:new Date(),division:{dept:"sy1",class:"a3"},marks:[23,24,18]},
{sname:"mansi",age:80,pass:false,doj:new Date(),division:{dept:"sy1",class:"a4"},marks:[23,24,18]},
{sname:"dhvani",age:40,pass:true,doj:new Date(),division:{dept:"sy1",class:"a2"},marks:[23,24,18]},
{sname:"pri",age:20,pass:true,doj:new Date(),division:{dept:"sy1",class:"a4"},marks:[23,24,18]}
]
const createm = async()=>{
    try
    {
        var r1=await student.insertMany(sm)
        console.log("insermany successfull",r1)

    }
     catch(e)
    {
        console.log("cannot insert data",e)

    }
}
// createm()
const operations=async()=>{
    try{
        var result=[];
        // result.push(await student.findOne({sname:"olive"}))
        // result.push(await student.findOne({age:{$gt:18}}))
        //  result.push(await student.updateOne({sname:"olive"},{$set:{pass:false}}))
        //  result.push(await student.updateMany({age:{$gt:18}},{$inc:{age:3}}))
        //  result.push(await student.findByIdAndUpdate("6a4b1f2b73749a517660ee55",{$set:{sname:"henryUp"}}))
        //  result.push(await student.countDocuments())
        //  result.push(await student.countDocuments({doj:new Date()}))
        //  result.push(await student.deleteOne({sname:"henryUp"}))
        //   result.push(await student.deleteMany({age:{$lt:18}}))
         result.push(await student.findByIdAndDelete("6a4b1f2b73749a517660ee57"))

        console.log("result is:\n",result)
    }
    catch(e){
        console.log("operation unsuccessfull")
    }
}
operations()
