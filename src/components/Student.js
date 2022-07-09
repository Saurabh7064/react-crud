import { FaTimes } from 'react-icons/fa'

export const Student = ({student}) => {
    return (
        <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td><FaTimes/></td>
        </tr>

    )
}
