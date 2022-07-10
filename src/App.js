import './App.css';
import {Header} from "./components/Header";
import {Students} from "./components/Students";
import {useState} from "react";
function App() {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: 'Saurabh',
            age:30,
            status: 'pass',
        },
        {
            id: 2,
            name: 'Raushan',
            age: 32,
            status: 'fail',
        }
    ]);

    const deleteStudent = (id) => {
        console.log(id);
        setStudents(students.filter((student)=>student.id!==id));
    }

    //This function toggles the status of the student based on pass and fail
    const toggleStudent = (id) => {
      console.log(id);
      setStudents(students.map((student) => student.id === id && student.status=='pass' ? {...student,status:'fail'}:{...student,status:'pass'}));
    }

  return (
    <div className="App">
       <Header title='React Header'/>
        {students.length>0?(<Students students={students} onDelete={deleteStudent} onToggle={toggleStudent}/>):('No student records found')}
    </div>
  );
}

export default App;
