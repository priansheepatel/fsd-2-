const express=require("express")
const app=express();
const students=[
  { "rollno": 1, "name": "papatel","age":20,"div":"a4","sem":4,"test":"t1","marks":24},
  { "rollno": 2, "name": "Olivia Harris", "age": 20, "div": "A2", "sem": 3, "test": "t2", "marks": 85 },
  { "rollno": 3, "name": "Liam Clark", "age": 19, "div": "A3", "sem": 3, "test": "t3", "marks": 72 },
  { "rollno": 4, "name": "Emma Lewis", "age": 21, "div": "A4", "sem": 3, "test": "t4", "marks": 91 },
  { "rollno": 5, "name": "Noah Young", "age": 20, "div": "A5", "sem": 3, "test": "t1", "marks": 67 },
  { "rollno": 6, "name": "Ava King", "age": 19, "div": "A6", "sem": 3, "test": "t2", "marks": 88 },
  { "rollno": 7, "name": "Mason Wright", "age": 20, "div": "A7", "sem": 3, "test": "t3", "marks": 74 },
  { "rollno": 8, "name": "Sophia Scott", "age": 21, "div": "A8", "sem": 3, "test": "t4", "marks": 82 },
  { "rollno": 9, "name": "James Green", "age": 19, "div": "A1", "sem": 4, "test": "t1", "marks": 76 },
  { "rollno": 10, "name": "Isabella Adams", "age": 20, "div": "A2", "sem": 4, "test": "t2", "marks": 89 },
  { "rollno": 11, "name": "Benjamin Baker", "age": 19, "div": "A3", "sem": 4, "test": "t3", "marks": 69 },
  { "rollno": 12, "name": "Mia Nelson", "age": 21, "div": "A4", "sem": 4, "test": "t4", "marks": 92 },
  { "rollno": 13, "name": "Lucas Carter", "age": 20, "div": "A5", "sem": 4, "test": "t1", "marks": 73 },
  { "rollno": 14, "name": "Charlotte Mitchell", "age": 19, "div": "A6", "sem": 4, "test": "t2", "marks": 87 },
  { "rollno": 15, "name": "Henry Perez", "age": 20, "div": "A7", "sem": 4, "test": "t3", "marks": 80 },
  { "rollno": 16, "name": "Amelia Roberts", "age": 21, "div": "A8", "sem": 4, "test": "t4", "marks": 84 },
  { "rollno": 17, "name": "Alexander Turner", "age": 20, "div": "A1", "sem": 5, "test": "t1", "marks": 90 },
  { "rollno": 18, "name": "Harper Phillips", "age": 21, "div": "A2", "sem": 5, "test": "t2", "marks": 86 },
  { "rollno": 19, "name": "Daniel Campbell", "age": 20, "div": "A3", "sem": 5, "test": "t3", "marks": 77 },
  { "rollno": 20, "name": "Evelyn Parker", "age": 21, "div": "A4", "sem": 5, "test": "t4", "marks": 93 }
]
app.get("/",(req,res)=>{
    res.type("text/html")
    res.write(`<table border=1><tr><th>rollno</th>
        <th>name</th>
        <th>age</th>
        <th>div</th>
        <th>sem</th>
        <th>test</th>
        <th>marks</th></tr>
        `)
for(i=0;i<students.length;i++)
{
    res.write(`<tr>
        <td>${students[i].rollno}</td>
         <td>${students[i].name}</td>
          <td>${students[i].age}</td>
           <td>${students[i].div}</td>
            <td>${students[i].sem}</td>
             <td>${students[i].test}</td>
              <td>${students[i].marks}</td></tr>`)
}
res.write(`</table>`)
res.send();
});
app.get("/roll/:r",(req,res)=>{
    var cd=students.filter((s)=>s.rollno==req.params.r);
    if(cd.length>0)
        res.send(cd);
    else
        res.send("no student found");

})
app.get("/div/:d/test/:t",(req,res)=>{
    var cd=students.filter((s)=>((s.div==req.params.d)&&(s.test==req.params.t)));
    if(cd.length>0)
        res.send(cd);
    else
        res.send("no student found");
    
})
app.listen(3012,()=>console.log("server started"))