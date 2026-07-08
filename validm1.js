const mg=require("mongoose");
const validator=require("validator")
mg.connect("mongodb://localhost:27017/mydb").then(()=>console.log("connection success")).catch((e)=>console.log("connection failed",e));
const sc=mg.Schema({
    cname:{type:String,required:true},
    password:{type:String,required:true,minlength:[8,"password atleast have 8 char"],maxlenth:[16,"password max have 16 char"]},
    gender:{type:String,enum:["male","female","other"]},
    age:{type:Number,min:18,max:90},
    username:{type:String,match:/^[A-Za-z]+[0-9]+$/,unique:true},
    dop:{type:Date,default:new Date()},
    email:{type:String,validate:[validator.isEmail,"invalid Email id"],required:true,unique:true},
    mobile:{type:String,validate:[(v)=>{var p=/^\+91[6-9]\d{9}$/
    return p.test(v)},"non indian mobile np"]}

})
// 4.create model
const customers= new mg.model("customers",sc);
// function
const created=async()=>{
    try{
        var c1=new customers({cname:"Pri",password:"abcd1234",gender:"female",age:20,username:"Pri21",email:"pri@gmail.com",mobile:"9998979616"})
    var r=c1.save()
     var c2=new customers({cname:"anshee",password:"abcd1564",gender:"female",age:18,username:"Pri21",email:"anshee@gmail.com",mobile:"9897959392"})
    var r=c2.save()
    console.log("inser succsufull",r);}
    catch(e)
    {
        console.log("insert failled",e.message)

    }

}
created()


