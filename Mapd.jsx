
var students=[{rollno:101,name:"abc",marks:12},
    {rollno:102,name:"def",marks:9},
    {rollno:103,name:"ghi",marks:20},
    {rollno:104,name:"jkl",marks:7},
    {rollno:105,name:"xyz",marks:22}]
function Mapd()
{
    // omly display name of all student
    return(
    <>
       { students.map((s)=>s.name)}
    </>
    )
}
export default Mapd;


