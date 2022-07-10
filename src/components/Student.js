import { FaTimes } from 'react-icons/fa'

export const Student = ({student, onDelete, onToggle}) => {
    return (
        <tr className= {`${student.status === 'pass'? 'pass':'fail'}`} key={student.id} onDoubleClick={()=>onToggle(student.id,student.status
        )} >
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td><FaTimes onClick={() => onDelete(student.id)}/></td>
        </tr>

    )
}
