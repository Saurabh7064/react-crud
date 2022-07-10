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
        },
        {
            id: 2,
            name: 'Raushan',
            age: 32,
        }
    ]);

    const deleteStudent = (id) =>{
        setStudents(students.filter((student)=>student.id!==id))
    }

  return (
    <div className="App">
       <Header title='React Header'/>
        {students.length>0?(<Students students={students} onDelete={deleteStudent}/>):('No student records found')}
    </div>
  );
}

export default App;
