import {useState} from "react";
import {Student} from "./Student";
export const Students = ({students}) => {
    return (
        <>
            <table >
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Delete</th>
                </tr>
            {students.map((student)=> (
                <Student key={student.id} student={student}/>
                ))}
                </tbody>
            </table>
        </>
    )
}
