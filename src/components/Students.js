const students = [
    {
        id: 1,
        name: 'Saurabh',
        age:30,
    },
    {
        id: 2,
        name: 'Raushan',
        age: 32,
    }
]

export const Students = () => {

    return (
        <>
            {students.map((student)=>
                (<div><h3 key={student.id}>{student.name} {student.age}</h3></div>)
            )}
        </>
    )
}
