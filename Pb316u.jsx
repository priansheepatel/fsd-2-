function Pb316u(p)
{
//    find age > 40 and print their name
    return(
        <>
        {
            p.persons.filter((p1)=>p1.age>40).map((p1)=><h1 key={p1.age}>{p1.name}</h1>)
        }

        </>
    )
}
export default Pb316u