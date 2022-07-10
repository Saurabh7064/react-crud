import { FaTimes } from 'react-icons/fa'

export const Student = ({student, onDelete}) => {
    return (
        <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td><FaTimes onClick={() => onDelete(student.id)}/></td>
        </tr>

    )
}
